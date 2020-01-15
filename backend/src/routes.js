const {Router} = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', (request, response) => {
    console.log(request.body);
    const {github_username}=request.body;

    const response = axios.get(`https://api.github.com/users/${github_username}`);

    return response.json({message:'Hello Mogi'});
});

module.exports = routes;