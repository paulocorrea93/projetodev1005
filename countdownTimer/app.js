const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const weekdays = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
];

const giveaways = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekday[futureDate.getDay()];
const date = futureDate.getDate;
giveaways.textContent = `giveways ends on ${weekday}, ${date}, ${month}, ${year}, ${hours}:${minutes}`;

const futureTime = futureDate.getTime();
const gestRemindingTime = () => {
  const today = new Date().getTime();

  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = t / oneDay

  days = Math.floor(days)
  let hours = Math.floor((t % oneDay) / oneHour)
  let minutes = Math.floor ((t % oneHour) / oneMinute)
  let seconds = Math.floor((t % oneMinute) / 1000)
};
