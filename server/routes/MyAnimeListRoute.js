const express = require('express');
const axios = require('axios');
const url = require('url');
const humps = require('humps');
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

router.get('/info/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const bearerToken = req.get('Authorization');
        const reqInstance = axios.create({
            headers: {
                Authorization: bearerToken
            },
        });
        const response = await reqInstance.get(`${MAL_API_BASE_URL}/anime/${id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`)
            .then((response) => {
                res.json(humps.camelizeKeys(response.data))
            });
    } catch (err) {
        res.json({ message: err.message })
    }
});

module.exports = router;
