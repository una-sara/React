function createDiv() {
  var div = document.createElement('div');
  div.classList.add('hello');
  div.innerHTML = '版权所有：' + getCompanyName();
  return div;
}
document.body.appendChild(createDiv());