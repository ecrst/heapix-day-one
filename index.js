const placeholders = document.querySelectorAll('.gallery__item--placeholder');
const borders = document.querySelectorAll('.courses__icon');
console.log(borders)
setInterval(e => {
  placeholders.forEach(item => {
    if (Math.round(Math.random())) item.style.backgroundColor = getRandomColor();

  })
  borders.forEach(item => {
    let color = getRandomColor();
    item.style.borderColor = color;
    // item.style.outlineColor = color;
  })
}, 1500)


function getRandomColor() {
  return `rgba(${random100255()}, ${random100255()}, ${random100255()}, ${random100()})`
}
function random255() {
  return Math.random() * 255
}
function random100255() {
  return (Math.random() * 100) + 155
}
function random100() {
  return Math.floor(Math.random() * 10 + 6) / 10
}