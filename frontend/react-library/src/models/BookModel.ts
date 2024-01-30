class BookModel {
  id: number;
  title: string;
  authour?: string;
  description?: string;
  copies?: string;
  copiesAvailable?: string;
  category?: string;
  img?: string;

  constructor(
    id: number,
    title: string,
    authour: string,
    description: string,
    copies: string,
    copiesAvailable: string,
    category: string,
    img: string
  ) {
    this.id = id;
    this.title = title;
    this.authour = authour;
    this.description = description;
    this.copies = copies;
    this.copiesAvailable = copiesAvailable;
    this.category = category;
    this.img = img;
  }
}
export default BookModel;
