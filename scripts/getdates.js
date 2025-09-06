var today = new Date();
var year = today.getFullYear();

var el = document.getElementById("currentyear");
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';

var lastMod = new Date(document.lastModified);
var lastModEl = document.getElementById("lastModified");
lastModEl.innerHTML = lastMod.toLocaleDateString("en-US", {dateStyle: "full"});