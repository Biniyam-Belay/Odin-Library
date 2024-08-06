const myLibrary = [{
  title: 'Start With Why',
  author: 'Simon Sinek',
  page: 192
},
{
  title: 'Eleven Minutes',
  author: 'Paulo Coelho',
  page: 192
}];


function Book(title, author, page) {
  // the constructor...
  this.title = title,
  this.author = author,
  this.page = page
  // this.status = status
}

renderBooks();

function renderBooks(){
  let booksHTML = '';

  myLibrary.forEach((bookObjects, index) => {
    const {title, author, page} = bookObjects;
    const html = `
      <h3>Title: ${title}</h3>
      <p>Author: ${author}</p>
      <p>Pages: ${page}</p>
      <p>Status: <span class="status read">Read</span></p>
      <button class="delete-btn">Delete</button>
    `;
    booksHTML += html;

    
  });

  const leftGrid = document.querySelector('.book-card')
  leftGrid.innerHTML = booksHTML;
}

document.querySelector('.js-add-button')
  .addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary();
  });

function addBookToLibrary() {
  // do stuff here
  const titleElement = document. querySelector('.js-title-element');
  const title = titleElement.value;

  const authorElement = document.querySelector('.js-author-element');
  const author = authorElement.value;

  const pageElement = document.querySelector('.js-page-element');
  const page = pageElement.value;


  const newBook = new Book(title, author, page);
  myLibrary.push(newBook)

  renderBooks()
  console.log(myLibrary);
}

