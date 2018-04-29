window.onload = onHtmlLoaded;

function onHtmlLoaded() {
  getPosts(); 
}

function getPosts () {$.ajax('https://api.coinmarketcap.com/v1/ticker/', { 
  method: 'GET',
   success: function(response) {
     console.log("Get post =", response);
     var list = document.getElementById("infoBody");
//      var displayInfo = document.getElementById("list-items");
     for (var i = 0; i<response.length; i++) {
      var item = response[i];
       
      var dynamicRowInfo = document.createElement("tr"); 
      dynamicRowInfo.innerHTML = "<td>" + item.name + "</td>" +
        "<td>" + item.rank + "</td>" +
        "<td>" + item.price_usd + "</td>" +
        "<td>" + item.price_btc + "</td>" +
        "<td>" + item.market_cap_usd + "</td>" +
        "<td>" + item.available_supply + "</td>" +
        "<td>" + item.percent_change_24h + "</td>";
       
      list.appendChild(dynamicRowInfo);
     }
   }
  });
}
                             

