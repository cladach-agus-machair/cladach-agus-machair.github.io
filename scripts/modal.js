
const current = document.querySelector('#current');
const modal = document.getElementById('imageModal');
const images = document.querySelectorAll('.images img');
const closeBtn = document.getElementsByClassName('closeBtn')[0];

images.forEach(img => img.addEventListener('click', imgClick));

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);


function closeModal(){
  modal.style.display = 'none';
}

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
