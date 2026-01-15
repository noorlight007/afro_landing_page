import smV from "../../../assets/vectors/smVector.png";
import mdV from "../../../assets/vectors/mdVector.png";
import lgV from "../../../assets/vectors/lgVector.png";

const BannerVector = () => {
  return (
    <>
      {/* sm vector */}
      <img
        src={smV}
        alt="Decoration"
        className="absolute z-0 top-0 
        right-24 sm:right-72 md:right-80 lg:right-[385px] xl:right-[490px] 2xl:right-[570px]
        h-52 md:h-60 lg:h-[320px] xl:h-[350px] 2xl:h-[400px]
        transition-all duration-500 ease-in-out"
      />
      {/* md vector */}
      <img
        src={mdV}
        alt="Decoration"
        className="absolute top-0 z-0 
        right-7 sm:right-32 md:right-28 lg:right-52 xl:right-64 2xl:right-[320px]
        h-[230px] sm:h-[290px] md:h-[350px] lg:h-[400px] xl:h-[460px] 2xl:h-[510px]
        transition-all duration-500 ease-in-out"
      />
      {/* lg vector */}
      <img
        src={lgV}
        alt="Decoration"
        className="absolute z-10 top-0 
        right-0 sm:right-5 md:right-10 lg:right10 xl:right-[90px] 2xl:right-[115px] 
        w-[330px] sm:w-[480px] md:w-[520px] lg:w-[680px] xl:w-[760px] 2xl:w-[850px]
        h-[250px] sm:h-[380px] md:h-[420px] lg:h-[520px] xl:h-[590px] 2xl:h-[660px]
        transition-all duration-500 ease-in-out"
      />
    </>
  );
};

export default BannerVector;
