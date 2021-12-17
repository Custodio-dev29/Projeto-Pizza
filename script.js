const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

pizzaJson.map((item, index) => {

    // clona o modelo de visualização

    let pizzaItem = c('.models .pizza-item').cloneNode(true);

    //preenche as informalções em pizzaItem

    c('.pizza-area').append(pizzaItem);
});
