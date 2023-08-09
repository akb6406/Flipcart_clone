import mongoose from 'mongoose';

export const Connection =async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/admin");
        console.log("Database connected");
    } catch (error) {
        console.log(`error when conn to `,error.message);
    }
}
export default Connection;


