import express from "express";
import { Link } from "../database/models";
const linkController = express.Router();

linkController.post('/add', (req, res) => {
    const { link, title, content } = req.body
    const newLink = new Link({ link, title, content });
    newLink
        .save()
        .then(data => {
            console.log('/link/add')
            res.status(200).send({
                data,
                status: 200,
            });
        })
        .catch(err => {
            console.log(err)
            res.status(400).send("unable to save to database");
        });
})

linkController.get('/', (req, res) => {
    Link.find({}, (err, result) => {
        res.status(200).json({
           data: result,
           status: 200,
        });
     });
})

export default linkController