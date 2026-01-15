import smartToolkit from "../assets/images/smart-toolkit.png";

const SmartToolkitCategoryCard = ({ title, description }) => {
  return (
    <div className="w-10/12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center text-white">
        {/* Text */}
        <div className="p-6 flex-1">
          <h2 className="text-2xl mb-2">{title}</h2>
          <p className="text-sm lg:text-base">{description}</p>
        </div>

        {/* Image */}
        <div className="w-3/5 md:w-2/5">
          <img src={smartToolkit} alt={title} className="object-cover w-full" />
        </div>
      </div>
    </div>
  );
};

export default SmartToolkitCategoryCard;
