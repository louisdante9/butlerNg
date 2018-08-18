import express from 'express';
import http from 'http';
import path from 'path';

const app = express();
const PORT = 9090;

// View engine configuration
app.set('views', path.join(__dirname, 'views'));

// Mounting express middlewere
app.use(express.static(path.join(__dirname, './../public')));

// Starting server and listening on the server port or 3000 on a local environment.
http.createServer(app).listen(PORT, () => {
	console.log(`Express server listening on port ${config.PORT}`);
});
