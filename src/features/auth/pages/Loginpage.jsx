import loginImage from "../../../assets/login.png"
const Loginpage = () => {
  return (
    <div className="min-h-screen">
      <div className="flex px-20 py-4 text-3xl font-bold">
        <h1>Logo</h1>
      </div>

      <hr />

      <div className="flex items-center justify-center">

        <div className="flex w-full  max-w-6xl bg-gray-100 mt-20 rounded-lg h-[70vh] overflow-hidden">

          <div className="w-1/2 bg-cover bg-center">
            <img src={loginImage} alt="" />
          </div>

          <div className="w-1/2 flex flex-col items-center p-8">
            <h1 className="text-4xl font-bold ">ECMS</h1>
            <p className="font-light text-center mb-5">Lorem ipsum dolor sit amet.</p>
            <button className="border mt-30 py-3 px-6 rounded w-50 flex justify-center items-center">Login with google</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Loginpage
