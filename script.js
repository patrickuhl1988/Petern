/**
 * Heute Petern? – Dein Entscheidungshelfer
 * 90 % Ausrede, 10 % darfst du gehen.
 * DE / EN language support
 */

// ========== TRANSLATIONS ==========
const TRANSLATIONS = {
  de: {
    // UI
    title: "🛋️ Heute Petern?",
    tagline: "Dein Entscheidungshelfer für den inneren Couch-Potato",
    whoIsPeter: "👤 Wer ist Peter?",
    manual: "📋 Peter-Gebrauchsanweisung",
    whatsOn: "Was steht an?",
    activityPlaceholder: "z.B. Feiern, Sport, Kino, Treffen...",
    btnDecide: "Soll ich oder soll ich nicht?",
    quickSelect: "Schnellauswahl:",
    copyExcuse: "📋 Ausrede kopieren",
    decideAgain: "Nochmal entscheiden",
    copied: "✓ Kopiert!",
    alibiTitle: "🎙️ Ausreden-Bot – Alibi-Sprachnachricht",
    alibiIntro: "Klick auf „Sprachnachricht generieren" – dann hast du einen Text zum Vorlesen oder Senden.",
    generateAlibi: "🎙️ Sprachnachricht generieren",
    copy: "📋 Kopieren",
    historyTitle: "📜 Letzte Entscheidungen",
    clearHistory: "Verlauf leeren",
    dailyTitle: "🎲 Petern des Tages",
    newDailyExcuse: "Neue Tages-Ausrede",
    phrasesTitle: "💬 Peter-Standardphrasen",
    phrasesIntro: "„Mal schauen", „Ich meld mich später" …",
    newPhrase: "Neue Phrase",
    exitTitle: "🚪 Exit-Strategie (wenn du doch zugesagt hast)",
    exitIntro: "Bau dir eine Hintertür ein.",
    generateExit: "Exit-Strategie generieren",
    peteritisTitle: "🩺 Peteritis-Check",
    peteritisIntro: "Bin ich petern-krank?",
    measurePeteritis: "Peteritis messen",
    measureAgain: "Nochmal messen",
    footer: "Mit 90 % Wahrscheinlichkeit sagt dir diese App, was du eh schon denkst. 🛋️",
    noHistory: "Noch keine Entscheidungen.",
    resultPetern: "Lieber nicht.",
    resultGo: "Darfst du.",
    defaultActivity: "irgendwas",
    manualIntro: "So erreichst du Peter (oder dich selbst):",
    manual1: "Druck rausnehmen – wenn andere planen und keinen Druck machen, steigt die Teilnahmechance.",
    manual2: "Konkrete Termine vorschlagen – er schlägt selten selbst neue Daten vor.",
    manual3: "Annka und Leo einbeziehen – wenn sie dabei sind, kommt er eher (dann aber zeitlich begrenzt).",
    manual4: "„Nicht so lange" akzeptieren – dann baut er weniger Exit-Strategien ein.",
    manual5: "Gaming/Home-Aktivität anbieten – geht eher, wenn es bequem und zu Hause ist.",
    manual6: "Bei neuem Grill / neuer Idee: schnell einen festen Termin machen, sonst versandet es.",
    peter1: "Peter (*1987), Beamter (Polizist), verheiratet mit Annka, Vater von Leo (1) und Emilia (12). Verdient gut, achtet auf sein Auftreten – und will bloß nicht negativ auffallen.",
    peter2: "🛋️ Petern = geplantes Nichtstun: selten klares Ja/Nein. Standards: „Mal schauen“, „Ich meld mich später“, „Ist gerade schwierig“. Liebt Couch, Cola Zero, iPad, ruhige Abende. Aktivitäten existieren oft nur theoretisch.",
    peter3: "🧠 Typisch: 90 % Ausrede, 10 % Teilnahme. Wenn er zusagt: Exit-Strategien („nicht so lange“, „je nachdem wie Leo drauf ist“). Klassiker: Kind unruhig/krank, Annka gestresst, Erkältung, Spülmaschine, Update, Arbeit, Müdigkeit. Technik-Ausreden besonders beliebt.",
    peter4: "👨‍👩‍👧‍👦 Annka hat mehr Einfluss; Peter macht viel im Haushalt, ordnet sich oft unter. Wenn Annka und Leo dabei sind, kommt er eher – dann aber zeitlich begrenzt. Eigene Einladungen selten, Absagen planbar. Früher aktiv/sportlich, heute: Rennrad, Trips → „Irgendwann mal“. Kein Bösewicht – Meister des unverbindlichen Lebens. Natürlicher Zustand: Couch + später.",
    peter5: "🩺 Peteritis / Peteritis Maxima (fiktiv): Verbindlichkeitsvermeidung, spontane Erschöpfung vor Terminen. Heilbar nur durch Gruppendruck oder außergewöhnliche Motivation.",
  },
  en: {
    title: "🛋️ Petern Today?",
    tagline: "Your decision helper for the inner couch potato",
    whoIsPeter: "👤 Who is Peter?",
    manual: "📋 Peter's User Manual",
    whatsOn: "What's on?",
    activityPlaceholder: "e.g. Party, Sports, Cinema, Meet-up...",
    btnDecide: "Should I or shouldn't I?",
    quickSelect: "Quick select:",
    copyExcuse: "📋 Copy excuse",
    decideAgain: "Decide again",
    copied: "✓ Copied!",
    alibiTitle: "🎙️ Excuse Bot – Alibi Voice Message",
    alibiIntro: "Click \"Generate voice message\" – then you have a text to read aloud or send.",
    generateAlibi: "🎙️ Generate voice message",
    copy: "📋 Copy",
    historyTitle: "📜 Recent decisions",
    clearHistory: "Clear history",
    dailyTitle: "🎲 Petern of the day",
    newDailyExcuse: "New daily excuse",
    phrasesTitle: "💬 Peter's standard phrases",
    phrasesIntro: "\"We'll see\", \"I'll let you know later\" …",
    newPhrase: "New phrase",
    exitTitle: "🚪 Exit strategy (when you said yes)",
    exitIntro: "Build yourself a back door.",
    generateExit: "Generate exit strategy",
    peteritisTitle: "🩺 Peteritis check",
    peteritisIntro: "Am I petern-sick?",
    measurePeteritis: "Measure Peteritis",
    measureAgain: "Measure again",
    footer: "With 90% probability, this app tells you what you were already thinking. 🛋️",
    noHistory: "No decisions yet.",
    resultPetern: "Better not.",
    resultGo: "You're allowed.",
    defaultActivity: "something",
    manualIntro: "How to reach Peter (or yourself):",
    manual1: "Reduce pressure – when others plan and don't push, participation chance increases.",
    manual2: "Suggest concrete dates – he rarely suggests new dates himself.",
    manual3: "Include Annka and Leo – if they're coming, he's more likely (but time-limited).",
    manual4: "Accept \"not too long\" – then he builds fewer exit strategies.",
    manual5: "Offer gaming/home activities – more likely when it's comfortable and at home.",
    manual6: "New grill / new idea: quickly set a firm date, or it fizzles out.",
    peter1: "Peter (*1987), civil servant (police officer), married to Annka, father of Leo (1) and Emilia (12). Earns well, cares about his appearance – and just doesn't want to stand out negatively.",
    peter2: "🛋️ Petern = planned inactivity: rarely a clear yes/no. Standards: \"We'll see\", \"I'll let you know later\", \"It's tricky right now\". Loves couch, Coke Zero, iPad, quiet evenings. Activities often only exist in theory.",
    peter3: "🧠 Typical: 90% excuse, 10% participation. When he agrees: exit strategies (\"not too long\", \"depends how Leo's doing\"). Classics: child restless/sick, Annka stressed, cold, dishwasher, update, work, fatigue. Tech excuses especially popular.",
    peter4: "👨‍👩‍👧‍👦 Annka has more influence; Peter does a lot at home, often defers. When Annka and Leo are coming, he's more likely – but time-limited. Own invitations rare, declining predictable. Used to be active/sporty, now: road bike, trips → \"Someday\". Not a villain – Master of the non-committal life. Natural state: couch + later.",
    peter5: "🩺 Peteritis / Peteritis Maxima (fictional): commitment avoidance, spontaneous exhaustion before appointments. Curable only through peer pressure or extraordinary motivation.",
  },
};

