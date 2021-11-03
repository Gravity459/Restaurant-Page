import navModule from './nav';
import homeModule from './home';

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


function start(){

    const content = document.querySelector('#content');
    content.appendChild(createHeader());
    content.appendChild(navModule());
    content.appendChild(homeModule());
}

export default start;