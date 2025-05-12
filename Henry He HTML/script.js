let imageVisible = false;
let shownOnce = false;

function showImage() {
  const image = document.getElementById("hiddenImage");
  const button = document.querySelector(".TheMightyHenryHeFirstButton");

  if (imageVisible) {
    image.style.display = "none";
    button.textContent = "Click to see the Letter";
  } else {
    image.style.display = "block";
    button.textContent = "Hide the Letter";

    if (!shownOnce) {
      alert("🎉 Congratulations on getting into Northwestern!");
      shownOnce = true;
    }
  }

  imageVisible = !imageVisible;
}

function showContactModal() {
  const modal = document.getElementById("contactModal");
  if (modal) {
    modal.style.display = "block";
  }
}

function hideContactModal() {
  const modal = document.getElementById("contactModal");
  if (modal) {
    modal.style.display = "none";
  }
}
function showTable() {
  const modal = document.getElementById("Transfer");
  if (modal) {
    modal.style.display = "block";
  }
}

function hideTable() {
  const modal = document.getElementById("Transfer");
  if (modal) {
    modal.style.display = "none";
  }
}