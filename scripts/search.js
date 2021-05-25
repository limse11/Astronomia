function search() {
  var wordOne = document.getElementById('form-cat');
  var wordTwo = document.getElementById('form-key');
  var url = wordOne.value + '%20' + wordTwo.value;

  var radio = document.getElementsByName('search');

  for (var i = 0, length = radio.length; i < length; i++) {
    if (radio[i].checked) {
      if (wordOne.value === 'none' && wordTwo.value === '') {
        wordOne.classList.add("empty-field");
        wordTwo.classList.add("empty-field");
        break;
      } else if (wordOne.value === 'none') {
        wordOne.classList.add("empty-field");
        break;
      } else if (wordTwo.value === '') {
        wordTwo.classList.add("empty-field");
        break;
      }
      document.getElementById('label').style.color = ''
      url = radio[i].value + url;
      wordOne.classList.remove("empty-field");
      wordTwo.classList.remove("empty-field");
      window.open(url, '_blank');
      break;
    } else {
      document.getElementById('label').style.color = "rgb(255,0,0)"
    }
  }
}
