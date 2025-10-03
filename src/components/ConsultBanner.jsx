export default function ConsultantBanner() {
    return (
    <div className="p-3 lg:p-5 w-full">
      <div className="w-full py-16 md:py-20 flex items-center justify-center relative bg-[url('https://avantage.bold-themes.com/business/wp-content/uploads/sites/2/2019/04/bgn-searching.jpg')] bg-cover bg-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:justify-between px-6 md:px-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <span className="w-5 lg:w-14 h-0.5 bg-red-500 mx-4 md:mx-0 md:mr-4"></span>
              <span className="text-white font-medium tracking-wide text-sm">GET SOLUTIONS FAST</span>
              <span className="w-5 lg:w-14 h-0.5 bg-red-500 mx-4 md:mx-0 md:ml-4"></span>
            </div>
            <h1 className="text-white font-extrabold text-4xl md:text-6xl px-5 lg:px-0 ">
              Searching for a First-Class Consultant?
            </h1>
          </div>
          <button className="bg-[#e94d65] flex text-white text-lg font-semibold px-7 py-4 hover:bg-[#e94d65] transition cursor-pointer line-clamp-1">
            <span>Get a Quote here</span>
          </button>
        </div>
        <div className="hidden md:block absolute inset-0 pointer-events-none">
        </div>
      </div>
    </div>
    )
  }
  