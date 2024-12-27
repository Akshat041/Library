"use strict";

const container = document.querySelector(".cards");

const addBook = document.querySelector(".add-book");
const dialog = document.querySelector("#modal");
const closeModal = document.querySelector(".close");
const confirm = document.querySelector(".confirm");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");

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
  // original object
  const book = new Book(title, author, pages, isread);

  myLibrary.push(book);

  displayBook(book);
}

function clearInputs() {
  title.value = "";
  author.value = "";
  pages.value = "";
  isRead.value = false;
}

addBook.addEventListener("click", () => {
  // event.preventDefault();
  dialog.showModal();
});

confirm.addEventListener("click", () => {
  addBookToLibrary(title.value, author.value, pages.value, isRead.value);
  clearInputs();
});

closeModal.addEventListener("click", () => {
  dialog.close();
});

// adding book and displaying
// addBookToLibrary("Atomic habits", "maxwell", 123, true);
// addBookToLibrary("A Village by the Sea ", "Gita Mehta", 123, true);
// addBookToLibrary("A Call to Honour", "Jaswant Singh", 123, false);

function displayBook(book) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `<h1 class="title">${book.title}</h1>
    <p class="author">- ${book.author}</p>
    <div class="card-bottom">
    <p class="pages">${book.pages} pages</p>
    <div class="bottom-btns">
    <button class="read">${
      book.isread == true
        ? (document.querySelector(".read").textContent = "Read")
        : (document.querySelector(".read").textContent = "Not Read")
    }</button>
    <button class="delete-book">Delete</button>
              </div>
              </div>`;

  container.appendChild(card);
}
