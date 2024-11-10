"use strict";

var category = ["Elexctronics", "Clothing", "Home", "Books"];

var products = [
  {
    name: "I-Phone",
    Price: "90000",
    Path: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202409_GEO_EMEA?wid=400&hei=260&fmt=png-alpha&.v=1723857138464",
  },
  {
    name: "MAC",
    Price: "250000",
    Path: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202410?wid=400&hei=260&fmt=png-alpha&.v=1728342368663",
  },
  {
    name: "Smart Watch",
    Price: "40000",
    Path: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838",
  },
];

// Short circuit operator to check if category exists
category;

category &&
  category.length > 0 &&
  category.forEach(function (v, i) {
    console.log(v, i);

    var listtag = document.createElement("li");
    console.log(listtag);

    listtag.innerHTML = v;
    document.querySelector("ul").append(listtag);
  });

  products && products.length > 0 && products.forEach(function (v, i){
    console.log(v, i);
    
    var divtag = document.createElement("div");
    console.log(divtag);

    divtag.className = "col-xl-4 text-center";

    var imgtag = document.createElement("img");
    var h2tag = document.createElement("h2");
    var ptag = document.createElement("p");

    divtag.append(imgtag, h2tag, ptag);

    imgtag.src = v.Path;
    imgtag.className= "img-fluid";
    h2tag.innerHTML = v.Price;
    ptag.innerHTML= v.name;
    document.getElementById("row").append(divtag);
  })
  
