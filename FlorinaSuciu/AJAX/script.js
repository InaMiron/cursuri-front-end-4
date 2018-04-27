window.onload = onHtmlLoaded;

function onHtmlLoaded() {
  getPosts(); 
}



function getPosts () {$.ajax('https://api.coinmarketcap.com/v1/ticker/', { 
  method: 'GET',
   success: function(response) {
     console.log("Get post =", response);
     var html = "";
     var displayInfo = document.getElementById("list-items");
     for (var i = 0; i<response.length; i++) {
      var item = response[i];
      html += "<h4>" + item.name + "</h4>" + 
        "<p>Rank:" + item.rank + "</p>" +
        "<p>Price USD:" + item.price_usd + "</p>" +
        "<p>Price BTC:" + item.price_btc + "</p>" +
        "<p>Market Cap USD:" + item.market_cap_usd + "</p>" +
        "<p>Available Supply:" + item.available_supply + "</p>" +
        "<p>Percent Change 24h:" + item.percent_change_24h + "</p>";
      displayInfo.innerHTML = html; 
     }
   }
  });
}
                             


// "market_cap_usd": "5478204030.0",
// "available_supply": "2779530283.0",
// "percent_change_24h": "2.21",