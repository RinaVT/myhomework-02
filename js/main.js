// Корзина

let priceBuy = document.getElementById('priceBuy');
let valueProducts = document.getElementById('valueProducts');

let btnInByBasket = document.querySelectorAll('.btm__flex-item');
// let priceFlexItem = document.querySelectorAll('price__flex-item');

for (let elem of btnInByBasket){
    elem.onclick = () => {
        valueProducts.textContent = Number(valueProducts.textContent) + 1;
        priceBuy.textContent = parseFloat(priceBuy.textContent) + parseFloat(elem.previousElementSibling.textContent);
        // console.log(parseFloat(elem.previousElementSibling.textContent));
    }
}


// слайдер

document.addEventListener('DOMContentLoaded', () => {
    // инициализация слайдера
    const slider = new ItcSimpleSlider('.itcss');
    // назначим обработчик при нажатии на кнопку .btn-prev
    document.querySelector('.btn-prev').onclick = () => {
      // перейдём к предыдущему слайду
      slider.prev();
    }
    // назначим обработчик при нажатии на кнопку .btn-next
    document.querySelector('.btn-next').onclick = () => {
      // перейдём к следующему слайду
      slider.next();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // инициализация слайдера
    new ItcSimpleSlider('.itcss', {
        autoplay: true,
        interval: 10000,
        loop: true,
        swipe: true,
      });
});



// карта

//  !!! ПРОВЕРИТЬ НА МОБИЛЬНОМ УСТРОЙСТВЕ РАБОТУ КОДА !!!

let mapСontacts = document.getElementById('mapContacts');
let options_map = {
    once: true,//запуск один раз, и удаление наблюдателя сразу
    passive: true,
    capture: true
};
mapСontacts.addEventListener('click', start_lazy_map, options_map);
mapСontacts.addEventListener('mouseover', start_lazy_map, options_map);
mapСontacts.addEventListener('touchstart', start_lazy_map, options_map);
mapСontacts.addEventListener('touchmove', start_lazy_map, options_map);

let map_loaded = false;
function start_lazy_map() {
    if (!map_loaded) {
        let map_block = document.getElementById('ymap_lazy');
        map_loaded = true;
        map_block.setAttribute('src', map_block.getAttribute('data-src'));
        map_block.removeAttribute('data_src');
        console.log('YMAP LOADED');
    }
}