import mongoose from "mongoose";

const dbUrl = process.env.MONGO_URI;

if (!dbUrl) {
    throw new Error("MONGO_URI is not defined in environment variables");
}

// global → survives across executions (mostly) ✅
let cached = global.mongooseConn;

if (!cached) {
    cached = global.mongooseConn = { conn: null, promise: null };
}

//conn : connection established 
//promise : connection in progress

// If cached ke andar connection hai to return it or naya bana do
const connectDB = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if(!cached.promise){ //na connection store hai na promise => naya connection banega
        cached.promise = mongoose.connect(dbUrl).then(c=>c.connection) ; 
        //mongoose.connect() returns full mongoose object , store only .connection
    }

    try { //promise resolve hone ke baad connection store kar do
        cached.conn = await cached.promise ;
        return cached.conn ;
    } 
    catch (error) {
        throw new Error(`Failed to connect to MongoDB : ${error}` );
    }
}

export default connectDB ;