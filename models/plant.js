const mongoose = require('mongoose')
const db = require('../db')
const Schema = mongoose.Schema

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const Plant = new Schema(
    {
        name: { type: String, required: true},
        description: { type: String, required: true},
        image: { type: String, required: true}
    },
    {timestamps: true}
)

module.exports = mongoose.model('plants', Plant)