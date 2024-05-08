import express from "express";
import { createBook } from "./serviceRoutes";
import { getAllBooks } from "./serviceRoutes";
import { updateBook } from "./serviceRoutes";
import { deleteBook } from "./serviceRoutes";

const router = express.Router();

router.post("/", createBook);
router.get("/", getAllBooks);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
