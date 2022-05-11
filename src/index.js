const mongo = require('./mongo')
const userSchema = require('./schemas/user-schemas')

const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
        console.log('connected to mongodb!')

        const user = {
         email: 'test@email.com',
         name: 'Layla',
         password:'Password1!'

        }

        await new userSchema(user).save()
    } finally {
        mongoose.connection.close()

    }
  })

}

connectToMongoDB()