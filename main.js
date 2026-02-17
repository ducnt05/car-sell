alert("Website đang bảo trì !")

document.getElementById("aboutBtn").addEventListener("click", function () {

  window.location.href = "about.html";
});
document.addEventListener("click", function() {
    document.getElementById("bgMusic").play();
}, { once: true });