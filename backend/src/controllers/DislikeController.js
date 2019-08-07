const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){
        const { devId } = req.params;
        const { user } = req.headers;
        const targetDev = await Dev.findById(devId);
        const logedDev = await Dev.findById(user);
        if(!targetDev) {
            return res.status(400).json({error: 'Dev not exists!'})
        }
        if(!logedDev.dislikes.includes(logedDev._id)) {
            logedDev.dislikes.push(targetDev._id);
            await logedDev.save();
        }
        
        return res.json({ logedDev});
    }
};