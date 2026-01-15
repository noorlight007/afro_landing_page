import CategoryButton from "../Buttons/CategoryButton";
import SmartToolkitCategoryCard from "./SmartToolkitCategoryCard";

const SmartToolkitCategorySectionCard = ({
  heading,
  description,
  sliceStart,
  sliceEnd,
  salonCategories,
  selectedCategory,
  handleCategoryChange,
  selectedData,
}) => {
  return (
    <>
      <section className="bg-[#000d25] py-20 mt-20">
        <span className="text-white">
          <h2 className="text-center text-2xl lg:text-3xl font-semibold mb-4">
            {heading}
          </h2>
          <p className="text-sm lg:text-base text-center">{description}</p>
        </span>

        {/* Category btn */}
        <div
          className="flex flex-wrap gap-5 lg:gap-10 my-16 underline sm:border-b-2
        border-gray-800 justify-center w-full
        max-w-[575px] lg:max-w-[695px] xl:max-w-[765px] mx-auto"
        >
          {salonCategories.slice(sliceStart, sliceEnd).map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
              selectedCategory={selectedCategory}
              onClick={handleCategoryChange}
            />
          ))}
        </div>

        {/* Content Card */}
        {selectedData && (
          <SmartToolkitCategoryCard
            title={selectedData.title}
            description={selectedData.description}
          />
        )}
      </section>
    </>
  );
};

export default SmartToolkitCategorySectionCard;
