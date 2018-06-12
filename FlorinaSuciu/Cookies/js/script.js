const getCookies = () => {
  const cookieItem = {};
  const cookiesString = document.cookie; 
  const separatedEntries = cookiesString.split(";"); 
  separatedEntries.forEach((entry) => {
    const trimmedEntry = entry.trim();
    const splitEntry = trimmedEntry.split("=");
    cookieItem[splitEntry[0]] = splitEntry[1];
  })
  return cookieItem;
}

window.onload = () => {
  fetchData().then((response) => {
    //display the temperature based on the user's preference and store this information in Cookies
    const radioBtns = document.querySelectorAll('input[type=radio]');
    radioBtns.forEach((btn) => {
      btn.onclick = (e) => {
        //console.log(e);
        if(e.target.defaultValue === "celsius") {
          document.querySelector("h1").innerHTML = response.current_observation.dewpoint_c + "\°C";
          document.cookie = `degrees=celsius`;
        } else if (e.target.defaultValue === "fahrenheit") {
          document.querySelector("h1").innerHTML = response.current_observation.dewpoint_f + "\°F";
          document.cookie = `degrees=fahrenheit`;
        }
      }
    }) 
    //use the information stored in Cookies to display the temperature 
    const cookies = getCookies();
    const userDegrees = cookies.degrees;
    if(userDegrees === "celsius") {
      document.querySelector("h1").innerHTML = response.current_observation.dewpoint_c + "\°C";
    } else if (userDegrees === "fahrenheit") {
      document.querySelector("h1").innerHTML = response.current_observation.dewpoint_f + "\°F";
    }
  })
}