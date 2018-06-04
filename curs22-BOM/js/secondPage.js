window.onload = () => {
  console.log(window.parent.globalVar);
  document.getElementById("blur").addEventListener("click", () => {
    window.print();
  })
}