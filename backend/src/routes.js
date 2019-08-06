const express = require('express');

const DevController = require('./controllers/DevController');

const routes = express.Router();

// //get, post, put, delete
// routes.get('/:name', (req, res)=>{
//     // return res.send(`Hi ${req.params.name}`);
//     return res.json({"message": `Hi ${req.params.name}` });
// });

routes.post('/devs', DevController.store);
module.exports = routes;