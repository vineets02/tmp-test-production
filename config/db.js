const mongoose = require("mongoose")

const connectDB = async () => {
  const conn = await mongoose
    .connect(mongodb+srv://vineet_02:Vineet_94@vineet.hbi5c.mongodb.net/?retryWrites=true&w=majority&appName=vineet, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected".bgMagenta.white))
    .catch((err) => console.log(err))
}

module.exports = connectDB
