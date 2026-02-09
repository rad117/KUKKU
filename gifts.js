function openGift(link, message) {
  // Show reveal box
  document.getElementById("giftReveal").style.display = "block";

  // Set message text
  document.getElementById("giftText").innerText = message;

  // Set button action
  document.getElementById("giftBtn").onclick = function () {
    window.location.href = link;
  };
}