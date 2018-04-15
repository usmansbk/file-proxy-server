const express = require('express');
const request = require('request');
const cors = require('cors');

express.urlencoded({ extended: true});

const app = express();
const PORT = process.env.PORT || 8888;

app.use(cors());

app.get('/', (req, res) => res.json({
	status: 'online',
	data: {
		version: '1.0.0',
		message: 'A simple proxy server for serving files with CORS enabled',
		usage: 'https:\/\/\<domain\>\/file?url=\<file-url\>',
		author: 'Babakolo Usman Suleiman',
		git: 'https:\//github.com/usmansbk/image-server.git'
	}
}));


app.get('/file', (req, res) => {
	request
	.get(req.query.url)
	.on('error', (error) => res.status(500).end())
	.pipe(res)
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));