import { HttpError } from "http-errors"

export const errorHandler = (error, req, res, next) => {
	if (error instanceof HttpError) {
		console.log("Error 404")
		return res
			.status(error.status)
			.json({ message: error.message || error.name })
	}
	console.log("Error 500")
	console.error(error.message)
	res.status(500).json({
		message: error.message,
	})
}
