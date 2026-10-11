export const IDLE = "IDLE";
export const SUBMITTING = "SUBMITTING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

const transitions = {
  [`${IDLE}:SUBMIT`]: SUBMITTING,
  [`${SUBMITTING}:RESOLVE`]: SUCCESS,
  [`${SUBMITTING}:REJECT`]: ERROR,
  [`${SUCCESS}:RESET`]: IDLE,
  [`${ERROR}:RESET`]: IDLE,
  [`${SUCCESS}:SUBMIT`]: SUBMITTING,
  [`${ERROR}:SUBMIT`]: SUBMITTING,
};

export function transition(state, event) {
  const nextState = transitions[`${state}:${event}`];
  return nextState === undefined ? state : nextState;
}
