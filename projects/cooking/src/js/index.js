
//https://www.food2fork.com/api/search
//55743b9cbd6ffb9d9cc9e22d4c6b893e
import { elements, renderLoader, clearLoader } from './views/base';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView'; 
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';





/* Global State of the App
*- Current Recipe Object
*- Shopping List Object
*- Liked Recipes
*/

const state = {};


/*Seach Controller*/

const controlSearch = async () => {
    //1. Get Query from View
    const query = searchView.getInput();
   
    if (query){
        //2. New Search Object and add to State
        state.search = new Search(query);
        
        //3. Prepare UI for Results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        
        //4. Seach for Recipes
        try {
            await state.search.getResults();
        
            //5. Render Results on UI
            clearLoader(); searchView.renderResults(state.search.result);            
        }catch(error){
            alert("Something Wrong ");
            clearLoader();
            
    }

    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    
    if (btn){
        const goToPage = parseInt(btn.dataset.goto,10);
        searchView.clearResults();
        searchView.renderResults(state.search.result,goToPage);
            console.log(goToPage);

    }
});

/*Recipe Controller*/

const controlRecipe = async () => {
    const id = window.location.hash.replace('#','');
    
    
    if (id) {
        //Prepare UI for Changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);
        
        //Highlight Selected Item
        if (state.search) searchView.highlightSelected(id);
        
        //Create new Recipe object
        state.recipe = new Recipe(id);
        
        //Get recipe Data
        try {
            await state.recipe.getRecipe();
            
            state.recipe.parseIngredients();
        
            //Calculate Servings and Time
            state.recipe.calcTime();
            state.recipe.calcServings();
        
            //Render Recipe
            clearLoader();
        recipeView.renderRecipe(state.recipe,
            state.likes.isLiked(id));
        }
        catch(err) {
            console.log(err);
            alert("Error Processing Recipe")     
    }
        

    }
};
/*
window.addEventListener('hashchange', controlRecipe);
window.addEventListener('load',controlRecipe)
*/
['hashchange', 'load'].forEach(event => window.addEventListener(event,controlRecipe));



/*List Controller */
const controlList =() => {

    //Create New list if NONE
    if (!state.list) state.list = new List();
    
    //Add each Ingredients to list UI
    state.recipe.ingredients.forEach(el =>{
        const item = state.list.addItem(el.count, el.unit, el.ingredient)
        listView.renderItem(item);
        
    });
}

//Handle Delete Update List item Events 
elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;

    //Handle the Delete Button
    if (e.target.matches('.shopping__delete, .shopping__delete *')){
        //Delete from State 
        state.list.deleteItem(id);

        //Delete from UI

        listView.deleteItem(id);
    }else if (e.target.matches('.shopping__count-value')){
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(id,val);
    }
});

elements.recipe.addEventListener('click', e =>{
    if (e.target.matches('.btn-decrease, .btn-decrease *')){
        if(state.recipe.servings > 1){
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
        
        
    }else if (e.target.matches('.btn-increase, .btn-increase *')){
        state.recipe.updateServings('inc'); 
        recipeView.updateServingsIngredients(state.recipe);
    }else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')){
        controlList();
    }else if (e.target.matches('.recipe__love, .recipe__love *')){
        controlLike();

    }
    
    
});



/* Like Controller */



const controlLike = () => {
    if (!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;    
    if (!state.likes.isLiked(currentID)){
        //Add Like to the State
        const newLike = state.likes.addLike(currentID,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img);


        //Toggle the Button
        likesView.toggleLikeBtn(true);
        //Add Like to UI
        likesView.renderLike(newLike);

    }else {
        //Remove the Like from state 
        state.likes.deleteLike(currentID);

        //Toggle the Like button
        likesView.toggleLikeBtn(false);

        //Remove the Like from UI
        likesView.deleteLike(currentID);
    }
    likesView.toggleLikeMenu(state.likes.getNumLikes());

};

window.addEventListener('load', () =>{
    state.likes = new Likes();

    //Restoring Likes
    state.likes.readStorage();
    //Toggle Like Menu Button
    likesView.toggleLikeMenu(state.likes.getNumLikes());

    //Render The Existing Likes
    state.likes.likes.forEach(like => likesView.renderLike(like));
});