import createHttpError from "http-errors"
import { Student } from "../models/students.js"

export const getStudents = async (req, res) => {
	const students = await Student.find()
	res.status(200).json(students)
}

export const getStudentById = async (req, res, next) => {
	const { studentId } = req.params
	const student = await Student.findById(studentId)

	if (!student) {
		return next(createHttpError(404, "Student not found"))
	}

	res.status(200).json(student)
}
