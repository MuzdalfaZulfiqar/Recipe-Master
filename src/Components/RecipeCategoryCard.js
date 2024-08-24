import React from "react";

function RecipeCategoryCard(props) {
  return (
    <div className="categoryCard">
      <div className="categoryImg">
        <img
          className="categoryCard-img"
          src={props.url}
          onClick={() => {
            props.onCategoryClick(props.type);
           }}
        />
      </div>

      <p className="categoryCard-p">{props.type}</p>
    </div>
  );
}

export default RecipeCategoryCard;
