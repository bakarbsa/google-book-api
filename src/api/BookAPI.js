import axios from 'axios';

const api = 'https://www.googleapis.com/books/v1/volumes?q=';

async function getBooksByTitle(setData, setPending, setError, setErrorMessage, title = 'Hewan') {
  const url = api + title + '&maxResults=40';
  const bookList = [];
  
  try {
    const res = await axios.get(url);
    const totalItems = res.data.totalItems <= 20 ? res.data.totalItems : 20;

    for (let i = 0; i < totalItems; i++) {
      const item = res.data.items[i];

      const book = item;

      bookList.push(book);
    }
    setData(bookList);
    setPending(false);
   
    return;

  } catch (err) {
    setError(true);
    setErrorMessage(err);
    return;
  }
};

export { getBooksByTitle };