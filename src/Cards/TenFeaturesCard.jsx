const TenFeaturesCard = ({ feature }) => {
  const { title, description } = feature;
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="border-r border-gray-400  h-full"></div>
        <div>
          {/* title */}
          <h3 className="font-medium text-xl lg:text-3xl mb-3">{title}</h3>
          {/* description */}
          <p className="text-xs lg:text-lg font-light lg:mr-10">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default TenFeaturesCard;
