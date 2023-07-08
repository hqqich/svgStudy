document.getElementsByTagName("h1")[0].style.fontSize = "1vw";


// 绑定点击事件

// document.getElementById('my_svg').addEventListener('click', () => {
// document.getElementById('my_circle').style.transform = 'translateX(200px)';
// });


function color16() {//十六进制颜色随机
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}


function myBtn() {

  console.log("点击了button")


  // 获取svg
  let elementById = document.getElementById("my_svg");
  // 获取里面的圆
  let nodeListOf = elementById.getElementsByTagName('circle');
  let color16Value = color16();

  nodeListOf[0].setAttribute("fill", color16Value);
  nodeListOf[0].setAttribute("stroke", color16Value);

  // console.log(nodeListOf[0].cx.baseVal.value);
  // console.log(nodeListOf[0].cy.baseVal.value);


  // 获取chenhaoType
  let chenhaoTypeElment = document.getElementById("chenhaoType");
  let chenhaoTypeValue = chenhaoTypeElment.innerHTML;

  if (chenhaoTypeValue == 0) {
    // 移动
    nodeListOf[0].style.transform = 'translateX(150px)';
    // animation: move 2s ease-in-out infinite;
    nodeListOf[0].style.animation = 'move 2s ease-in-out infinite';
    chenhaoTypeElment.innerHTML = 1;
  } else {
    // 移动
    nodeListOf[0].style.transform = 'translateX(0px)';
    // animation: move 2s ease-in-out infinite;
    nodeListOf[0].style.animation = 'move 2s ease-in-out infinite';
    chenhaoTypeElment.innerHTML = 0;
  }


  // ============= 下方的文字 =============
  let elementById1 = document.getElementById("my_span");

  elementById1.textContent = color16Value;
  elementById1.style.color = color16Value;


  // nodeListOf[0].style.visibility = 'hidden'
  // nodeListOf[1].removeAttribute("hidden")

  // alert(nodeListOf.length)


}
