document.addEventListener("DOMContentLoaded", (e) => {
  let arr = [];
  const square = document.querySelectorAll(".square");
  let counter = 0;
  player = true;
  gameResult = "";

  const condistions = (arg) => {
    counter++;

    if (arr[0] === arg && arr[1] === arg && arr[2] === arg) gameResult = arg;
    if (arr[3] === arg && arr[4] === arg && arr[5] === arg) gameResult = arg;
    if (arr[6] === arg && arr[7] === arg && arr[8] === arg) gameResult = arg;

    if (arr[0] === arg && arr[3] === arg && arr[6] === arg) gameResult = arg;
    if (arr[1] === arg && arr[4] === arg && arr[7] === arg) gameResult = arg;
    if (arr[2] === arg && arr[5] === arg && arr[8] === arg) gameResult = arg;

    if (arr[0] === arg && arr[4] === arg && arr[8] === arg) gameResult = arg;
    if (arr[6] === arg && arr[4] === arg && arr[2] === arg) gameResult = arg;

    if (counter === 9 && gameResult === "") gameResult = "draw";
  };

  const clearBoard = () => {
    setTimeout(() => {
      alert(gameResult === "draw" ? "Remis" : `Wygrywa: ${gameResult}`);
      counter = 0;
      arr = [];
      gameResult = "";
      square.forEach((el) => {
        el.innerHTML = "";
        el.classList.remove("turnOff");
      });
    }, 0);
  };

  square.forEach((el) => {
    el.addEventListener("click", (it) => {
      const squareNumber = Number(it.target.dataset["square"]);

      if (player) {
        arr[squareNumber] = "X";
        it.target.innerHTML = "X";
        el.classList.add("turnOff");
        condistions("X");
        player = !player;
      } else {
        arr[squareNumber] = "O";
        it.target.innerHTML = "O";
        el.classList.add("turnOff");
        condistions("O");
        player = !player;
      }

      if (gameResult) {
        clearBoard();
      }
    });
  });
});
