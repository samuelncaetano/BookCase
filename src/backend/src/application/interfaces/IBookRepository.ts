import { BookModel } from "@/domain/entities/BookModel";

export interface IBookRepository {
  createBook(book: BookModel): Promise<Omit<BookModel, "id">>;
  findBookById(bookId: string): Promise<BookModel | null>;
  findAllBook(): Promise<BookModel[]>;
  updateBook(book: BookModel): Promise<BookModel>;
  deleteBook(bookId: string): Promise<void>;
  saveHistory(book: BookModel): Promise<void>;
  getBookHistory(bookId: string): Promise<BookModel | null>;
}
