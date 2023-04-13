// Default increment for motion delays. Every delay should be relative to this value.
const DELAY_BASELINE = 1;

// Default increment for transition durations. Use as a relative.
const TRANSITION_BASELINE = 1;

export const MotionConstants = {
  delay: {
    fast: DELAY_BASELINE * 0.5,
    normal: DELAY_BASELINE,
    slow: DELAY_BASELINE * 2,
  },
  transition: {
    fast: TRANSITION_BASELINE * 0.5,
    normal: TRANSITION_BASELINE,
    slow: TRANSITION_BASELINE * 2,
  },
};
