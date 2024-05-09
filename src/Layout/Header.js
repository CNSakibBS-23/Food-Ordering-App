import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealImg from "../../src/assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="Table containing food!" />
      </div>
    </Fragment>
  );
};

export default Header;
