import email from "../../../assets/images/email.png";

const Newsletter = () => {
  return (
    <>
      <div
        className="absolute left-1/2 transform -translate-x-1/2 
             w-11/12 xl:w-10/12  bg-white -top-16 z-10 rounded-2xl shadow-lg p-6"
      >
        <div
          className="bg-secondary/70 w-full p-5 lg:p-7  md:gap-10 lg:gap-0 xl:gap-20
             rounded-2xl shadow-xl border border-black/20 mx-auto
             flex flex-col md:flex-row items-center justify-between"
        >
          {/* left section */}
          <div className="flex items-center gap-4 lg:gap-8 p-1 pl-2 bg-white rounded-xl">
            <img src={email} className="w-8 md:w-6 lg:w-9" alt="" />
            <div>
              <h3 className="text-xs xl:text-xl leading-tight ">
                Sign up for news and offers from Afrobeutic.com
                <br className="hidden lg:inline " />
                Get researches & news about afro styles and its history
              </h3>
            </div>
          </div>

          {/* Right Section */}
          <form className="mt-4 md:mt-0 flex items-center ">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-1 lg:py-2 pl-7 rounded-l-full border bg-white
          w-32 lg:w-48 xl:w-56 
          text-xs md:text-sm xl:text-lg"
            />
            <button
              type="submit"
              className="bg-[#353444] text-white px-3 lg:px-4 xl:px-6 py-[5px] lg:py-[9px] 
          rounded-r-full
            text-xs md:text-sm xl:text-lg"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
