window.onload = function () {
  let canvas = document.getElementById('tutorial');

  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(200,0,0)';
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = 'rgba(0,0,200,0.5)';
    ctx.fillRect(30, 30, 50, 50);
  } else {
    //여기에는 캔버스가 적용되지 않는 브라우저에서 적용할 코드를 적는다.
  }
};
