const checkboxes = Array.from(document.querySelectorAll('input[name="habit"]'));
const completedCount = document.querySelector("#completed-count");
const totalCount = document.querySelector("#total-count");
const completionPercent = document.querySelector("#completion-percent");
const progressTrack = document.querySelector("#progress-track");
const progressFill = document.querySelector("#progress-fill");
const progressMessage = document.querySelector("#progress-message");
const resetButton = document.querySelector("#reset-button");
const todayLabel = document.querySelector("#today-label");
function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const storageKey = `wellnest-checkins-${getLocalDateKey()}`;

function loadCheckIns() {
  try {
    const savedValues = JSON.parse(localStorage.getItem(storageKey) || "[]");
    if (!Array.isArray(savedValues)) return [];
    return savedValues.filter((value) => checkboxes.some((checkbox) => checkbox.value === value));
  } catch (error) {
    console.warn("Wellnest could not load saved check-ins.", error);
    return [];
  }
}

function saveCheckIns() {
  try {
    const checkedValues = checkboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    localStorage.setItem(storageKey, JSON.stringify(checkedValues));
  } catch (error) {
    console.warn("Wellnest could not save check-ins.", error);
  }
}

function updateProgress() {
  const completed = checkboxes.filter((checkbox) => checkbox.checked).length;
  const total = checkboxes.length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  completedCount.textContent = String(completed);
  totalCount.textContent = String(total);
  completionPercent.textContent = `${percentage}%`;
  progressFill.style.width = `${percentage}%`;
  progressTrack.setAttribute("aria-valuenow", String(percentage));
  progressTrack.setAttribute("aria-valuetext", `${percentage}% complete`);

  if (percentage === 100) {
    progressMessage.textContent = "You made space for yourself today. Well done.";
  } else if (completed > 0) {
    progressMessage.textContent = "Every little step counts. Keep your own pace.";
  } else {
    progressMessage.textContent = "There’s no rush. Begin wherever you are.";
  }
}

function setTodayLabel() {
  const today = new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());
  todayLabel.textContent = `A FRESH PAGE FOR TODAY · ${today.toUpperCase()}`;
}

const savedCheckIns = new Set(loadCheckIns());
checkboxes.forEach((checkbox) => {
  checkbox.checked = savedCheckIns.has(checkbox.value);
  checkbox.addEventListener("change", () => {
    updateProgress();
    saveCheckIns();
  });
});

resetButton.addEventListener("click", () => {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  updateProgress();
  saveCheckIns();
  checkboxes[0]?.focus();
});

setTodayLabel();
updateProgress();