import axios from 'axios';

const api = 'https://www.googleapis.com/books/v1/volumes?q=';

async function getBooksByTitle(setData, setPending, setError, setErrorMessage, title = 'Hewan') {
  const url = api + title + '&maxResults=40';
  let bookList = [];
  
  try {
    console.log(title);
    const res = await axios.get(url);

    bookList = res.data.items.filter(
      book =>
        book.volumeInfo &&
        book.volumeInfo?.title &&
        book.volumeInfo?.imageLinks &&
        book.volumeInfo?.description &&
        book.volumeInfo?.authors &&
        book.volumeInfo?.authors.length >= 0 &&
        book.volumeInfo?.publisher &&
        book.volumeInfo?.pageCount
    );

    if (bookList.length > 1 && bookList.length % 2 !== 0) {
      bookList.pop();
    }

    if (bookList.length > 40) {
      bookList = bookList.slice(0, 40);
    }

    console.log(bookList.length);

    setData(bookList);
    setPending(false);
   
    return;

  } catch (err) {
    console.log(err);
    setError(true);
    setErrorMessage(err);
    return;
  }
};

export { getBooksByTitle };