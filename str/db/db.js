const mongoose = require("mongoose")
const connectionURL = "mongodb+srv://edu97:<password>@cluster0-spf7p.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(connectionURL, {
  uneNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})