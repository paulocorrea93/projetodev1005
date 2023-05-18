const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelectorAll(".question-btn");

  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle('show-text')
  });
});
