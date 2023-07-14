import React from "react";

interface Props {
  categories: String[];
  clickHandle: (category: String) => void;
}

const CategoryTab = ({categories, clickHandle} : Props) => {
  return (
    <div className="categoryTab">
      {categories.map(category => <button onClick={() => clickHandle(category)} className="categoryTab__btn">{category}</button>)}
    </div>
  );
};

export default CategoryTab;
