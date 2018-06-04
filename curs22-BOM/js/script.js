//window.console.log it's usually used as console.log
console.log("The usual logging mode");
console.warn("This is a warning");
console.error("This is an error message");

window.onload = () => {
//   const iframeBody = document.getElementById("frame-body");
//   iframeBody.innerHTML = "Something new";
  console.log(window.frames[0].location);
  console.log(window.frames.length);
  window.name = "Parent master window";
  console.log(window.parent);
  console.log(window.screen);
  console.log(window.innerHeight);
  console.log(window.outerHeight);
  console.log(window.scrollbars);
  const openWinBtn = document.getElementById("new-win");
  window.globalVar = 5;
  openWinBtn.addEventListener("click", () => {
    window.scroll(0,50);
    const newWin = window.open("./secondPage.html","","width=200px height=200px");
    newWin.moveBy(300,100);
    newWin.focus();
  })
}