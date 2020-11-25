// Your code goes here
function updateText(string) {
    let text = document.getElementById("text");
    text.innerHTML = `${string}`;
}

document.addEventListener("DOMContentLoaded", function() {
    updateText("This is really cool!");
  });