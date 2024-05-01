const http = require('http');
const path = require('path');
const url = require('url');

http.createServer((req, res) => {

    let qs = require('querystring');
    if (req.method === 'POST') {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', async () => {
            let post = qs.parse(body);
            console.log(post);
            const fetchRequest = await fetch('https://www.google.com/recaptcha/api/siteverify', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
                body: `secret=6LeaYs0pAAAAAD1rEu5-sKK09PiKdoBvUJ6Olc9T&response=${post['g-recaptcha-response']}`
            });
            const data = await fetchRequest.json();
            console.log(data);
        });
    }
}).listen(3000);
