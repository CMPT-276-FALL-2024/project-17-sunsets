// Recipes.jsx
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import SearchBar from '../components/Recipe_SearchBar.jsx';
import '../styles/RecipePage.css';
import '../styles/HomePage.css';
import '../styles/FavoritePage.css';
import food from '../assets/images/food.jpg';


const FavoritePage = () =>{

    return (
        <div className="page-container">
            <Navbar className="favorite" />
            <SearchBar className="recipe" />
                
            <div className="favorite-content">
                <h1 className="favorite-title">Your Favorite Recipes: </h1>  
                

                {/* Make sure the content is in the this div*/}
                <div id = "recipe-meal"> 

                    {/* The content below just use for testing the layout  */}
                    <div className={`home-meal-item`}>
                        <div className={`home-meal-img`}>
                            <img src={food} alt="potato" />
                        </div>
                        <div className={`home-meal-name`}>
                            <button className={`home-btn`}>
                                <i className="far fa-heart"></i>
                            </button>
                            <h3>Potato</h3>
                        </div>
                    </div>
                    <div className={`home-meal-item`}>
                        <div className={`home-meal-img`}>
                            <img src={food}  alt="potato" />
                        </div>
                        <div className={`home-meal-name`}>
                            <button className={`home-btn`}>
                                <i className="far fa-heart"></i>
                            </button>
                            <h3>Potato</h3>
                        </div>
                    </div>
                    <div className={`home-meal-item`}>
                        <div className={`home-meal-img`}>
                            <img src={food}  alt="potato" />
                        </div>
                        <div className={`home-meal-name`}>
                            <button className={`home-btn`}>
                                <i className="far fa-heart"></i>
                            </button>
                            <h3>Potato</h3>
                        </div>
                    </div>


                </div>
            </div>
                
            <Footer className="home" />
        </div>
        );
};
export default FavoritePage;
