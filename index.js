const myLibrary = [
  {
    title: 'Start With Why',
    author: 'Simon Sinek',
    page: 192,
    bookId: 123321,
  },
  {
    title: 'Eleven Minutes',
    author: 'Paulo Coelho',
    page: 192,
    bookId: 321123
  }
];

function Book(title, author, page, bookId, stat) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.bookId = bookId;
  this.stat = stat;
}

function renderBooks() {
  let booksHTML = '';

  myLibrary.forEach((book, index) => {
    const { title, author, page, bookId, stat} = book;
    const html = `
      <div class="book-card">
        <h3>Title: ${title}</h3>
        <p>Author: ${author}</p>
        <p>Pages: ${page}</p>
        <p>Status: <span class="status read">read</span></p>
        <button 
          class="delete-btn" 
          data-index="${index}">
          Delete
        </button>
      </div>
    `;
    booksHTML += html;
  });

  const leftGrid = document.querySelector('.js-book-card');
  leftGrid.innerHTML = booksHTML;

  // Attach event listeners to delete buttons after rendering
  document.querySelectorAll('.delete-btn').forEach(deleteButton => {
    deleteButton.addEventListener('click', (e) => {
      const index = e.target.dataset.index;
      myLibrary.splice(index, 1);
      renderBooks();
    });
  });
}

document.querySelector('.js-add-button').addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

function addBookToLibrary() {
  const titleElement = document.querySelector('.js-title-element');
  const title = titleElement.value;

  const authorElement = document.querySelector('.js-author-element');
  const author = authorElement.value;

  const pageElement = document.querySelector('.js-page-element');
  const page = parseInt(pageElement.value);

  const statElement = document.querySelector('.js-stat-element');  
  const stat = statElement.value;

  // Create a unique bookId (e.g., timestamp)
  const bookId = Date.now();

  const newBook = new Book(title, author, page, bookId);
  myLibrary.push(newBook);

  renderBooks();
  console.log(myLibrary);
}

// Initial render
renderBooks();