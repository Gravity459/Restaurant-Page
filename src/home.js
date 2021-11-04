function createSpan(classname, text){

    const span = document.createElement('span');
    span.classList.add(classname);
    span.textContent = text;

    return span;
}

function createDiv(classname, spanclass, text){

    const newDiv = document.createElement('div');
    newDiv.classList.add(classname);

    if(spanclass != '' & text != '')
    {
        newDiv.appendChild(createSpan(spanclass, text));
    }
    else if(text != '')
    {
        const img = document.createElement('img');
        img.setAttribute('src', text);
        newDiv.appendChild(img);
    }
    

    return newDiv;
}

function homeModule(){

    const mainarea = createDiv('main-area', '', '');
    mainarea.appendChild(createDiv('first', 'ftext', 'Welcome to the best burger joint in town!'));
    mainarea.appendChild(createDiv('second', '', '../the-ultimate-hamburger.jpg'));
    mainarea.appendChild(createDiv('third', 'ltext', 'And there is plenty more of where that came from!'));
    
    return mainarea;
}

export default homeModule;
