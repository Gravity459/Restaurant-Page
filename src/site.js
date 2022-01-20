import navModule from './nav';
import homeModule from './home';
import menuModule from './menu';
import contactModule from './contact';

// making the contact div global to be accessed by all functions
const content = document.querySelector("#content");

// storing the current element 
var currentElement = '';

// to light up the current page being viewed 
function lightUp(page){
    // for same page
    if(currentElement === page)
        return;
    // for when there is no current element
    else if (currentElement == ''){
        currentElement = page;
        var element = document.querySelector(`#${currentElement}`);
        element = document.querySelector(`#${currentElement}`);
    }

    // for changing the current element
    else {
        var element = document.querySelector(`#${currentElement}`);
        element.classList.remove("current");
        currentElement = page;
        element = document.querySelector(`#${currentElement}`);
    }

    element.classList.add('current');
}

// setting up button click listeners on the navbar
function eventListenersSetup() {
    const navHome = document.querySelector('#Home');
    const navMenu = document.querySelector(`#Menu`);
    const navContact = document.querySelector(`#Contact`);

    navHome.addEventListener( 'click', () => {
        if (currentElement === "Home") return;
        lightUp('Home');
        content.removeChild(content.childNodes[2]);

        // function to load the home page
        loadHome();
    });

    navMenu.addEventListener( 'click', () => {
        if (currentElement === "Menu") return;
        lightUp('Menu');
        content.removeChild(content.childNodes[2]);

        // function to load the menu page
        loadMenu();
    });

    navContact.addEventListener( 'click', () => {
        if (currentElement === "Contact") return;
        lightUp('Contact');
        content.removeChild(content.childNodes[2]);

        // function to load the contact page
        loadContact();
    });
}

// to create the i tag for the font-awesome burger icon
function createI(){
    const iDiv = document.createElement('i');
    iDiv.classList.add('fas');
    iDiv.classList.add('fa-hamburger');
    iDiv.appendChild(createSpan());

    return iDiv;
}

// to create the span for the header
function createSpan(){
    const span = document.createElement('span');
    span.textContent = 'OH MY CHEESE!!!!';
    span.classList.add('classy-font');

    return span;
}

// to create the actual header
function createHeader(){
    const header = document.createElement('header');
    header.setAttribute('id', 'header');
    header.appendChild(createI());

    return header;
}

function loadHome(){
    const content = document.querySelector('#content');
    content.appendChild(homeModule());
    lightUp('Home');
}

function loadMenu(){
    const content = document.querySelector("#content");
    content.appendChild(menuModule());
    lightUp('Menu');
}

function loadContact(){
    const content = document.querySelector("#content");
    content.appendChild(contactModule());
    lightUp('Contact');
}

function start(){
    content.appendChild(createHeader());
    content.appendChild(navModule());
    eventListenersSetup();
    loadHome();
}

export default start;