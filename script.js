let timer; // to store the interval
let targetDate;

function startCountdown() {
  // Clear any existing timer
  clearInterval(timer);

  // Get user input
  const input = document.getElementById("datetime-input").value;
  if (!input) {
    alert("Please select a date and time!");
    return;
  }

  targetDate = new Date(input).getTime();

  // Update every second
  timer = setInterval(updateCountdown, 1000);
  updateCountdown(); // run once immediately
}

function updateCountdown() {
  const now = new Date().getTime();
  const gap = targetDate - now;

  if (gap <= 0) {
    document.querySelector(".timer-row").innerHTML = "<h2>⏰ Time's up!</h2>";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((gap % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
}
