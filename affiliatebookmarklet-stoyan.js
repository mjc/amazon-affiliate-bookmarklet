if (document.getElementById("ASIN"))
window.location = "http://www.amazon.com/dp/" + document.getElementById("ASIN").value + "/?tag=325iorg-20";
else alert("Can't find the product ID");