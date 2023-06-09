const items = [...document.querySelectorAll(".number")];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  let inicialValue = 0;

  const increaseCount = setInterval(() => {
    inicialValue += increment;

    if (inicialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${inicialValue}+`
  }, 1);
};

items.forEach((item) => {
    updateCount(item)
})