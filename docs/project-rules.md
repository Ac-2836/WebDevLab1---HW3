# Project Rules - Resilient Event Hub (Homework 3)

This file has two parts. Part A applies to every file in the repository. Part B applies to Homework 3 only. Read both before you change any code, together with TASK_DECOMPOSITION.md.

---

## Part A. General rules

Each rule lists the lecture slides it comes from.

### A1. Technology

- Use plain HTML5, modern CSS and ES6+ JavaScript. (Slides 6, 22)
- Do not use jQuery, Bootstrap, Tailwind, UI frameworks or external script CDNs. (Slide 6)
- Open the project through Live Server at http://localhost:5500. Never open files with file:///, because CORS, Web Audio and ES Modules fail. (Slide 3)
- Use the browser baseline for the target users. Do not depend on a feature that needs a polyfill. (Slide 12)

### A2. Code style

- Use const by default. Use let only when the value is reassigned. Never use var. (Slides 6, 22)
- Use querySelector and querySelectorAll to select elements. (Slide 22)
- Use Prettier to format code and ESLint to check it. Both are the project's code convention. (Slide 3 lists both as the tooling standard)
- Keep the configuration files .prettierrc and eslint.config.js in the repository root, so every contributor uses the same rules.
- Run npm run format and npm run lint before each commit.
- Keep indentation clean. Do not leave dead code or unused imports. (Slide 21)
- Do not add dependencies that the project does not need. (Slide 21)

### A3. HTML

- Use native semantic elements before generic containers such as div. (Slides 6, 7)
- Each page has one h1. Heading levels never skip. (Slide 8)
- Every form input has a visible label connected with for and id. Placeholders do not replace labels. (Slide 8)
- Every img has alt text, width and height. (Slide 9)
- Every page starts with lang="en", a UTF-8 charset and a viewport meta tag. (Slide 4)

### A4. CSS

- Put colours in CSS variables declared in :root. Do not write hex codes inside rules. (Slide 13)
- Use Flexbox for one-dimensional layouts and Grid for two-dimensional layouts. (Slides 16, 17)
- Use gap, not margin overrides, to space items in a flex or grid container. (Slide 16)
- Text contrast must reach at least 4.5:1 for normal text. (Slide 13, WCAG 2.2 AA)

### A5. Security

- Never place unescaped user input into the page with innerHTML. Use textContent. (Slides 6, 21)

### A6. Keyboard events

- Use the keydown event and read event.key. Do not use keyCode or keypress, which are obsolete. (Slide 23)

### A7. Layout and accessibility checks

- Check every layout at a 375px width first, then at desktop width. (Slides 6, 13, 21)
- The page must not scroll sideways at 375px. (Slide 13)
- The whole page must work with Tab and Enter. Every focused element must show a visible focus style. (Slides 13, 21)

### A8. Performance budgets

- Largest Contentful Paint at or below 2.5 s. (Slide 9)
- Interaction to Next Paint at or below 200 ms. (Slide 9)
- Cumulative Layout Shift at or below 0.1. (Slide 9)

### A9. Documentation sources

- Check features on MDN Web Docs, web.dev, or the W3C and WHATWG specifications. Do not follow outdated blog posts. (Slide 12)

### A10. Working with AI

- Read this file and TASK_DECOMPOSITION.md before the AI proposes any code change. (Slide 6)
- Decompose the work into sub-tasks before you write any prompt. (Slides 5, 20)
- One prompt covers one sub-task. A monolithic prompt for the whole assignment is not allowed. (Slides 5, 24, 25)
- Read the full diff before you commit. Do not commit code you do not understand. (Slides 2, 3, 20)
- The AI writes boilerplate. You own the architecture and verify that the code is correct. (Slide 3)
- Record each mistake the AI makes: the commit, what went wrong, and how you found it. (Slide 25)

### A11. Git

- Run git init at the start of every project. (Slide 3)
- Each sub-task is one atomic commit. (Slides 5, 20)
- Use the type(scope): message format, for example feat(css): responsive grid. (Slide 20)
- Commit messages come from TASK_DECOMPOSITION.md.

---

## Part B. Homework 3 rules

### B1. Countdown

- Compute the remaining time from the absolute target time and Date.now() on every tick. Never count ticks, and never add up interval steps. (Slide 25, drift-free countdown)
- Store the target as a UTC ISO 8601 string. Convert the user's local input with new Date(value).toISOString(). (Slide 25)
- Stop the interval when the remaining time reaches zero. (Slide 25)
- When the user changes the target, clear the previous interval before starting a new one. Two intervals must never run at the same time. (Slide 25)

### B2. Form state machine

- The state changes only through transition(state, event) in form-state.js. The UI reads the state and renders it. The UI does not decide the next state by itself. (Slide 25, state machine)
- The states are IDLE, SUBMITTING, SUCCESS and ERROR. Any move not listed in TASK_DECOMPOSITION.md is ignored. (Slide 25)
- form-state.js does not touch the DOM. (Slide 24 decoupling principle)

### B3. Double-submit prevention

- While the state is SUBMITTING, the submit handler does nothing. (Slide 25)
- The submit button is disabled while the state is SUBMITTING. (Slide 25)

### B4. Input sanitization and XSS

- Normalise every user input before validation and before sending: trim spaces, remove control characters, and enforce the maximum length. (Slide 25)
- Show every user text with textContent. Never use innerHTML for user data. (Slides 6, 21, 25)
- Validate with the native constraints first (required, minlength, maxlength, type="email"), then check the sanitized values. (Slide 8)

### B5. AI failure audit

- Create AI_FAILURE_AUDIT.md with exactly three defects found in AI-generated code. (Slide 25, 15 percent of the grade)
- Each defect records: description, diagnosis method (Git diff or DevTools breakpoint), the commit that introduced it, and the fix with its commit. (Slide 25)
- Record only defects that actually occurred. Do not invent defects to fill the file. (Slide 25, live defense)

### B6. Responsive and keyboard

- The form and the countdown must work at 375px without horizontal scrolling. (Slides 13, 26)
- Every control in the form must be reachable with Tab and usable with Enter. (Slide 26)

### B7. Development process

- Follow the commit order in TASK_DECOMPOSITION.md. The homework requires at least five atomic commits. (Slide 25)
- Send one sub-task per AI prompt. (Slides 24, 25)
- Be able to explain every line in the Git history during the live defense. (Slide 25)
