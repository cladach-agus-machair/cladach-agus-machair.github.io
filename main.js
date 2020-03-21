const Typewriter = function(txtElement, words, wait = 3000){
  this.txtElement = txtElement;
  this.words = words;
  this.txt = ''
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

// type method

Typewriter.prototype.type = function(){
  // current index of word
  const current = this.wordIndex % this.words.length;
  // get full text of current word
  const fullTxt = this.words[current];

  // check if isDeleting
  if(this.isDeleting) {
    // remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);

  }else{
    // add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  // insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

  // Initial Type speed
  let typeSpeed = 300;

  if(this.isDeleting) {
    typeSpeed /= 2;
  }

  // if word is complete

  if(!this.isDeleting && this.txt === fullTxt) {
    // make pause at end
    typeSpeed = this.wait;
    // set isDeleting to true
    this.isDeleting = true;

  }else if(this.isDeleting && this.txt === ''){
    this.isDeleting = false;
    // move to next word
    this.wordIndex++;
    //pause before start typing
    typeSpeed = 500;
  }

  setTimeout(()=> this.type(), typeSpeed)
}

// Init on DOM load

document.addEventListener('DOMContentLoaded', init);

// init app

function init() {
  const txtElement= document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  // init typewriter
  new Typewriter(txtElement, words, wait);
}



//MODAL

const current = document.querySelector('#current');
const modal = document.getElementById('imageModal');
const images = document.querySelectorAll('.images img');
const closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for click on image
images.forEach(img => img.addEventListener('click', imgClick));

// listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for Outside click
window.addEventListener('click', outsideClick);

// function to close modal
function closeModal(){
  modal.style.display = 'none';
}

// function close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}

function imgClick(e) {
  current.src = e.target.src;
  console.log(current.src)
  modal.style.display = 'block';
}

// sub = current.src.toString()
// if sub.includes("H"){
//    modal.style.display = 
//}else{
//  modal.style.display = 'block';
//}

// var str = "Hello world, welcome to the universe.";
// var n = str.includes("world");
