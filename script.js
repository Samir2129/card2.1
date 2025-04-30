
document.getElementById("photoInput").addEventListener("change", function (e) {
  const reader = new FileReader();
  reader.onload = function (event) {
    const img = document.getElementById("uploadedImage");
    img.src = event.target.result;
    img.style.display = "block";
  };
  reader.readAsDataURL(e.target.files[0]);
});
