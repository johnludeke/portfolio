const express = require('express');
const axios = require('axios');
const qs = require('qs');
const cors = require('cors');

const app = express();
app.use(cors());

const clientId = 'YOUR_SPOTIFY_CLIENT_ID';
const clientSecret = 'YOUR_SPOTIFY_CLIENT_SECRET';

app.get('/token', async (req, res) => {
    const token = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    try {
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            qs.stringify({ grant_type: 'client_credentials' }),
            {
                headers: {
                    Authorization: `Basic ${token}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch access token' });
    }
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
