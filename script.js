/**
 * Heute Petern? – Dein Entscheidungshelfer
 * 90 % Ausrede, 10 % darfst du gehen.
 */

// Ausreden: locker, vage, relatable + Peters Klassiker (Leo, Annka, Technik, Arbeit …)
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
  // Peters Klassiker
  "Leo ist heute total unruhig. Schaff's nicht.",
  "Kind ist krank. Muss daheim bleiben.",
  "Annka ist gestresst, ich muss unterstützen.",
  "Erkältung. Oder Allergie. Egal, fühl mich nicht gut.",
  "Spülmaschine muss noch … und dann Update auf dem Rechner.",
  "Update läuft. Dauert ewig. Heute nichts.",
  "Arbeit hat reingegrätscht. Nächstes Mal.",
  "Müdigkeit. Einfach Müdigkeit.",
  "Download läuft noch. Kann nicht weg.",
  "Irgendwas mit dem Dienst. Kurzfristig dazwischengekommen.",
];

// Positive Antworten (10 %)
const JA_ANTWORTEN = [
  "Okay, du darfst. Aber nur, weil du gefragt hast.",
  "Ja, los. Geh. Wir sehen uns auf der Couch später.",
  "Ausnahmsweise: Ja. Genieß es.",
  "Die Couch verzeiht dir. Dieses eine Mal.",
  "Okay, du hast gewonnen. Geh raus, du Rebell.",
];

// Alibi-Sprachnachrichten (klingen wie echte Sprachnachrichten)
const ALIBI_SPRACHNACHRICHTEN = [
  "Hey, sorry … bin heute total durch, schaff's irgendwie nicht. Nächstes Mal?",
  "Ähm, also … mir geht's grad nicht so gut, ich bleib heute lieber daheim. Sorry!",
  "Hey! Irgendwas ist dazwischengekommen, ich muss passen. Wir machen's bald nochmal, ja?",
  "Sorry, hab mich schon eingerichtet … heute geht's nicht mehr. Morgen vielleicht?",
  "Hey, bin mental schon im Pyjama. Heute leider nein. Danke dass du fragst!",
  "Also … Kopf sagt ja, Körper sagt nein. Heute gewinnt der Körper. Nächstes Mal!",
  "Hey! Hab so gar keine Energie heute. Lieber Couch. Wir sehen uns bald!",
  "Sorry, heute ist nicht mein Tag. Irgendwie durch. Danke fürs Verständnis!",
  "Hey … etwas ist dazwischengekommen. Schaff's heute nicht. Bis bald!",
  "Ähm, ich fühl mich nicht so. Heute lieber nicht. Nächstes Mal bin ich dabei!",
  "Hey, Social Battery ist leer. Muss laden. Sonst bald wieder!",
  "Sorry, hab was mit mir selbst vor … also Couch. Nächstes Mal!",
  "Hey! Wetter passt nicht. Oder so. Egal – heute bleib ich daheim. Sorry!",
  "Also … heute ist Ruhetag. Seit Januar. Nächstes Mal, versprochen!",
  "Hey, irgendwie kein Bock heute. Keine Ahnung warum. Danke!",
  "Sorry … die Couch hat mich gerufen. Heute muss ich. Bis bald!",
  "Hey! Hab vergessen, dass ich was anderes vorhatte. Tja. Nächstes Mal!",
  "Ähm … heute nicht. Einfach heute nicht. Danke dass du fragst!",
  "Hey, klingt anstrengend. Heute nee. Wir machen bald was!",
  "Sorry, mein Bett braucht mich mehr. Heute pass ich. Bis bald!",
  "Hey … hab mir die Haare nicht gewaschen. Du willst das nicht. Nächstes Mal!",
  "Also, heute ist mein Nichts-tun-Tag. War schon immer so geplant. Sorry!",
  "Hey! Bin schon zu Hause. Rausgehen … heute nicht. Danke!",
  "Sorry, morgen vielleicht? Heute ist nicht mein Tag. Bis bald!",
  "Hey … Energie-Level leer. Sorry. Sonst bald wieder!",
  // Peter-Alibis (Leo, Annka, Technik, Arbeit)
  "Hey, Leo ist heute total unruhig … schaff's nicht. Nächstes Mal!",
  "Sorry, Kind ist krank, muss daheim bleiben. Danke!",
  "Hey … Annka ist gestresst, ich muss unterstützen. Bis bald!",
  "Ähm, Erkältung. Oder Allergie. Fühl mich nicht gut. Sorry!",
  "Hey! Update läuft noch, dauert ewig. Heute nichts. Nächstes Mal!",
  "Sorry, Arbeit hat reingegrätscht. Kurzfristig. Bis bald!",
  "Hey … Download läuft noch, kann nicht weg. Morgen vielleicht?",
  "Also, Spülmaschine und dann Update … heute geht's nicht. Danke!",
  "Hey, Müdigkeit. Einfach Müdigkeit. Nächstes Mal bin ich dabei!",
];

