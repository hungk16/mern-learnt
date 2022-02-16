const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth')
const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://hungk16:1234@cluster0.0lgg0.mongodb.net/mern-learnt?retryWrites=true&w=majority`, {
    })
      console.log('MongoDB connected')
  } catch (error){
      console.log(error.message)
      process.exit(1)
  }
}

connectDB()
const app = express()

app.get('/', (req, res) => res.send('Hello word'))
app.use('/api/auth', authRouter)
const PORT = 5000

app.listen(PORT, () => console.log(`server running on port ${PORT}`))