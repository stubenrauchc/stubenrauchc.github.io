/* eslint-disable default-case */
import React from "react";
import Navigator from "../navigation/Navigator";
import { Link } from "react-router-dom";
import yellowdot from "../../images/yellowdot.png";
import bluedot from "../../images/bluedot.png";
import greendot from "../../images/greendot.png";
import purpledot from "../../images/purpledot.png";
import orangedot from "../../images/orangedot.png";
import pinkdot from "../../images/pinkdot.png";
import reddot from "../../images/reddot.png";
import "./weeklyplanner.css";
import Accordion from "react-bootstrap/Accordion";
import { Button, Table } from "reactstrap";


export default function WeeklyPlanner(props) {

  const displayMondayBreakfast = props.mealselection.map((item) => {
    if (item.dayofweek === "Monday" && item.category === "Breakfast") {
         return <>{item.recipename}</>;
    }else {
      return <></>;
    }
  });
  const displayMondayLunch = props.mealselection.map((item) => {
    if (item.dayofweek === "Monday" && item.category === "Lunch") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displayMondayDinner = props.mealselection.map((item) => {
    if (item.dayofweek === "Monday" && item.category === "Dinner") {
      return <>{item.recipename}</>;
    }else {
      return <></>;
    }
  });
  const displayTuesdayBreakfast = props.mealselection.map((item) => {
    if (item.dayofweek === "Tuesday" && item.category === "Breakfast") {
      return <>{item.recipename}</>;
    }else {
      return <></>;
    }
  });
  const displayTuesdayLunch = props.mealselection.map((item) => {
    if (item.dayofweek === "Tuesday" && item.category === "Lunch") {
      return <>{item.recipename}</>;
    }else {
      return <></>;
    }
  });
  const displayTuesdayDinner = props.mealselection.map((item) => {
    if (item.dayofweek === "Tuesday" && item.category === "Dinner") {
      return <>{item.recipename}</>;
    }else {
      return <></>;
    }
  });
  const displayWednesdayBreakfast = props.mealselection.map((item) => {
    if (item.dayofweek === "Wednesday" && item.category === "Breakfast") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displayWednesdayLunch = props.mealselection.map((item) => {
    if (item.dayofweek === "Wednesday" && item.category === "Lunch") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displayWednesdayDinner = props.mealselection.map((item) => {
    if (item.dayofweek === "Wednesday" && item.category === "Dinner") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });

  const displayThursdayBreakfast = props.mealselection.map((item) => {
    if (item.dayofweek === "Thursday" && item.category === "Breakfast") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displayThursdayLunch = props.mealselection.map((item) => {
    if (item.dayofweek === "Thursday" && item.category === "Lunch") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displayThursdayDinner = props.mealselection.map((item) => {
    if (item.dayofweek === "Thursday" && item.category === "Dinner") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });

  const displayFridayBreakfast = props.mealselection.map((item) => {
    if (item.dayofweek === "Friday" && item.category === "Breakfast") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displayFridayLunch = props.mealselection.map((item) => {
    if (item.dayofweek === "Friday" && item.category === "Lunch") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displayFridayDinner = props.mealselection.map((item) => {
    if (item.dayofweek === "Friday" && item.category === "Dinner") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displaySaturdayBreakfast = props.mealselection.map((item) => {
    if (item.dayofweek === "Saturday" && item.category === "Breakfast") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displaySaturdayLunch = props.mealselection.map((item) => {
    if (item.dayofweek === "Saturday" && item.category === "Lunch") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displaySaturdayDinner = props.mealselection.map((item) => {
    if (item.dayofweek === "Saturday" && item.category === "Dinner") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });

  const displaySundayBreakfast = props.mealselection.map((item) => {
    if (item.dayofweek === "Sunday" && item.category === "Breakfast") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displaySundayLunch = props.mealselection.map((item) => {
    if (item.dayofweek === "Sunday" && item.category === "Lunch") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displaySundayDinner = props.mealselection.map((item) => {
    if (item.dayofweek === "Sunday" && item.category=== "Dinner") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });

  return (
    <div>
      <Navigator />
      <div>
        <h3 id="weeklyplanner"> Weekly Planner</h3>
      </div>
      <div className="weeklyplanner-container">
        <Accordion defaultActiveKey="1">
          <Accordion.Item>
            <Accordion.Header
              style={{ backgroundColor: "#343a41" }}
              targetid="monday"
            >
              <img src={yellowdot} alt="large yellow dot" />
              &nbsp; &nbsp; Monday
            </Accordion.Header>
            <Accordion.Body accordionid="monday">
              <ul className="weeklyplanner-accordion-links">
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    //testing day component
                    pathname: "/day",
                    state: { day: "Monday", meal: "Breakfast" },
                  }}
                >
                  Breakfast: {displayMondayBreakfast}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Monday", meal: "Lunch" },
                  }}
                >
                  Lunch: {displayMondayLunch}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Monday", meal: "Dinner" },
                  }}
                >
                  Dinner: {displayMondayDinner}
                </Link>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="2">
          <Accordion.Item>
            <Accordion.Header
              style={{ backgroundColor: "#343a41" }}
              targetid="tuesday"
            >
              <img src={orangedot} alt="large orange dot" />
              &nbsp; &nbsp; Tuesday
            </Accordion.Header>
            <Accordion.Body accordionid="tuesday">
              <ul className="weeklyplanner-accordion-links">
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Tuesday", meal: "Breakfast" },
                  }}
                >
                  Breakfast :{displayTuesdayBreakfast}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Tuesday", meal: "Lunch" },
                  }}
                >
                  Lunch : {displayTuesdayLunch}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Tuesday", meal: "Dinner" },
                  }}
                >
                  Dinner : {displayTuesdayDinner}
                </Link>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="3">
          <Accordion.Item>
            <Accordion.Header
              style={{ backgroundColor: "#343a41" }}
              targetid="wednesday"
            >
              <img src={greendot} alt="large green dot" />
              &nbsp; &nbsp; Wednesday
            </Accordion.Header>
            <Accordion.Body accordionid="wednesday">
              <ul className="weeklyplanner-accordion-links">
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Wednesday", meal: "Breakfast" },
                  }}
                >
                  Breakfast : {displayWednesdayBreakfast}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Wednesday", meal: "Lunch" },
                  }}
                >
                  Lunch : {displayWednesdayLunch}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Wednesday", meal: "Dinner" },
                  }}
                >
                  Dinner : {displayWednesdayDinner}
                </Link>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="4">
          <Accordion.Item>
            <Accordion.Header
              style={{ backgroundColor: "#343a41" }}
              targetid="thursday"
            >
              <img src={bluedot} alt="large blue dot" />
              &nbsp; &nbsp; Thursday
            </Accordion.Header>
            <Accordion.Body accordionid="thursday">
              <ul className="weeklyplanner-accordion-links">
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Thursday", meal: "Breakfast" },
                  }}
                >
                  Breakfast : {displayThursdayBreakfast}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Thursday", meal: "Lunch" },
                  }}
                >
                  Lunch : {displayThursdayLunch}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Thursday", meal: "Dinner" },
                  }}
                >
                  Dinner : {displayThursdayDinner}
                </Link>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="5">
          <Accordion.Item>
            <Accordion.Header
              style={{ backgroundColor: "#343a41" }}
              targetid="friday"
            >
              <img src={purpledot} alt="large purple dot" />
              &nbsp; &nbsp; Friday
            </Accordion.Header>
            <Accordion.Body accordionid="friday">
              <ul className="weeklyplanner-accordion-links">
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Friday", meal: "Breakfast" },
                  }}
                >
                  Breakfast : {displayFridayBreakfast}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Friday", meal: "Lunch" },
                  }}
                >
                  Lunch : {displayFridayLunch}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Friday", meal: "Dinner" },
                  }}
                >
                  Dinner : {displayFridayDinner}
                </Link>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="6">
          <Accordion.Item>
            <Accordion.Header
              style={{ backgroundColor: "#343a41" }}
              targetid="saturday"
            >
              <img src={pinkdot} alt="large pink dot" />
              &nbsp; &nbsp; Saturday
            </Accordion.Header>
            <Accordion.Body accordionid="saturday">
              <ul className="weeklyplanner-accordion-links">
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Saturday", meal: "Breakfast" },
                  }}
                >
                  Breakfast : {displaySaturdayBreakfast}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Saturday", meal: "Lunch" },
                  }}
                >
                  Lunch : {displaySaturdayLunch}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Saturday", meal: "Dinner" },
                  }}
                >
                  Dinner : {displaySaturdayDinner}
                </Link>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="7">
          <Accordion.Item>
            <Accordion.Header
              style={{ backgroundColor: "#343a41" }}
              targetid="sunday"
            >
              <img src={reddot} alt="large red dot" />
              &nbsp; &nbsp; Sunday
            </Accordion.Header>
            <Accordion.Body accordionid="sunday">
              <ul className="weeklyplanner-accordion-links">
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Sunday", meal: "Breakfast" },
                  }}
                >
                  Breakfast : {displaySundayBreakfast}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Sunday", meal: "Lunch" },
                  }}
                >
                  Lunch : {displaySundayLunch}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Sunday", meal: "Dinner" },
                  }}
                >
                  Dinner : {displaySundayDinner}
                </Link>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Table>

      </Table>
      <Button onClick={() => props.postNewMealSelection(props.mealselection, props.token.token)} id="planner-submit">Submit Meal Plan</Button>{ "  " }
      <Button onClick={() => props.clearMealPlan(props.token.token)} id="planner-delete">Clear Meal Plan</Button>        
    </div>
  );
}
