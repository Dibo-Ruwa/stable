// lib/mongoose.ts

import mongoose from "mongoose"

const MONGODB_URI =
  process.env.MONGO_URI

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  )
}

interface MongooseCache {
  conn: mongoose.Connection | null
  promise: Promise<mongoose.Connection> | null
}

const globalWithMongoose = global as typeof global & {
  mongoose: MongooseCache
}

let cached = globalWithMongoose.mongoose

if (!cached) {
  cached = globalWithMongoose.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGODB_URI as string, opts).then(mongoose => {
      console.log("Db connected")
      return mongoose.connection
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

const connectDB = async () => {}
const closeDB = async () => {}

export default dbConnect
export { closeDB, connectDB }
