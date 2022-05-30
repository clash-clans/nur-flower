import React from "react";
import logo from "../../../assets/logo.ico";
import classes from "./Logo.module.css";

export default () => (
  <div className={classes.Logo}>
    <img src={logo} alt="Bouquet Builder logo" />
    <span>Nur-Flowers</span>
  </div>
);
