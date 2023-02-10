// tab
var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
  tabButtons.forEach(function(node){
      node.style.backgroundColor="";
      node.style.color="";
  });
  tabButtons[panelIndex].style.backgroundColor=colorCode;
  tabButtons[panelIndex].style.color="black";
  tabPanels.forEach(function(node){
      node.style.display="none";
  });
  tabPanels[panelIndex].style.display="block";
  tabPanels[panelIndex].style.backgroundColor="rgb(255, 255, 232)";
}
showPanel(0,'rgb(255, 178, 107)');
// tab


// card 2
 
function createcard2(name, price, isCategory, isPopular, preview) {
  
  var productcard = document.createElement("div");
  productcard.className = "card__2";

  var image = document.createElement("img");
  image.className = "card__image__2";
  image.src = preview;
  image.alt = name;
  productcard.appendChild(image);

  var datadiv = document.createElement("diV");
  datadiv.className = "card__data__2";

  var infodiv = document.createElement("diV");
  infodiv.className = "card__info";

  var productname = document.createElement("h2");
  productname.className = "card__info__h2";
  productname.innerText = name;

  var productdesc = document.createElement("p");
  productdesc.className = "card__info__p";
  productdesc.innerText = "description";

  var productprice = document.createElement("h3");
  productprice.className = "card__price";
  productprice.innerText = price + " " + "Rs";

  infodiv.appendChild(productname);
  infodiv.appendChild(productdesc);
  datadiv.appendChild(infodiv);
  datadiv.appendChild(productprice);
  productcard.appendChild(datadiv);


if (isCategory == "Tea") {
  var teaWrapper= document.getElementById("tea-wrapper");
  teaWrapper.appendChild(productcard);
}
else if(isCategory == "Milk"){
  var milkWrapper = document.getElementById("milk-wrapper");
  milkWrapper.appendChild(productcard);
}
else if(isCategory == "MilkShake"){
  var shakesWrapper = document.getElementById("shakes-wrapper");
  shakesWrapper.appendChild(productcard);
}
else if(isCategory == "Coolers"){
  var coolersWrapper = document.getElementById("coolers-wrapper");
  coolersWrapper.appendChild(productcard);
}
else if(isCategory == "Ice Cream"){
  var iceWrapper= document.getElementById("ice-wrapper");
  iceWrapper.appendChild(productcard);
}
else if(isCategory == "Sp"){
  var spWrapper = document.getElementById("sp-wrapper");
  spWrapper.appendChild(productcard);
}
else {
  alert("404");
}

}

