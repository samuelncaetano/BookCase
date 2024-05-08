import { IBookRepository } from "../interfaces/IBookRepository";
import { BookModel } from "@/domain/entities/BookModel";

export class BookService {
  constructor(private bookRepository: IBookRepository) {}

  createBook(
    name: string,
    author: string,
    volume: number | null,
  ): Promise<BookModel> {
    const book = new BookModel("", name, author, volume);
    return this.bookRepository.createBook(book);
  }

  getAllBooks(): Promise<BookModel[]> {
    return this.bookRepository.findAllBook();
  }

  async updateBook(
    bookId: string,
    name: string,
    author: string,
    volume: number | null,
  ): Promise<BookModel> {
    const book = await this.bookRepository.findBookById(bookId);
    if (!book) throw new Error("Livro não encontrado!");
    await this.bookRepository.saveHistory(book);
    return await this.bookRepository.updateBook(
      new BookModel(bookId, name, author, volume || null),
    );
  }

  deleteBook(bookId: string): Promise<void> {
    return this.bookRepository.deleteBook(bookId);
  }
}
