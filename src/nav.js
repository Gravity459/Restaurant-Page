function createListElement(headText){

    const listElement = document.createElement('li');
    listElement.textContent = headText;
    listElement.setAttribute('id', headText);
    
    return listElement;   
}

function createList(){

    const list = document.createElement('ul');
    list.appendChild(createListElement('Home'));
    list.appendChild(createListElement('Menu'));
    list.appendChild(createListElement('Contact'));

    return list;
}

function createDiv(){
    
    const elementsDiv = document.createElement('div');
    elementsDiv.classList.add('nav-elements');
    elementsDiv.appendChild(createList());
    return elementsDiv;
}

function navModule(){

    const nav = document.createElement('nav');
    nav.setAttribute('id', 'nav');
    nav.appendChild(createDiv());
    
    return nav;
}

export default navModule;

