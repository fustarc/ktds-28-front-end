/*
onload = function () {
  // 아이디가 "package-ticket-count" 인 DOM 에 대해
  // oninput 이벤트가 발생하면
  // 콘솔에 "Input!" 이 출력되도록 한다.
  // 동시에 input 의 부모 중 package에 있는
  // data-price 값을 가져와 출력한다.

  const input = document.querySelector("#package-ticket-count");
  console.dir(input);

  input.oninput = function () {
    console.log("input!");

    const package = input.closest(".package");
    const price = package.dataset.price;

    // 만약, 인풋에 입력한 값이 비어있다면 0으로 초기화하라.
    if (!this.value) {
      this.value = 0;
    }

    //let inputValue = parseInt(this.value); // NaN, 20
    //if (isNaN(inputValue)) {
    //  inputValue = 0;
    //}

    // DOM Traversing
    // .package 다음 DOM(.total-price)안의 #amount 를 가져온다.
    const amount = package.nextElementSibling.querySelector("#amount");
    amount.innerText = parseInt(this.value) * parseFloat(price);

    console.log(amount);
  };
};
*/

// window의 타입 Window
Window.prototype.afterRender = function (callbackFunction) {
  this.onload = callbackFunction;
};

// document의 타입 Document
Document.prototype.find = function (selector) {
  return this.querySelector(selector);
};

// DOM의 타입 => Element
//
Element.prototype.next = function () {
  return this.nextElementSibling;
};

Element.prototype.find = function (selector) {
  return this.querySelector(selector);
};

window.afterRender(function () {
  const input = document.find("#package-ticket-count");
  input.oninput = function () {
    const package = input.closest(".package");
    const price = package.dataset.price;

    if (!this.value) {
      this.value = 0;
    }

    const amount = package.next().find("#amount");
    amount.innerText = parseInt(this.value) * parseFloat(price);
  };
});
