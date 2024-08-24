import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Home from "./Components/Home";
import Recipes from "./Components/Recipes";
import RecipeCreation from "./Components/RecipeCreation";
import { Route, Routes } from "react-router-dom";
import RecipeState from "./Contexts/Recipe/RecipeState";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import SavedRecipes from "./Components/SavedRecipes";
import AdminDashboards from './Components/AdminDashboards';
import ManageRecipes from './Components/ManageRecipes';
import UpdateRecipe from './Components/UpdateRecipe';


function App() {
  return (
    <div>
      <RecipeState>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* just for testing we have placed this recipe creating now  */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/savedRecipes" element={<SavedRecipes />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeCreation />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          
          {/* <Route path="/recipes/:category" element={<RecipeCreation />} /> */}
                
        </Routes>
      </RecipeState>
    </div>
  );
}

export default App;
