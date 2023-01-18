class Book {
  constructor(id, title, authors, publisher, publishedDate, description, thumbnailUrl, pageCount) {
    this.id = id;
    this.title = title;
    this.authors = authors;
    this.publisher = publisher;
    this.publishedDate = publishedDate;
    this.description = description;
    this.thumbnailUrl = thumbnailUrl;
    this.pageCount = pageCount;
  }
}

export default new Book;