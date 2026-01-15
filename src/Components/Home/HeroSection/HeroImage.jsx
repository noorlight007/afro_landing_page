import hero from "../../../assets/images/salonAdmin.png";
import heroBG from "../../../assets/images/salonAdminBG.png";
const HeroImage = () => {
  return (
    <>
      <div className="relative">
        <img
          className="absolute  
               -top-5 sm:-top-7 md:-top-9 lg:-top-12 
               right-5 sm:right-12 md:right-16 lg:right-20
               w-10/12  sm:w-[295px] md:w-[325px] lg:w-[405px] xl:w-[455px] 
               sm:h-[210px]  md:h-[241px] lg:h-[301px] xl:h-[341px]
                "
          src={heroBG}
          alt="rectangle"
        />
        <img
          src={hero}
          alt="Dashboard"
          className=" object-cover ml-auto relative
              w-9/12  sm:w-[255px] md:w-[285px] lg:w-[355px] xl:w-[405px] 
              sm:h-[150px]  md:h-[171px] lg:h-[201px] xl:h-[251px] "
        />
      </div>
    </>
  );
};

export default HeroImage;
