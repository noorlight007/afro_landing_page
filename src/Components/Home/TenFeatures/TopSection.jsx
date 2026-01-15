const TopSection = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-center max-w-sm md:max-w-full mx-auto
      "
      >
        {/* 10 */}
        <div className="flex -rotate-[20deg] relative  lg:ml-16 xl:ml-52">
          <h1
            className="text-9xl md:text-[100px] lg:text-9xl xl:text-[190px] font-bold absolute
           top-0 md:top-3 lg:top-3 xl:-top-2 
           left-0 md:left-5 lg:-left-[65px] xl:-left-[230px]"
          >
            10
          </h1>
          <div
            className=" flex flex-col gap-2 mt-6 ml-28 md:ml-[105px] lg:ml-10 xl:-ml-[100px] 
          text-xs lg:text-base xl:text-xl font-semibold"
          >
            <p
              className="bg-[#055DDB] text-white rounded  
              px-3 lg:px-6 py-1 w-20 lg:w-32 xl:w-36 ml-5 lg:ml-8 xl:ml-20
              "
            >
              FEATURES
            </p>
            <p
              className="bg-[#054095] text-white rounded
             px-6 md:px-0 md:pl-7 lg:px-10 xl:px-12 py-1 
             w-52 lg:w-[299px] xl:w-[370px] xl:ml-8"
            >
              SOLVE YOUR CHALLENGES
            </p>
            <p
              className="bg-[#022D6A] text-white rounded pl-5 lg:pl-7 
                     px-4 lg:px-5 xl:px-6 py-1
                      w-48 lg:w-64 xl:w-[300px] ml-12 lg:ml-20 xl:ml-32"
            >
              AND CHANGE THE GAME
            </p>
          </div>
        </div>
        {/* Right  side text */}
        <div className=" max-w-xs lg:max-w-sm xl:max-w-lg mt-20 md:mt-0 md:-ml-2 xl:ml-5 ">
          <h2
            className="text-4xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold
          leading-12  xl:leading-20"
          >
            The opportunity is real
          </h2>
          <p className="mt-3 text-sm lg:text-base xl:text-xl font-light">
            Despite a global market value of $4.9 billion and growing, the
            Afro-textured hair industry remains underserved digitally. While 80%
            of Black consumers prioritize customized hair products and services,
            only 3% of the ethnic hair market is Black-owned. Afrobeutic
            provides the digital tools for you to capture your fair share of
            this expanding market.
          </p>
        </div>
      </div>
    </>
  );
};

export default TopSection;
