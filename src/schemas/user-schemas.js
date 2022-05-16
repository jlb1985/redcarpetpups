const mongoose = require('mongoose')

const reqString = {
   type: String,
   required: true

}

const userSchema = mongoose.Schema({
    location: reqString,
    name: reqString,
    
})

module.exports = mongoose.model('users', userSchema)