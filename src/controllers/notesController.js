import createHttpError from "http-errors"
import { Note } from "../models/note.js"

export const getAllNotes = async (req, res) => {
	const students = await Note.find()
	res.status(200).json(students)
}

export const getNoteById = async (req, res) => {
	const { noteId } = req.params
	const note = await Note.findById(noteId)

	if (!note) {
		throw createHttpError(404, "Note not found")
	}

	res.status(200).json(note)
}

export const createNote = async (req, res) => {
	const student = await Note.create(req.body)
	res.status(201).json(student)
}

export const deleteNote = async (req, res) => {
	const { noteId } = req.params
	const note = await Note.findOneAndDelete({
		_id: noteId,
	})

	if (!note) {
		throw createHttpError(404, "Note not found")
	}

	res.status(200).json(note)
}

export const patchNote = async (req, res) => {
	const { noteId } = req.params
	const note = await Note.findOneAndUpdate(
		{
			_id: noteId,
		},
		req.body,
		{ new: true }
	)

	if (!note) {
		throw createHttpError(404, "Note not found")
	}

	res.status(200).json(note)
}
