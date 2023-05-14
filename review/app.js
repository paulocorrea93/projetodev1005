const reviews = [
  {
    id: 1,
    name: "ariana",
    job: "software engennier",
    image: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna",
    job: "software engennier",
    image: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: "peter",
    job: "software engennier",
    image: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 4,
    name: "bill",
    job: "software engennier",
    image: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const randomButton = document.getElementById("random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  const item = reviews[currentItem];
  img.src = item.image;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

const showPerson = (person) => {
  const item = reviews[person];
  img.src = item.image;
  author.textContent = item.author;
  job.textContent = item.job;
  info.textContent = item.info;
};

nextButton.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }

  showPerson(currentItem);
});
