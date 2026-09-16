/** @format */

/**
 * DOM
 *  > HTML 문서를 브라우저가 읽으면서 태그별로 객체화 시켜둔 것.
 * DOM Tree
 *  > DOM 간의 관계 (자식, 형제, 부모)
 * DOM 종류
 *  > DOM, Shadow DOM (Virtual DOM)
 *  > Shadow DOM ( Virtual DOM ) >> 스크립트에 의해 생성된 DOM
 */

onload = function () {
  /*
  const priceDom = document.querySelector(".package-ticket-price");
  console.log(priceDom);
  //  priceDom?.onclick = function () {
  //    alert("click!");
  //  };
  priceDom?.addEventListener("click", function () {
    alert("Click");
  });
 */

  const buttons = document.querySelectorAll(".package-green-button");

  buttons.forEach(function (eachButton) {
    eachButton.onclick = function (event) {
      const package = this.closest(".package");
      const price = package.dataset.price;

      const newP = document.createElement("p");

      // newP.innerText = "From $" + price; 도 가능하지만

      newP.innerText = `From $${price}`;
      newP.classList.add("package-ticket-price");

      newP.onclick = function () {
        alert("Click!");
      };

      package.querySelector(".package-button-area").append(newP);

      this.remove();
    };
  });
};
