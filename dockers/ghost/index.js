const jwt = require('jsonwebtoken');
const axios = require('axios');

// Admin API key goes here
const key = '****';

// Split the key into ID and SECRET
const [id, secret] = key.split(':');

// Create the token (including decoding secret)
const token = jwt.sign({}, Buffer.from(secret, 'hex'), {
    keyid: id,
    algorithm: 'HS256',
    expiresIn: '5m',
    audience: `/v2/admin/`
});

// Make an authenticated request to create a post
const url = 'http://192.168.1.210:2368/ghost/api/v2/admin/posts/';
const headers = { Authorization: `Ghost ${token}` };
const payload = { posts: [{ title: 'Hello World' }] };
axios.post(url, payload, { headers })
    .then(response => console.log(response))
    .catch(error => console.error(error));