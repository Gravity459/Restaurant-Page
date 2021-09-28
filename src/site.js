import navModule from './nav';

function header(){

    const header = document.createElement('header');


}


function start(){

    const content = document.querySelector('#content');
    content.appendChild(navModule());
}

export default start;