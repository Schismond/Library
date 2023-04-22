class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info() {
    return this.read
      ? this.title +
          " is written by " +
          this.author +
          " " +
          this.pages +
          " is read"
      : this.title +
          " is written by " +
          this.author +
          " " +
          this.pages +
          " isnt read";
  }
}

const btn = document.getElementById("btn");
let myLibrary = [];
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  // Get form elements
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const read = document.getElementById("toggle");

  // Check if form inputs have values
  if (!form.reportValidity()) {
    return; // Exit early if the form is invalid
  }
  // Create new book and add to library
  const book = new Book(title.value, author.value, pages.value, read.checked);
  myLibrary.push(book);

  // Clear form
  form.reset();
  // Create new elements
  const parent = document.getElementById("right");
  const list = document.getElementById("booksList");


  //creating elements
  const card = document.createElement("div");
  const info = document.createElement("div");
  card.appendChild(info);
  const deleteBtn = document.createElement("button");

  // Add classes
  info.className = "info";
  const titleInfo = document.createElement("div");
  const authorInfo = document.createElement("div");
  const pagesInfo = document.createElement("div");
  const readInfo = document.createElement("div");
  // Add text
  info.appendChild(titleInfo);
  info.appendChild(authorInfo);
  info.appendChild(pagesInfo);
  info.appendChild(readInfo);
  titleInfo.className = "informations";
  authorInfo.className = "informations";
  pagesInfo.className = "informations";
  readInfo.className = "informations";
  titleInfo.textContent = "Title: " + book.title;
  authorInfo.textContent = "Author: " + book.author;
  pagesInfo.textContent = "Pages: " + book.pages;
  readInfo.textContent = "Read: " + (book.read ? "Yes" : "No");

  //delete button
  deleteBtn.innerHTML = `<svg id="svgone"
xmlns="http://www.w3.org/2000/svg"
width="20"
height="20"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
stroke-width="2">
<path stroke-linecap="round"
stroke-linejoin="round"
d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
</svg>`;
  deleteBtn.classList.add("btn");
  //switch button
  const switcherDiv = document.createElement("div");
  switcherDiv.classList.add("switcher");

  const toggleSwitchDiv = document.createElement("div");
  toggleSwitchDiv.classList.add("toggle-switch");

  const toggleInput = document.createElement("input");
  toggleInput.classList.add("toggle-input");
  toggleInput.setAttribute("id", "toggle");
  toggleInput.setAttribute("type", "checkbox");
  toggleInput.checked = book.read; // Set initial checked status based on book.read

  const toggleLabel = document.createElement("label");
  toggleLabel.classList.add("toggle-label");
  toggleLabel.setAttribute("for", "toggle");

  toggleSwitchDiv.appendChild(toggleInput);
  toggleSwitchDiv.appendChild(toggleLabel);

  switcherDiv.appendChild(toggleSwitchDiv);

  list.classList.add("myList");
  card.className = "card";
  info.appendChild(deleteBtn);
  info.appendChild(switcherDiv);

  // Append elements to parent
  parent.appendChild(card);
  list.appendChild(card);

  toggleInput.classList.add("toggle-input");
  toggleInput.setAttribute("id", `toggle-${myLibrary.length}`);
  toggleInput.setAttribute("type", "checkbox");
  toggleLabel.classList.add("toggle-label");
  toggleLabel.setAttribute("for", `toggle-${myLibrary.length}`);

  // Add event listeners
  deleteBtn.addEventListener("click", () => {
    const index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    card.remove();
  });

  toggleInput.addEventListener("change", () => {
    const index = myLibrary.indexOf(book);
    myLibrary[index].read = toggleInput.checked;
    readInfo.textContent = "Read: " + (toggleInput.checked ? "Yes" : "No");
  });

  // Set initial read status
  toggleInput.checked = book.read;
  readInfo.textContent = "Read: " + (book.read ? "Yes" : "No");
  hideForm();
  spanElement.textContent = 'Add Item';

});

let a = document.getElementById("add-btn");
const spanElement = document.querySelector('.cta span');
  a.addEventListener("click", function(){
  var form = document.getElementById("container");
  if (form.style.display !== "block") {
    form.style.display = "block";
    spanElement.textContent = 'Cancel';
  }else{
    form.style.display = "none";
    spanElement.textContent = 'Add Item';
  }

});

function hideForm() {
  var form = document.getElementById("container");
  form.style.display = "none";
}