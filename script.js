document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('active');
})

document.querySelector('.scroll').addEventListener('click', () => {
    document.querySelector('html').style.scrollBehavior = 'smooth';
    setTimeout(() => {
        document.querySelector('html').style.scrollBehavior = 'unset';
    }, 1000);
})