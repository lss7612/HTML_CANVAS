window.onload = function () {
  let canvas = document.getElementById('tutorial');

  if (canvas.getContext) {
    //if문법의 조건에 들어간 것이 null이면 false를 반환한다.
    //즉 컨텍스트가 있을때만 아래 코드를 실행한다.
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    ctx.moveTo(125, 125);
    ctx.lineTo(125 - 80, 125);
    ctx.lineTo(125, 125 - 80);
    ctx.closePath();
  }
};
