const myLibrary = [{name:'a', author:'b', year:'2000'}];

function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
}

const addBtn = document.getElementById("addbtn");
addBtn.addEventListener('click', addBookToLibrary);

function addBookToLibrary() {
    const bookName = document.getElementById('book_name');
    const bookAuthor = document.getElementById('book_author');
    const bookYear = document.getElementById('book_year');
    const book = new Book(bookName.value, bookAuthor.value, bookYear.value);
    myLibrary.push(book);
    bookName.value = '';
    bookAuthor.value = '';
    bookYear.value = '';
}
