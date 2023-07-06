function showSpecs(brand, model) {
  var specs = document.getElementById(brand + "-" + model + "-specs");
  if (specs.style.display === "block") {
    specs.style.display = "none";
  } else {
    specs.style.display = "block";
  }
}