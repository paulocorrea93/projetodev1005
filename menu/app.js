const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfeast",
    price: "R$15",
    img: "./images/item-1.jpge",
    desc: "Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: "R$13,99",
    img: "./images/item-2.jpge",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: "R$6,99",
    img: "./images/item-3.jpge",
    desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfeast",
    price: "R$20,00",
    img: "./images/item-4.jpge",
    desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: "R$22,99",
    img: "./images/item-5.jpge",
    desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90s pop-up",
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: "R$19,99",
    img: "./images/item-6.jpge",
    desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfeast",
    price: "R$9,99",
    img: "./images/item-7.jpge",
    desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
  },
  {
    id: 8,
    title: "american class",
    category: "lunch",
    price: "R$12,99",
    img: "./images/item-8.jpge",
    desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
  },
  {
    id: 9,
    title: "qurentine buddy",
    category: "shakes",
    price: "R$16,99",
    img: "./images/item-9.jpge",
    desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: "R$22,99",
    img: "./images/item-10.jpge",
    desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMcontentLoaded", () => {
  displayMenuItems(menu);
  displayMenuButtons();
});

const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo"
        <div class="item-info">
        <header> 
        <h4>${item.title}</h4>
        <h4 class="price"> ${item.price}</h4>
        </header>
        <p class="item-text"> ${item.desc}</p>
        </div>
        </article>`;
  });

  displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
};

const displayMenuButtons = () => {
  const categories = menu.reduce((values, item) => {
    if (!values.include(item.category)) {
      values.push(item.category);
    }

    return values;
  },["all"]
 );
};
