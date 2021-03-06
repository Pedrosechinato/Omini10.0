const axios = require('axios');
const Dev = require('../models/Dev');
const parseStrinAsArray = require('../utils/parseStringAsArray')
//index, show, store, update, destroy

module.exports ={ 
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store (request, response) {
        console.log(request.body);
        const {github_username, techs, latitude, longitude} = request.body;
            
        let dev = await Dev.findOne({github_username});
        

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const{name = login,avatar_url, bio} = apiResponse.data;
            console.log(name, avatar_url, bio, github_username);
        
            const techsArray = parseStrinAsArray(techs);

            const location = {
                type: 'Point',
                coodintes:[longitude, latitude],
            };
        
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        
            console.log(response.data);
        }

        return response.json(dev);
    }
};
