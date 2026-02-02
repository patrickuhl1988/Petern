/**
 * Heute Petern? – Dein Entscheidungshelfer
 * 90 % Ausrede, 10 % darfst du gehen.
 */

// Ausreden: locker, vage, relatable
const AUSREDEN = [
  "Bin heute irgendwie komplett durch.",
  "Morgen vielleicht? Heute ist nicht mein Tag.",
  "Hab grad so gar keine Energie dafür.",
  "Irgendwas ist dazwischengekommen. Nächstes Mal!",
  "Fühl mich nicht so. Lieber Couch.",
  "Kopf sagt ja, Körper sagt nein. Körper gewinnt.",
  "Wetter passt nicht. Oder so. Egal.",
  "Hab mich schon eingerichtet. Geht nicht mehr.",
  "Bin mental schon im Pyjama.",
  "Heute ist mein „Nichts-tun-Tag“. War schon immer so geplant.",
  "Die Couch hat mich gerufen. Ich muss.",
  "Hab vergessen, dass ich was anderes vorhatte. Tja.",
  "Energie-Level: leer. Sorry.",
  "Irgendwie kein Bock. Keine Ahnung warum.",
  "Morgen bin ich motivierter. Versprochen. Vielleicht.",
  "Bin schon im Entspannungsmodus. Zu spät.",
  "Hab was mit mir selbst vor. (Netflix.)",
  "Heute nicht. Einfach heute nicht.",
  "Klingt anstrengend. Nee.",
  "Mein Bett/Couch braucht mich mehr.",
  "Bin schon zu Hause. Aus dem Haus gehen? In dieser Economy?",
  "Hab mir die Haare nicht gewaschen. Du willst das nicht.",
  "Social Battery: 0 %. Muss laden.",
  "Irgendwas mit dem Rücken. Oder so.",
  "Heute ist Ruhetag. Seit Januar.",
];

// Positive Antworten (10 %)
const JA_ANTWORTEN = [
  "Okay, du darfst. Aber nur, weil du gefragt hast.",
  "Ja, los. Geh. Wir sehen uns auf der Couch später.",
  "Ausnahmsweise: Ja. Genieß es.",
  "Die Couch verzeiht dir. Dieses eine Mal.",
  "Okay, du hast gewonnen. Geh raus, du Rebell.",
];

// Petern-Level-Namen
const PETERN_LEVELS = [
  "Petern-Level: Sofa-Pilot",
  "Petern-Level: Couch-König:in",
  "Petern-Level: Meister:in des Absagens",
  "Petern-Level: Profi-Peterner",
  "Petern-Level: Legende der Ausrede",
];

// DOM
const activityInput = document.getElementById("activity");
const btnDecide = document.getElementById("btn-decide");
const resultSection = document.getElementById("result-section");
const resultCard = document.getElementById("result-card");
const resultIcon = document.getElementById("result-icon");
const resultTitle = document.getElementById("result-title");
const resultText = document.getElementById("result-text");
const resultSub = document.getElementById("result-sub");
const peternLevelEl = document.getElementById("petern-level");
const btnCopy = document.getElementById("btn-copy");
const btnAgain = document.getElementById("btn-again");
const historyList = document.getElementById("history-list");
const btnClearHistory = document.getElementById("btn-clear-history");
const dailyExcuseEl = document.getElementById("daily-excuse");
const btnNewDaily = document.getElementById("btn-new-daily");

// State
let lastResult = null;
let history = JSON.parse(localStorage.getItem("petern-history") || "[]");

// Zufälliges Element aus Array
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Entscheidung: 90 % Petern, 10 % Go
function decide(activity) {
  const normalized = (activity || "irgendwas").trim() || "irgendwas";
  const petern = Math.random() < 0.9;

  if (petern) {
    const excuse = pick(AUSREDEN);
    const level = pick(PETERN_LEVELS);
    lastResult = {
      type: "petern",
      activity: normalized,
      text: excuse,
      sub: `„${normalized}" – lieber nicht.`,
      level,
      copyText: excuse,
    };
  } else {
    const yes = pick(JA_ANTWORTEN);
    lastResult = {
      type: "go",
      activity: normalized,
      text: yes,
      sub: `„${normalized}" – darfst du machen.`,
      level: null,
      copyText: yes,
    };
  }

  return lastResult;
}

// Ergebnis anzeigen
function showResult(result) {
  resultSection.classList.remove("hidden");
  resultCard.classList.remove("petern", "go");
  resultCard.classList.add(result.type);

  resultIcon.textContent = result.type === "petern" ? "🛋️" : "👍";
  resultTitle.textContent = result.type === "petern" ? "Lieber nicht." : "Darfst du.";
  resultText.textContent = result.text;
  resultSub.textContent = result.sub;
  peternLevelEl.textContent = result.level || "";
  peternLevelEl.style.display = result.level ? "block" : "none";

  // In Verlauf speichern
  history.unshift({
    activity: result.activity,
    type: result.type,
    text: result.text,
    time: new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }),
  });
  history = history.slice(0, 10);
  localStorage.setItem("petern-history", JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  if (history.length === 0) {
    historyList.innerHTML = "<li>Noch keine Entscheidungen.</li>";
    return;
  }
  historyList.innerHTML = history
    .map(
      (h) =>
        `<li><strong>${h.activity}</strong> → ${h.type === "petern" ? "🛋️" : "👍"} ${h.text.slice(0, 40)}… (${h.time})</li>`
    )
    .join("");
}

// Tages-Ausrede (tagesbasiert, aber mit Button neu wählbar)
function getDailyExcuseKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

function loadDailyExcuse() {
  const key = "petern-daily";
  const dateKey = "petern-daily-date";
  const stored = localStorage.getItem(key);
  const storedDate = localStorage.getItem(dateKey);

  if (stored && storedDate === getDailyExcuseKey()) {
    dailyExcuseEl.textContent = stored;
    return;
  }
  setNewDailyExcuse();
}

function setNewDailyExcuse() {
  const excuse = pick(AUSREDEN);
  dailyExcuseEl.textContent = excuse;
  localStorage.setItem("petern-daily", excuse);
  localStorage.setItem("petern-daily-date", getDailyExcuseKey());
}

// Event-Handler
function onDecide() {
  const activity = activityInput.value.trim() || "irgendwas";
  const result = decide(activity);
  showResult(result);
}

btnDecide.addEventListener("click", onDecide);

activityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") onDecide();
});

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    activityInput.value = chip.dataset.activity;
    activityInput.focus();
  });
});

btnAgain.addEventListener("click", () => {
  resultSection.classList.add("hidden");
  activityInput.focus();
});

btnCopy.addEventListener("click", () => {
  if (!lastResult) return;
  navigator.clipboard.writeText(lastResult.copyText).then(() => {
    const old = btnCopy.textContent;
    btnCopy.textContent = "✓ Kopiert!";
    setTimeout(() => (btnCopy.textContent = old), 1500);
  });
});

btnClearHistory.addEventListener("click", () => {
  history = [];
  localStorage.setItem("petern-history", JSON.stringify(history));
  renderHistory();
});

btnNewDaily.addEventListener("click", setNewDailyExcuse);

// Init
loadDailyExcuse();
renderHistory();
