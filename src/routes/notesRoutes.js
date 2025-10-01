import { Router } from "express"
import {
	createNote,
	deleteNote,
	getNoteById,
	getAllNotes,
	patchNote,
} from "../controllers/notesController.js"

const router = Router()

router.get("/notes", getAllNotes)
router.post("/notes", createNote)

router.get("/notes/:noteId", getNoteById)
router.patch("/notes/:noteId", patchNote)
router.delete("/notes/:noteId", deleteNote)

export default router
