const ReviewCard = ({ review, active, i, getSubstringLength }) => {
  const { name, userType, rating, feedback } = review || {};
  return (
    <div className={`flex justify-center py-20`}>
      <div
        className={`card ${
          active === i ? "card-active" : ""
        } p-2 md:p-5 lg:p-7 xl:p-10 
          top-0 md:-top-4 lg:-top-8 xl:-top-16`}
      >
        <div
          className="flex md:justify-between flex-col md:flex-row text-center md:text-start
            w-40 sm:w-60 md:w-[300px] lg:w-[400px] "
        >
          {/* name & type */}
          <div>
            <h2 className="text-sm lg:text-lg  font-bold">{name}</h2>
            <p className="text-xs lg:text-sm ">{userType}</p>
          </div>
          {/* star */}
          <div className="flex justify-center">
            {Array.from({ length: Math.floor(rating) }).map((_, idx) => (
              <span
                key={idx}
                className="text-sm md:text-lg lg:text-2xl "
              >
                ★
              </span>
            ))}
          </div>
        </div>
        {/* feedback */}
        <p
          className="md:mt-4 lg:mt-8  
            text-xs lg:text-sm  text-center"
        >
          {feedback.substring(0, getSubstringLength())}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
