import React from "react";
import { useContext } from "react";
import recipeContext from "../Contexts/Recipe/RecipeContext";
import UpdateRecipe from "./UpdateRecipe";

function ManageRecipesCard(props) {
    console.log("manage recipe card"+JSON.stringify(props))

  let context = useContext(recipeContext);
  let { deleteRecipe } = context;

  let [show, setShow] = React.useState(false)

  

  return (
    <>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between ",
        backgroundColor: "white",
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <div>{props.name}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <div className="cardRecipeButtonDiv">
          <button
            className="cardRecipeButton"
            style={{ cursor: "pointer" }}
            onClick={() => {
              props.onViewRecipe(props.id);
            }}
          >
            View Recipe
          </button>
        </div>
        <div
          className="iconsButton"
          onClick={() => {
            console.log(props.id);
            deleteRecipe(props.id);
          }}
        >
          <i
            className="fa fa-trash"
            aria-hidden="true"
            style={{ color: "black" ,cursor :"pointer"}}
          ></i>
        </div>

        <div
        style={{cursor :"pointer"}}
          className="iconsButton"
          onClick={() => {
            setShow(true);
          }}
        >
          <i className="fas fa-edit" style={{ color: "black" ,cursor :"pointer"}}></i>
        </div>
      </div>
    </div>
   
   {show && <UpdateRecipe 
            show = {show}
             id = {props.id}
              name = {props.name}
              url = {props.url}
              type = {props.type}
              time = {props.time}  
              isSaved = {props.isSaved}
              servings = {props.servings}
              ingredients = {props.ingredients}
              directions = {props.directions}
            />}
    </>
  );
}

export default ManageRecipesCard;
