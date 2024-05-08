import { BookService } from "@/application/services/BookService";
import { PrismaBookRepository } from "@/infrastructure/database/prismaBookRepository";

const prismaBookRepository = new PrismaBookRepository();
const bookService = new BookService(prismaBookRepository);

export { bookService };
