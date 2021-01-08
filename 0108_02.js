window.onload = function () {
  draw();
};

function draw() {
  let canvas = document.getElementById('tutorial');
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  } else {
    //구형 브라우저 처리
  }
}
