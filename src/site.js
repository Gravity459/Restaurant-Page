import navModule from './nav';
import homeModule from './home';

currentElement = '';

function lightUp(pagename){
    const element = document.querySelector(`#${pagename}`);
    
    if(currentElement != ''){

        const prevElement = document.querySelector(`#${currentElement}`);
        prevElement.classList.remove('current');
    }   

    element.classList.add('current');
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
    span.textContent = 'Hamburgers Away ...';
    
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
    lightUp(home);
    currentElement = 'home';
}

function start(){

    const content = document.querySelector('#content');
    content.appendChild(createHeader());
    content.appendChild(navModule());
    loadHome();
}

export default start;