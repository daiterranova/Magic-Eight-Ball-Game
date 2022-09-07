let answers;
let randomNumber = Math.floor(Math.random() * 8);

let showGreeting = () => {
  let userName = document.getElementById("uname").value;
  userName ? alert(`Hello, ${userName} !`) : alert("Hello!");
  userName = "";
};

let eightBall = () => {
  switch (randomNumber) {
    case 0:
      answers = "It is certain";
      break;

    case 1:
      answers = "It is decidedly so";

      break;
    case 2:
      answers = "Reply hazy try again";

      break;
    case 3:
      answers = "Cannot predict now";

      break;
    case 4:
      answers = "Do not count on it";

      break;
    case 5:
      answers = "My sources say no";

      break;
    case 6:
      answers = "Suerte Maquinola";
      break;
    case 7:
      answers = "Signs point to yes";
      break;
    case 8:
      answers = "Outlook not so good";

      break;
    default:
      alert("try again");
  }
  alert(answers);
  document.getElementById("question").value = "";
};
