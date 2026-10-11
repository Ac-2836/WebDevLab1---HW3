import { toRemaining, toParts } from "./countdown.js";
import {
  IDLE,
  SUBMITTING,
  SUCCESS,
  ERROR,
  transition,
} from "./form-state.js";
import { submitLanding } from "./mock-api.js";

const targetDateInput = document.querySelector("#target-date");
const countdownOutput = document.querySelector("#countdown");
const form = document.querySelector("#landing-form");
const formStatus = document.querySelector("#form-status");
const submitButton = form.querySelector('button[type="submit"]');
let timerId = null;
let state = IDLE;

function renderCountdown(targetIso) {
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

  renderCountdown(targetIso);
  timerId = setInterval(() => renderCountdown(targetIso), 1000);
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

function render() {
  const statusMessages = {
    [IDLE]: "",
    [SUBMITTING]: "Sending...",
    [SUCCESS]: "Thank you. Your message was sent.",
    [ERROR]: "Sending failed. Please try again.",
  };

  formStatus.textContent = statusMessages[state];
  submitButton.disabled = state === SUBMITTING;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  state = transition(state, "SUBMIT");
  render();

  const data = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  submitLanding(data)
    .then(() => {
      state = transition(state, "RESOLVE");
      render();
    })
    .catch(() => {
      state = transition(state, "REJECT");
      render();
    });
});
