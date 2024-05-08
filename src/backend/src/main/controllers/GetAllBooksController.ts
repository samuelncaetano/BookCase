import { bookService } from "../config/DependencyInjector";

export async function getAllBooksController() {
  try {
    const books = await bookService.getAllBooks();
    console.log("Livros recuperados com sucesso:", books);
  } catch (error) {
    console.error("Erro ao recuperar livros:", error);
  }
}
