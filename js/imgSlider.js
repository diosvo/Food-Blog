var img = document.getElementById('img-sl');
var images = ['b1.jpg', 'b2.png', 'b3.jpg'];
var x = 0;

function slide() {
  if (x < images.length) {
    x++
  }
  else {
    x = 1;
  }
  img.innerHTML = "<img src=" + images[x-1] + ">";
}

//auto 
setInterval(slide,2000);
