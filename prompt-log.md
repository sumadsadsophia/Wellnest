# Task 1 — Sector Selection

**Innovation Sector:** Health & Wellness Innovation

**Project Name:** Wellnest

**Target Users:** College students and young adults in Boac, Marinduque.

**Local Challenge:** College students may struggle to maintain healthy daily routines because of academic workloads, busy schedules, and limited time for self-care.

**Proposed Solution:** Wellnest is a simple, responsive, frontend-only wellness website that encourages students to build healthier daily habits through an interactive checklist, progress tracking, and general wellness reminders.

**Key Features:**

1. **Daily Wellness Checklist** — Allows users to mark daily wellness activities as completed.
2. **Habit Tracker** — Displays completed habits and the user's daily progress.
3. **Wellness Tips** — Provides general reminders about hydration, movement, sleep routines, and study breaks.

**Expected Outcome:** A functional single-page website that helps students monitor their daily wellness activities and encourages consistent self-care habits.

## Task 2 — Zero-Shot Prompting

**Objective:** Observe the initial website generated using a simple prompt without examples or detailed instructions.

**Technique:** Zero-Shot Prompting

**Exact Prompt:**

> Create a simple webpage called Wellnest that helps college students maintain healthy daily habits through wellness activities and tips. Use HTML, CSS, and JavaScript.

### Actual Copilot Output

Copilot generated **Wellnest — Your Daily Reset**, a wellness website featuring a navigation bar, welcome section, daily wellness checklist, habit tracker, wellness tips, and reset button. Its JavaScript tracks five daily habits, calculates progress, cycles through reminders, and saves daily progress using local storage.

### What Worked

- Included the three main features: wellness checklist, habit tracker, and wellness tips.
- Implemented habit completion, progress calculation, reset functionality, and daily progress storage.
- Included accessibility attributes and viewport settings for responsive design.

### What Needs Improvement

- Test all features in a browser to confirm they work correctly.
- Improve checklist accessibility and verify keyboard navigation.
- Check the mobile layout and ensure the HTML, CSS, and JavaScript files are properly connected.

### Next Action / Verification

Save the original code in `outputs/task2-zero-shot/`. Test the website’s features and mobile layout, record any issues, and use a more detailed prompt with specific features, constraints, accessibility requirements, and acceptance criteria to improve the next version.

## Task 3 — Structured Prompting

**Objective:** Improve the relevance and quality of the generated Wellnest website using prompt anatomy.

**Technique:** Role, task, context, constraints, expected output, and acceptance criteria.

**Exact Prompt:** Act as an experienced frontend web developer. Build a responsive, single-page wellness website called Wellnest for college students and young adults in Boac, Marinduque, who may struggle to maintain healthy routines because of academic workloads and limited time for self-care.

Include three core features: (1) a daily wellness checklist with activities that users can mark as completed, (2) a habit tracker that displays the number and percentage of completed activities and updates immediately when a checkbox changes, and (3) general wellness tips about hydration, gentle movement, sleep routines, and study breaks.

Use semantic HTML, CSS, and vanilla JavaScript only. Do not use a backend, database, authentication, external APIs, or frontend frameworks. Use fictional demonstration content and do not present the website as a medical service.

Create index.html, style.css, and script.js. Design a clean, modern, welcoming interface with a calm wellness color palette, readable typography, clear spacing, and responsive layouts for mobile and desktop. Use accessible form labels and native checkboxes.

Acceptance criteria: The page displays all three features; checking or unchecking an activity updates the completed count, percentage, and progress indicator immediately; the page remains usable on narrow mobile screens; the HTML files are correctly connected; and the interface has clear headings and keyboard-accessible controls.

Provide the complete code for each file and explain where each file should be saved.

**Actual Copilot Output:** The generated code includes a welcome section, daily wellness checklist with five activities, habit tracker with a progress bar and percentage, wellness reminders, and a reset button. It also includes responsive CSS, semantic HTML, native checkboxes, accessibility attributes, and JavaScript for updating and saving daily check-ins using local storage.

**What Worked:** The prompt produced a more detailed and student-focused interface.

The three required wellness features are included.

The progress bar and percentage update when activities are checked or unchecked.

Native checkboxes, accessible labels, keyboard focus styles, and responsive layouts improve usability.

Local storage preserves the day's check-ins, and the reset button clears them.

