// Recipes.jsx
import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import SearchBar from '../components/Recipe_SearchBar.jsx';
import MealList from '../components/Recipe_MealList.jsx';
import Footer from '../components/Footer.jsx';
import { processRecipes } from '../RecipeController';
import '../styles/RecipePage.css';

export default class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            searchQuery: '',
            hasSearched: false // New state to track if a search has been performed
        };
    }

    componentDidMount() {
        // Retrieve initial search query from the URL (if any)
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search') || '';
        if (searchQuery) {
            this.setState({ searchQuery, hasSearched: true }, this.fetchRecipes);
        }
    }

    fetchRecipes = async () => {
        // Only fetch recipes if there is a search query
        if (this.state.searchQuery) {
            try {
                const fetchedRecipes = await processRecipes(this.state.searchQuery);
                this.setState({ recipes: fetchedRecipes });
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        }
    };

    handleSearch = (query) => {
        // Update searchQuery state, set hasSearched to true, and fetch new results
        this.setState({ searchQuery: query, hasSearched: true }, this.fetchRecipes);
    };

    // Recipes.jsx
render() {
    return (
        <div className="page-container">
            <Navbar className="recipe" />
            <SearchBar onSearch={this.handleSearch} className="recipe" />
            
            {/* Content container to push footer to the bottom */}
            <div className="content">
                {this.state.hasSearched && this.state.recipes.length > 0 ? (
                    <MealList recipes={this.state.recipes} className="recipe" />
                ) : (
                    this.state.hasSearched && (
                        <p className="no-results">Loading the recipes.....</p>
                    )
                )}
            </div>
            
            <Footer className="home" />
        </div>
    );
}

}
