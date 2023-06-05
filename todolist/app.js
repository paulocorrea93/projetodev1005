i; // seleção de itens

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

let editElement;
let editFlag = false;
let editID = "";

// event listeners

// enviar formulário
form.addEventListener("submit", addItem);

// limpar lista
clearBtn.addEventListener("click", clearItems);

// mostrar itens ao carregar a página
window.addEventListener("DOMContentLoaded", setupItems);

const addItem = (e) => {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value !== "" && !editFlag) {
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttribbuteNode(attr);
    element.classList.add("grocery-item");
    element.innerHTML = `<p class="title"> ${value}</p>
        <div class="btn-container">
        <button type="button" class="edit-btn">
        <i class=fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
        </button>
        </div>`;

    // eventos de click nos botões de editar e deletar

    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    list.appendChild(element);
    displayAlert("item adicionado a lista", "success");
    container.classList.add("show-container");
    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value !== "" && editFlag) {
    editElement.innerHTML = value;
    displayAlert("valor alterado", "success");

    // editar no 'banco de dados' fake

    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("Por favor, digite algo", "danger");
  }
};

// display alert

const displayAlert = (text, action) => {
  alert.textContext = text;
  alert.classList.add(`alert-${action}`);

  // remove alert

  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
};

const clearItems = () => {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("limpar lista", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
};

const deleteItem = (e) => {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;

  list.removeChild(element);

  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item removido", "danger");

  setBackToDefault();

  // remover da localstorage

  removeFromLocalStorage(id);
};

// editar item

const editItem = (e) => {
  const element = e.currentTarget.parentElement.parentElement;

  // set edit item

  editElement = e.currentTarget.parentElement.previousElementSibling;

  // set form value

  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
};
