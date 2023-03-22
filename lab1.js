var container = document.getElementById('container');
window.addEventListener("keyup", function(e) {
  console.log(e.key);
  if (e.key == 'Escape') {
    container.textContext = "";
  }
  else if (e.key == 'Backspace') {
    var str = container.textContext;
    container.textContext = str.substring(0, str.length-1);
  }
  else {
    container.textContext += e.key;
  }
});

function getRandom(x){
    return Math.floor(Math.random()*x);
};
getRandom(3); //會回傳0~2之間的隨機數字
