//値を更新する処理
function clear(_v) {
  document.querySelector('input').value = _v;
}

//値を追加する処理
function add(_v) {
  document.querySelector('input').value += _v;
}

//入力された値を計算する処理
function equal() {
  const inputText = document.querySelector('input').value;
  const calcuLation = new Function('return' + inputText);
  clear(calcuLation().toString());
}
