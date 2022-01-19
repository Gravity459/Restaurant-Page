function createImageDiv(url) {
    const newDiv = document.createElement("div");
    newDiv.classList.add('image-area');

    const image = document.createElement("img");
    image.setAttribute("src", url);

    newDiv.appendChild(image);
    return newDiv;
}


function createLinkDiv(link) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("desc-area");

    const linkTag = document.createElement("a"); 
    linkTag.setAttribute("href", link);

    linkTag.appendChild(createH1('Gravity459'));
    
    newDiv.appendChild(linkTag);
    newDiv.appendChild(createP("The best of the best burgerista in the universe."));
    newDiv.appendChild(createP("Contact: 1234-GRAV(4728)"));

    return newDiv;
}

function createP(text) {
    const ptag = document.createElement("p");
    ptag.textContent += text;

    return ptag;
}

function createH1(text) {
    const h1tag = document.createElement("h1");
    h1tag.textContent = text;

    return h1tag;
}

function createContact(contact) {
    contact.appendChild(createImageDiv("../images/profile.jpg"));
    contact.appendChild(createLinkDiv("https://github.com/Gravity459"));
}

function contactModule() {

    var contactarea = document.createElement("div");
    contactarea.classList.add("main-area");
    contactarea.classList.add("contact-area");

    createContact(contactarea);
    
    return contactarea;
}

export default contactModule;
