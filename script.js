const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.remove('hidden');
    } else {
      backToTopBtn.classList.add('hidden');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navBar.classList.add(
            'bg-white',
            'bg-opacity-50',
            'backdrop-blur-lg',
            'shadow-sm',
            'dark:bg-darkTheme',
            'dark:shadow-white/20'
        );
    } else {
        navBar.classList.remove(
            'bg-white',
            'bg-opacity-50',
            'backdrop-blur-lg',
            'shadow-sm',
            'dark:bg-darkTheme',
            'dark:shadow-white/20'
        );
    }
});

new TypeIt("#typeit-intro", {
    strings: 'Hi! I\'m Ebuka Victor <img src="./images/hand-icon.png" alt="👋" style="width: 24px; vertical-align: middle;" />',
    speed: 100,
    waitUntilVisible: true,
    html: true,
    cursor: false,
  })
  .go();

document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
)
function toggleTheme(){
    document.documentElement.classList.toggle('dark');
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light';
    }
}

document.getElementById("year").textContent = new Date().getFullYear();
