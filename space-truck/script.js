let stars = 400;
let size = {
  min: 1, 
  max: 4
};
document.write("<a class='stars'></a>".repeat(stars));
for(let i = 0; i < document.getElementsByClassName('stars').length;i++){
  document.getElementsByClassName('stars').[i].style.top = Math.random()*100 + 'vh';
  document.getElementsByClassName('stars').[i].style.left = Math.random()*100 + 'vw';
  document.getElementsByClassName('stars').[i].style.width = (Math.random()*(size.max-size.min)+size.min)/10 + 'vmin';
  document.getElementsByClassName('stars').[i].style.height = document.getElementsByClassName('stars').[i].style.width;
}