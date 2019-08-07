const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){
        const { devId } = req.params;
        const { user } = req.headers;
        const likedDev = await Dev.findById(devId);
        const logedDev = await Dev.findById(user);
        if(!likedDev) {
            return res.status(400).json({error: 'Dev not exists!'})
        }else{
            if(likedDev.likes.includes(logedDev._id)) {
                return res.json({mensagem: 'match'});
            }
        }
        logedDev.likes.push(likedDev._id);
        await logedDev.save();
        return res.json({likedDev, logedDev});
    }
};