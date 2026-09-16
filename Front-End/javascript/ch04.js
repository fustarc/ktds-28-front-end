onload = function () {
  const button = document.querySelector(".package-green-button");

  button.onclick = function (event) {
    const newP = document.createElement("p");

    newP.innerText = "From $399.99";
    newP.classList.add("package-ticket-price");

    button.after(newP);
    button.remove;
  };

  /*

  // p 태그를 동적으로 생성
  const newParagraph = document.createElement("p");
  // console.log(newParagraph);

  // p 태그의 Content 영역에 "From $399.99" 작성
  newParagraph.innerText = "From $399.99";
  // console.log(newParagraph);

  // p 태그에게 package-ticket-price 클래스를 할당
  // console.dir(newParagraph.classList);
  newParagraph.classList.add("package-ticket-price");
  // console.log(newParagraph);

  // 1. package-button-area의 내부 아래쪽에 p 태그를 추가.
  // package-button-area DOM(Element)를 가져온다.
  // package-button-area DOM 내부 아래에 p 태그를 추가한다.

  // 아래 말고 위에 추가하고 싶으면 prepend
  // 바깥쪽 밑에 추가하고 싶으면 after
  // 바깥쪽 위에 추가하고 싶으면 before

  // const area = document.querySelector(".package-button-area");

  //  area.append(newParagraph);

  // 2. package-green-button 아래에 p 태그를 추가.
  const button = document.querySelector(".package-green-button");
  // button.after(newParagraph);

  // package-green-button 태그 제거.
  button.onclick = function () {
    button.after(newParagraph);

    button.remove();
  };

  */
};
