const express = require('express');
const server = express();

const projectsRouter = require('./projects-router');

server.use(express.json());

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

server.use('/api/projects', projectsRouter);

module.exports = server;