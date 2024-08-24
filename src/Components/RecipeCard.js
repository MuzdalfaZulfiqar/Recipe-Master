import React, { useEffect } from "react";
import clock from "../Images/clock.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function RecipeCard(props) {

  // thse three are for handling the modal state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // / we are making this state to manage our user the data of user will be one that we will get from the getUser function the user who has logged in
  // from this we will save id which we will pass as parameter to our update user function there using this id we will make our api request
  let navigate = useNavigate();

  // a state to deal with the id of user
  let [userId, setUserId] = React.useState("");
  let [isSaved, setIsSaved] = React.useState(false);
  let [showIsSavedMessage, setShowIsSavedMessagae] = React.useState(false);

  async function getUser() {
    try {
      let response = await fetch("http://localhost:3001/api/user/getUser", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      });
      let user = await response.json();
      // console.log("user = " + JSON.stringify(user));
      setUserId(user._id);
    } catch (error) {}
  }

  async function updateUser(recId) {
    try {
      let response = await fetch(
        `http://localhost:3001/api/user/updateUser/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ recipeId: recId }),
        }
      );
      let data = await response.json();
      // console.log(data);
    } catch (error) {}
  }



  function toggle() {
    if (localStorage.getItem("auth-token")) {
      setIsSaved((prevSave) => !prevSave);
    } else {
      handleShow();
    }
  }

  //useEffect:

  // The first useEffect fetches user data on initial render, ensuring you have the necessary user ID to save recipes.
  // The second useEffect reacts to changes in isSaved, handling the saving process and displaying the "Saved" message.

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (isSaved) {
      setShowIsSavedMessagae(true);
      // this function need the id of the user which has logged in and the id of the recipe that needs to be saved
      // getUser();

      updateUser(props.id);
    }

    setTimeout(() => {
      setShowIsSavedMessagae(false);
    }, 2000);
    // eslint-disable-next-line
  }, [isSaved]);
  return (
    <>
      <div className="recipeCard"
      onClick={() => {
        props.onViewRecipe(props.id);
      }}
      >
        <div style={{ position: "relative" }} className="top">
          <img src={props.url} alt="" />

          {/* isSaved is a state and we have made a toggle function
by defualt the data is false someone clicks on and it will toggle 
we have two options if false then show the the yellow back and non filled white star 
// when this icon got clicked we will toggle to true 
and now a class with filled yellow star white back toggle it to go to false and defualt behaviour

when isSaved is true we will want to show the message that the recipe has saved means we need to deal with it in the filled heart button
*/}
          {isSaved ? (
            <>
              <i
                onClick={toggle}
                className="fa-solid fa-heart heartTagFilled"
              ></i>
              {
                // no when this once is clicked means the the filled icon someone has liked it we need to display the saved meesage
                // we could have simply used the setTimeout function but it is not allowed to use the setTimeout in jsx simply we could do something like we can make a state and we can deal with it the sg will be displyed when the showmsgstate is true now we will make it true in our useEffect function and we will say if isSaved is true then set the msg state as true and display the message and after the 3 seconds of timeout the message will disppaear
                showIsSavedMessage && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-18%",
                      left: "80%",
                      padding: "10px 20px", // Combined padding for simplicity
                      backgroundColor: "#f8c611",
                      color: "#333", // Darker text for contrast
                      borderRadius: "8px", // Rounded corners
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
                      border: "1px solid #f8c611", // Light border for definition
                    }}
                  >
                    <span>Saved</span>
                  </div>
                )
              }
            </>
          ) : (
            <i onClick={toggle} className="fa-regular fa-heart heartTag"></i>
          )}
        </div>

        <div className="bottom">
          <div className="title_Bottom">
            <p className="title_P">{props.name}</p>
          </div>
          <div className="type">
            <span className="type_P">{props.type}</span>
          </div>
          <div className="Times_ratings">
            <div className="cookTime">
              <div className="clockImage">
                <img src={clock} alt="" />
              </div>
              <div className="clockStat">
                <span className="clockStatSpan">{props.time}</span>
              </div>
            </div>
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
          </div>
        </div>
      </div>
      {
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Hi, Cooking Master</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            You need to create account for saving a recipe
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              style={{
                backgroundColor: "#f8c611", // Change to your preferred color
                color: "white",
                border: "none",
                width: "auto",
              }}
              onClick={() => {
                navigate("/signUp");
              }}
            >
              Create Account
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </>
  );
}
