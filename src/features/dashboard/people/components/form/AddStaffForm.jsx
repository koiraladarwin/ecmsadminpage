import NormalBtn from '../NormalBtn'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import ScreenHeader from '../PeopleScreenHeader';
import { useMutation } from '@tanstack/react-query';
import useStaffCategory from '../../../../../hooks/Use-StaffCategory-list';
import { useAuth } from '../../../../auth/context/AuthContext';
import useAttendeeCategory from '../../../../../hooks/Use-attendeeCategory-list';
import { api, setToken } from '../../../../../axios/Axios';
import Swal from 'sweetalert2';
import { OrbitProgress } from 'react-loading-indicators';

function AddStaffForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch } = useForm()
  const { firebaseToken } = useAuth()
  const { data: staffCategory, isLoading: staffCategoryLoading } = useStaffCategory()
  const { data: attendeeCategory, isLoading: attendeeCategoryLoading } = useAttendeeCategory()
  const selectedCategory = watch("category")

  const mutation = useMutation({
    mutationFn: ({ endpoint, payload }) => {
      setToken(firebaseToken);
      return api.post(endpoint, payload);
    },
    onSuccess: async () => {
      await Swal.fire(`${selectedCategory === 'staff' ? 'Staff' : 'Attendee'} created successfully!`);
    },
    onError: (err) => {
      console.error(err);
      if (err?.response?.status === 400) Swal.fire('Please enter valid inputs');
      else if (err?.response?.status === 401) Swal.fire('Unauthorized! Please login again');
      else if (err?.response?.status === 500) Swal.fire('Server error! Try again later');
      else if (err?.response?.status === 409) Swal.fire('User email already exists!');
      else Swal.fire('Something went wrong! Please try again later');
    }
  });

  const { mutateAsync: createItem, isPending = true } = mutation;


  const onSave = async (data, navigationLink) => {
    let payload = {};
    let endpoint = '';
    function normalizeText(str) {
      return (str || '').trim().replace(/\s{2,}/g, ' ');
    }

    if (selectedCategory === 'staff') {
      endpoint = '/staff';
      payload = {
        staff_gmail: (data.email || '').trim(),
        name: normalizeText(data.fullName),
        image_url: "",
        phone: (data.mobile || '').trim(),
        staff_category_id: data.tag || '',
        company: data.company ? normalizeText(data.company) : "",
        position: data.company ? normalizeText(data.designation) : "",
      };
    } else if (selectedCategory === 'attendee') {
      endpoint = '/attendee';
      payload = {
        full_name: normalizeText(data.fullName),
        company: "",
        position: "",
        image_url: "",
        phone_number: (data.mobile || '').trim(),
        attendee_category_id: data.tag || '',
        gmail: (data.email || '').trim(),
      };
    }

    try {
      await createItem({ endpoint, payload });
      await new Promise((res) => setTimeout(res, 500))
      navigate(navigationLink, { state: selectedCategory });
    } catch (error) {
      Swal.fire('Something went wrong, Please try again later !!')
      console.error('Failed to create item', error);
    }
  };


  return (
    <div className='w-full lg:px-20 px-5'>
      <ScreenHeader title='Add a New Staff/Attendee' download={true} showForm={true} />
      <div className="w-full flex justify-center items-center py-10 pb-15 ">
        <form onSubmit={e => e.preventDefault()} className="w-full bg-white p-6 sm:p-10 rounded-sm shadow-md border-[1.4px] border-bg-sidebar-bg flex flex-col gap-6 relative">
          {
            isPending && <div className='absolute inset-0 bg-gray-100 opacity-25 z-50 flex items-center justify-center'>
              <OrbitProgress color="#800080" size="medium" />
            </div>
          }

          {/* Attendee Type */}
          <div className="flex flex-col md:flex-row gap-6 justify-end">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="attendeeType"
                value="individual"
                checked={true}
                onChange={() => { }}
              />
              Individual
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="attendeeType"
                value="company"
                checked={false}
                onChange={() => navigate("/people/staff/addattendee")}
              />
              Company / Organization
            </label>
          </div>

          {/* Full Name */}
          <div className="flex flex-col">
            <label className="font-bold text-sidebar-bg">
              Full Name <span className="text-sidebar-bg">*</span>
            </label>
            <input type="text" className="border rounded-sm p-2 mt-1 w-full outline-none"
              {...register("fullName", {
                required: "Full Name is required",
                pattern: {
                  value: /^[A-Za-z ]+$/,
                  message: "full name contains only alphabets"
                  ,
                },
              })}
            />
            {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
          </div>

          {/* Category, Tag, mobile */}
          {/* Category */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex flex-col flex-1">
              <label className="font-bold text-sidebar-bg">
                Choose Category <span className="text-sidebar-bg">*</span>
              </label>
              <select
                {...register("category", { required: "Category is required" })}
                className="border rounded-sm p-2 mt-1 w-full focus:outline-none"
              >
                <option value="">Select Category</option>
                <option value="staff">staff</option>
                <option value="attendee">attendee</option>
              </select>
              {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
            </div>

            {/* Tag */}
            <div className="flex flex-col flex-1">
              <label className="font-bold text-sidebar-bg">
                Choose Tag <span className="text-sidebar-bg">*</span>
              </label>
              <select
                className="border rounded-sm p-2 mt-1 w-full focus:outline-none"
                {...register("tag", { required: "Tag is required" })}
              >
                {
                  selectedCategory === 'staff' &&
                  <>
                    {
                      staffCategoryLoading ? <option disabled>Loading...</option>
                        :
                        <>
                          <option value="">Select tag</option>
                          {
                            staffCategory.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.tag}
                              </option>
                            ))
                          }
                        </>
                    }
                  </>
                }

                {
                  selectedCategory === 'attendee' &&
                  <>
                    {
                      attendeeCategoryLoading ? <option disabled>Loading...</option>
                        :
                        <>
                          <option value="">Select tag</option>
                          {
                            attendeeCategory.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.tag}
                              </option>
                            ))
                          }
                        </>
                    }
                  </>
                }
              </select>
              {errors.tag && <p className="text-red-500 text-sm mt-1">{errors.tag.message}</p>}
            </div>

            {/* mobile */}
            <div className="flex flex-col flex-1">
              <label className="font-bold text-sidebar-bg">
                Mobile Number <span className="text-sidebar-bg">*</span>
              </label>
              <input type="text" className="border rounded-sm p-2 mt-1 w-full outline-none"
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "should be number and 10 digits",
                  },
                })}
              />
              {errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}
            </div>


          </div>


          {/* Email */}
          <div className="flex flex-col">
            <label className="font-bold text-sidebar-bg">
              Email Address <span className="text-sidebar-bg">*</span>
            </label>
            <input type="email" className="border rounded-sm p-2 mt-1 w-full outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          {/* upload photo */}
          <div className="flex  items-center gap-2">
            <label className="font-bold text-sidebar-bg">Upload Photo</label>
            <input
              type="file"
              className="border rounded-sm  mt-1 w-[30%] outline-none"
              {...register("photo")}
            />
          </div>

          {/* btns */}
          <div className='flex gap-6 flex-col md:flex-row'>
            <NormalBtn text={isPending ? "Saving..." : "Save"} type='primary' onClick={handleSubmit((data) => onSave(data, "/people/staffattendee"))} disabled={isPending} />
            <NormalBtn text={isPending ? "Saving..." : "Save & Add New"} type='primary' onClick={handleSubmit((data) => onSave(data, "/people"))} disabled={isPending} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddStaffForm
