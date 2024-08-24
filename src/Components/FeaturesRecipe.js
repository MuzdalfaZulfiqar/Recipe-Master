import React from "react";
import feature from '../Images/pexels-photo-566566.jpeg'

export default function FeaturedRecipe(){
    return (
    <div className="featuredRecipe" id="features">
        <div className="featuredRecipeSection">
          <div className="featuredLeft">
            <div className="featuresRecipesMainTitle">
              <h2>Featured Recipe</h2>
            </div>
            <div className="featuresRecipesMainPara">
              <div className="featuresRecipesMainParaHeading-Class">
                <span className="featuresRecipesMainParaHeading-Span"
                  >Boiled Egg Pastry</span>
              </div>
              <div className="featuresRecipesMainParaDetail-className">
                <p className="featuresRecipesMainParaDetail-PTag">
                  Indulge in our Pastry with Boiled Egg, a delightful
                  combination of flaky pastry and perfectly boiled eggs. Simple
                  yet satisfying, this dish makes for a delicious breakfast or
                  snack. Enjoy the blend of textures and flavors in every bite!
                </p>
              </div>
            </div>
            <div className="featuresRecipesMainButton-className">
              <button className="featuresRecipesMainButton featureFooterbutton">Try it</button>
            </div>
          </div>
          <div className="featuredRight">
            <img src={feature} alt="" />
          </div>
        </div>
    </div>
    )
}