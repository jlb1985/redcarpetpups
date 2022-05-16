const mongo = require('./mongo')
const userSchema = require('./schemas/user-schemas')

const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
        console.log('connected to mongodb!')

        const user = {
         location: 'Phoenix, AZ',
         name: 'Danmar  Pet Resort',
         

        }

      

        await new userSchema(user).save()
    } finally {
        mongoose.connection.close()

    }
  })

}

connectToMongoDB()