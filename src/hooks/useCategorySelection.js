import { useState, useEffect } from "react";
import salonCategories from "../utils/salonCategories";

const useCategorySelection = (sliceStart, sliceEnd) => {
  const slicedCategories = salonCategories.slice(sliceStart, sliceEnd);

  const [selectedCategory, setSelectedCategory] = useState(
    slicedCategories[0]?.categoryName || ""
  );

  const selectedData = salonCategories.find(
    (cat) => cat.categoryName === selectedCategory
  );

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  useEffect(() => {
    setSelectedCategory(slicedCategories[0]?.categoryName || "");
  }, [sliceStart, sliceEnd]);

  return {
    selectedCategory,
    selectedData,
    handleCategoryChange,
  };
};

export default useCategorySelection;
