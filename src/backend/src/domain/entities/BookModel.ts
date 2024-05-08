export class BookModel {
  constructor(
    public id: string,
    public name: string,
    public author: string,
    public volume: number | null,
  ) {}
}
