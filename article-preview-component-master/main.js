var iconShare =  document.querySelector('.icon-share');
var shareStateDiv =  document.querySelector('.share-state');
var shareStateDesktopDiv = document.querySelector('.share-state-desk');

iconShare.addEventListener('click', (e) => {
    e.stopPropagation();
    const width = window.innerWidth;
    if(width < 1024 ) {
        shareStateDiv.classList.toggle('active');
    } else {
        shareStateDesktopDiv.classList.toggle('active')
    }
})

window.addEventListener('resize', ()=> {
    if(shareStateDiv.classList.contains('active')) {
        shareStateDiv.classList.remove('active');
    } 
    if(shareStateDesktopDiv.classList.contains('active')) {
        shareStateDesktopDiv.classList.remove('active');
    }
})

document.addEventListener('click', (e) => {
    if (!shareStateDiv.contains(e.target)) {
        shareStateDiv.classList.remove('active');
    }

    if (!shareStateDesktopDiv.contains(e.target)) {
        shareStateDesktopDiv.classList.remove('active');
    }
});