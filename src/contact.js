function createDivImage(url) {
  const newDiv = document.createElement("div");

  const image = document.createElement("img");
  image.setAttribute("src", url);

  newDiv.appendChild(image);

  return newDiv;
}

function createLinkDiv(link) {

    const newLinkTag = document.createElement("a"); 
    newLinkTag.setAttribute("href", link);

}

function createH1() {

    

}


function createDiv(classname) {
  const newDiv = document.createElement("div");
  


  return newDiv;
}

function contactModule() {

  var contactarea = document.createElement("div");
  contactarea.classList.add("main-area");
  contactarea.classList.add("contact-area");

    


  return contactarea;
}

export default contactModule;
