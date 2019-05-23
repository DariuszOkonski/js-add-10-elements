const ul = document.querySelector('ul');
const h3Span = document.querySelector('h3 span');
const btnStart = document.querySelector('button.increase');

const loop = 10;
let fontSize = 10;
const maxFontSize = 25;

h3Span.textContent = fontSize;

btnStart.addEventListener('click', function () {
  this.textContent = `increase font-size to: ${maxFontSize}px`;
  if (fontSize < maxFontSize) {
    ul.textContent = '';
    for (let i = 0; i < loop; i++) {
      const li = document.createElement('li');
      li.textContent = `element ${i}`;
      li.style.fontSize = fontSize + 'px';
      ul.appendChild(li);
    }
    fontSize++;
    h3Span.textContent = fontSize;
  } else {
    alert(`You have reached max font-size: ${maxFontSize}px`)
  }
});

document.querySelector('button.clear').addEventListener('click', function () {
  fontSize = 10;
  ul.textContent = '';
  h3Span.textContent = fontSize;
  btnStart.textContent = 'Start';
})