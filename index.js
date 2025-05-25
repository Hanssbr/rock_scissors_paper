let answer;

document.getElementById("submit").onclick = function () {
  answer = document.getElementById("textField").value;

  if ((answer = `${answer}`)) {
    window.alert(`Halooo, ${answer}`);
  }
};

let userInput;
let botInput;
let botParse;

document.getElementById("submit-btn").onclick = function () {
  userInput = document.getElementById("choose").value;
  console.log(`user input ${userInput}`)
  botInput = Math.random();

  if (botInput < 0.3) {
    botParse = "kertas";
  } else if (botInput < 0.6) {
    botParse = "batu";
  } else {
    botParse = "gunting";
  }
  console.log(botParse);

  //   Jika user memilih Gunting

  if (userInput == "gunting") {
    if (botParse == "kertas") {
      window.alert(
        `You win!, You choose ${userInput}, and bot choose ${botParse}`
      );
    } else if (botParse == "gunting") {
      window.alert(
        `You tie!, You choose ${userInput}, and bot choose ${botParse}`
      );
    } else if (botParse == "batu") {
      window.alert(
        `You lose!, You choose ${userInput}, and bot choose ${botParse}`
      );
    }
  }

  //   Jika user memilih Batu

  if (userInput == "batu") {
    if (botParse == "kertas") {
      window.alert(
        `You lose!, You choose ${userInput}, and bot choose ${botParse}`
      );
    } else if (botParse == "gunting") {
      window.alert(
        `You win!, You choose ${userInput}, and bot choose ${botParse}`
      );
    } else if (botParse == "batu") {
      window.alert(
        `You tie!, You choose ${userInput}, and bot choose ${botParse}`
      );
    }
  }

  //   Jika user memilih Kertas

  if (userInput == "kertas") {
    if (botParse == "kertas") {
      window.alert(
        `You tie!, You choose ${userInput}, and bot choose ${botParse}`
      );
    } else if (botParse == "gunting") {
      window.alert(
        `You lose!, You choose ${userInput}, and bot choose ${botParse}`
      );
    } else if (botParse == "batu") {
      window.alert(
        `You win!, You choose ${userInput}, and bot choose ${botParse}`
      );
    }
  }
};
