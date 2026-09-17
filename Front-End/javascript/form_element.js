onload = function () {
  // 아이디가 email 인 input에 oninput event 가 발생하면
  // 해당 엘리먼트의 부모인 .page-123을 찾고
  // 부모의 자식 중 클래스가 email-value 인 엘리먼트의
  // email의 value 를 작성한다.
  const email = document.querySelector("#email");
  email.oninput = function () {
    const page = this.closest(".page-123");
    page.querySelector(".email-value").textContent = this.value;
  };

  // 아이디가 jobs인 select의 onchange event 가 발생하면
  // 해당 엘리먼트의 부모인 .page-123을 찾고
  // 부모의 자식 중 클래스가 job-value 인 엘리먼트의
  // jobs 의 value 를 작성한다.
  const jobs = document.querySelector("#jobs");
  jobs.onchange = function () {
    const page = this.closest(".page-124");
    page.querySelector(".job-value").textContent = this.value;
  };

  // input 태그 중 type 이 radio 이면서 name 이 age 인 엘리먼트에
  // document.querySelector("input[type=radio][name=age]");
  // onchange 이벤트가 발생하면 해당 엘리먼트의 부모인 .page-125를 찾고
  // 부모의 자식 중 클래스가 name-value 인 엘리먼트의
  // input 의 value 를 작성한다.
  const radioValue = document.querySelectorAll("input[type=radio][name=age]");
  radioValue.forEach(function (eachRadio) {
    eachRadio.onchange = function () {
      const value = this.value;
      const labelText = this.nextElementSibling.textContent;

      this.closest(".page-125").querySelector(".name-value").textContent =
        `value: ${value}, text: ${labelText}`;

      /*
      const page = this.closest(".page-125");
      page.querySelector(".name-value").innerText = this.value;
      */
    };
  });

  const checkValue = document.querySelectorAll(
    "input[type=checkbox][name=favorate-genre]",
  );

  checkValue.forEach(function (eachCheck) {
    eachCheck.onchange = function () {
      let value = Array.from(checkValue)
        .filter(function (gnr) {
          return gnr.checked;
        })
        .map(function (gnr) {
          return gnr.value;
        })
        .join(", ");

      console.log(value);
      const page = this.closest(".page-125");

      page.querySelector(".check-value").textContent = value;
    };
  });

  const checkedAll = document.querySelector("#checked-all");
  checkedAll.onchange = ({ target }) => {
    const checked = target.checked;

    const checkItems = document.querySelectorAll(
      "input[type=checkbox][name=favorate-genre]",
    );
    checkItems.forEach((item) => {
      item.checked = checked;
      // 체크박스의 onchange 이벤트 실행
      // event 파라미터도 함께 전달.
      item.onchange({ target: item });
    });
  };

  checkValue.forEach((checkbox) => {
    checkbox.onchange = ({ target }) => {
      const checkedItems = Array.from(checkValue).filter((gnr) => gnr.checked);

      let value = checkedItems.map((gnr) => gnr.value).join(", ");

      target.closest(".page-125").querySelector(".check-value").textContent =
        value;

      // 모든 체크박스를 선택했다면, "전체 선택"도 체크한다.
      checkedAll.checked = checkValue.length === checkedItems.length;
    };
  });
};
