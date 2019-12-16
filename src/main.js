import './sass/main.scss';

(function navigation() {
  const navButton = document.querySelector(".burger");
  const navBurger = document.querySelector(".burger-bar");
  const navContent = document.querySelector(".navigation__content");
  const navItems = document.querySelectorAll(".navigation__item");
  const nav = document.querySelector(".navigation");

  let showMenu = false;

  navButton.addEventListener("click", toggleMenu);

  function toggleMenu() {
    if (!showMenu) {
      navBurger.classList.add("burger-bar--close");
      navContent.classList.add("content-open");
      navItems.forEach(item => item.classList.add("content-open"));
    } else {
      navBurger.classList.remove("burger-bar--close");
      navContent.classList.remove("content-open");
      navItems.forEach(item => item.classList.remove("content-open"));
    }
    showMenu = !showMenu;
  }

  navItems.forEach(item => item.addEventListener('click', () => {
    navBurger.classList.remove("burger-bar--close");
      navContent.classList.remove("content-open");
      navItems.forEach(item => item.classList.remove("content-open"));
      showMenu = !showMenu;
  }));

})();

(function about() {
  function scrollImg() {
    const imageAbout = document.querySelector('.about__img--1');
    const imageAboutTop = imageAbout.getBoundingClientRect().top;
    const windowTop = window.scrollY;

    if((imageAboutTop - windowTop/3) > 0) {
      imageAbout.style.transform = `translateX(-${(imageAboutTop - windowTop/3)/10}rem)`;
    } else if((imageAboutTop - windowTop/3) < 0) {
      imageAbout.style.transform = `translateX(0)`;
    }
    

    const imageWhy = document.querySelector('.why-fruits__images');
    const imageWhyTop = imageWhy.getBoundingClientRect().top;
    const winh = window.innerHeight;
    const num = imageWhyTop - winh/3;

    if(num > 0) {
      imageWhy.style.transform = `translateX(${num/20}rem)`;  
    } else if(num < 0) {
      imageWhy.style.transform = `translateX(0)`;
    }
    
    
};

window.addEventListener('scroll', scrollImg);
})();

(function friends() {
  const fruits = Array.from(document.querySelectorAll('.fruits__fruit'));
const prev = document.querySelector('.arrow--left');
const next = document.querySelector('.arrow--right');


prev.addEventListener('click', previousFruit);
next.addEventListener('click', nextFruit);

function previousFruit() {
  const index = fruits.findIndex(fruit => fruit.classList.contains('fruits__fruit--active'));
  fruits[index].classList.remove('fruits__fruit--active');
  if(index === 0) {
    fruits[fruits.length-1].classList.add('fruits__fruit--active');
  } else {
    fruits[index-1].classList.add('fruits__fruit--active');
  }

}
function nextFruit() {
  const index = fruits.findIndex(fruit => fruit.classList.contains('fruits__fruit--active'));
  fruits[index].classList.remove('fruits__fruit--active');
  if(index === fruits.length-1) {
    fruits[0].classList.add('fruits__fruit--active');
  } else {
    fruits[index+1].classList.add('fruits__fruit--active');
  }
}
})();

(function whyFruits() {
  const items = Array.from(document.querySelectorAll('.why-fruits__item'));
const textContainer = document.querySelector('.why-fruits__text');
const textParagraphs = Array.from(document.querySelectorAll('.why-fruits__text--paragraph'));

let index = 0;
let counter = 0;
let intervalHandler;

items.forEach(item => item.addEventListener('click', () => {
  items[index].classList.remove('why-fruits__item--active');
  const i = items.indexOf(item);
  index = i;
  counter = 0;
}));

function writeAndDelete() {

  function type() {
    items[index].classList.add('why-fruits__item--active');
    let text = textParagraphs[index].textContent.substring(0, counter + 1);
    textContainer.innerHTML = text;
    counter++;

    if(text === textParagraphs[index].textContent) {
      clearInterval(intervalHandler);
      setTimeout(() => {
        intervalHandler = setInterval(deleteText, 25);
      }, 1000);
    }
  }

  function deleteText() {
    let text = textParagraphs[index].textContent.substring(0, counter - 1);
    textContainer.innerHTML = text;
    counter--;

    if(text === '') {
      clearInterval(intervalHandler);
      items[index].classList.remove('why-fruits__item--active');

      if(index === textParagraphs.length - 1) {
        index = 0;
      } else {
        index++;
      }

        intervalHandler = setInterval(type, 70);
    }
  }


  intervalHandler = setInterval(type, 70);
}

writeAndDelete()


})(); 


