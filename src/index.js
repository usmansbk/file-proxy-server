import express from 'express';
import request from 'request';
import fs from 'fs';
import cors from 'cors';

express.urlencoded({ extended: true});

const app = express();

app.use(cors());

app.get('/', (req, res) => res.json({
	status: 'online',
	data: {
		version: '1.0.0',
		message: 'A simple server for serving images with CORS enabled',
		author: 'Babakolo Usman Suleiman',
		git: 'https:\//github.com/usmansbk/image-server.git'
	}}
));

app.get('/img', (req, res) => {
	const {url} = req.query;
	request
	.get(url)
	.pipe(res)
});

app.listen(8888, () => console.log('Server listening on port 8888'));