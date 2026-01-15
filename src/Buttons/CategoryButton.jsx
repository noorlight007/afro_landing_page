const CategoryButton = ({ category, selectedCategory, onClick }) => {
  return (
    <button
      className={`text-sm lg:text-base xl:text-lg transition ${
        selectedCategory === category.categoryName
          ? "text-[#3ACEFA] underline underline-offset-6 lg:underline-offset-8"
          : "text-white"
      }`}
      onClick={() => onClick(category.categoryName)}
    >
      {category.categoryName}
    </button>
  );
};

export default CategoryButton;