// Petern-Level-Namen
const PETERN_LEVELS = [
  "Petern-Level: Sofa-Pilot",
  "Petern-Level: Couch-König:in",
  "Petern-Level: Meister:in des Absagens",
  "Petern-Level: Profi-Peterner",
  "Petern-Level: Legende der Ausrede",
  "Petern-Level: Peteritis Maxima",
];

// Peter-Standardphrasen
const STANDARDPHRASEN = [
  "Mal schauen.",
  "Ich meld mich später.",
  "Ist gerade schwierig.",
  "Muss ich kurz mit Annka klären.",
  "Je nachdem wie Leo drauf ist.",
  "Nicht so lange vielleicht.",
  "Irgendwann mal.",
  "Sag ich dir Bescheid.",
  "Schauen wir.",
  "Weiß ich noch nicht so genau.",
  "Muss ich mir überlegen.",
  "Klingt gut, aber … mal schauen.",
];

// Exit-Strategien (wenn man doch zugesagt hat)
const EXIT_STRATEGIEN = [
  "„Nicht so lange vielleicht.“",
  "„Je nachdem wie Leo drauf ist.“",
  "„Ich schau, dass ich mal vorbeikomme.“",
  "„Ohne Garantie, aber ich versuch's.“",
  "„Kurz vorbeischauen geht vielleicht.“",
  "„Muss ich mit Annka absprechen, wie lang.“",
  "„So gegen … mal schauen, ob ich schaff.“",
  "„Keine Ahnung ob ich lange kann.“",
  "„Ich meld mich, wenn ich losfahr.“",
  "„Wenn es passt, komme ich.“",
];

// Peteritis-Diagnosen (humorvoll)
const PETERITIS_DIAGNOSEN = [
  "Peteritis leichte Form: Du denkst oft „mal schauen“. Heilbar durch konkrete Termine.",
  "Peteritis Maxima: Spontane Erschöpfung vor jedem Termin. Einzige Heilung: Gruppendruck oder Bastis Geburtstag.",
  "Chronische Verbindlichkeitsvermeidung. Symptom: „Ich meld mich später.“ Therapie: Peter-Gebrauchsanweisung befolgen.",
  "Peteritis positiv. Du bist Meister:in des unverbindlichen Lebens. Couch + später = natürlicher Zustand.",
  "Subklinische Peteritis: Rennrad und Trips = „irgendwann mal“. Prognose: stabil, keine Besserung in Sicht.",
  "Peteritis mit Exit-Strategie: Du sagst Ja und baust direkt „nicht so lange“ ein. Klassiker.",
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
const alibiTextEl = document.getElementById("alibi-text");
const btnAlibi = document.getElementById("btn-alibi");
const btnCopyAlibi = document.getElementById("btn-copy-alibi");
const standardphraseTextEl = document.getElementById("standardphrase-text");
const btnStandardphrase = document.getElementById("btn-standardphrase");
const exitStrategyTextEl = document.getElementById("exit-strategy-text");
const btnExit = document.getElementById("btn-exit");
const peteritisResultEl = document.getElementById("peteritis-result");
const btnPeteritis = document.getElementById("btn-peteritis");

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

// Ausreden-Bot: Alibi-Sprachnachricht
let lastAlibi = null;

function generateAlibiSprachnachricht() {
  lastAlibi = pick(ALIBI_SPRACHNACHRICHTEN);
  alibiTextEl.textContent = lastAlibi;
  alibiTextEl.classList.add("alibi-generated");
}

btnAlibi.addEventListener("click", generateAlibiSprachnachricht);

btnCopyAlibi.addEventListener("click", () => {
  if (!lastAlibi) return;
  navigator.clipboard.writeText(lastAlibi).then(() => {
    const old = btnCopyAlibi.textContent;
    btnCopyAlibi.textContent = "✓ Kopiert!";
    setTimeout(() => (btnCopyAlibi.textContent = old), 1500);
  });
});

// Collapse: Wer ist Peter? + Gebrauchsanweisung
function setupCollapse(triggerId, contentId) {
  const trigger = document.getElementById(triggerId);
  const content = document.getElementById(contentId);
  if (!trigger || !content) return;
  trigger.addEventListener("click", () => {
    const open = content.hidden;
    content.hidden = !open;
    trigger.setAttribute("aria-expanded", open);
    trigger.classList.toggle("open", open);
  });
  content.hidden = true;
}
setupCollapse("btn-wer-ist-peter", "wer-ist-peter-content");
setupCollapse("btn-gebrauchsanweisung", "gebrauchsanweisung-content");

// Peter-Standardphrasen
function generateStandardphrase() {
  standardphraseTextEl.textContent = pick(STANDARDPHRASEN);
}
btnStandardphrase.addEventListener("click", generateStandardphrase);

// Exit-Strategie
function generateExitStrategy() {
  exitStrategyTextEl.textContent = pick(EXIT_STRATEGIEN);
}
btnExit.addEventListener("click", generateExitStrategy);

// Peteritis-Check
function runPeteritisCheck() {
  peteritisResultEl.textContent = pick(PETERITIS_DIAGNOSEN);
  peteritisResultEl.classList.add("peteritis-done");
}
btnPeteritis.addEventListener("click", runPeteritisCheck);

// Init
loadDailyExcuse();
renderHistory();
