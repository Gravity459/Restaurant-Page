
// to create the span with classy font
function createSpan(classname, text){
    var span = document.createElement('span');
    span.classList.add(classname);
    span.textContent = text;

    span.classList.add("classy-font");

    return span;
}

// to create the divs for this home module
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
        img.setAttribute('alt', 'burger image');
        newDiv.appendChild(img);
    }
    
    return newDiv;
}

// to create the home
function homeModule(){
    var mainarea = createDiv('main-area', '', '');
    mainarea.classList.add("home-area");

    const first = createDiv('first', 'ftext', 'Welcome to the best burger joint in town!');
    const second = createDiv('second', '', '../images/burgers.jpg');
    const third = createDiv('third', 'ltext', 'And there is plenty more of where that came from!');

    mainarea.appendChild(first);
    mainarea.appendChild(second);
    mainarea.appendChild(third);

    return mainarea;
}

export default homeModule;
