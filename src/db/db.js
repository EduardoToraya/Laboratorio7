const mongoose = require('mongoose')
const connectionURL = "mongodb+srv://edu97:edu97@cluster0-spf7p.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true, // crear indexes
  useUnifiedTopology: true,
  useFindAndModify: false
  
})
