/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navSections = document.querySelectorAll('section');
const navList = document.querySelector('ul');
const fragment = document.createDocumentFragment();
const pageHeader = document.querySelector('.page__header');
let timer = null;
let topButton = document.getElementById("top-botton");
const collapses = document.querySelectorAll('h2');

/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

// build the nav
// Scroll to anchor ID using scrollIntoView event
// active section when near top of viewport
naviList();
navList.appendChild(fragment);

function naviList() {
    navSections.forEach(function (section) {
        const navSection = document.createElement('li');
        const dataNav = section.getAttribute('data-nav');
        navSection.insertAdjacentHTML('afterbegin', `<a href="#" class="menu__link" onclick="responder()">${dataNav}</a>`);
        navSection.addEventListener("click",function (Events) {
        Events.preventDefault();    
        section.scrollIntoView({ behavior: 'smooth', block:'center' });
        });
        fragment.appendChild(navSection);
    });
}

//make navigation bar responsive
function responder() {
    let x = document.getElementById("navbar__list");
    let y = document.getElementById("nav-icon");
    if (x.className === "navbar__menu") {
      x.className += " responsive";
      y.className += " responsive";
    } else {
      x.className = "navbar__menu";
      y.className = "icon";
    }
}

//Get the button
window.onscroll = function() {scrollFunc()};
function topFunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}  
function scrollFunc() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// main Sections Collapsing
for (const collapse of collapses) {
    collapse.addEventListener('click', function() {
        this.parentNode.classList.toggle('coll');
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// Scroll to section on link click
window.addEventListener("scroll", function() {
    navSections.forEach(function(s) {
        const rect = s.getBoundingClientRect();
        if(rect.top>=-100 && rect.top<=200) {
            navSections.forEach(function(remove) {
                remove.style.background=null;
            })
            s.style.background="gray";
            const links=document.querySelectorAll('a');
            links.forEach(function(link) {
                if (s.getAttribute('data-nav')!=link.textContent) {
                    link.style.background=null;
                } else {
                    link.style.background='gray';
                }
            })
        }
    })
})
// Set sections as active
window.addEventListener('scroll', function() {
    if(timer != null) {
        clearTimeout(timer);
        pageHeader.style = 'position: fixed';
    }
    timer = setTimeout(function() {
        pageHeader.style = 'position: relative';
    },3000);
}, false);

/**
 * End Events
 * Begin Performance Test
 * 
*/

//Performance Testing
const endTime = performance.now();
console.log(`it takes ${endTime} melliseconds to be loaded.`);

/**
**end of JS File
*/