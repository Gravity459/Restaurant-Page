import navModule from './nav';
import homeModule from './home';
import menuModule from './menu';
import contactModule from './contact';

var currentElement = '';

function lightUp(page){

    if(currentElement === page)
        return;
    
    else if (currentElement == ''){
        currentElement = page;
        var element = document.querySelector(`#${currentElement}`);
        element = document.querySelector(`#${currentElement}`);
    }

    else {
        var element = document.querySelector(`#${currentElement}`);
        element.classList.remove("current");
        currentElement = page;
        element = document.querySelector(`#${currentElement}`);
    }

    element.classList.add('current');
    
}

function eventListenersSetup() {

    const navHome = document.querySelector('#Home');
    const navMenu = document.querySelector(`#Menu`);
    const navContact = document.querySelector(`#Contact`);

    navHome.addEventListener( 'click', () => {
        if (currentElement === "Home") return;
        lightUp('Home');
        loadHome();
    });

    navMenu.addEventListener( 'click', () => {
        if (currentElement === "Menu") return;
        lightUp('Menu');
        
        // function to load the menu
    });

    navContact.addEventListener( 'click', () => {
        if (currentElement === "Contact") return;
        lightUp('Contact');

        // function to load the contact
    });

}

function createI(){

    const iDiv = document.createElement('i');
    iDiv.classList.add('fas');
    iDiv.classList.add('fa-hamburger');
    iDiv.appendChild(createSpan());

    return iDiv;
}

function createSpan(){

    const span = document.createElement('span');
    span.textContent = 'OH MY CHEESE!!!!';
    span.classList.add('classy-font');

    return span;
}

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

    const content = document.querySelector('#content');
    content.appendChild(createHeader());
    content.appendChild(navModule());
    loadHome();
    // loadMenu();
    eventListenersSetup();
}

export default start;