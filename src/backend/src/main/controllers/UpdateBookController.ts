import { bookService } from "../config/DependencyInjector";

export async function updateBookController(
  bookId: string,
  name: string,
  author: string,
  volume: number | null,
) {
  try {
    const updatedBook = await bookService.updateBook(
      bookId,
      name,
      author,
      volume,
    );
    console.log("Livro atualizado com sucesso:", updatedBook);
  } catch (error) {
    console.error("Erro ao atualizar o livro:", error);
  }
}
