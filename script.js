
const targetDate = new Date("2025-12-31 23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = targetDate - now;

  if (gap <= 0) {
    document.querySelector(".countdown").innerHTML = "<h1>Happy New Year 🎉</h1>";
    clearInterval(timer);
    return;
  }

  // Time calculations
  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((gap % (1000 * 60)) / 1000);

  // Update DOM
  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
}

// Run every second
const timer = setInterval(updateCountdown, 1000);
updateCountdown(); 

