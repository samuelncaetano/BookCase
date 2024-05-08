import { Request, Response } from "express";
import { createBookController } from "../controllers/CreateBookController";
import { getAllBooksController } from "../controllers/GetAllBooksController";
import { updateBookController } from "../controllers/UpdateBookController";
import { deleteBookController } from "../controllers/DeleteBookController";

export async function createBook(req: Request, res: Response): Promise<void> {
  const { name, author, volume } = req.body;
  try {
    const newBook = await createBookController(name, author, volume);
    res
      .status(201)
      .json({ message: "Livro criado com sucesso.", data: newBook });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function getAllBooks(_: Request, res: Response): Promise<void> {
  try {
    const books = await getAllBooksController();
    res.status(200).json(books);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function updateBook(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { name, author, volume } = req.body;
  try {
    const updatedBook = await updateBookController(id, name, author, volume);
    res
      .status(200)
      .json({ message: "Livro atualizado com sucesso.", data: updatedBook });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function deleteBook(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  try {
    await deleteBookController(id);
    res.status(200).json({ message: "Livro deletado com sucesso." });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
