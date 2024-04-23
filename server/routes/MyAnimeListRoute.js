const express = require('express');
const axios = require('axios');
const url = require('url');
const router = express.Router({ mergeParams: true });

const MAL_API_BASE_URL = 'https://api.myanimelist.net/v2';

router.post('/token', async (req, res) => {
    try {
        const reqInstance = axios.create({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const params = new url.URLSearchParams(req.body);
        const response = await reqInstance.post('https://myanimelist.net/v1/oauth2/token', params.toString())
            .then((response) => {
                res.json(response.data)
            });
    } catch (err) {
        res.json({ message: err.message })
    }
});

router.get('/userInfo', async (req, res) => {
    try {
        const bearerToken = req.get('Authorization');
        const reqInstance = axios.create({
            headers: {
                Authorization: bearerToken
            },
        });
        const response = await reqInstance.get(`${MAL_API_BASE_URL}/users/@me`)
            .then((response) => {
                console.log('response', response);
                res.json(response.data)
            });
    } catch (err) {
        res.json({ message: err.message })
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        const bearerToken = req.get('Authorization');
        const reqInstance = axios.create({
            headers: {
                Authorization: bearerToken
            },
        });
        const newAnimeList = await reqInstance.get(`${MAL_API_BASE_URL}/anime/ranking?ranking_type=airing`)
            .then((response) => {
                return response.data.data;
            });
        const upcomingAnimeList = await reqInstance.get(`${MAL_API_BASE_URL}/anime/ranking?ranking_type=upcoming`)
            .then((response) => {
                return response.data.data;
            });
        const topAnimeList = await reqInstance.get(`${MAL_API_BASE_URL}/anime/ranking?ranking_type=bypopularity`)
            .then((response) => {
                return response.data.data;
            });

        res.json({
            newList: newAnimeList,
            upcomingList: upcomingAnimeList,
            topList: topAnimeList
        });
    } catch (err) {
        res.json({ message: err.message })
    }
});

module.exports = router;
