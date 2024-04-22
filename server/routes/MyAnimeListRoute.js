const express = require('express');
const axios = require('axios');
const url = require('url');
const router = express.Router({ mergeParams: true });

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
})

module.exports = router;
