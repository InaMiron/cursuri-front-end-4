
const items = [{  id: 1,
    name: "Telefon mobil HTC U 11, Dual SIM, 64GB, 4G, Brilliant Black",
    imageUrl: "https://s12emagst.akamaized.net/products/6053/6052836/images/res_151cbf9f491dc8b1555e14bfe5a60fbc_150x150_bpqg.jpg",
    quantity: 5,
    price: 1200
  },{ id: 2,
      name: "Acumulator extern A+, 20000 mAh",
      imageUrl: "https://s12emagst.akamaized.net/products/8023/8022875/images/res_afbd4b05ee5bd92012da2404452eb9ed_450x450_lfqn.jpg",
      quantity: 15,
      price: 300
  },{ id: 3,
      name: "Acumulator extern Smart Charge 1010 10000 mAh cablu micro USB Negru",
      imageUrl: "https://s12emagst.akamaized.net/products/8168/8167260/images/res_70379d488494cd7c8c5d4012bdb680c9_450x450_d5do.jpg",
      quantity: 7,
      price: 150
  },{ id: 4,
      name: "Telefon mobil Meizu M6, Dual SIM, 32GB, 4G, Black",
      imageUrl: "https://s12emagst.akamaized.net/products/14586/14585039/images/res_154d644544cb77ce57d6b6b87aa108e0_450x450_19s3.jpg",
      quantity: 7,
      price: 1000
  },{ id: 5,
      name: "Telefon mobil Nokia 3, Dual SIM, 16GB, Copper White",
      imageUrl: "https://s12emagst.akamaized.net/products/8665/8664917/images/res_fd6e9f225340a180c38950103c489c4e_450x450_u1ak.jpg",
      quantity: 7,
      price: 1685
}]

//save in local storage
localStorage.setItem("itemsArray", JSON.stringify(items));

//get the array from local storage
const itemsStr = localStorage.getItem("itemsArray");
const itemsArr = JSON.parse(itemsStr);

window.onload = function() {
  for(let i = 0; i < itemsArr.length; i++) {
    const container = document.getElementById("container");
    const item = itemsArr[i];
    const itemQ = itemsArr[i].quantity;
    //console.log(item);
    const itemContainer = document.createElement("div");
    itemContainer.setAttribute("id", i);
    container.appendChild(itemContainer);
    const itemName = document.createElement("h3");
    itemName.innerHTML = item.name;
    itemContainer.appendChild(itemName);
    const itemImage = document.createElement("img");
    itemImage.setAttribute("src", item.imageUrl);
    itemContainer.appendChild(itemImage);
    const itemQuantity = document.createElement("p");
    itemQuantity.setAttribute("id", item.id);
    itemQuantity.innerHTML = "Quantity : " + item.quantity;
    itemContainer.appendChild(itemQuantity);
    const itemPrice = document.createElement("p");
    itemPrice.innerHTML = "Price : " + item.price;
    itemContainer.appendChild(itemPrice);
    const buyBtn = document.createElement("button");
    buyBtn.innerHTML = "BUY";
    itemContainer.appendChild(buyBtn);
    buyBtn.addEventListener("click", (event) => {
      const parent = event.target.parentElement;
      const index = parent.getAttribute("id");
      const elementForUpdate = items[index];
      elementForUpdate.quantity -= 1;
      document.getElementById(elementForUpdate.id).innerHTML = "Quantity : " + elementForUpdate.quantity;
      localStorage.setItem("itemsArray", JSON.stringify(items)); 
      if (elementForUpdate.quantity === 0) {
        container.removeChild(parent);
      }
  })
 }
}