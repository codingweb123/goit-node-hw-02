import mongoose from "mongoose"

export const connectMongoDB = async () => {
	try {
		const mongoURL = process.env.MONGODB_URL
		await mongoose.connect(mongoURL)
		console.log("✅ MongoDB connection established successfully!")
	} catch (error) {
		console.error("❌ Failed to connect to MongoDB: ", error.message)
		process.exit(1)
	}
}