**What Needs Improvement:** Test the code in a browser to confirm that all features work as intended.

Check the mobile layout, keyboard navigation, and saved progress behavior.

Verify that all three files are correctly connected and that no console errors occur.

**Next Action / Verification:** Test the checklist, progress indicator, reset button, mobile layout, keyboard accessibility, and file connections. Save the output in outputs/task3-structured-prompt/ and compare it with Task 2 to evaluate improvements.

## Task 4A — Few-Shot Prompting

**Objective:** Determine whether examples improve the consistency of generated wellness checklist content.

**Technique:** Few-shot prompting.

**Exact Prompt:** Act as a frontend developer working on Wellnest, a wellness website for college students and young adults in Boac, Marinduque.

Create additional daily wellness checklist items using the exact format shown in these examples.

**Example 1**

Item: Have a glass of water

Category: Hydration

Description: A refreshing pause between classes.

**Example 2**

Item: Stretch or take a short walk

Category: Movement

Description: A little movement, at your own pace.

Using these examples, generate four additional wellness checklist items about taking study breaks, eating nourishing food, maintaining a calming sleep routine, and practicing mindful breathing.

Requirements:

- Follow the same Item, Category, and Description format.
- Keep the item names short and the descriptions friendly, clear, and encouraging.
- Make the activities realistic for busy college students.
- Use educational wellness suggestions only; do not make medical claims.
- Render the generated items as a checklist using semantic HTML and native checkboxes.
- Use HTML, CSS, and vanilla JavaScript only.
- Keep the existing Wellnest design and calm color palette consistent.
- Do not add a backend, database, authentication, external APIs, or frontend frameworks.
- If modifying existing files, explain which files changed and preserve the existing checklist and habit tracker functionality.
Provide the generated checklist code and explain where it belongs in the existing Wellnest project.

**Actual Copilot Output:** Copilot generated four additional checklist activities: taking a study break, enjoying a nourishing snack, creating a bedtime wind-down routine, and taking a mindful breathing pause. The generated HTML includes activity names, descriptions, category labels, and native checkboxes. The JavaScript tracks completed activities, updates the progress percentage and progress bar, saves check-ins using `localStorage`, displays the current date, and provides a reset button.

**What Worked:** The examples helped establish a clear format and a friendly, encouraging tone for the new checklist items. The additional activities cover different aspects of student wellness and fit the existing Wellnest design. The JavaScript also supports the habit tracker by updating progress and saving daily check-ins.

**What Needs Improvement:** Some generated activities overlap with existing checklist items. For example, the original checklist already includes taking a study break, enjoying a nourishing meal or snack, and winding down before bedtime. The original items also do not all have category labels, so the formatting is not fully consistent. The new items should be reviewed to remove unnecessary repetition and standardize their presentation.

**Next Action / Verification:** Review all checklist items for consistency and duplicates. Test the native checkboxes, completed and total counts, progress percentage, progress bar, saved daily check-ins, and reset button in a browser. Verify that the displayed total matches the actual number of checklist items and that existing Wellnest features continue to work.

## Task 4B — Role Assignment

**Objective:** Examine Wellnest from a specialized accessibility perspective.

**Technique:** Role Assignment

**Exact Prompt:**

Act as a frontend accessibility reviewer. Examine my Wellnest website for college students in Boac, Marinduque. Review the actual HTML, CSS, and JavaScript implementation for semantic HTML, heading structure, checkbox labels, keyboard navigation, visible focus indicators, color contrast, readable text, and mobile usability.

Identify the most important accessibility issues you can verify from the supplied code. For each issue, explain why it matters and recommend a targeted correction without expanding the project's scope. Do not claim that a problem exists unless you can identify evidence in the code. Do not rewrite the entire website. Provide a concise list of findings and a practical verification procedure.

**Actual Copilot Output:**

The accessibility review should examine the website's semantic HTML, heading hierarchy, checkbox labels, keyboard navigation, focus indicators, color contrast, text readability, and responsive layout. The existing code uses semantic elements, native checkboxes with associated labels, a labeled progress bar with ARIA attributes, visible focus styles, and responsive CSS media queries. Potential concerns to investigate include small text sizes, color contrast, and navigation layout on narrow screens. These findings should be confirmed through browser testing.

**What Worked:**

