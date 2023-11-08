
const listMenu = document.querySelector('.navbarList');
const hamburgerMenu = document.querySelector('.navbarMenu');
const iMenu = document.querySelector('.iconMenu');
const iClose = document.querySelector('.iconClose');

// Untuk menyembunyikan daftar menu saat halaman dimuat
listMenu.style.display = 'none';

// Membuat Function displayMenu
function displayMenu(){
    if(listMenu.classList.contains('tampil')){
        listMenu.classList.remove('tampil');
        listMenu.style.display = 'none'; // Untuk menyembunyikan daftar menu ketika tidak ditampilkan
        iMenu.style.display='inline';
        iClose.style.display='none';
    }else {
        listMenu.classList.add('tampil');
        listMenu.style.display = 'block'; // Untuk menampilkan daftar menu ketika ditampilkan
        iMenu.style.display='none';
        iClose.style.display='inline';
    }
}


listMenu.addEventListener('click',displayMenu);
hamburgerMenu.addEventListener('click',displayMenu);