// Sprachumschaltung – global fuer onclick="setPeternLang('en')" (wird beim Klick aufgerufen)
window.setPeternLang = function(lang) {
  if (lang !== "de" && lang !== "en") return;
  currentLang = lang;
  try { localStorage.setItem("petern-lang", lang); } catch (_) {}
  if (typeof applyTranslations === "function") applyTranslations(true);
  document.querySelectorAll(".lang-btn").forEach(function(btn) {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
};

// Ausreden: locker, vage, relatable + Peters Klassiker (Leo, Annka, Technik, Arbeit …)
const AUSREDEN_DE = [
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

const AUSREDEN_EN = [
  "I'm completely drained today somehow.",
  "Maybe tomorrow? Today's not my day.",
  "I have zero energy for that right now.",
  "Something came up. Next time!",
  "Don't feel like it. Couch sounds better.",
  "Head says yes, body says no. Body wins.",
  "Weather doesn't fit. Or something. Whatever.",
  "Already settled in. Too late now.",
  "Mentally already in my PJs.",
  "Today's my do-nothing day. Was always planned that way.",
  "The couch is calling. I must obey.",
  "Forgot I had something else planned. Oops.",
  "Energy level: empty. Sorry.",
  "Just no motivation. No idea why.",
  "I'll be more motivated tomorrow. Promise. Maybe.",
  "Already in relaxation mode. Too late.",
  "I have plans with myself. (Netflix.)",
  "Not today. Just not today.",
  "Sounds exhausting. Nope.",
  "My bed/couch needs me more.",
  "Already home. Leave the house? In this economy?",
  "Didn't wash my hair. You don't want that.",
  "Social battery: 0%. Must recharge.",
  "Something with my back. Or whatever.",
  "Today's rest day. Since January.",
  "Leo's super restless today. Can't make it.",
  "Kid's sick. Have to stay home.",
  "Annka's stressed, I need to support.",
  "Cold. Or allergy. Anyway, don't feel well.",
  "Dishwasher still needs to … and then update on the laptop.",
  "Update running. Takes forever. Nothing today.",
  "Work got in the way. Next time.",
  "Tired. Just tired.",
  "Download still running. Can't leave.",
  "Something with the shift. Came up last minute.",
];

// Positive Antworten (10 %)
const JA_ANTWORTEN_DE = [
  "Okay, du darfst. Aber nur, weil du gefragt hast.",
  "Ja, los. Geh. Wir sehen uns auf der Couch später.",
  "Ausnahmsweise: Ja. Genieß es.",
  "Die Couch verzeiht dir. Dieses eine Mal.",
  "Okay, du hast gewonnen. Geh raus, du Rebell.",
];

const JA_ANTWORTEN_EN = [
  "Okay, you can go. But only because you asked.",
  "Yeah, go ahead. See you on the couch later.",
  "Exception: Yes. Enjoy it.",
  "The couch forgives you. This one time.",
  "Okay, you win. Go out, you rebel.",
];

// Alibi-Sprachnachrichten (klingen wie echte Sprachnachrichten)
const ALIBI_SPRACHNACHRICHTEN_DE = [
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

const ALIBI_SPRACHNACHRICHTEN_EN = [
  "Hey, sorry … I'm totally drained today, can't make it. Next time?",
  "Um, so … I'm not feeling great, I'll stay home today. Sorry!",
  "Hey! Something came up, I have to pass. We'll do it again soon, okay?",
  "Sorry, already settled in … can't do it today. Maybe tomorrow?",
  "Hey, mentally already in my PJs. Sorry, no today. Thanks for asking!",
  "So … head says yes, body says no. Body wins today. Next time!",
  "Hey! Zero energy today. Couch wins. See you soon!",
  "Sorry, not my day today. Kind of drained. Thanks for understanding!",
  "Hey … something came up. Can't make it today. See you soon!",
  "Um, I don't feel like it. Not today. I'll join next time!",
  "Hey, social battery's empty. Must recharge. See you soon!",
  "Sorry, have plans with myself … meaning couch. Next time!",
  "Hey! Weather doesn't fit. Or whatever – staying home today. Sorry!",
  "So … rest day today. Since January. Next time, promise!",
  "Hey, just no motivation today. No idea why. Thanks!",
  "Sorry … the couch is calling. Today I must. See you soon!",
  "Hey! Forgot I had something else planned. Oops. Next time!",
  "Um … not today. Just not today. Thanks for asking!",
  "Hey, sounds exhausting. Nope today. We'll do something soon!",
  "Sorry, my bed needs me more. Passing today. See you soon!",
  "Hey … didn't wash my hair. You don't want that. Next time!",
  "So, today's my do-nothing day. Was always planned. Sorry!",
  "Hey! Already home. Going out … not today. Thanks!",
  "Sorry, maybe tomorrow? Not my day today. See you soon!",
  "Hey … energy level empty. Sorry. See you soon!",
  "Hey, Leo's super restless today … can't make it. Next time!",
  "Sorry, kid's sick, have to stay home. Thanks!",
  "Hey … Annka's stressed, I need to support. See you soon!",
  "Um, cold. Or allergy. Don't feel well. Sorry!",
  "Hey! Update still running, takes forever. Nothing today. Next time!",
  "Sorry, work got in the way. Last minute. See you soon!",
  "Hey … download still running, can't leave. Maybe tomorrow?",
  "So, dishwasher and then update … can't today. Thanks!",
  "Hey, tired. Just tired. I'll join next time!",
];

// Petern-Level-Namen
const PETERN_LEVELS_DE = [
  "Petern-Level: Sofa-Pilot",
  "Petern-Level: Couch-König:in",
  "Petern-Level: Meister:in des Absagens",
  "Petern-Level: Profi-Peterner",
  "Petern-Level: Legende der Ausrede",
  "Petern-Level: Peteritis Maxima",
];

const PETERN_LEVELS_EN = [
  "Petern-Level: Sofa Pilot",
  "Petern-Level: Couch King/Queen",
  "Petern-Level: Master of Declining",
  "Petern-Level: Pro Peterner",
  "Petern-Level: Legend of Excuses",
  "Petern-Level: Peteritis Maxima",
];

// Peter-Standardphrasen
const STANDARDPHRASEN_DE = [
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

const STANDARDPHRASEN_EN = [
  "We'll see.",
  "I'll let you know later.",
  "It's tricky right now.",
  "Need to check with Annka first.",
  "Depends how Leo's doing.",
  "Maybe not for too long.",
  "Someday.",
  "I'll tell you.",
  "We'll see.",
  "Not sure yet.",
  "Need to think about it.",
  "Sounds good, but … we'll see.",
];

// Exit-Strategien (wenn man doch zugesagt hat)
const EXIT_STRATEGIEN_DE = [
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

const EXIT_STRATEGIEN_EN = [
  "\"Maybe not for too long.\"",
  "\"Depends how Leo's doing.\"",
  "\"I'll try to swing by.\"",
  "\"No guarantees, but I'll try.\"",
  "\"Quick stop might work.\"",
  "\"Need to check with Annka how long.\"",
  "\"Around … we'll see if I can make it.\"",
  "\"No idea if I can stay long.\"",
  "\"I'll text when I'm heading out.\"",
  "\"If it works, I'll come.\"",
];

// Peteritis-Fragen mit Optionen (score 0–3: höher = mehr Petern)
const PETERITIS_QUESTIONS_DE = [
  {
    q: "Wann hast du zuletzt einen Termin abgesagt?",
    opts: [
      { t: "Heute", s: 3 },
      { t: "Gestern", s: 3 },
      { t: "Diese Woche", s: 2 },
      { t: "Diesen Monat", s: 1 },
      { t: "Kann mich nicht erinnern", s: 2 },
      { t: "Nie – ich gehe immer hin", s: 0 },
    ],
  },
  {
    q: "Wann warst du zuletzt so richtig aktiv (Sport, Party, Ausgehen)?",
    opts: [
      { t: "Heute", s: 0 },
      { t: "Diese Woche", s: 0 },
      { t: "Diesen Monat", s: 1 },
      { t: "Vor Monaten", s: 2 },
      { t: "Kann mich nicht erinnern", s: 2 },
      { t: "Nie – Couch ist genug", s: 3 },
    ],
  },
  {
    q: "Wie oft sagst du „Mal schauen" oder „Ich meld mich später" pro Woche?",
    opts: [
      { t: "Nie", s: 0 },
      { t: "1–2 mal", s: 1 },
      { t: "3–5 mal", s: 2 },
      { t: "Täglich", s: 3 },
      { t: "Weiß nicht – automatisch", s: 3 },
    ],
  },
];

const PETERITIS_QUESTIONS_EN = [
  {
    q: "When did you last cancel an appointment?",
    opts: [
      { t: "Today", s: 3 },
      { t: "Yesterday", s: 3 },
      { t: "This week", s: 2 },
      { t: "This month", s: 1 },
      { t: "Can't remember", s: 2 },
      { t: "Never – I always show up", s: 0 },
    ],
  },
  {
    q: "When were you last really active (sports, party, going out)?",
    opts: [
      { t: "Today", s: 0 },
      { t: "This week", s: 0 },
      { t: "This month", s: 1 },
      { t: "Months ago", s: 2 },
      { t: "Can't remember", s: 2 },
      { t: "Never – couch is enough", s: 3 },
    ],
  },
  {
    q: "How often do you say „We'll see" or „I'll let you know later" per week?",
    opts: [
      { t: "Never", s: 0 },
      { t: "1–2 times", s: 1 },
      { t: "3–5 times", s: 2 },
      { t: "Daily", s: 3 },
      { t: "Don't know – it's automatic", s: 3 },
    ],
  },
];

// Diagnosen nach Gesamtscore (0–9)
const PETERITIS_DIAGNOSES_DE = {
  low: [
    "Peteritis negativ! Du bist fast zu zuverlässig. Ein bisschen Petern schadet nie. 🏆",
    "Leichte Form: Du hast die Couch im Griff. Noch. Prognose: gut.",
  ],
  mid: [
    "Peteritis leichte Form: Du denkst oft „mal schauen". Heilbar durch konkrete Termine.",
    "Chronische Verbindlichkeitsvermeidung. Symptom: „Ich meld mich später." Therapie: Peter-Gebrauchsanweisung befolgen.",
    "Subklinische Peteritis: Rennrad und Trips = „irgendwann mal". Prognose: stabil.",
  ],
  high: [
    "Peteritis Maxima! Spontane Erschöpfung vor jedem Termin. Einzige Heilung: Gruppendruck oder Bastis Geburtstag.",
    "Peteritis positiv: Du bist Meister:in des unverbindlichen Lebens. Couch + später = natürlicher Zustand. 🛋️",
    "Peteritis mit Exit-Strategie: Du sagst Ja und baust direkt „nicht so lange" ein. Klassiker.",
  ],
};

const PETERITIS_DIAGNOSES_EN = {
  low: [
    "Peteritis negative! You're almost too reliable. A little Petern never hurt. 🏆",
    "Mild form: You've got the couch under control. For now. Prognosis: good.",
  ],
  mid: [
    "Mild Peteritis: You often think \"we'll see\". Curable with concrete dates.",
    "Chronic commitment avoidance. Symptom: \"I'll let you know later.\" Therapy: follow Peter's user manual.",
    "Subclinical Peteritis: Road bike and trips = \"someday\". Prognosis: stable.",
  ],
  high: [
    "Peteritis Maxima! Spontaneous exhaustion before every appointment. Only cure: peer pressure or Bestie's birthday.",
    "Peteritis positive: You're a master of the non-committal life. Couch + later = natural state. 🛋️",
    "Peteritis with exit strategy: You say yes and immediately add \"not for too long\". Classic.",
  ],
};

// Chips (quick activities)
const CHIPS_DE = [
  { activity: "Feiern gehen", label: "Feiern" },
  { activity: "Sport", label: "Sport" },
  { activity: "Kino", label: "Kino" },
  { activity: "Treffen mit Freunden", label: "Treffen" },
  { activity: "Früh aufstehen", label: "Früh aufstehen" },
  { activity: "Einkaufen", label: "Einkaufen" },
];
const CHIPS_EN = [
  { activity: "Going to a party", label: "Party" },
  { activity: "Sports", label: "Sports" },
  { activity: "Cinema", label: "Cinema" },
  { activity: "Meeting friends", label: "Meet-up" },
  { activity: "Getting up early", label: "Early rise" },
  { activity: "Shopping", label: "Shopping" },
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
let history = [];
let currentLang = "de";
try {
  history = JSON.parse(localStorage.getItem("petern-history") || "[]");
  currentLang = localStorage.getItem("petern-lang") || "de";
} catch (_) {}

// Content getters by language
function getAusreden() { return currentLang === "en" ? AUSREDEN_EN : AUSREDEN_DE; }
function getJaAntworten() { return currentLang === "en" ? JA_ANTWORTEN_EN : JA_ANTWORTEN_DE; }
function getAlibi() { return currentLang === "en" ? ALIBI_SPRACHNACHRICHTEN_EN : ALIBI_SPRACHNACHRICHTEN_DE; }
function getPeternLevels() { return currentLang === "en" ? PETERN_LEVELS_EN : PETERN_LEVELS_DE; }
function getStandardphrasen() { return currentLang === "en" ? STANDARDPHRASEN_EN : STANDARDPHRASEN_DE; }
function getExitStrategien() { return currentLang === "en" ? EXIT_STRATEGIEN_EN : EXIT_STRATEGIEN_DE; }
function getPeteritisQuestions() { return currentLang === "en" ? PETERITIS_QUESTIONS_EN : PETERITIS_QUESTIONS_DE; }
function getPeteritisDiagnoses() { return currentLang === "en" ? PETERITIS_DIAGNOSES_EN : PETERITIS_DIAGNOSES_DE; }
function getChips() { return currentLang === "en" ? CHIPS_EN : CHIPS_DE; }

// Zufälliges Element aus Array
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Entscheidung: 90 % Petern, 10 % Go
function decide(activity) {
  const t = TRANSLATIONS[currentLang];
  const defaultAct = t.defaultActivity;
  const normalized = (activity || defaultAct).trim() || defaultAct;
  const petern = Math.random() < 0.9;

  if (petern) {
    const excuse = pick(getAusreden());
    const level = pick(getPeternLevels());
    lastResult = {
      type: "petern",
      activity: normalized,
      text: excuse,
      sub: `"${normalized}" – ${t.resultPetern}`,
      level,
      copyText: excuse,
    };
  } else {
    const yes = pick(getJaAntworten());
    lastResult = {
      type: "go",
      activity: normalized,
      text: yes,
      sub: `"${normalized}" – ${t.resultGo}`,
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

  const t = TRANSLATIONS[currentLang];
  resultIcon.textContent = result.type === "petern" ? "🛋️" : "👍";
  resultTitle.textContent = result.type === "petern" ? t.resultPetern : t.resultGo;
  resultText.textContent = result.text;
  resultSub.textContent = result.sub;
  peternLevelEl.textContent = result.level || "";
  peternLevelEl.style.display = result.level ? "block" : "none";

  // In Verlauf speichern
  const locale = currentLang === "en" ? "en-US" : "de-DE";
  history.unshift({
    activity: result.activity,
    type: result.type,
    text: result.text,
    time: new Date().toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" }),
  });
  history = history.slice(0, 10);
  localStorage.setItem("petern-history", JSON.stringify(history));
  renderHistory();
  window.lastResult = lastResult;
}

function renderHistory() {
  const listEl = document.getElementById("history-list");
  if (!listEl) return;
  const t = TRANSLATIONS[currentLang];
  if (history.length === 0) {
    listEl.innerHTML = `<li>${t.noHistory}</li>`;
    return;
  }
  listEl.innerHTML = history
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

  const dailyEl = document.getElementById("daily-excuse");
  if (stored && storedDate === getDailyExcuseKey()) {
    if (dailyEl) dailyEl.textContent = stored;
    return;
  }
  setNewDailyExcuse();
}

function setNewDailyExcuse() {
  const excuse = pick(getAusreden());
  const dailyEl = document.getElementById("daily-excuse");
  if (dailyEl) dailyEl.textContent = excuse;
  localStorage.setItem("petern-daily", excuse);
  localStorage.setItem("petern-daily-date", getDailyExcuseKey());
}

// Event-Handler (global fuer Delegation)
function onDecide() {
  const t = TRANSLATIONS[currentLang];
  const activity = activityInput.value.trim() || t.defaultActivity;
  const result = decide(activity);
  showResult(result);
}
window.onDecide = onDecide;
window.renderHistory = renderHistory;
window.setNewDailyExcuse = setNewDailyExcuse;
window.generateStandardphrase = generateStandardphrase;
window.generateExitStrategy = generateExitStrategy;

if (btnDecide) btnDecide.addEventListener("click", onDecide);

if (activityInput) activityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") onDecide();
});

function renderChips() {
  const container = document.querySelector(".quick-activities");
  if (!container) return;
  const t = TRANSLATIONS[currentLang];
  const chips = getChips();
  const chipsHtml = chips.map((c) =>
    `<button type="button" class="chip" data-activity="${c.activity.replace(/"/g, "&quot;")}">${c.label}</button>`
  ).join("");
  container.innerHTML = `<span class="quick-label" data-i18n="quickSelect">${t.quickSelect}</span>${chipsHtml}`;
  container.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      activityInput.value = chip.dataset.activity;
      activityInput.focus();
    });
  });
}

if (btnAgain) btnAgain.addEventListener("click", () => {
  resultSection.classList.add("hidden");
  activityInput.focus();
});

if (btnCopy) btnCopy.addEventListener("click", () => {
  if (!lastResult) return;
  navigator.clipboard.writeText(lastResult.copyText).then(() => {
    const old = btnCopy.textContent;
    btnCopy.textContent = TRANSLATIONS[currentLang].copied;
    setTimeout(() => { btnCopy.textContent = TRANSLATIONS[currentLang].copyExcuse; }, 1500);
  });
});

function clearHistory() { history = []; try { localStorage.setItem("petern-history", "[]"); } catch (_) {} renderHistory(); }
window.clearHistory = clearHistory;
if (btnClearHistory) btnClearHistory.addEventListener("click", clearHistory);

if (btnNewDaily) btnNewDaily.addEventListener("click", setNewDailyExcuse);

// Ausreden-Bot: Alibi-Sprachnachricht
let lastAlibi = null;

function generateAlibiSprachnachricht() {
  lastAlibi = pick(getAlibi());
  window.lastAlibi = lastAlibi;
  const el = document.getElementById("alibi-text");
  if (el) { el.textContent = lastAlibi; el.classList.add("alibi-generated"); }
}
window.generateAlibiSprachnachricht = generateAlibiSprachnachricht;

if (btnAlibi) btnAlibi.addEventListener("click", generateAlibiSprachnachricht);

if (btnCopyAlibi) btnCopyAlibi.addEventListener("click", () => {
  if (!lastAlibi) return;
  navigator.clipboard.writeText(lastAlibi).then(() => {
    const old = btnCopyAlibi.textContent;
    btnCopyAlibi.textContent = TRANSLATIONS[currentLang].copied;
    setTimeout(() => { btnCopyAlibi.textContent = TRANSLATIONS[currentLang].copy; }, 1500);
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
  standardphraseTextEl.textContent = pick(getStandardphrasen());
}
if (btnStandardphrase) btnStandardphrase.addEventListener("click", generateStandardphrase);

// Exit-Strategie
function generateExitStrategy() {
  exitStrategyTextEl.textContent = pick(getExitStrategien());
}
if (btnExit) btnExit.addEventListener("click", generateExitStrategy);

// Peteritis-Check: interaktiver Fragebogen
let peteritisStep = 0;
window.peteritisStep = 0;
let peteritisScore = 0;

function runPeteritisCheck() {
  const el = document.getElementById("peteritis-result");
  const btn = document.getElementById("btn-peteritis");
  if (!el) return;

  const questions = getPeteritisQuestions();
  const t = TRANSLATIONS[currentLang];

  if (peteritisStep === 0) { peteritisScore = 0; peteritisStep = 1; window.peteritisStep = 1; }

  if (peteritisStep <= questions.length) {
    const q = questions[peteritisStep - 1];
    let html = `<p class="peteritis-question"><strong>${q.q}</strong></p><div class="peteritis-options">`;
    q.opts.forEach((opt, i) => {
      html += `<button type="button" class="btn-chip peteritis-opt" data-score="${opt.s}">${opt.t}</button>`;
    });
    html += "</div>";
    el.innerHTML = html;
    el.classList.remove("peteritis-done");
    el.classList.add("peteritis-questions");

    el.querySelectorAll(".peteritis-opt").forEach((opt) => {
      opt.addEventListener("click", () => {
        peteritisScore += parseInt(opt.dataset.score || 0, 10);
        peteritisStep++;
        if (peteritisStep <= questions.length) {
          runPeteritisCheck();
        } else {
          showPeteritisResult(el, btn);
        }
      });
    });
  } else {
    showPeteritisResult(el, btn);
  }
}

function showPeteritisResult(el, btn) {
  const diagnoses = getPeteritisDiagnoses();
  let tier = "mid";
  if (peteritisScore <= 2) tier = "low";
  else if (peteritisScore >= 6) tier = "high";
  const result = pick(diagnoses[tier]);

  el.innerHTML = `<p class="peteritis-diagnosis">${result}</p>`;
  el.classList.remove("peteritis-questions");
  el.classList.add("peteritis-done");

  const t = TRANSLATIONS[currentLang];
  const measureBtn = document.getElementById("btn-peteritis");
  if (measureBtn) measureBtn.textContent = TRANSLATIONS[currentLang].measureAgain || (currentLang === "en" ? "Measure again" : "Nochmal messen");

  peteritisStep = 0;
  window.peteritisStep = 0;
}

window.runPeteritisCheck = function() { peteritisStep = 0; runPeteritisCheck(); };
if (btnPeteritis) btnPeteritis.addEventListener("click", window.runPeteritisCheck);

// Apply translations to all data-i18n elements
function applyTranslations(clearDailyCache = false) {
  const t = TRANSLATIONS[currentLang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.documentElement.lang = currentLang;
  document.title = currentLang === "en" ? "Petern Today? – Your Decision Helper" : "Heute Petern? – Dein Entscheidungshelfer";
  // Update lang switcher active state
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
  renderChips();
  renderHistory();
  if (clearDailyCache) {
    localStorage.removeItem("petern-daily");
    localStorage.removeItem("petern-daily-date");
  }
  loadDailyExcuse();
  // Reset intro texts to new language
  if (clearDailyCache) {
    if (standardphraseTextEl) standardphraseTextEl.textContent = t.phrasesIntro;
    if (peteritisResultEl) { peteritisResultEl.textContent = t.peteritisIntro; peteritisResultEl.classList.remove("peteritis-done", "peteritis-questions"); }
    peteritisStep = 0;
    if (exitStrategyTextEl) exitStrategyTextEl.textContent = t.exitIntro;
    if (alibiTextEl) { alibiTextEl.textContent = t.alibiIntro; alibiTextEl.classList.remove("alibi-generated"); }
  }
}

// Event delegation als Fallback
document.addEventListener("click", (e) => {
  const langBtn = e.target.closest(".lang-btn");
  if (langBtn) {
    const lang = langBtn.dataset.lang;
    if (lang && (lang === "de" || lang === "en")) {
      currentLang = lang;
      try { localStorage.setItem("petern-lang", lang); } catch (_) {}
      applyTranslations(true);
    }
    return;
  }
  if (e.target.closest("#btn-alibi") || e.target.id === "btn-alibi") {
    generateAlibiSprachnachricht();
    return;
  }
  if (e.target.closest("#btn-peteritis") || e.target.id === "btn-peteritis") {
    runPeteritisCheck();
    return;
  }
});

// Fuer Inline-setPeternLang: vollstaendige Sprachumschaltung inkl. Chips, History, etc.
window.applyPeternTranslations = function(lang) {
  if (lang !== "de" && lang !== "en") return;
  currentLang = lang;
  try { localStorage.setItem("petern-lang", lang); } catch (_) {}
  applyTranslations(true);
};

// Init – erst wenn DOM bereit
function init() {
  applyTranslations();
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
