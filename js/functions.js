
function generateRandomPercent() {
  const percent = Math.floor(Math.random() * 80);
  console.log(percent);
  return `${percent}%`
}

function makeBox() {
  const box = document.createElement('div');
  box.classList.add("box");
  box.style.top = generateRandomPercent();
  box.style.left = generateRandomPercent();
  document.getElementById("body").appendChild(box);
}
