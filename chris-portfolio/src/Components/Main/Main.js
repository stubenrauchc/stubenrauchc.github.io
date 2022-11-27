import { Component } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Home/Home";
import {
  addToken,
  deleteUser,
  fetchMealPlan,
  fetchAllRecipes,
  fetchRecipes,
  saveRecipe,
  fetchShoppingList,
  deleteRecipe,
  updatedRecipe,
  newMealSelection,
  deleteShoppingList,
  deletePurchasedItem,
  addPurchasedItem,
  postNewMealSelection,
  changeMealSelection,
  clearMealPlan
} from "../../Redux/actionCreators";
import { connect } from "react-redux";
import { Router } from "react-router-dom";
import WeeklyPlanner from "../WeeklyPlanner/WeeklyPlanner";
import Recipes from "../Recipe/Recipes";
import ShoppingList from "../ShoppingList/ShoppingList";
import CreateRecipe from "../Recipe/CreateRecipe";
import Day from "../Day/Day";
import AllRecipes from "../Pantry/AllRecipes";
import { Button } from "reactstrap";
import { FaSignOutAlt } from "react-icons/fa";
import "./main.css";

const mapStateToProps = (state) => {
  return {
    purchaseditems: state.purchaseditems,
    mealselection: state.mealselection,
    shoppinglist: state.shoppinglist,
    mealplan: state.mealplan,
    ingredient: state.ingredient,
    recipes: state.recipes,
    allrecipes: state.allrecipes,
    token: state.token,
    user: state.user,
    saveRecipe: state.saveRecipe,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToken: () => {
    dispatch(addToken());
  },
  deleteUser: () => {
    dispatch(deleteUser());
  },
  fetchRecipes: (token) => {
    dispatch(fetchRecipes(token));
  },
  fetchAllRecipes: (token) => {
    dispatch(fetchAllRecipes(token));
  },

  fetchMealPlan: (token) => {
    dispatch(fetchMealPlan(token));
  },

  fetchShoppingList: (token) => {
    dispatch(fetchShoppingList(token));
  },
  saveRecipe: (
    user_id,
    title,
    imageUrl,
    ingredientList,
    instructions,
    servingSize,
    category,
    token
  ) =>
    dispatch(
      saveRecipe(
        user_id,
        title,
        imageUrl,
        ingredientList,
        instructions,
        servingSize,
        category,
        token
      )
    ),

  deleteRecipe: (id) => dispatch(deleteRecipe(id)),
  updatedRecipe: (
    recipeid,
    user_id,
    title,
    imageUrl,
    ingredientList,
    instructions,
    servingSize,
    category,
    token
  ) =>
    dispatch(
      updatedRecipe(
        recipeid,
        user_id,
        title,
        imageUrl,
        ingredientList,
        instructions,
        servingSize,
        category,
        token
      )
    ),
  newMealSelection: (user, mealtime, day, recipename) =>
    dispatch(newMealSelection(user, mealtime, day, recipename)),
  changeMealSelection: (mealplanid, user, mealtime, day, recipename) =>
    dispatch(changeMealSelection(mealplanid, user, mealtime, day, recipename)),
  deleteShoppingList: (item) => dispatch(deleteShoppingList(item)),
  deletePurchasedItem: (item) => dispatch(deletePurchasedItem(item)),
  addPurchasedItem: (item) => dispatch(addPurchasedItem(item)),
  postNewMealSelection: (mealselection, token) =>
    dispatch(postNewMealSelection(mealselection, token)),
  clearMealPlan: (token) => dispatch(clearMealPlan(token))
});

class Main extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidUpdate(preprops) {
    if (this.props.token.token !== preprops.token.token && this.props.token.token !== undefined) {
      this.props.fetchRecipes(this.props.token.token);
      this.props.fetchAllRecipes(this.props.token.token);
      this.props.fetchMealPlan(this.props.token.token);
      this.props.fetchShoppingList(this.props.token.token);
    }
  }

  handleLogout = () => {
  
    this.props.addToken("");
    this.props.deleteUser();
    
  };

  //PASS TOKENS TO THE COMPONENTS
  render() {
    return (
      <div>
        {this.props.token.token !== undefined ? (
          <div id="log-out-home-button-group">
            <Button id="log-out-button">
              <FaSignOutAlt id="fa-sign-in" />{" "}
              <Link to="/login" onClick={this.handleLogout}>
                logout
              </Link>
            </Button>

            <Navigate to="/home" />
          </div>
        ) : (
          <Link to="/login">Home | </Link>
        )}
        <Routes>
          <Route path="/login" component={() => <Login />} />
          <Route path="/register" component={() => <Register />} />
          <Route
            path="/home"
            component={
              this.props.token.token !== undefined ? () => <Home /> : null
            }
          />
          <Route
            path="/weeklyplanner"
            component={() => (
              <WeeklyPlanner
                mealplan={this.props.mealplan.mealplan}
                user={this.props.user}
                mealselection={this.props.mealselection.mealselection}
                postNewMealSelection={this.props.postNewMealSelection}
                token={this.props.token}
                clearMealPlan={this.props.clearMealPlan}
              />
            )}
          />
          <Route
            path="/recipes"
            component={() => (
              <Recipes
                token={this.props.token.token}
                recipes={this.props.recipes.recipes}
                deleteRecipe={this.props.deleteRecipe}
                updateRecipe={this.props.updateRecipe}
                updatedRecipe={this.props.updatedRecipe}
                recipesLoading={this.props.recipes.isLoading}
              />
            )}
          />
          <Route
            path="/allrecipes"
            component={() => (
              <AllRecipes
                token={this.props.token.token}
                allrecipes={this.props.allrecipes.allrecipes}
                saveRecipe={this.props.saveRecipe}
                user={this.props.user}
                allRecipesLoading ={this.props.allrecipes.isLoading}
              />
            )}
          />
          <Route
            path="/shoppinglist"
            component={() => (
              <ShoppingList
                shoppingList={this.props.shoppinglist.shoppinglist}
                fetchShoppingList={this.props.fetchShoppingList}
                user={this.props.user}
                token={this.props.token.token}
                deleteShoppingList={this.props.deleteShoppingList}
                addPurchasedItem={this.props.addPurchasedItem}
                deletePurchasedItem={this.props.deletePurchasedItem}
                purchaseditems={this.props.purchaseditems.purchaseditems}
              />
            )}
          />
          <Route
            path="/createrecipe"
            component={() => (
              <CreateRecipe
                user={this.props.user}
                token={this.props.token}
                saveRecipe={this.props.saveRecipe}
                updatedRecipe={this.props.updatedRecipe}
              />
            )}
          />
          <Route
            path="/day"
            component={() => (
              <Day
                newMealSelection={this.props.newMealSelection}
                changeMealSelection={this.props.changeMealSelection}
                mealselection={this.props.mealselection.mealselection}
              />
            )}
          />
          <Route path="/day" component={() => <Day />} />
          <Route path="/home" component={() => <Home />} />
          <Navigate to="/login" />
        </Routes>
      </div>
    );
  }
}

export default Router(connect(mapStateToProps, mapDispatchToProps)(Main));
