import { IBookRepository } from "@/application/interfaces/IBookRepository";
import { BookModel } from "@/domain/entities/BookModel";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PrismaBookRepository implements IBookRepository {
  async createBook(book: BookModel): Promise<Omit<BookModel, "id">> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...bookDataWithoutId } = book;
    const created = await prisma.book.create({
      data: bookDataWithoutId,
    });
    return {
      name: created.name,
      author: created.author,
      volume: created.volume,
    };
  }

  async findBookById(bookId: string): Promise<BookModel | null> {
    const book = await prisma.book.findUnique({ where: { id: bookId } });
    return book
      ? new BookModel(book.id, book.name, book.author, book.volume || null)
      : null;
  }
  async findAllBook(): Promise<BookModel[]> {
    const books = await prisma.book.findMany();
    return books.map(
      (book) => new BookModel(book.id, book.name, book.author, book.volume),
    );
  }
  async updateBook(book: BookModel): Promise<BookModel> {
    const updated = await prisma.book.update({
      where: { id: book.id },
      data: {
        name: book.name,
        author: book.author,
        volume: book.volume,
      },
    });
    return new BookModel(
      updated.id,
      updated.name,
      updated.author,
      updated.volume || null,
    );
  }
  async deleteBook(bookId: string): Promise<void> {
    await prisma.book.delete({
      where: { id: bookId },
    });
  }
  async saveHistory(book: BookModel): Promise<void> {
    await prisma.bookHistory.upsert({
      where: { id: book.id },
      update: {
        name: book.name,
        author: book.author,
        volume: book.volume,
        updatedAt: new Date(),
      },
      create: {
        id: book.id,
        name: book.name,
        author: book.author,
        volume: book.volume,
      },
    });
  }
  async getBookHistory(bookId: string): Promise<BookModel | null> {
    const history = await prisma.bookHistory.findUnique({
      where: { id: bookId },
    });
    return history
      ? new BookModel(
          history.id,
          history.name,
          history.author,
          history.volume || null,
        )
      : null;
  }
}
