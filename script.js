const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const backToTopBtn = document.getElementById('backToTopBtn');

const form = document.getElementById('contact-form');
const toast = document.getElementById('toast');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append('access_key', '80a1a74f-5fea-453b-abfb-39dd846a9a4b');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        showToast("Message sent successfully!", true);
        form.reset();
      } else {
        showToast("Oops! Something went wrong.", false);
      }
    } catch (error) {
      showToast("Network error. Please try again.", false);
    }
  });

  function showToast(message, success = true) {
    toast.textContent = message;
    toast.classList.remove("hidden");
    toast.classList.remove("bg-green-600", "bg-red-600");
    toast.classList.add(success ? "bg-green-600" : "bg-red-600");

    setTimeout(() => {
      toast.classList.add("hidden");
    }, 4000);
  }



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

