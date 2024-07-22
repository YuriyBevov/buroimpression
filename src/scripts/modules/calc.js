const calc = document.querySelector(".calc");

if (calc) {
  const ctrls = calc.querySelectorAll("[data-price], [data-multiplier]");
  const total = calc.querySelector(".calc__total-price span");
  const basePrice = calc.querySelector("[data-base-price]");
  const multiplierValue = Number(
    calc.querySelector("[data-multiplier]").dataset.multiplier
  );

  // const delivery = calc.querySelector(
  //   ".calc__delivery-field--main input[type='checkbox']"
  // );
  // const regions = calc.querySelector(".calc__delivery-field--radio");

  let currentValue = Number(basePrice.dataset.basePrice.replaceAll(" ", ""));

  const numberPrettify = (number) => {
    const separator = " ";
    return number
      .toString()
      .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
  };

  const fillPriceNode = (value) => {
    total.innerHTML = numberPrettify(Math.round(value));
  };

  fillPriceNode(currentValue);

  const setTotalPrice = () => {
    let total = isMultiplier ? currentValue * multiplierValue : currentValue;

    ctrls.forEach((ctrl) => {
      if (ctrl.checked && ctrl.dataset.price) {
        total += Number(ctrl.dataset.currentPrice)
          ? Number(ctrl.dataset.currentPrice)
          : Number(ctrl.dataset.price);
      }
    });

    fillPriceNode(total);
  };

  let isMultiplier = false;

  const setMultiplier = () => {
    isMultiplier = !isMultiplier;

    ctrls.forEach((ctrl) => {
      ctrl.dataset.currentPrice = isMultiplier
        ? ctrl.dataset.price * multiplierValue
        : ctrl.dataset.price;
    });

    setTotalPrice();
  };

  ctrls.forEach((ctrl) => {
    ctrl.addEventListener("click", () => {
      if (ctrl.dataset.price) {
        setTotalPrice();
      }

      if (ctrl.dataset.multiplier) {
        setMultiplier();
      }
    });
  });

  // delivery.addEventListener("change", () => {
  //   delivery.checked
  //     ? regions.classList.remove("disabled")
  //     : regions.classList.add("disabled");
  // });
}
