

// import Header from './Components/Header';
import RecipeContainer from './RecipeContainer';
import FeaturedRecipe from './FeaturesRecipe';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Header from "./Header";

function Home() {
  return (
    <div>
        <Header/>
        <RecipeContainer/>
        <FeaturedRecipe/>
        <Testimonials/>
        <Footer/>
    </div>
  );
}

export default Home;
