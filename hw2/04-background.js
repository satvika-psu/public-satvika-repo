window.addEventListener("load", () => {
  let intervalId;
  let isRunning = false;

  const body = document.body;
  const toggleBtn = document.getElementById("toggle-btn");
  const intervalInput = document.getElementById("interval-input");

  // Function to generate random rgba() color with low alpha
  function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random() * 0.5 + 0.2;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  // Function to start color changing
  function startColorChange() {
    const intervalTime = (intervalInput.value || 3) * 1000;
    intervalId = setInterval(() => {
      body.style.backgroundColor = generateRandomColor();
    }, intervalTime);
  }

  // Event listener for the toggle button
  toggleBtn.addEventListener("click", () => {
    if (isRunning) {
      // Stop the background color change
      clearInterval(intervalId);
      toggleBtn.textContent = "Start";
      toggleBtn.classList.remove("btn-danger");
      toggleBtn.classList.add("btn-primary");
    } else {
      // Start the background color change
      startColorChange();
      toggleBtn.textContent = "Stop";
      toggleBtn.classList.remove("btn-primary");
      toggleBtn.classList.add("btn-danger");
    }
    isRunning = !isRunning;
  });
});
