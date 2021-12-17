let modalQt = 1;

const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);


pizzaJson.map((item, index) => {

    // clona o modelo de visualização
    let pizzaItem = c('.models .pizza-item').cloneNode(true);

    //preenche as informações em pizzaItem  
    pizzaItem.setAttribute('data-Key', index);
    pizzaItem.querySelector('.pizza-item--img img ').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    //preenchimento modal
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();

        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQt = 1;

        c('.pizzaBig img').src = (pizzaJson[key].img);
        c('.pizzaInfo h1').innerHTML = (pizzaJson[key].name);
        c('.pizzaInfo--desc').innerHTML = (pizzaJson[key].description);
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${(pizzaJson[key].price).toFixed(2)}`;
        c('.pizzaInfo--size.selected').classList.remove('selected');
        cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if (sizeIndex == 2) {
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        c('.pizzaInfo--qt').innerHTML = modalQt;

        c('.pizzaWindowArea').style.opacity = 0;
        setTimeout(() => {
            c('.pizzaWindowArea').style.opacity = 1;
        }, 200)

        c('.pizzaWindowArea').style.display = 'flex';

    })
    c('.pizza-area').append(pizzaItem);



    c('.pizza-area').append(pizzaItem);
});
