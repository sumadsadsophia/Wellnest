const habits = [
  { id: "water", icon: "💧", name: "Drink a glass of water", detail: "A small refresh for your body and brain" },
  { id: "move", icon: "🌿", name: "Take a movement break", detail: "Stretch, walk, or just change your scenery" },
  { id: "breathe", icon: "☁️", name: "Take five slow breaths", detail: "Let your shoulders drop for a moment" },
  { id: "meal", icon: "🍊", name: "Eat something nourishing", detail: "A snack counts. Be gentle with yourself." },
  { id: "rest", icon: "🌙", name: "Make space for a wind-down", detail: "Give yourself a softer landing tonight" },
];

const reminders = [
  "A few sips of water can be a nice reset between classes.",
  "A short walk counts as movement. It doesn't need to be a workout.",
  "Rest is part of your progress, not a reward you have to earn.",
  "Try looking away from your screen and relaxing your shoulders.",
];

const habitList = document.querySelector("#habit-list");
const progressCount = document.querySelector("#progress-count");
const progressPercent = document.querySelector("#progress-percent");
const progressRing = document.querySelector("#progress-ring");
const tipText = document.querySelector("#tip-text");
const tipNumber = document.querySelector("#tip-number");
const storageKey = `wellnest-${new Date().toLocaleDateString("en-CA")}`;

let completedHabits = loadCompletedHabits();
let reminderIndex = 0;

function loadCompletedHabits() {
  try {
    const savedHabits = JSON.parse(localStorage.getItem(storageKey) || "[]");
    if (!Array.isArray(savedHabits)) return [];
    return savedHabits.filter((id) => habits.some((habit) => habit.id === id));
  } catch (error) {
    console.warn("Could not load Wellnest progress from browser storage.", error);
    return [];
  }
}

function saveCompletedHabits() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(completedHabits));
  } catch (error) {
    console.warn("Could not save Wellnest progress to browser storage.", error);
  }
}

function renderHabits() {
  habitList.innerHTML = habits
    .map((habit) => {
      const isComplete = completedHabits.includes(habit.id);
      return `
        <button
          class="habit-item${isComplete ? " is-complete" : ""}"
          type="button"
          data-habit-id="${habit.id}"
          aria-pressed="${isComplete}"
        >
          <span class="habit-icon" aria-hidden="true">${habit.icon}</span>
          <span class="habit-text">
            <span class="habit-name">${habit.name}</span>
            <span class="habit-detail">${habit.detail}</span>
          </span>
          <span class="habit-check" aria-hidden="true">✓</span>
        </button>
      `;
    })
    .join("");

  updateProgress();
}

function updateProgress() {
  const completedCount = completedHabits.length;
  const percent = Math.round((completedCount / habits.length) * 100);
  progressCount.textContent = `${completedCount} of ${habits.length}`;
  progressPercent.textContent = `${percent}%`;
  progressRing.style.background = `conic-gradient(#668a6c ${percent}%, #d4e1d2 ${percent}%)`;
  progressRing.setAttribute("aria-label", `${percent}% of today's habits completed`);
}

function showNextReminder() {
  reminderIndex = (reminderIndex + 1) % reminders.length;
  tipText.textContent = reminders[reminderIndex];
  tipNumber.textContent = `${String(reminderIndex + 1).padStart(2, "0")} / ${String(reminders.length).padStart(2, "0")}`;
}

function setTodayDate() {
  const today = new Date();
  document.querySelector("#today-date").textContent = new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(today).toUpperCase();
}

habitList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-habit-id]");
  if (!button) return;

  const habitId = button.dataset.habitId;
  completedHabits = completedHabits.includes(habitId)
    ? completedHabits.filter((id) => id !== habitId)
    : [...completedHabits, habitId];

  saveCompletedHabits();
  renderHabits();
});

document.querySelector("#reset-button").addEventListener("click", () => {
  completedHabits = [];
  saveCompletedHabits();
  renderHabits();
});

document.querySelector("#next-tip").addEventListener("click", showNextReminder);

setTodayDate();
renderHabits();