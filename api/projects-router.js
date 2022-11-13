const express = require('express');
const router = express.Router();

const Projects = require('./projects-model')

router.get('/', (req, res) => {
    console.log("got")
})

module.exports = router