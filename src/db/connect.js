import mongoose from "mongoose";

const connect = async () => {
 let url=process.env.MONGO_URI 
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('Error: ' + err));
};

export default connect;
