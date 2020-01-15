const Dev = require ('../models/Dev')
const parseStrinAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index (request, response){
        console.log(request.query);
        const{ latitude, longitude, techs} = request.query;

        const techsArray = parseStrinAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry:{
                        type: 'Point',
                        coordinates:[longitude, latitude],                    },
                },
                $maxDistance: 10000,
            },
        });

        //Raio de 10km
        //Filtrar por techs
        return response.json({devs:[]});

    }
}