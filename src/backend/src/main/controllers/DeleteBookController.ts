import { bookService } from "../config/DependencyInjector";

export async function deleteBookController(bookId: string) {
  try {
    await bookService.deleteBook(bookId);
    console.log("Livro deletado com sucesso.");
  } catch (error) {
    console.error("Erro ao deletar o livro:", error);
  }
}
