
function createItems(menuarea) {

    const item1 = createDiv(
      "../images/Philly-cheesesteak-Burger.jpg",
      "Philly Cheesesteak Burger",
      "A foreigner has just invaded our range of premium burgers! Loads of warm cheese sauce between fresh baked soft buns."
    );

    const item2 = createDiv(
      "../images/Premium-Crounches-Burger-min.jpg",
      "Premium Crunchos Burger",
      "5 Oz juicy beef patty / grilled chicken fillet, 2 oz mozzarella cheese patty, cucumber pickles, jalapenos, nachos, chipotle mayo sauce and iceberg lettuce."
    );

    const item3 = createDiv(
      "../images/Premium--Messy-Meat-min.jpg",
      "Messy Meat Burger",
      "This premium burger contains a 7oz.cheese stuffed patty, topped with warm nacho cheese, chilli cooked in a tomato, based sauce, onion rings, jalapenos, pickles, dijon mayo sauce and iceberg lettuce."
    );
    
    const item4 = createDiv(
      "../images/Stack-Beef-Cheese-Beef-Veggie-min.jpg",
      "Stack Beef Cheese Burger",
      "This premium burger contains a 7oz.cheese stuffed patty, topped with warm nacho cheese, chilli cooked in a tomato, based sauce, onion rings, jalapenos, pickles, dijon mayo sauce and iceberg lettuce."
    );

    const item5 = createDiv(
      "../images/Stack-Belt-Buster-Burger-min.jpg",
      "Stack Belt Buster Burger",
      "Standing at 4-succulent patty tall, weighing in at more than half a kilo. It holds 2 crispy onion rings and is generously slathered with a special sauce. The new champion at Burger O'Clock."
    );


    menuarea.appendChild(item1);
    menuarea.appendChild(item2);
    menuarea.appendChild(item3);
    menuarea.appendChild(item4);
    menuarea.appendChild(item5);
}

function createDivImage(url){

    const newDiv = document.createElement('div');
    newDiv.classList.add('ipic');

    const image = document.createElement('img');
    image.setAttribute('src', url);
    
    newDiv.appendChild(image);

    return newDiv;
}

function createDivDesc(title, description){

    const newDiv = document.createElement('div');
    newDiv.classList.add("idesc");

    const head2 = document.createElement('h2');
    const para = document.createElement('p');
    
    head2.textContent = title;
    para.textContent = description;

    newDiv.appendChild(head2);
    newDiv.appendChild(para);

    return newDiv;
}

function createDiv(url, title, desc){

    const newDiv = document.createElement("div");
    newDiv.classList.add('item');
    newDiv.classList.add('border');

    newDiv.appendChild(createDivImage(url));
    newDiv.appendChild(createDivDesc(title, desc));

    return newDiv;
}

function menuModule() {

    var menuarea = document.createElement("div");
    menuarea.classList.add("main-area");
    
    createItems(menuarea);
    return menuarea;

}

export default menuModule;