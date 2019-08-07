const express = require('express');

const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

// //get, post, put, delete
// routes.get('/:name', (req, res)=>{
//     // return res.send(`Hi ${req.params.name}`);
//     return res.json({"message": `Hi ${req.params.name}` });
// });

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);
module.exports = routes;