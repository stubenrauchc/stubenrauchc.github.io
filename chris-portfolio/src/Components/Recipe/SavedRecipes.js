import React, { useState, useEffect } from "react";
import { FaRegTrashAlt, FaCircle } from "react-icons/fa";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Label,
  Table,
} from "reactstrap";
import "./recipe.css";
import { Fade } from "react-animation-components";
import defaultImg from "../../images/default.png";
import { Loading } from "../LoadingComponent";
// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   listAll,
//   list,
// } from "firebase/storage";
// import { storage } from "./firebase";

function RenderSavedRecipes({ recipeCard, updatedRecipe, token, imgUrls }) {
  const [modal, setModal] = useState(false);
  const [instructions, setInstructions] = useState(recipeCard.instructions);
  const [servingSize, setServingSize] = useState(recipeCard.servingSize);
  const [ingredientList, setIngredientList] = useState(
    recipeCard.ingredientList
  );
  const [ingredientName, setIngredientName] = useState();
  const [ingredientQuantity, setIngredientQuantity] = useState();
  const [ingredientMeasurementUnit, setIngredientMeasurementUnit] = useState();
  const toggle = () => setModal(!modal);
  // let image;

  function addIngredients(event) {
    if (
      ingredientName !== "" &&
      ingredientQuantity !== "" &&
      ingredientMeasurementUnit !== ""
    ) {
      event.preventDefault();
      setIngredientList(() => [
        ...ingredientList,
        {
          name: ingredientName,
          quantity: ingredientQuantity,
          measurementunit: ingredientMeasurementUnit,
        },
      ]);

      setIngredientName("");
      setIngredientQuantity("");
      setIngredientMeasurementUnit("");
    }
  }

  function handleDelete(id, e) {
    setIngredientList(ingredientList.filter((v, i) => i !== id));
  }
  const addonIngredientsList = ingredientList.map((item, id) => {
    return (
      <>
        <tr className="rows" key={id}>
          <th scope="row">
            <FaCircle />
          </th>
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

  function handleUpdatedRecipe(values) {
    values.preventDefault();

    updatedRecipe(
      recipeCard.recipeid,
      recipeCard.user_id,
      recipeCard.title,
      recipeCard.imageUrl,
      ingredientList,
      instructions,
      servingSize,
      recipeCard.category,
      token
    );
  }
  const ingredients = recipeCard.ingredientList.map((item, index) => {
    return (
      <li key={index} id="ingredient">
        {item.name}: {item.quantity} {item.measurementunit}
      </li>
    );
  });

  function fileExists() {
    // let isExist = false;
    try {
      let file = require(`../../images/${recipeCard.imageUrl}`).default;
      return true;
    } catch (err) {
      return false;
    }
    //  console.log("recipe"+" "+ recipeCard.imageUrl);
    //  imgUrls.map((url)=>{
    //   if(url===recipeCard.imageUrl) {
    //     image = url;
    //     isExist = true;
    //   }
    //  });
    // return isExist;
  }

  return (
    <>
    <Fade in>
      <Card style={{ width: "30rem" }} id="recipecard">
        <CardBody>
          <CardTitle>
            <h3>{recipeCard.title}</h3>
          </CardTitle>
          <CardImg
            alt="not found"
            // src={fileExists() ? image : defaultImg }
            src={
              fileExists()
                ? require(`../../images/${recipeCard.imageUrl}`).default
                : defaultImg
            }
          />
          <CardSubtitle>Serving Size: {recipeCard.servingSize}</CardSubtitle>
          <h5>Ingredients:</h5>
          <ul>{ingredients}</ul>
          <h5>Instructions:</h5> {recipeCard.instructions}
          <div id="recipe-update-delete">
            <Button onClick={toggle} id="update">
              {" "}
              Update
            </Button>

            <Modal isOpen={modal} toggle={toggle} {...recipeCard} id="modal">
              <ModalHeader toggle={toggle} id="modal-header">
                {recipeCard.title}
              </ModalHeader>
              <ModalBody id="modal-body"></ModalBody>
              <Form
                id="modal-form"
                onSubmit={(values) => {
                  handleUpdatedRecipe(values);
                  setModal(!modal);
                }}
              >
                <Label for="servingsize">Serving Size</Label>
                <Input
                  type="number"
                  name="servingsize"
                  value={servingSize}
                  onChange={(e) => setServingSize(e.target.value)}
                ></Input>

                <Label for="ingredients">Add Ingredient</Label>
                <Input
                  type="text"
                  name="ingredient"
                  placeholder="Ingredient Name"
                  onChange={(e) => setIngredientName(e.target.value)}
                ></Input>
                <Input
                  type="text"
                  name="ingredient"
                  placeholder="Quantity"
                  onChange={(e) => setIngredientQuantity(e.target.value)}
                ></Input>
                <Input
                  type="text"
                  name="ingredient"
                  placeholder="Measurement Unit"
                  onChange={(e) => setIngredientMeasurementUnit(e.target.value)}
                ></Input>
                <Button
                  id="modal-add"
                  type="button"
                  onClick={(event) => addIngredients(event)}
                >
                  Add Ingredient
                </Button>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Ingredients entered</th>
                      <th>Quantity entered</th>
                      <th>Measurement Unit entered</th>
                    </tr>
                  </thead>
                  <tbody>{addonIngredientsList}</tbody>
                </Table>
                <br></br>
                <Label for="instructions">Instructions</Label>
                <Input
                  type="textarea"
                  name="instructions"
                  rows="9"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                ></Input>

                <ModalFooter>
                  <Button id="modal-update-button">Update</Button>{" "}
                  <Button onClick={toggle} id="modal-cancel-button">
                    Cancel
                  </Button>
                </ModalFooter>
              </Form>
            </Modal>
          </div>
        </CardBody>
      </Card>
    </Fade>
    </>
  );
}

export default function SavedRecipes(props) {
  // const imagesListRef = ref(storage, "images/");
  // const [imageUrls, setImageUrls] = useState([]);
  //  useEffect(() => {
  //     listAll(imagesListRef).then((response) => {
  //       response.items.forEach((item) => {
  //         getDownloadURL(item).then((url) => {
  //           setImageUrls((prev) => [...prev, url]);
  //           //console.log(url);
  //         });
  //       });
  //     });
  //   }, []);

  const recipeCollections = props.recipes.map((item, id) => {
    return (
      <>
        <RenderSavedRecipes
          key={id}
          updatedRecipe={props.updatedRecipe}
          recipeCard={item}
          token={props.token}
          // imgUrls={imageUrls}
          recipesLoading={props.recipesLoading}
        />

        {/* {imageUrls.map((url) => {
        return <img src={url} />;
      })} */}
      </>
    );
  });
  if (props.recipesLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return <>{recipeCollections}</>;
  }
}
