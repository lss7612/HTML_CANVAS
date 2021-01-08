window.onload = function () {
  let canvas = document.getElementById('tutorial');
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 25);
    ctx.lineTo(100, 75);
    ctx.closePath();
    ctx.stroke();
  }
};
