// Mailer
function sendMail(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  fetch("https://formspree.io/f/xovqaaon", {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      Accept: "application/json",
    },
  })
    .then(() => {
      window.location.href = "./send_mail.html";
    })
    .catch((error) => {
      console.log(error);
    });
}

// Cookie Banner
document.addEventListener("DOMContentLoaded", function () {
  var cookieBanner = document.getElementById("cookie-banner");
  var acceptCookiesButton = document.getElementById("accept-cookies");
  var declineCookiesButton = document.getElementById("decline-cookies");

  // Check if cookies have been accepted or declined
  if (
    localStorage.getItem("cookiesAccepted") !== "true" &&
    localStorage.getItem("cookiesDeclined") !== "true"
  ) {
    cookieBanner.style.display = "flex"; // or "block" based on your CSS
  } else {
    cookieBanner.style.display = "none"; // Hide the banner if already accepted or declined
  }

  // Set cookiesAccepted flag in localStorage and hide the banner
  acceptCookiesButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });

  // Set cookiesDeclined flag in localStorage and hide the banner
  declineCookiesButton.addEventListener("click", function () {
    localStorage.setItem("cookiesDeclined", "true");
    cookieBanner.style.display = "none";
    // Optionally: Redirect to a page or take action on decline
  });
});
