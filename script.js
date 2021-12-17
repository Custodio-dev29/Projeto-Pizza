const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

pizzaJson.map((item, index) => {

    // clona o modelo de visualização

    let pizzaItem = c('.models .pizza-item').cloneNode(true);

    //preenche as informações em pizzaItem
    pizzaItem.querySelector('.pizza-item--img img ').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;



    c('.pizza-area').append(pizzaItem);
});
