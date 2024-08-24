import recipeContext from "./RecipeContext";
import React from "react";
import Modal from "react-bootstrap/Modal";

function RecipeState(props) {
  const [show, setShow] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [recipes, setRecipes] = React.useState([]);
  let [singleRecipe, setSingleRecipe] = React.useState({});
  let host = "http://localhost:3001";

  async function getAll() {
    try {
      let response = await fetch(
        `${host}/api/recipe/getAllRecipes`,

        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      let json = await response.json();
      setRecipes(json);
    } catch (error) {
      console.log(error);
    }
  }
  async function getRecipe(id) {
    try {
      let response = await fetch(
        `http://localhost:3001/api/recipe/getRecipe/${id}`,

        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      let json = await response.json();
      // console.log(json)
      setSingleRecipe(json);
    } catch (error) {
      console.log(error);
    }
  }

  async function getRecipeByCategory(category) {
    try {
      let response = await fetch(
        `http://localhost:3001/api/recipe/getAllRecipes/${category}`,

        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      let json = await response.json();
      // console.log(json)
      setRecipes(json);
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteRecipe(id) {
    try {
      let response = await fetch(
        `http://localhost:3001/api/recipe/deleteRecipe/${id}`,

        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      let json = await response.json();
      let { success } = json;
      if(success){
            
        setMessage("Deletion Successfull")
        setVariant("Success")
        setShow(true)
        setTimeout(() => {
          setShow(false);
        }, 1000);
     }
     else{
       setVariant("Error")
       setMessage("Invalid Credentails")
       setShow(true)

     }
    } catch (error) {
      console.log(error);
    }
  }

  async function updateRecipe(id, name,
    category,
    time,
    imgURL,
    servings,
    isSaved,
    ingredients,
    directions){
      try {
        let response = await fetch(
          `http://localhost:3001/api/recipe/updateRecipe/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              name,
              category,
              time,
              imgURL,
              servings,
              isSaved,
              ingredients,
              directions,
            }),
          }
        );
        let data = await response.json();
        let { success }= data;
        if(success){
            
          setMessage("Updation Successfull")
          setVariant("Success")
          setShow(true)
          setTimeout(() => {
            setShow(false);
          }, 1000);
       }
       else{
         setVariant("Error")
         setMessage("Invalid Credentails")
         setShow(true)
  
       }
        console.log(data);
      } catch (error) {}
  }
  async function addRecipe(
    name,
    category,
    time,
    imgURL,
    servings,
    isSaved,
    ingredients,
    directions
  ) {
    try {
      let response = await fetch(
        "http://localhost:3001/api/recipe/createRecipe",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name,
            category,
            time,
            imgURL,
            servings,
            isSaved,
            ingredients,
            directions,
          }),
        }
      );
      let data = await response.json();
      console.log(data);
    } catch (error) {}
  }

  return (
    <>
    
    <recipeContext.Provider
      value={{
        recipes,
        getAll,
        getRecipeByCategory,
        singleRecipe,
        getRecipe,
        addRecipe,
        deleteRecipe,
        updateRecipe
      }}
    >
      {props.children}
    </recipeContext.Provider>
    {
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{variant}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           {message}
          </Modal.Body>

        </Modal>
      }
    </>
  );
}

export default RecipeState;
