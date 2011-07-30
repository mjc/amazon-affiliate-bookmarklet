if (document.getElementById('static_txt_preview')) {
  document.location.href = "http://bit.ly/?u=" + encodeURIComponent(document.getElementById('static_txt_preview').href);
}
else {
  alert("This bookmarklet only works on the Amazon Link Builder Page!");
};