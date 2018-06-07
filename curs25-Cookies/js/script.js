//Get Cookies
//console.log(document.cookie);

//Set Cookie
document.cookie = "color=green";
document.cookie = "userName=John Doe";
// document.cookie = "lang=en-US";
//console.log(document.cookie);

const getCookies = () => {
  const cookieItem = {};
  const cookiesString = document.cookie; //color=green; userName=John Doe; lang=en-GB
  const separatedEntries = cookiesString.split(";"); //["color=green", " userName=John Doe", " lang=en-GB"]
  //console.log(separatedEntries); 
  separatedEntries.forEach((entry) => {
    //entry <=> " userName=John Doe"
    const trimmedEntry = entry.trim();
    //trim removes the extra space entry <=> " userName=John Doe"
    const splitEntry = trimmedEntry.split("=");
    //splitEntry ["userName","John Doe"]
    cookieItem[splitEntry[0]] = splitEntry[1];
    //cookieItem <=> {userName:"John Doe"}
  })
  return cookieItem;
}

window.onload = () => {
  //check the radio button for lang retrived from cookie
  const cookies = getCookies();
  //console.log(cookies);
  const userLang = cookies.lang;
  if (userLang) {
    document.querySelector(`[value=${userLang}]`).setAttribute("checked",true);
  }
  
  //update cookie when user changes lang option
  const radioBtns = document.querySelectorAll('input[type=radio]');
  radioBtns.forEach((btn) => {
    btn.addEventListener("change", (e) => {
      //console.log("event=",e);
      const newLang = e.target.value; //en-US
      document.cookie = `lang=${newLang}`; //"lang=" + newLang
    })
  }) 
}