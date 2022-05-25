const { default: mongoose } = require('mongoose')
const mongoose = require('mongoose')
const mongoPath = 'mongodb+srv://user1:Ahled3SHP0LzgJcu@redcarpetpups.uitf0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//Ahled3SHP0LzgJcu
//gwsjPeFfwO5Ks9Fc



module.exports = async () => {
    await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


return mongoose
}