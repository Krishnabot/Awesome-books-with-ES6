import navMenu from './modules/nav.js';
import AwesomeBook from './modules/AwesomeBook.js';
import Books from './modules/BookCollection.js';
import DynamicHtml from './modules/DynamicHtml.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const dateTime = document.getElementById('date');
dateTime.innerHTML = DateTime.now();

const addBtn = document.getElementById('book-form');
let books = new Books();
if (localStorage.getItem('books')) {
  books = JSON.parse(localStorage.getItem('books'));
}
addBtn.addEventListener('submit', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const book = new AwesomeBook(title, author);
  books.push(book);
  const id = books.length - 1;
  DynamicHtml.addBookToTable(book, id);
  localStorage.setItem('books', JSON.stringify(books));
});

window.addEventListener('load', () => {
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
  }
  DynamicHtml.displayElements(books);
  document.getElementById('listLink').click();
});

const navLinks = document.querySelectorAll('a');

navLinks.forEach((link) => {
  link.addEventListener('click', navMenu);
});
