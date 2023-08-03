let products = [
    {
      name:
        "Apple iPhone 14 (128 GB) - Midnight",

      imageUrl:
        "https://www.smartprix.com/bytes/wp-content/uploads/2022/04/40572-93411-iPhone-14-midnight-xl.jpg",
      link:
        "https://www.amazon.in/Apple-iPhone-14-128GB-Midnight/dp/B0BDHX8Z63/ref=sr_1_3?crid=3A569PR3EI4S0&keywords=iphone+14&qid=1691078941&sprefix=iphone+1%2Caps%2C216&sr=8-3g"
    },
    {
      name:
        "Apple 2023 MacBook Pro Laptop M2 Pro chip with 10‑core CPU and 16‑core GPU: 33.74 cm (14.2-inch), 16GB Unified Memory, 512GB SSD Storage. Works with iPhone/iPad; Space Grey ",
      imageUrl:
        "https://m.media-amazon.com/images/I/61LNGJEMh0L._SL1500_.jpg",
      link:
        "https://www.amazon.in/Apple-MacBook-Laptop-10%E2%80%91core-16%E2%80%91core/dp/B0BSHHL4TY/ref=sr_1_1?adgrpid=64861342234&ext_vrnc=hi&hvadid=590642452936&hvdev=c&hvlocphy=9061704&hvnetw=g&hvqmt=e&hvrand=5101333117842561609&hvtargid=kwd-508990002138&hydadcr=13664_2280206&keywords=macbook+m2&qid=1691078841&sr=8-1"
    },
    {
      name: "realme 11 Pro+ 5G (Oasis Green, 8GB RAM, 256GB Storage)",
      imageUrl:
        "https://cdnmedia.placewellretail.com/pub/media/catalog/product/cache/d2f155c8ae3423b25125c336aa39579e/r/e/realme_11_pro_plus__2_1.webp",
      link:
        "https://www.amazon.in/realme-Oasis-Green-256GB-Storage/dp/B0C78DSV4H/ref=sr_1_1?crid=3MJH25KYWFUXO&keywords=realme%2B11%2Bpro%2B5%2Bg&qid=1691079021&sprefix=realme%2Caps%2C283&sr=8-1&th=1"
    },
    {
      name:
        "ASUS Vivobook 15 (2022), 15.6(39.62 cms) FHD, Intel Core i3-1220P 12th Gen, Thin and Light Laptop ",
      imageUrl:
        "https://m.media-amazon.com/images/I/71e9f-EU2WL._SL1500_.jpg",
      link:
        "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Beats Fit Pro – True Wireless Noise Cancelling Earbuds – Active Noise Cancelling - Sweat Resistant Earphones, Compatible with Apple & Android",
      imageUrl:
        "https://m.media-amazon.com/images/I/41se03x19gL._SL1500_.jpg",
      link:
        "https://www.amazon.in/Beats-Fit-Pro-Cancelling-Built/dp/B09Q78MP7W/ref=sr_1_12?crid=2QS0D0FPDTGJG&keywords=apple%2Bairpods&qid=1691079903&sprefix=apple%2Bairpod%2Caps%2C227&sr=8-12&th=1"
    },
    {
      name:
        "Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Blue (5th Generation) ",
      imageUrl:
        "https://m.media-amazon.com/images/I/71VbHaAqbML._SL1500_.jpg",
      link:
        "https://www.amazon.in/Apple-iPad-Air-10-9-inch-27-69-Wi-Fi/dp/B09V4FNFHN/ref=sr_1_5?crid=3TEHFTH2WS0PG&keywords=ipad&qid=1691079533&sprefix=ipa%2Caps%2C237&sr=8-5"
    },
    {
      name:
        "Apple 2022 MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD ",
      imageUrl:
        "https://m.media-amazon.com/images/I/71f5Eu5lJSL._SL1500_.jpg",
      link:
        "https://www.amazon.in/2022-Apple-MacBook-Laptop-chip/dp/B0B3BQ11LP/ref=sr_1_3?crid=1X0TA4KL13ZKO&keywords=macbook+air&qid=1691079597&sprefix=macbook+ai%2Caps%2C233&sr=8-30"
    },
    {
      name: "Sony WH-CH520, Wireless On-Ear Bluetooth Headphones with Mic, Upto 50 Hours Playtime, DSEE Upscale, Multipoint Connectivity/Dual Pairing,Voice Assistant App Support for Mobile Phones (Black)",
      imageUrl:
        "https://m.media-amazon.com/images/I/51zA0OZ4EvL._SL1200_.jpg",
      link:
        "https://www.amazon.in/Sony-Bluetooth-Headphones-Multipoint-Connectivity/dp/B0BS1PRC4L/ref=sr_1_14?crid=34OO7QNC785OR&keywords=headphones&qid=1691079988&sprefix=headpohone%2Caps%2C218&sr=8-14&th=1"
    },
    {
      name: "OnePlus Nord Buds 2r True Wireless in Ear Earbuds with Mic, 12.4mm Drivers,",
      imageUrl:
        "https://m.media-amazon.com/images/I/51Rm6la26qL._SL1500_.jpg",
      link:
        "https://www.amazon.in/OnePlus-Wireless-Earbuds-Drivers-Playback/dp/B0C8JB3G5W/ref=sr_1_3?crid=8QE1O9XSY8VP&keywords=earbuds&qid=1691079800&sprefix=earbud%2Caps%2C226&sr=8-3"
    }
  ];
  let wishlist = [];
  
  window.onload = function () {
    let productContainer = document.getElementById("product-container");
  
    for (let i = 0; i < products.length; i++) {
      let productDiv = document.createElement("div");
      productDiv.className = "product";
  
      productDiv.innerHTML =
        '<img src="' +
        products[i].imageUrl +
        '" width="200"><br><a href="' +
        products[i].link +
        '">' +
        products[i].name +
        '</a> <button class="add-to-wishlist" onclick="addToWishlist(' +
        i +
        ')">Add to Wishlist</button>';
  
      productContainer.appendChild(productDiv);
    }
  };
  
  function addToWishlist(index) {
    let selectedProduct = products[index];
  
    // Check if the product is already in the wishlist
    let existingIndex = wishlist.findIndex((item) => item.name === selectedProduct.name);
  
    if (existingIndex !== -1) {
      // If the product is already in the wishlist, update its quantity
      wishlist[existingIndex].quantity += 1;
    } else {
      // If the product is not in the wishlist, add it with quantity 1
      selectedProduct.quantity = 1;
      wishlist.push(selectedProduct);
    }
  
    updateWishlist();
  }
  
  function removeFromWishlist(index) {
    wishlist.splice(index, 1);
    updateWishlist();
  }
  
  function updateWishlist() {
    let wishlistContainer = document.getElementById("wishlist-container");
    wishlistContainer.innerHTML = "";
  
    for (let i = 0; i < wishlist.length; i++) {
      let wishlistItemDiv = document.createElement("div");
      wishlistItemDiv.className = "wishlist-item";
  
      wishlistItemDiv.innerHTML =
        '<img src="' +
        wishlist[i].imageUrl +
        '" width="100"><br><a href="' +
        wishlist[i].link +
        '">' +
        wishlist[i].name +
        '</a> <button class="remove-from-wishlist" onclick="removeFromWishlist(' +
        i +
        ')">Remove from Wishlist</button>';
  
      let quantityDiv = document.createElement("div");
      quantityDiv.textContent = "Quantity: " + wishlist[i].quantity;
      wishlistItemDiv.appendChild(quantityDiv);
  
      wishlistContainer.appendChild(wishlistItemDiv);
    }
  }