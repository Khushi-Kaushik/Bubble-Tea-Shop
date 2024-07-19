let search = document.querySelector('.search-bar');

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
}


let header = document.querySelector('header');
window.addEventListener('scroll',() => {
    header.classList.toggle('shadow',window.scrollY > 0);
} );