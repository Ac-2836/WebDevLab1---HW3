import { toRemaining, toParts } from "./countdown.js";

const targetDateInput = document.querySelector("#target-date");
const countdownOutput = document.querySelector("#countdown");
let timerId = null;

function render(targetIso) {
  const remaining = toRemaining(targetIso, Date.now());

  if (remaining === 0) {
    clearInterval(timerId);
    timerId = null;
    countdownOutput.textContent = "The event has started.";
    return;
  }

  const { days, hours, minutes, seconds } = toParts(remaining);
  countdownOutput.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

function start(targetIso) {
  if (timerId !== null) {
    clearInterval(timerId);
  }

  render(targetIso);
  timerId = setInterval(() => render(targetIso), 1000);
}

targetDateInput.addEventListener("change", (event) => {
  const value = event.target.value;

  if (value === "") {
    return;
  }

  const date = new Date(value);

  if (isNaN(date.getTime())) {
    countdownOutput.textContent = "Enter a valid date.";
    return;
  }

  start(date.toISOString());
});
