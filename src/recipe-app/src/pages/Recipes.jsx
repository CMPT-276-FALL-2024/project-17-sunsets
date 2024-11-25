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
            hasSearched: false, // Tracks if a search has been performed
            error: null, // Tracks errors
            loading: false, // Tracks loading state
        };
    }

    componentDidMount() {
        // Retrieve initial search query from the URL (if any)
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search') || '';
        if (searchQuery) {
            this.setState({ searchQuery, hasSearched: true }, () => this.fetchRecipes(searchQuery));
        }
    }

    fetchRecipes = async (query) => {
        if (query) {
            this.setState({ loading: true, error: null }); // Set loading state before API call
            try {
                const fetchedRecipes = await processRecipes(query);
                this.setState({ recipes: fetchedRecipes, error: null });
            } catch (error) {
                console.error("Error fetching recipes:", error);
                this.setState({
                    error: "Failed to load recipes. Please try again later.",
                    recipes: [], // Clear recipes on error
                });
            } finally {
                this.setState({ loading: false }); // Reset loading state after API call
            }
        }
    };

    render() {
        const { recipes, hasSearched, error, loading } = this.state;

        return (
            <div className="page-container">
                <Navbar className="recipe" />
                <SearchBar
                    onSearch={(query) => {
                        this.setState({ searchQuery: query, hasSearched: true }, () => this.fetchRecipes(query));
                    }} // Pass query directly to fetchRecipes
                    className="recipe"
                />
                
                <div className="content">
                    {loading ? (
                        <p className="loading-message">Loading the recipes.....</p> // Show loading message during API call
                    ) : error ? (
                        <p className="error-message">{error}</p> // Show error message if API fails
                    ) : hasSearched && recipes.length > 0 ? (
                        <MealList recipes={recipes} className="recipe" />
                    ) : hasSearched ? (
                        <p className="no-results">No recipes found. Please try another search.</p>
                    ) : null}
                </div>
                
                <Footer className="home" />
            </div>
        );
    }
}
