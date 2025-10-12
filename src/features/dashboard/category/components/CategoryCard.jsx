import { Link } from 'react-router-dom';
import TitleCard from './TitleCard'
import { OrbitProgress } from 'react-loading-indicators'

function CategoryCard({ isLoading, data, categoryTitle }) {
  const hasNoData = !isLoading && data?.length === 0;

  return (
    <>
      <div className="bg-white h-full border border-sidebar-bg py-10 relative flex flex-col">
        <div className='absolute -top-[20px] left-[20px] sm:left-[95px] md:left-[50px] lg:left-[50px]'>
          <TitleCard categoryTitle={categoryTitle} />
        </div>
        {/* <div className="absolute -top-[20px] left-1/2 transform -translate-x-1/2 ">
          <TitleCard categoryTitle={categoryTitle} />
        </div> */}
        <div className='h-[200px] overflow-y-scroll relative'>
          {
            isLoading && <div className="absolute inset-0 bg-gray-100 opacity-25 flex justify-center items-center z-10">
              <OrbitProgress
                variant="split-disc"
                dense
                color="#800080"
                size="small"
              />
            </div>
          }
          {hasNoData ? <div className="flex flex-col justify-center items-center h-full text-gray-500 gap-2 mt-6">
            <p>No Data Found for this Category</p>
            <Link
              to="/event/category/createcategory"
              className="text-purple-600 hover:text-purple-800 font-medium underline"
            >
              + Create Category
            </Link>
          </div> : <>{data?.map((item, index) => (
            <div key={index} className="rounded py-1 pl-10  ">{item.tag}</div>
          ))} </>}

        </div>
      </div>
    </>
  )
}

export default CategoryCard
