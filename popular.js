// popular
function createcard(name, price,isPopular, preview) {

    var productcard = document.createElement("div");
    productcard.className = "card";
  
    var image = document.createElement("img");
    image.className = "card__image";
    image.src = preview;
    image.alt = name;
    productcard.appendChild(image);
  
    var datadiv = document.createElement("diV");
    datadiv.className = "card__data";
  
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
    productprice.innerText = price;
  
    infodiv.appendChild(productname);
    infodiv.appendChild(productdesc);
    datadiv.appendChild(infodiv);
    datadiv.appendChild(productprice);
    productcard.appendChild(datadiv);
    var flexGrid = document.getElementById("news-slider");
    flexGrid.appendChild(productcard);
  
  }
  var popularList = [
    {
        "id": "1",
        "name": "Lemon Tea",
        "preview": "https://drive.google.com/uc?export=view&id=1tVzYHOQWQyKiAXhLLsP5khpudBgmwRhP",
        "description": "",
        "isPopular": true,
        "price": 15
    },
    {
        "id": "2",
        "name": "Ginger Bellam Tea",
        "preview": "https://drive.google.com/uc?export=view&id=15npDcA_KwY65f1dLHvnh__dNt-dy-mkx",
        "description": "",
        "isPopular": true,
        "price": 20
    },
    {
        "id": "3",
        "name": "Filter Coffee",
        "preview": "https://drive.google.com/uc?export=view&id=1mMDlWvrBlC7veqrCEsNp8UK6sjxFmtw1",
        "description": "",
        "isPopular": true,
        "price": 20
    },
    {
        "id": "4",
        "name": "Hot Chocolate",
        "preview": "https://drive.google.com/uc?export=view&id=1cDOteVOSazsmIOVA61OxYk1G01pUlwMz",
        "description": "",
        "isPopular": true,
        "price": 25
    },
    {
        "id": "5",
        "name": "Rose Milk",
        "preview": "https://drive.google.com/uc?export=view&id=1rM-6OEqJxoaQFkeroCY_xvjc_sy4d8Cq",
        "description": "",
        "isPopular": true,
        "price": 40
    },
    {
        "id": "6",
        "name": "Vanilla Shake",
        "preview": "https://drive.google.com/uc?export=view&id=1ashydX8JaWTsPO9CzK8EJGfMuB06bACn",
        "description": "",
        "isPopular": true,
        "price": 60
    },
    {
        "id": "7",
        "name": "Oreo Milk Shake",
        "preview": "https://drive.google.com/uc?export=view&id=1vLSSurLkJLaim4WfKr4o5QpTARQAhtYo",
        "description": "",
        "isPopular": true,
        "price": 70
    },
    {
        "id": "8",
        "name": "Dry Fruit Shake",
        "preview": "https://drive.google.com/uc?export=view&id=1mzfL12wpfM48Y6xtyUxfhDPl3pnGi5vH",
        "description": "",
        "isPopular": true,
        "price": 80
    },
    {
        "id": "9",
        "name": "Strawberry Ice Cream",
        "preview": "https://drive.google.com/uc?export=view&id=1s8TaQDXJqAEzOsFa3z4DEQNr6tF7BF_s",
        "description": "",
        "isPopular": true,
        "price": 40
    },
    {
        "id": "10",
        "name": "American Dry Fruit Ice Cream",
        "preview": "https://drive.google.com/uc?export=view&id=1h4CM_yPE30ivqv889Bk1vuOFZtWdlnzW",
        "description": "",
        "isPopular": true,
        "price": 60
    },
    {
        "id": "11",
        "name": "Lime Mint Cooler",
        "preview": "https://drive.google.com/uc?export=view&id=16HUXACtIBH8ztu7hZVz7PJCr-GjZzmN5",
        "description": "",
        "isPopular": true,
        "price": 40
    },
    {
        "id": "12",
        "name": "Virgin Mojinto",
        "preview": "https://drive.google.com/uc?export=view&id=1Uy4vWK05DnVPm9sDzfqklmgJgDffZaxa",
        "description": "",
        "isPopular": true,
        "price": 45
    },
    {
        "id": "13",
        "name": "Mint Mojinto",
        "preview": "https://drive.google.com/uc?export=view&id=1Ri5YA0UboFQipl2swRCPtfIP6ObstlDJ",
        "description": "",
        "isPopular": true,
        "price": 50
    },
    {
        "id": "14",
        "name": "Fizi Mojinto",
        "preview": "https://drive.google.com/uc?export=view&id=1euIL5Si3dw38KMk6jkMJnPjUxS1eXUC9",
        "description": "",
        "isPopular": true,
        "price": 50
    },
    {
        "id": "15",
        "name": "Blue Lagoon",
        "preview": "https://drive.google.com/uc?export=view&id=1JbSVNIA_nzDgKwysSH5zurKlERnNQSDu",
        "description": "",
        "isPopular": true,
        "price": 60
    },
    {
        "id": "16",
        "name": "Badam Shake",
        "preview": "https://drive.google.com/uc?export=view&id=1yXE0kP35dKNtkqcrXpCg_-PzbEMWfvx3",
        "description": "",
        "isPopular": true,
        "price": 80
    },
    {
        "id": "17",
        "name": "American Dry Fruits Shake",
        "preview": "https://drive.google.com/uc?export=view&id=1t_6-H97vdnjLudI7wlPm0ggqay-QBHSA",
        "description": "",
        "isPopular": true,
        "price": 99
    }
  ];
  for (var i = 0; i < popularList.length; i++) {
    createcard(
     popularList[i].name,
     popularList[i].price,
     popularList[i].isPopular,
     popularList[i].preview
    );
  }
  // popular