Assigning Copilot the role of an accessibility reviewer focused its analysis on usability and accessibility rather than adding new features. The prompt also required evidence from the actual code and targeted corrections, helping keep the review relevant to the existing Wellnest project.

**What Needs Improvement:**

Some text is very small, including habit descriptions, navigation links, and wellness reminders. The color contrast of muted text and focus indicators should be measured. Mobile navigation and content spacing also need to be checked at narrow viewport widths. Although the code contains focus indicators and semantic HTML, these features alone do not guarantee full accessibility.

**Next Action / Verification:**

Run the Playwright responsive-layout test at viewport widths of 320, 360, 375, 480, 680, 768, and 1024 pixels. Check the results for horizontal overflow and cramped navigation. Then manually test keyboard navigation, checkbox operation, reset-button focus, and visible focus indicators. Use a contrast checker to verify text and interface colors. Apply targeted CSS corrections if problems are confirmed, then retest the website to ensure that the checklist, progress tracker, local storage, and reset functionality still work.

## Task 5 — Structured Analysis and Refinement

**Objective:** Identify and correct a technical weakness in the Wellnest implementation.

**Exact Prompt:**
Review my current Wellnest frontend implementation against the original project requirements.

The website must provide a daily wellness checklist, a habit tracker with an accurate completed count and percentage, and general wellness tips. It must use semantic HTML, CSS, and vanilla JavaScript, and remain responsive on mobile devices.

Analyze the actual code provided. Identify the two most important implementation issues or weaknesses, prioritizing problems that affect functionality, accessibility, or mobile usability. For each issue, point to the relevant code and explain the smallest appropriate correction.

Select one meaningful correction and provide the revised code needed to implement it. Then give me a step-by-step procedure to verify the fix in the browser. Do not assume that a problem exists without evidence, do not rewrite unrelated parts of the website, and distinguish between a proposed fix and a verified result.


**Actual Copilot Output:**
Copilot identified two issues: the checklist storage key uses a UTC date instead of the browser's local date, which may cause check-ins to be associated with the wrong day, and several checklist entries describe overlapping activities. It recommended using the local date for storage and merging or removing duplicate checklist items. It also provided a proposed correction and browser verification procedure.

**What Worked:**
Copilot identified specific weaknesses in the existing JavaScript and HTML, explained their potential effects, and suggested targeted corrections without rewriting the entire website.

**What Needs Improvement:**
The proposed correction still needs to be tested in the browser. The overlapping checklist entries also need to be reviewed to ensure each checkbox represents a distinct activity.

**Next Action / Verification:**
Replace the original storage key with the proposed `getLocalDateKey()` function in `script.js`. Set the browser timezone to `Asia/Manila`, check a habit, and reload the page to verify that the check-in persists. After local midnight, verify that a new day's checklist starts separately. Record the actual test results before marking the correction as successful.

## Task 6 — Compare the Prompting Techniques and Write Your Reflection

### Comparison Table

| Prompting Technique | What I Observed |
|---|---|
| Zero-Shot | Copilot generated an initial version of Wellnest based on the basic instructions. The output provided a starting point, but some details needed further review and refinement. |
| Structured Prompt | Specifying the role, context, constraints, and acceptance criteria helped make the expected features and requirements clearer. |
| Few-Shot | Providing examples helped guide Copilot in generating additional wellness checklist items that followed the requested format more consistently. |
| Role Assignment | Asking Copilot to act as a frontend accessibility reviewer helped identify concerns such as small text, color contrast, and mobile usability that needed verification. |
| Structured Analysis | Copilot identified the UTC versus local date issue in the checklist storage key and overlapping checklist activities. It proposed using a local-date function, but browser testing is still needed to verify the correction. |

### Reflection

Through these prompting experiments, I learned that different prompting techniques help improve different aspects of the Wellnest project. Zero-shot prompting provided an initial starting point, while structured prompting made the requirements clearer. Few-shot prompting helped maintain consistency when generating checklist items. Role assignment focused the review on accessibility and usability, while structured analysis helped identify a specific technical issue and propose a correction.

I also learned that a detailed prompt does not automatically guarantee correct results. Copilot's suggestions still need to be reviewed against the actual code and tested in the browser. Overall, combining clear instructions, examples, specialized roles, and systematic verification helped me improve my approach to developing and refining Wellnest.