window.onload = function () {
  let canvas = document.getElementById('tutorial');
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    //arc(x,y,radius,startAngle,endAngle,anticlockwise)

    //moveTo를 사용하지 않으면 각각의 그림을 그리고 다른 그림을 그릴 때 연필이 떼지지 않고 그려진다.
    //moveTo는 우리가 한곳에 그림을 그리다가 다른 곳에 그림을 그릴 경우 연필을 떼서 옮기는 것과 같은 역할을 하는 메소드이다.

    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); //OuterCircle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);

    ctx.stroke();
  } else {
    //canvas를 지원하지 않는 부라우저를 사용할 때 스크립트 처리를 하고싶다면 여기서 하면 됨
  }
};
