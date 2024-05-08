import { bookService } from "../config/DependencyInjector";

export async function createBookController(
  name: string,
  author: string,
  volume: number | null,
) {
  try {
    const newBook = await bookService.createBook(name, author, volume);
    console.log("Livro criado com sucesso:", newBook);
  } catch (error) {
    console.error("Erro ao criar o livro:", error);
  }
}