var menuList = [
  {
   "id": "1",
   "name": "Dum Tea",
   "preview": "https://drive.google.com/uc?export=view&id=1Yx_g8LdtDe1vA7Nk5qIOtAjDVesKPKXO",
   "description": "",
   "isCategory": "Tea",
   "isPopular": false,
   "price": 10
  },
  {
   "id": "2",
   "name": "Lemon Tea",
   "preview": "https://drive.google.com/uc?export=view&id=1tVzYHOQWQyKiAXhLLsP5khpudBgmwRhP",
   "description": "",
   "isCategory": "Tea",
   "isPopular": true,
   "price": 15
  },
  {
   "id": "3",
   "name": "Ginger Tea",
   "preview": "https://drive.google.com/uc?export=view&id=1IbYXzQh7VjFDU4eZyXKJO_vYzPyb7z5q",
   "description": "",
   "isCategory": "Tea",
   "isPopular": false,
   "price": 15
  },
  {
   "id": "4",
   "name": "Masala Tea",
   "preview": "https://drive.google.com/uc?export=view&id=1rJMVJNmBuJ6f90jp4nJjGTUqpR6vC1ya",
   "description": "",
   "isCategory": "Tea",
   "isPopular": false,
   "price": 15
  },
  {
   "id": "5",
   "name": "Black Tea",
   "preview": "https://drive.google.com/uc?export=view&id=1OwIfRDpOI8zPqUE14Dx50lvREjCXyM5p",
   "description": "",
   "isCategory": "Tea",
   "isPopular": false,
   "price": 15
  },
  {
   "id": "6",
   "name": "Sugar Free Tea",
   "preview": "https://drive.google.com/uc?export=view&id=1mPpUDkmdseAQC3LtephqiZ__NOYGgxEF",
   "description": "",
   "isCategory": "Tea",
   "isPopular": false,
   "price": 20
  },
  {
   "id": "7",
   "name": "Bellam Tea",
   "preview": "https://drive.google.com/uc?export=view&id=1jLhtMdgWcmRMnYBzsHUCHI5D4A3U1kRB",
   "description": "",
   "isCategory": "Tea",
   "isPopular": false,
   "price": 20
  },
  {
   "id": "8",
   "name": "Ginger Lemon Tea",
   "preview": "https://drive.google.com/uc?export=view&id=1NHhNgbvotRL9xC_be2Dhj9dbdVKlAW9q",
   "description": "",
   "isCategory": "Tea",
   "isPopular": false,
   "price": 20
  },
  {
   "id": "9",
   "name": "Green Tea",
   "preview": "https://drive.google.com/uc?export=view&id=1mpZ1843-ppjMlAFxyjZwQFFNHHRCfDPS",
   "description": "",
   "isCategory": "Tea",
   "isPopular": false,
   "price": 20
  },
  {
   "id": "10",
   "name": "Badam Hot Tea",
   "preview": "https://drive.google.com/uc?export=view&id=1QP5__cCttgxg5dUiAqFKQCBTU-TyGDX7",
   "description": "",
   "isCategory": "Tea",
   "isPopular": false,
   "price": 20
  },
  {
   "id": "11",
   "name": "Ginger Bellam Tea",
   "preview": "https://drive.google.com/uc?export=view&id=15npDcA_KwY65f1dLHvnh__dNt-dy-mkx",
   "description": "",
   "isCategory": "Tea",
   "isPopular": true,
   "price": 20
  },
  {
   "id": "12",
   "name": "Milk",
   "preview": "https://drive.google.com/uc?export=view&id=1LAkbA1c2nA07BTe1NJnPqFi6ZOHJUu9e",
   "description": "",
   "isCategory": "Milk",
   "isPopular": false,
   "price": 15
  },
  {
   "id": "13",
   "name": "Coffee",
   "preview": "",
   "description": "https://drive.google.com/uc?export=view&id=11HiT-AGph5_VnbY15_gzhDGL855ea6q4",
   "isCategory": "Milk",
   "isPopular": false,
   "price": 20
  },
  {
   "id": "14",
   "name": "Filter Coffee",
   "preview": "https://drive.google.com/uc?export=view&id=1mMDlWvrBlC7veqrCEsNp8UK6sjxFmtw1",
   "description": "",
   "isCategory": "Milk",
   "isPopular": true,
   "price": 20
  },
  {
   "id": "15",
   "name": "Horlicks Milk",
   "preview": "https://drive.google.com/uc?export=view&id=14mk_VeCERE2_Vd-236vLeq6fdBvMh2d4",
   "description": "",
   "isCategory": "Milk",
   "isPopular": false,
   "price": 20
  },
  {
   "id": "16",
   "name": "Boost Milk",
   "preview": "https://drive.google.com/uc?export=view&id=14ulO1PNSu9rUZ7tXYclqtRBoGpL1qwFB",
   "description": "",
   "isCategory": "Milk",
   "isPopular": false,
   "price": 20
  },
  {
   "id": "17",
   "name": "Bornvita Milk",
   "preview": "https://drive.google.com/uc?export=view&id=147cBWYKUbsbirblEtRwpfBTxNWx2iVci",
   "description": "",
   "isCategory": "Milk",
   "isPopular": false,
   "price": 20
  },
  {
   "id": "18",
   "name": "Pepper Milk",
   "preview": "https://drive.google.com/uc?export=view&id=1B-rdjrsP4kcSngTe4WSavFAUga-fBu5A",
   "description": "",
   "isCategory": "Milk",
   "isPopular": false,
   "price": 20
  },
  {
   "id": "19",
   "name": "Hot Chocolate",
   "preview": "https://drive.google.com/uc?export=view&id=1cDOteVOSazsmIOVA61OxYk1G01pUlwMz",
   "description": "",
   "isCategory": "Milk",
   "isPopular": true,
   "price": 25
  },
  {
   "id": "20",
   "name": "Badam Milk",
   "preview": "https://drive.google.com/uc?export=view&id=1wFM62niMMPAHhz_XGhyW2XPI3vke1MiF",
   "description": "",
   "isCategory": "MilkShake",
   "isPopular": false,
   "price": 40
  },
  {
   "id": "21",
   "name": "Rose Milk",
   "preview": "https://drive.google.com/uc?export=view&id=1rM-6OEqJxoaQFkeroCY_xvjc_sy4d8Cq",
   "description": "",
   "isCategory": "MilkShake",
   "isPopular": true,
   "price": 40
  },
  {
   "id": "22",
   "name": "Banana Shake",
   "preview": "https://drive.google.com/uc?export=view&id=1RQtlUBNAQ1DXWlTy1STby39BCV8dTUzO",
   "description": "",
   "isCategory": "MilkShake",
   "isPopular": false,
   "price": 50
  },
  {
   "id": "23",
   "name": "Strawberry Shake",
   "preview": "https://drive.google.com/uc?export=view&id=1-RcQr5lpAu3mkeLwre1jCHXaK61NtMlE",
   "description": "",
   "isCategory": "MilkShake",
   "isPopular": false,
   "price": 60
  },
  {
   "id": "24",
   "name": "Vanilla Shake",
   "preview": "https://drive.google.com/uc?export=view&id=1ashydX8JaWTsPO9CzK8EJGfMuB06bACn",
   "description": "",
   "isCategory": "MilkShake",
   "isPopular": true,
   "price": 60
  },
  {
   "id": "25",
   "name": "Cold Coffee",
   "preview": "https://drive.google.com/uc?export=view&id=1GyEIQgD7zOgM70e9A269IGkmkhXDAFiJ",
   "description": "",
   "isCategory": "MilkShake",
   "isPopular": false,
   "price": 60
  },
  {
   "id": "26",
   "name": "Chocolate Shake",
   "preview": "https://drive.google.com/uc?export=view&id=1XPzrFuM7njTcgUQbvbroyHxhJUgTgb4p",
   "description": "",
   "isCategory": "MilkShake",
   "isPopular": false,
   "price": 70
  },
  {
   "id": "27",
   "name": "Black Currant",
   "preview": "https://drive.google.com/uc?export=view&id=1Fob8NcnOAA_29-ap0cI7CcSM54l0_Zzc",
   "description": "",
   "isCategory": "MilkShake",
   "isPopular": false,
   "price": 70
  },
  {
   "id": "28",
   "name": "Oreo Milk Shake",
   "preview": "https://drive.google.com/uc?export=view&id=1vLSSurLkJLaim4WfKr4o5QpTARQAhtYo",
   "description": "",
   "isCategory": "MilkShake",
   "isPopular": true,
   "price": 70
  },
  {
   "id": "29",
   "name": "Butterscotch Shake",
   "preview": "https://drive.google.com/uc?export=view&id=1J92aAsilJA3sc140vHp3-3EfQEL1tNED",
   "description": "",
   "isCategory": "MilkShake",
   "isPopular": false,
   "price": 70
  },
  {
   "id": "30",
   "name": "Kitkat Milk Shake",
   "preview": "https://drive.google.com/uc?export=view&id=1rH4hrDVpyTagQoue7PfgBbHR5LOqBNkY",
   "description": "",
   "isCategory": "MilkShake",
   "isPopular": false,
   "price": 80
  },
  {
   "id": "31",
   "name": "Dry Fruit Shake",
   "preview": "https://drive.google.com/uc?export=view&id=1mzfL12wpfM48Y6xtyUxfhDPl3pnGi5vH",
   "description": "",
   "isCategory": "MilkShake",
   "isPopular": true,
   "price": 80
  },
  {
   "id": "32",
   "name": "Vanilla Ice Cream",
   "preview": "https://drive.google.com/uc?export=view&id=1iH59eiuvYM_1wJkJQZZ8eiKyFHMXaK55",
   "description": "",
   "isCategory": "Ice Cream",
   "isPopular": false,
   "price": 40
  },
  {
   "id": "33",
   "name": "Strawberry Ice Cream",
   "preview": "https://drive.google.com/uc?export=view&id=1s8TaQDXJqAEzOsFa3z4DEQNr6tF7BF_s",
   "description": "",
   "isCategory": "Ice Cream",
   "isPopular": true,
   "price": 40
  },
  {
   "id": "34",
   "name": "Chocolate Ice Cream",
   "preview": "https://drive.google.com/uc?export=view&id=13zdMzQjWizKeDBob_O1-vZkMBFKuNTKF",
   "description": "",
   "isCategory": "Ice Cream",
   "isPopular": false,
   "price": 50
  },
  {
   "id": "35",
   "name": "Butterscotch Ice Cream",
   "preview": "https://drive.google.com/uc?export=view&id=1hHwIThRv2FXhHnMILn-t1VfsUd2LazgD",
   "description": "",
   "isCategory": "Ice Cream",
   "isPopular": false,
   "price": 60
  },
  {
   "id": "36",
   "name": "American Dry Fruit Ice Cream",
   "preview": "https://drive.google.com/uc?export=view&id=1h4CM_yPE30ivqv889Bk1vuOFZtWdlnzW",
   "description": "",
   "isCategory": "Ice Cream",
   "isPopular": true,
   "price": 60
  },
  {
   "id": "37",
   "name": "Lime Mint Cooler",
   "preview": "https://drive.google.com/uc?export=view&id=16HUXACtIBH8ztu7hZVz7PJCr-GjZzmN5",
   "description": "",
   "isCategory": "Coolers",
   "isPopular": true,
   "price": 40
  },
  {
   "id": "38",
   "name": "Ginger Lemon Ice Tea",
   "preview": "https://drive.google.com/uc?export=view&id=1p1WdjEDVdRb1Vq2u1y5TCgby7Z8QpwHp",
   "description": "",
   "isCategory": "Coolers",
   "isPopular": false,
   "price": 45
  },
  {
   "id": "39",
   "name": "Rose Lemonade",
   "preview": "https://drive.google.com/uc?export=view&id=1usdbuJxDPQMS0dGzuW-dTtLrrqB6Ep-x",
   "description": "",
   "isCategory": "Coolers",
   "isPopular": false,
   "price": 45
  },
  {
   "id": "40",
   "name": "Classic Lemonade",
   "preview": "https://drive.google.com/uc?export=view&id=1irzpEtcY1RGt8ghUBOupQRUtMG5HGiGW",
   "description": "",
   "isCategory": "Coolers",
   "isPopular": false,
   "price": 45
  },
  {
   "id": "41",
   "name": "Virgin Mojinto",
   "preview": "https://drive.google.com/uc?export=view&id=1Uy4vWK05DnVPm9sDzfqklmgJgDffZaxa",
   "description": "",
   "isCategory": "Coolers",
   "isPopular": true,
   "price": 45
  },
  {
   "id": "42",
   "name": "Mint Mojinto",
   "preview": "https://drive.google.com/uc?export=view&id=1Ri5YA0UboFQipl2swRCPtfIP6ObstlDJ",
   "description": "",
   "isCategory": "Coolers",
   "isPopular": true,
   "price": 50
  },
  {
   "id": "43",
   "name": "Orange Lemonade",
   "preview": "https://drive.google.com/uc?export=view&id=16E4-XJ_JdvQrS1JRyyt2maVy-T49DUDp",
   "description": "",
   "isCategory": "Coolers",
   "isPopular": false,
   "price": 50
  },
  {
   "id": "44",
   "name": "Fizi Mojinto",
   "preview": "https://drive.google.com/uc?export=view&id=1euIL5Si3dw38KMk6jkMJnPjUxS1eXUC9",
   "description": "",
   "isCategory": "Coolers",
   "isPopular": true,
   "price": 50
  },
  {
   "id": "45",
   "name": "Strawberry Mojinto",
   "preview": "https://drive.google.com/uc?export=view&id=1VmN9KPAXl0ZmpFPWowSmj6brrtWfGJnm",
   "description": "",
   "isCategory": "Coolers",
   "isPopular": false,
   "price": 50
  },
  {
   "id": "46",
   "name": "Blue Lagoon",
   "preview": "https://drive.google.com/uc?export=view&id=1JbSVNIA_nzDgKwysSH5zurKlERnNQSDu",
   "description": "",
   "isCategory": "Coolers",
   "isPopular": true,
   "price": 60
  },
  {
   "id": "47",
   "name": "Badam Shake",
   "preview": "https://drive.google.com/uc?export=view&id=1yXE0kP35dKNtkqcrXpCg_-PzbEMWfvx3",
   "description": "",
   "isCategory": "Sp",
   "isPopular": true,
   "price": 80
  },
  {
   "id": "48",
   "name": "Royal Dates Shake",
   "preview": "https://drive.google.com/uc?export=view&id=115QJufd4raEiCJAX7_uTnpxIDML4G-KY",
   "description": "",
   "isCategory": "Sp",
   "isPopular": false,
   "price": 99
  },
  {
   "id": "49",
   "name": "Mulberry Shake",
   "preview": "https://drive.google.com/uc?export=view&id=1U2NnqeOxcFTx_q0XttlVrhLlYPvVOeYu",
   "description": "",
   "isCategory": "Sp",
   "isPopular": false,
   "price": 99
  },
  {
   "id": "50",
   "name": "Cranberry Shake",
   "preview": "https://drive.google.com/uc?export=view&id=1RdjWzbAU6MCJo6mz7AamiqWVeQAMJt0S",
   "description": "",
   "isCategory": "Sp",
   "isPopular": false,
   "price": 99
  },
  {
   "id": "51",
   "name": "Blueberry Shake",
   "preview": "https://drive.google.com/uc?export=view&id=1xo_5N28eRHNHTUmwhRMLUrBV7xHS9QoF",
   "description": "",
   "isCategory": "Sp",
   "isPopular": false,
   "price": 99
  },
  {
   "id": "52",
   "name": "Pista Shake",
   "preview": "https://drive.google.com/uc?export=view&id=16HgX5zOoy9l85vbemhKpzbwqt1q2ISDV",
   "description": "",
   "isCategory": "Sp",
   "isPopular": false,
   "price": 99
  },
  {
   "id": "53",
   "name": "American Dry Fruits Shake",
   "preview": "https://drive.google.com/uc?export=view&id=1t_6-H97vdnjLudI7wlPm0ggqay-QBHSA",
   "description": "",
   "isCategory": "Sp",
   "isPopular": true,
   "price": 99
  }
];

for (var i = 0; i < menuList.length; i++) {
  createcard2(
    menuList[i].name,
    menuList[i].price,
    menuList[i].isCategory,
    menuList[i].isPopular,
    menuList[i].preview
  );
}

// card 2
