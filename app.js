function openPopup(name) {
  let popups = document.getElementById("pop-ups");
  let popup = document.getElementById(name);
  popups.style.display = "block";
  popups.offsetWidth;
  popup.style.display = "block";
  popup.offsetWidth;
  popups.style.opacity = 1;
  popup.style.opacity = 1;

  let overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  overlay.offsetWidth;
  overlay.style.opacity = 1;
}

function closePopup(name) {
  let popups = document.getElementById("pop-ups");
  let popup = document.getElementById(name);
  popups.style.opacity = 0;
  popups.offsetWidth;
  popup.style.opacity = 0;
  popup.offsetWidth;
  setTimeout(() => {
    popups.style.display = "none";
  }, 500);
  setTimeout(() => {
    popup.style.display = "none";
  }, 500);

  let overlay = document.getElementById("overlay");
  overlay.style.opacity = 0;
  overlay.offsetWidth;
  setTimeout(() => {
    overlay.style.display = "none";
  }, 500);
}
