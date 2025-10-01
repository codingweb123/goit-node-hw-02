import express from "express"
import cors from "cors"
import "dotenv/config"
import { connectMongoDB } from "./db/connectMongoDB.js"
import { notFoundHandler } from "./middleware/notFoundHandler.js"
import { errorHandler } from "./middleware/errorHandler.js"
import { logger } from "./middleware/logger.js"
import notesRoutes from "./routes/notesRoutes.js"
import helmet from "helmet"

const app = express()
const PORT = process.env.PORT ?? 3030

app.use(
	express.json({
		type: ["application/json", "application/vnd.api+json"],
		limit: "100kb",
	})
)
app.use(cors())
app.use(helmet())
app.use(logger)

app.use(notesRoutes)

app.use(notFoundHandler)
app.use(errorHandler)

await connectMongoDB()

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`)
})
