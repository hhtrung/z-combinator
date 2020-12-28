import express from "express";
import { User } from "../database/models";
import sha256 from "sha256";
const userController = express.Router();
/**
 * GET/
 * retrieve and display all Users in the User Model
 */
userController.get("/", (req, res) => {
   User.find({}, (err, result) => {
      res.status(200).json({
         data: result
      });
   });
});
/**
 * POST/
 * Add a new User to your database
 */
userController.post("/add-user", (req, res) => {
   const { email, password } = req.body;
   console.log(new Date().getMinutes(), req.body)

   const userData = {
      email: new Date().getFullYear() + '',
      hashedPassword: sha256(Date.now() + '')
   };

   const newUser = new User(userData);
   newUser
      .save()
      .then(data => {
         res.status(200).send(data);
      })
      .catch(err => {
         res.status(400).send("unable to save to database");
      });
});
export default userController;