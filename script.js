"use strict";

const container = document.querySelector(".cards");

const myLibrary = [];

// Book prototype
function Book(title, author, pages, isread) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isread = isread;
}

// creates original object and store that object in myLibrary.
function addBookToLibrary(title, author, pages, isread) {
  const book = new Book(title, author, pages, isread);

  myLibrary.push(book);
}

addBookToLibrary("atomic habits", "maxwell", 123, true);
addBookToLibrary("A Village by the Sea ", "Gita Mehta", 123, true);
addBookToLibrary("A Call to Honour", "Jaswant Singh", 123, true);

myLibrary.forEach((book) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `<h1 class="title">${book.title}</h1>
          <p class="author">- ${book.author}</p>
          <div class="card-bottom">
            <p class="pages">${book.pages} pages</p>
            <div class="bottom-btns">
              <button class="read">Read</button>
              <button class="delete-book">Delete</button>
            </div>
          </div>`;

  container.appendChild(card);
});
