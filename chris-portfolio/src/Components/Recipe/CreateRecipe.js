import React, { useState } from "react";
import Navigator from "../navigation/Navigator";
import { FaRegTrashAlt } from "react-icons/fa";

import {
  Form,
  Button,
  Label,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Col,
  Row,
} from "reactstrap";
import { useLocation } from "react-router-dom";

export default function CreateRecipe(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [ingredients, setIngredients] = useState([]);
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientAmount, setIngredientAmount] = useState("");
  const [ingredientUnit, setIngredientUnit] = useState("");
  const [category, setCategory] = useState("Category");
  const [image, setImage] = useState(null);
  const location = useLocation();

  let saveRecipe = {
    user_id: "",
    title: "",
    imageUrl: "",
    ingredientList: { name: " ", quantity: "", measurementunit: "" },
    instructions: "",
    servingSize: "",
    category: "",
  };

  if (location.state === undefined) {
    saveRecipe.title = "Recipe name...";
    saveRecipe.servingSize = "Serving size...";
    saveRecipe.ingredientList = {
      name: "Ingredient name...",
      quantity: "Amount needed...",
      measurementunit: "Large, Tsp, Cup etc",
    };
    saveRecipe.instructions = "Cooking instructions..";
  } else {
    saveRecipe.title = location.state.saveRecipe.saveRecipe.title;
    saveRecipe.servingSize = location.state.saveRecipe.saveRecipe.servingSize;
    saveRecipe.ingredientList =
      location.state.saveRecipe.saveRecipe.ingredientList;
    saveRecipe.instructions = location.state.saveRecipe.saveRecipe.instructions;
  }

  function handleKeyDown(e) {
    if (e.key === "Enter"){
      addIngredients(e)
    }
  }

  //corrected the input to saveRecipes so object can be created
  function handleSubmit(values) {
    values.preventDefault();
    props.saveRecipe(
      props.user.id,
      values.target.title.value,
      values.target.image.files[0].name,
      ingredients,
      values.target.instructions.value,
      values.target.servingsize.value,
      category,
      props.token.token
    );
  }

  const imgFileHandler = (e) => {
    e.preventDefault();
    let selected = e.target.files[0];
    if (selected) {
      setImage(selected);
      // console.log("Logging Image"+ image.name + " Where from? " + image.URL);
      // File.Copy(image, `../../images/${image.name}`)
      const fileReader = new FileReader();
      fileReader.onChange = (e) => {
        const { result } = selected;
        console.log(result);
      };
      // fileReader.readAsDataURL(image);
    }
  };

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleDelete = (id, e) => {
    setIngredients(ingredients.filter((v, i) => i !== id));
  };
  const ingredientsList = ingredients.map((item, id) => {
    return (
      <>
        <tr className="rows" key={id}>
          <th scope="row">{id + 1}</th>
          <td>{item.name}</td>
          <td>{item.quantity}</td>
          <td>{item.measurementunit}</td>
          <td>
            <FaRegTrashAlt id="trash" onClick={(e) => handleDelete(id, e)} />
          </td>
        </tr>
      </>
    );
  });

  function addIngredients(event) {
    if (
      ingredientName !== "" &&
      ingredientAmount !== "" &&
      ingredientUnit !== ""
    ) {
      event.preventDefault();
      setIngredients(() => [
        ...ingredients,
        {
          name: ingredientName,
          quantity: ingredientAmount,
          measurementunit: ingredientUnit,
        },
      ]);
      setIngredientName("");
      setIngredientAmount("");
      setIngredientUnit("");
    }
  }

  return (
    <div>
      <Navigator />
      <div className="col-12">
        <h3>Create Recipe</h3>
      </div>
      <div className="col-12 col-md-9" id="create-recipe-form">
        <Form
          model="recipeform"
          onSubmit={(values) => handleSubmit(values)}
          id="createrecipe"
        >
          <Row className="form-group">
            <Label htmlFor="title" md={2}>
              Recipe name:
            </Label>
            <Col md={10}>
              <Input
                id="title"
                name="title"
                placeholder={saveRecipe.title}
                type="text"
                pattern="[a-zA-Z ',]*"
                required={true}
              ></Input>
            </Col>
          </Row>
          <Row className="form-group">
            <Col md={2}>
              <Label htmlFor="servingsize">Serving Size</Label>
            </Col>
            <Col md={10}>
              <Input
                id="servingsize"
                name="servingsize"
                placeholder={saveRecipe.servingSize}
                pattern="[0-9]*"
                type="text"
                required={true}
              ></Input>
            </Col>
          </Row>
          <Row className="form-group">
            <Col md={10}>
              <Input
                className="image"
                id="image"
                type="file"
                accept="image/*"
                onChange={
                  imgFileHandler

                  // localStorage.setItem(image, reader.result);
                  // "src/images",
                }
                required={true}
              />
              {image && (
                <img
                  alt="not found"
                  width={"25px"}
                  src={URL.createObjectURL(image)}
                />
              )}
            </Col>
            <Col md={2}>
              <Dropdown
                isOpen={dropdownOpen}
                toggle={toggle}
                direction="down"
                id="category-dropdown"
                required={true}
              >
                <DropdownToggle caret>{category}</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem value="Breakfast" onClick={changeCategory}>
                    Breakfast
                  </DropdownItem>
                  <DropdownItem value="Lunch" onClick={changeCategory}>
                    Lunch
                  </DropdownItem>
                  <DropdownItem value="Dinner" onClick={changeCategory}>
                    Dinner
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
          <Row className="form-group" id="ingredient-add-text-btn">
            <Col md={4}>
              <Label htmlFor="ingredients">Ingredient</Label>
              <Input
                id="ingredients"
                name="ingredients"
                type="text"
                pattern="[a-zA-Z]*"
               
                placeholder={saveRecipe.ingredientList.name}
                onChange={(e) => setIngredientName(e.target.value)}
                value={ingredientName}
              />
            </Col>
            <Col md={3}>
              <Label htmlFor="quantity">Quantity</Label>

              <Input
                id="quantity"
                name="quantity"
                type="text"
                pattern="[0-9/.]*"
                placeholder="Amount needed..."
             
                value={ingredientAmount}
                onChange={(e) =>
                  setIngredientAmount((v) =>
                    e.target.validity.valid ? e.target.value : v
                  )
                }
              />
            </Col>
            <Col md={4}>
              <Label for="measurement">Measurement</Label>
              <Input
                id="measurement"
                name="measurement"
                type="text"
                placeholder="Large, Tsp, Cup etc..."
                value={ingredientUnit}
                onChange={(e) => setIngredientUnit(e.target.value)}
                pattern="[a-zA-Z.]*"
                onKeyDown={(e) => handleKeyDown(e)}
              ></Input>
            </Col>
            <Col md={1} id="col-add-btn">
              <Button
                type="button"
                onClick={(event) => addIngredients(event)}
                id="add-ingredient"
              >
                Add
              </Button>
            </Col>
          </Row>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Ingredients entered</th>
                <th>Quantity entered</th>
                <th>Measurement Unit entered</th>
              </tr>
            </thead>
            <tbody>{ingredientsList}</tbody>
          </Table>
          <Row className="form-group">
            <Label for="instructions">Instructions</Label>
            <Input
              id="instructions"
              name="instructions"
              type="textarea"
              placeholder={saveRecipe.instructions}
              rows="8"
            />
          </Row>
          <div id="submit-button-container">
            <Button type="submit" id="submit-recipe">
              Submit
            </Button>
          </div>
        </Form>

      </div>
    </div>
  );
}
