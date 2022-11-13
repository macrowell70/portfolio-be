const express = require('express');
const router = express.Router();

const Projects = require('./projects-model')

router.get('/', (req, res) => {
    Projects.get()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => console.error(err))
})
router.post('/', (req, res) => {
    Projects.add(req.body)
    .then(() => {
        res.status(200).json({ "message": "new project added successfully" })
    })
    .catch(err => console.error(err))
})
router.put('/:id', (req, res) => {
    const { params, body } = req
    Projects.update(params.id, body)
    .then(() => {
        res.status(200).json({ "message": "project has been updated successfully" })
    })
    .catch(err => console.error(err))
})
router.delete('/:id', (req, res) => {
    Projects.remove(req.params.id)
    .then(() => {
        res.status(200).json({ "message": "project was deleted" })
    })
    .catch(err => console.error(err))
})

module.exports = router