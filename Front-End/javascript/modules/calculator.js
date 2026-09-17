export function getDom(selector) {
  // document에서 seletor 하나 반환시키기
  const sel = document.querySelector(selector);
  return sel;
}

export function onClick(
  dom,
  cbfunction /* 버튼을 클릭했을 때 이벤트 (+ - * /) */,
) {
  // dom에 click 이벤트를 할당하기
  dom.onclick = cbfunction;
}

export function getValue(dom) {
  // dom에 입력된 값을 반환하기
  return parseInt(dom.value);
}

export function setText(dom, text) {
  // dom에 textContent 를 할당하기
  dom.textContent = text;
}
