let answer;

document.getElementById("submit").onclick = function () {
  answer = document.getElementById("textField").value;

  if ((answer = `${answer}`)) {
    window.alert(`Halooo, ${answer}`);
  }
};
