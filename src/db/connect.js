import mongoose from "mongoose";

const connect = async () => {
  mongoose
  .connect(
    'mongodb+srv://shubham2:1ZQeOqmlSTlV8xPA1@cluster0.gbu6v.mongodb.net/',
  )
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log(err));
};

export default connect;
