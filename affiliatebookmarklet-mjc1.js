var tag = "325iorg-20";
var ASIN;
var element = document.getElementById("ASIN");
if (element) {
  ASIN = element.value;
}
else if (window.location.href.match(/^.*(?:\/dp\/)([\w]{10})\/?.*$/)) {
  // found /dp/ASINGOESHERE/ in url
  ASIN = RegExp.$1;
}
if (ASIN) {
  window.location = "//" + window.location.host + "/dp/" + ASIN + "/?tag=" + tag;
}
else {
  // last ditch effort
  // try homepage affiliate link trick: http://www.freeopenbook.com/amazon-hacks/amazonhks-chp-5-sect-3.html
  // also https://affiliate-program.amazon.com/gp/associates/network/build-links/text/main.html
  // using "//" will auto-choose protocol (http or https)
  window.location = "http://www.amazon.com/gp/redirect.html?ie=UTF8&tag=" + tag + "&location=" + encodeURIComponent(window.location);
}