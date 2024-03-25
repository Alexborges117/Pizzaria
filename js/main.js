let imagespc = document.querySelectorAll('.CarrosselPc img');
let imagesmobile = document.querySelectorAll('.CarrosselMobile img');
let currentIndexPc = 0;
let currentIndexMobile = 0;

function updateImagepc() {
    let offset = -currentIndexPc * 100;
    for (let img of imagespc) {
        img.style.transform = `translateX(${offset}%)`;
    }
}

function nextImagepc() {
    currentIndexPc = (currentIndexPc + 1) % imagespc.length;
    updateImagepc();
}

function updateImagemobile() {
    let offset = -currentIndexMobile * 100;
    for (let img of imagesmobile) {
        img.style.transform = `translateX(${offset}%)`;
    }
}

function nextImagemobile() {
    currentIndexMobile = (currentIndexMobile + 1) % imagesmobile.length;
    updateImagemobile();
}

setInterval(function() {
    nextImagepc();
    nextImagemobile();
}, 2000);