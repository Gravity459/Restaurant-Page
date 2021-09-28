function createI(){

    const iDiv = document.createElement('i');
    iDiv.classList.add('fas');
    iDiv.classList.add('fa-hamburger');
    iDiv.appendChild(createSpan());

    return iDiv;
}

function createSpan(){

    const navSpan = document.createElement('span');
    navSpan.textContent = 'Hamburgers Away...';

    return navSpan;
}


function navModule(){

    const navDiv = document.createElement('nav');
    navDiv.setAttribute('id', 'nav');
    navDiv.appendChild(createI());
    return navDiv;
}

// console.log(navModule());
export default navModule;