const express = require("express");
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [];

//using / because we will set up /users in index.js
router.get("/", (req, res) => {
  res.send(users); //displays users in the browser
});

router.get("/:id", (req, res) => {
  const { id } = req.params; //gets parameters from browser
  //namely the :id
  let foundUser = users.find((user) => user.id === id);
  //gets user from list of users
  if (!foundUser) {
    foundUser = { error: "User not found" };
    //if user not found return error
  }
  res.send(foundUser); //send user to browser
});
router.post("/", (req, res) => {
  const user = req.body; //get post request content
  users.push({ id: uuidv4(), ...user }); //add an id
  res.send(users); //display updated users
});
export default router;
