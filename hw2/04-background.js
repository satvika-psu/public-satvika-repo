window.addEventListener("load", () => {
  let intervalId;
  let isRunning = false;
  const defaultInterval = 3000;
  const body = document.body;
  const toggleBtn = document.getElementById("toggle-btn");
  const intervalInput = document.getElementById("interval-input");
  const errorMessage = document.getElementById("errorMessage");

  // Function to generate random rgba() color with low alpha
  function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random() * 0.5 + 0.2;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  // Function to change background color
  function changeBackgroundColor() {
    body.style.backgroundColor = generateRandomColor();
  }

  // Function to start color changing
  function startColorChange() {
    const intervalTime = Math.max(
      1000,
      intervalInput.value * 1000 || defaultInterval
    );
    intervalId = setInterval(changeBackgroundColor, intervalTime);
  }

  // Toggle function
  function toggleColorChange() {
    errorMessage.classList.add("visually-hidden");

    if (intervalInput.value < 1) {
      errorMessage.classList.remove("visually-hidden");
    } else {
      if (isRunning) {
        clearInterval(intervalId);
        toggleBtn.textContent = "Start";
        toggleBtn.classList.remove("btn-danger");
        toggleBtn.classList.add("btn-primary");
      } else {
        startColorChange();
        toggleBtn.textContent = "Stop";
        toggleBtn.classList.remove("btn-primary");
        toggleBtn.classList.add("btn-danger");
      }
      isRunning = !isRunning;
    }
  }

  // Event listener for the toggle button
  toggleBtn.addEventListener("click", toggleColorChange);

  // Event listener for the interval input
  changeBackgroundColor();
});
