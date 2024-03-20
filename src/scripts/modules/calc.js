const calc = document.querySelector('.calc');

if(calc) {
    const ctrls = calc.querySelectorAll('[data-price], [data-multiplier]');
    const total = calc.querySelector('.calc__total-price span');
    const basePrice = calc.querySelector('[data-base-price]');

    let currentValue = Number(basePrice.dataset.basePrice.replaceAll(' ', ''));

    console.log('BASE PRICE:', basePrice, currentValue);



    const numberPrettify = (number) => {
        const separator = " ";
        return number.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
    }

    const fillPriceNode = (value) => {
        total.innerHTML = numberPrettify(value);
    }

    fillPriceNode(currentValue);

    ctrls.forEach(ctrl => {
        ctrl.addEventListener('click', () => {
            const price = Number(ctrl.dataset.price.replaceAll(' ', ''));
            const multiplier = Number(ctrl.dataset.multiplier.replaceAll(' ', ''));
            currentValue += price * multiplier;
            
            fillPriceNode(currentValue);
        })
    });

}