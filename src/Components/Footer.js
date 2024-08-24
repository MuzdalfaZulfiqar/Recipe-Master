import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  let [name, setName] = React.useState("");

  function handleChange(event) {
    const { name } = event.target;
    setName(name.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData)
    console.log(name);
  }

  return (
    <div className="footer">
      <div className="newsLetter">
        <div className="footer-left-title">
          <p>Join Our Newsletter</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group footer-left-email-input">
            {/* <label for="exampleInputEmail1">Email address</label> */}
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={name}
              name="name"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="footer-left-subscribe-button featureFooterbutton">
          Subscribe
          </button>
        </form>
{/* 
        <form onSubmit={handleSubmit}>
          <div
            className="footer-left-email-input form-group"
            // onChange={handleChange}
          >
            <input
              type="email"
              name="email"
              id="email_"
              placeholder="Enter email"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="footer-left-subscribe-button">
            <button>Subscribe</button>
          </div>
        </form> */}
      </div>

      <div className="footer-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </div>

      <div className="footer-list">
        <p>
          <a href="#features">Featured Recipe</a>
        </p>
        <p>
          <a href="#textCheckID">Testimonials</a>
        </p>
        <div className="social">
          <i className="fa-brands fa-instagram socialIcon"></i>
          <i className="fa-brands fa-pinterest socialIcon"></i>
          <i className="fa-brands fa-facebook-f socialIcon"></i>
          <i className="fa-brands fa-youtube socialIcon"></i>
        </div>
      </div>
    </div>
  );
}
