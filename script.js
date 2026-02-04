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
    peternWhatTitle: "🛋️ Was ist „Petern“?",
    manual: "📋 Strategien gegen den Peter",
    whatsOn: "🔥 Mission anstehend?",
    peterReaction: "Wie würde Peter reagieren, wenn du ihn fragst, ob er es selbst ausprobiert?",
    activityPlaceholder: "z.B. Feiern, Sport, Kino, Treffen...",
    btnDecide: "Soll ich oder soll ich nicht?",
    quickSelect: "Schnellauswahl:",
    copyExcuse: "📋 Ausrede kopieren",
    decideAgain: "Nochmal entscheiden",
    copied: "✓ Kopiert!",
    alibiTitle: "📨 Eigene Peter-Ausreden",
    alibiIntro: "Klick auf „Peter-Ausrede generieren\" – dann hast du einen Text zum Vorlesen oder Senden.",
    generateAlibi: "Eigene Peter-Ausrede generieren",
    copy: "📋 Kopieren",
    historyTitle: "📜 Letzte Entscheidungen",
    clearHistory: "Verlauf leeren",
    dailyTitle: "🎲 Petern des Tages",
    newDailyExcuse: "Neue Tages-Ausrede",
    phrasesTitle: "💬 Peter-Standardphrasen",
    phrasesIntro: "„Mal schauen“, „Ich meld mich später“ …",
    newPhrase: "Neue Phrase",
    exitTitle: "🚪 Exit-Strategie (wenn du doch zugesagt hast)",
    exitIntro: "Bau dir eine Hintertür ein.",
    generateExit: "Exit-Strategie generieren",
    peteritisTitle: "🩺 Peteritis-Check",
    peteritisIntro: "Habe ich eine Peteritis? Und wenn ja, in welcher Ausprägung?",
    measurePeteritis: "Peteritis messen",
    measureAgain: "Nochmal messen",
    peteritisStageLight: "Peteritis light",
    peteritisStageNormal: "Peteritis normal",
    peteritisStageChronic: "Peteritis chronisch",
    peterExcuseTitle: "🛋️ Peter-Ausrede",
    peterExcuseIntro: "Was brauchst du? Eine Peter-Ausrede?",
    peterExcusePlaceholder: "z.B. Kind krank, Paket kommt, zu müde...",
    generatePeterExcuse: "Ausrede generieren",
    petTodayTitle: "🛋️ Soll ich heute petern?",
    petTodayIntro: "Was steht heute an? Peter sagt dir, ob du petern solltest oder nicht.",
    petTodayPlaceholder: "z.B. Mit Freunden ins Kino eingeladen",
    petTodayQuick: "Vorschläge:",
    btnPetOrNot: "Petern oder nicht?",
    petTodayChipL: ["Kino", "Sport", "Feier", "Grillen", "Treffen", "Früh aufstehen"],
    petTodayChipA: ["Mit Freunden ins Kino eingeladen", "Sport / Joggen", "Geburtstagsfeier", "Grillen im Park", "Treffen mit Kollegen", "Früh aufstehen"],
    footer: "Mit 90 % Wahrscheinlichkeit sagt dir diese App, was du eh schon denkst. 🛋️",
    visitorLabel: "Besucher",
    commentsTitle: "💬 Peters Gästebuch",
    commentsIntro: "Lass eine nette Grüße an Peter da oder erzähl von deinem besten Peter-Moment. Sei kreativ – aber bitte freundlich und nicht beleidigend. Danke und Grüße.",
    commentsPlaceholder: "z.B. Grüß dich, Peter! Mein bester Moment: Ich hab 'Paket kommt' gesagt und bin auf der Couch geblieben. 10/10.",
    commentsSubmit: "Anonymous posten",
    commentsNamePlaceholder: "Dein Name (optional)",
    commentsNote: "Kommentare werden lokal gespeichert (nur auf deinem Gerät sichtbar).",
    commentsNoteShared: "Kommentare werden gemeinsam gespeichert – alle Besucher sehen sie.",
    commentsEmpty: "Noch keine Kommentare. Du kannst der erste sein – anonym.",
    commentsAnonymous: "Anonym",
    noHistory: "Noch keine Entscheidungen.",
    resultPetern: "Lieber nicht.",
    resultGo: "Darfst du.",
    defaultActivity: "irgendwas",
    manualIntro: "So erreichst du Peter (oder dich selbst):",
    manual1: "Druck rausnehmen – wenn andere planen und keinen Druck machen, steigt die Teilnahmechance.",
    manual2: "Konkrete Termine vorschlagen – er schlägt selten selbst neue Daten vor.",
    manual3: "Anika und Theo einbeziehen – wenn sie dabei sind, kommt er eher (dann aber zeitlich begrenzt).",
    manual4: "\u201ENicht so lange\u201C akzeptieren – dann baut er weniger Exit-Strategien ein.",
    manual5: "Gaming/Home-Aktivität anbieten – geht eher, wenn es bequem und zu Hause ist.",
    manual6: "Bei neuem Grill / neuer Idee: schnell einen festen Termin machen, sonst versandet es.",
    manual7: "Sport/Fitness: \u201ELauf ich morgen\u201C funktioniert nie. Besser: \u201EKomm mit mir JETZT zum Spaziergang\u201C – kurz und konkret.",
    manual8: "Feiern/Club: Einladung 2 Wochen vorher bringen wenig. Kurzfristig (2–3 Tage) fragen, aber ohne Druck.",
    manual9: "Kino/Restaurant: Eigeninitiative zeigen – \u201EIch reservier für Freitag, du kommst mit?\u201C Oder er verschiebt ewig.",
    manual10: "Wenn er sagt \u201Emal schauen\u201C: Nachfragen wann er sich meldet. Sonst kommt nichts.",
    manual11: "Gruppendruck nutzen: \u201EAlle kommen, auch Theo und Anika\u201C – dann steigt die Chance deutlich.",
    manual12: "Feste Zeiten: \u201EKurz von 15–17 Uhr\u201C geht besser als \u201Eirgendwann am Wochenende\u201C.",
    manual13: "Alternative anbieten: \u201EWenn nicht Kino, dann Spieleabend bei euch?\u201C – Ausweich-Option erhöht Zusage.",
    manual14: "Keine offenen Fragen: Statt „Wollen wir mal was machen?\u201C lieber \u201ESamstag 14 Uhr Kaffee?“",
    manual15: "Realistisch bleiben: 90 % Ausrede ist normal. 10 % Zusage feiern wie einen Sieg.",
    peternWhatIntro: "Wir kennen alle die Karens, die bei jeder Kleinigkeit eskalieren. Zeit, die Peters kennenzulernen – die Könige des passiven Nicht-Zusagens.",
    peternWhatDefinition: "Petern = geplantes Nichtstun mit perfektionierter Ausrede. Statt klar Ja oder Nein zu sagen, wird verschoben, verwaschen und elegant ausgewichen.",
    peternWhatExamples: "Typisch: lange auf der Couch strategieren, „mal schauen“ sagen, Exit-Strategien bauen und am Ende doch zu Hause bleiben – mit mindestens einer technisch klingenden Ausrede.",
    peter1: "Peter (*1987), Beamter (Polizist), verheiratet mit Anika, Vater von Theo (1) und Amelia (12). (Namen aus Identitätsgründen geändert.) Verdient gut, achtet auf sein Auftreten – und will bloß nicht negativ auffallen.",
    peter2: "🛋️ Selten klares Ja/Nein. Standards: „Mal schauen“, „Ich meld mich später“, „Ist gerade schwierig“. Liebt Couch, Cola Zero, iPad, ruhige Abende. Aktivitäten existieren oft nur theoretisch.",
    peter3: "🧠 Typisch: 90 % Ausrede, 10 % Teilnahme. Wenn er zusagt: Exit-Strategien („nicht so lange“, „je nachdem wie Theo drauf ist“). Klassiker: Kind unruhig/krank, Anika gestresst, Erkältung, Spülmaschine, Update, Arbeit, Müdigkeit. Technik-Ausreden besonders beliebt.",
    peter4: "👨‍👩‍👧‍👦 Anika hat mehr Einfluss; Peter macht viel im Haushalt, ordnet sich oft unter. Wenn Anika und Theo dabei sind, kommt er eher – dann aber zeitlich begrenzt. Eigene Einladungen selten, Absagen planbar. Früher aktiv/sportlich, heute: Rennrad, Trips → „Irgendwann mal“. Kein Bösewicht – Meister des unverbindlichen Lebens. Natürlicher Zustand: Couch + später.",
  },
  en: {
    title: "🛋️ Petern Today?",
    tagline: "Your decision helper for the inner couch potato",
    whoIsPeter: "👤 Who is Peter?",
    peternWhatTitle: "🛋️ What is “Petern”?",
    manual: "📋 How to deal with a Peter",
    whatsOn: "🔥 Mission incoming?",
    peterReaction: "How would Peter react if you asked him to try it himself?",
    activityPlaceholder: "e.g. Party, Sports, Cinema, Meet-up...",
    btnDecide: "Should I or shouldn't I?",
    quickSelect: "Quick select:",
    copyExcuse: "📋 Copy excuse",
    decideAgain: "Decide again",
    copied: "✓ Copied!",
    alibiTitle: "📨 Generate Your Own Peter Excuses",
    alibiIntro: "Click \"Generate Peter excuse\" – then you have a text to read aloud or send.",
    generateAlibi: "Generate your own Peter excuse",
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
    peteritisIntro: "Do I have a Peteritis? And if so, in what stage?",
    measurePeteritis: "Measure Peteritis",
    measureAgain: "Measure again",
    peteritisStageLight: "Peteritis light",
    peteritisStageNormal: "Peteritis normal",
    peteritisStageChronic: "Peteritis chronic",
    peterExcuseTitle: "🛋️ Peter Excuse",
    peterExcuseIntro: "What do you need? A Peter excuse?",
    peterExcusePlaceholder: "e.g. kid sick, package arriving, too tired...",
    generatePeterExcuse: "Generate excuse",
    petTodayTitle: "🛋️ Should I Peter today?",
    petTodayIntro: "What's on today? Peter tells you whether you should Peter or not.",
    petTodayPlaceholder: "e.g. Invited to cinema with friends",
    petTodayQuick: "Suggestions:",
    btnPetOrNot: "Peter or not?",
    petTodayChipL: ["Cinema", "Sports", "Party", "BBQ", "Meet-up", "Early rise"],
    petTodayChipA: ["Invited to cinema with friends", "Sports / Jogging", "Birthday party", "BBQ in the park", "Meeting with colleagues", "Getting up early"],
    footer: "With 90% probability, this app tells you what you were already thinking. 🛋️",
    visitorLabel: "Visitors",
    commentsTitle: "💬 Peter's Guestbook",
    commentsIntro: "Leave a nice greeting for Peter or tell us about your best Peter moment. Be creative – but please keep it friendly and not offensive. Thank you and greetings.",
    commentsPlaceholder: "e.g. Hi Peter! My best moment: I said 'package arriving' and stayed on the couch. 10/10.",
    commentsSubmit: "Post anonymously",
    commentsNamePlaceholder: "Your name (optional)",
    commentsNote: "Comments are saved locally (only visible on your device).",
    commentsNoteShared: "Comments are shared – all visitors can see them.",
    commentsEmpty: "No comments yet. You could be the first – anonymously.",
    commentsAnonymous: "Anonymous",
    noHistory: "No decisions yet.",
    resultPetern: "Better not.",
    resultGo: "You're allowed.",
    defaultActivity: "something",
    manualIntro: "How to reach Peter (or yourself):",
    manual1: "Reduce pressure – when others plan and don't push, participation chance increases.",
    manual2: "Suggest concrete dates – he rarely suggests new dates himself.",
    manual3: "Include Anika and Theo – if they're coming, he's more likely (but time-limited).",
    manual4: "Accept \"not too long\" – then he builds fewer exit strategies.",
    manual5: "Offer gaming/home activities – more likely when it's comfortable and at home.",
    manual6: "New grill / new idea: quickly set a firm date, or it fizzles out.",
    manual7: "Sports/fitness: \u201EI'll run tomorrow\u201C never works. Better: \u201ECome with me NOW for a short walk\u201C – brief and concrete.",
    manual8: "Parties/club: Invitations 2 weeks ahead don't help. Ask last-minute (2–3 days), but without pressure.",
    manual9: "Cinema/restaurant: Take initiative – \u201EI'll book for Friday, you in?\u201C Or he'll postpone forever.",
    manual10: "When he says \u201Ewe'll see\u201C: Ask when he'll get back to you. Otherwise nothing happens.",
    manual11: "Use peer pressure: \u201EEveryone's coming, Theo and Anika too\u201C – chance of yes goes up.",
    manual12: "Fixed times: \u201EQuick visit 3–5 pm\u201C works better than „sometime this weekend“.",
    manual13: "Offer an alternative: \u201EIf not cinema, then game night at yours?\u201C – backup option increases yes.",
    manual14: "No open questions: Instead of \u201EWant to do something sometime?\u201C try \u201ESaturday 2 pm coffee?“",
    manual15: "Stay realistic: 90% excuse is normal. Celebrate the 10% yes like a victory.",
    peternWhatIntro: "We all know the Karens who escalate instantly. Meet the Peters – champions of politely doing nothing.",
    peternWhatDefinition: "Petern = planned inactivity with premium excuses. Instead of yes or no, everything is postponed, blurred, and gracefully avoided.",
    peternWhatExamples: "Typical: strategising on the couch, saying “we'll see”, building exit strategies and eventually staying home with at least one tech-sounding excuse.",
    peter1: "Peter (*1987), civil servant (police officer), married to Anika, father of Theo (1) and Amelia (12). (Names changed for identity reasons.) Earns well, cares about his appearance – and just doesn't want to stand out negatively.",
    peter2: "🛋️ Rarely a clear yes/no. Standards: \"We'll see\", \"I'll let you know later\", \"It's tricky right now\". Loves couch, Coke Zero, iPad, quiet evenings. Activities often only exist in theory.",
    peter3: "🧠 Typical: 90% excuse, 10% participation. When he agrees: exit strategies (\"not too long\", \"depends how Theo's doing\"). Classics: child restless/sick, Anika stressed, cold, dishwasher, update, work, fatigue. Tech excuses especially popular.",
    peter4: "👨‍👩‍👧‍👦 Anika has more influence; Peter does a lot at home, often defers. When Anika and Theo are coming, he's more likely – but time-limited. Own invitations rare, declining predictable. Used to be active/sporty, now: road bike, trips → \"Someday\". Not a villain – Master of the non-committal life. Natural state: couch + later.",
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
  "Theo ist heute total unruhig. Schaff's nicht.",
  "Kind ist krank. Muss daheim bleiben.",
  "Anika ist gestresst, ich muss unterstützen.",
  "Erkältung. Oder Allergie. Egal, fühl mich nicht gut.",
  "Spülmaschine muss noch … und dann Update auf dem Rechner.",
  "Update läuft. Dauert ewig. Heute nichts.",
  "Arbeit hat reingegrätscht. Nächstes Mal.",
  "Müdigkeit. Einfach Müdigkeit.",
  "Download läuft noch. Kann nicht weg.",
  "Irgendwas mit dem Dienst. Kurzfristig dazwischengekommen.",
  // Sport & Aktivität
  "Sport heute? Mein Körper hat Urlaub beantragt.",
  "Laufen? Ich lauf schon zum Kühlschrank.",
  "Fitness-Studio? Mein Abo ist … äh … mental ausgesetzt.",
  "Radfahren? Das Rennrad schläft noch.",
  "Schwimmen? Bin nicht in Badeform. Seit Jahren.",
  "Teamsport? Mein Team ist die Couch und ich.",
  "Joggen? Hab gestern schon die Treppe genommen.",
  "Wandern? Zu viel Aufwand für heute.",
  // Feiern & Ausgehen
  "Feiern? Meine Party ist heute zu Hause.",
  "Club? Bin zu alt. Oder zu müde. Beides.",
  "Bar? Hab schon genug zu trinken. Wasser.",
  "Kino? Netflix ruft lauter.",
  "Konzert? Zu viele Menschen. Zu viel Lärm.",
  "Restaurant? Lieferdienst ist mein bester Freund.",
  "Geburtstag? Ich gratuliere digital.",
  // Treffen & Soziales
  "Treffen? Social Battery auf 12 %.",
  "Freunde besuchen? Vielleicht nächste Woche.",
  "Gruppenchat reicht mir heute.",
  "Telefonieren? Schreib mir lieber.",
  "Video-Call? Kamera kaputt. Immer.",
  "Brunch? Zu früh für Menschen.",
  // Arbeit & Alltag
  "Einkaufen? Lieferung kommt morgen.",
  "Termin? Hab den Kalender nicht gefunden.",
  "Früh aufstehen? Mein Wecker hat gebummelt.",
  "Projekt? Deadline ist … flexibel.",
  "Meeting? Bin im Home-Office. Im Bett.",
  "Pendeln? Heute nicht. Nie.",
  // Klassiker erweitert
  "Auto steht in der Werkstatt. Wieder.",
  "Muss noch Wäsche waschen. Dringend.",
  "Paket kommt heute. Muss warten.",
  "Nachbar braucht Hilfe. Oder ich bilde es mir ein.",
  "Hab Migräne. Oder zumindest den Vibe.",
  "Strecke mich heute mal. Im Bett.",
  "Bin im Flow. Couch-Flow.",
  "Hab mir die Zehen gestoßen. Geht nicht.",
  "Magengrummeln. Oder Langeweile. Egal.",
  "Heute ist mein spiritueller Ruhetag.",
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
  "Theo's super restless today. Can't make it.",
  "Kid's sick. Have to stay home.",
  "Anika's stressed, I need to support.",
  "Cold. Or allergy. Anyway, don't feel well.",
  "Dishwasher still needs to … and then update on the laptop.",
  "Update running. Takes forever. Nothing today.",
  "Work got in the way. Next time.",
  "Tired. Just tired.",
  "Download still running. Can't leave.",
  "Something with the shift. Came up last minute.",
  // Sports & activity
  "Sports today? My body filed for vacation.",
  "Running? I already run to the fridge.",
  "Gym? My membership is … uh … mentally suspended.",
  "Cycling? The road bike is still hibernating.",
  "Swimming? Not in swim shape. For years.",
  "Team sports? My team is the couch and me.",
  "Jogging? I already took the stairs yesterday.",
  "Hiking? Too much effort for today.",
  // Parties & going out
  "Party? My party is at home today.",
  "Club? I'm too old. Or too tired. Both.",
  "Bar? I already have enough to drink. Water.",
  "Cinema? Netflix is calling louder.",
  "Concert? Too many people. Too much noise.",
  "Restaurant? Delivery is my best friend.",
  "Birthday? I'll congratulate digitally.",
  // Meetups & social
  "Meetup? Social battery at 12%.",
  "Visit friends? Maybe next week.",
  "Group chat is enough for me today.",
  "Phone call? Just text me instead.",
  "Video call? Camera's broken. Always.",
  "Brunch? Too early for people.",
  // Work & everyday
  "Shopping? Delivery arrives tomorrow.",
  "Appointment? Couldn't find my calendar.",
  "Wake up early? My alarm clock overslept.",
  "Project? Deadline is … flexible.",
  "Meeting? I'm in home office. In bed.",
  "Commute? Not today. Never.",
  // Classics extended
  "Car's at the shop. Again.",
  "Need to do laundry. Urgently.",
  "Package arrives today. Must wait.",
  "Neighbor needs help. Or I imagine it.",
  "I have a migraine. Or at least the vibe.",
  "Stretching today. In bed.",
  "I'm in the flow. Couch flow.",
  "Stubbed my toe. Can't go.",
  "Stomach rumbling. Or boredom. Whatever.",
  "Today's my spiritual rest day.",
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
  "Hey, Theo ist heute total unruhig … schaff's nicht. Nächstes Mal!",
  "Sorry, Kind ist krank, muss daheim bleiben. Danke!",
  "Hey … Anika ist gestresst, ich muss unterstützen. Bis bald!",
  "Ähm, Erkältung. Oder Allergie. Fühl mich nicht gut. Sorry!",
  "Hey! Update läuft noch, dauert ewig. Heute nichts. Nächstes Mal!",
  "Sorry, Arbeit hat reingegrätscht. Kurzfristig. Bis bald!",
  "Hey … Download läuft noch, kann nicht weg. Morgen vielleicht?",
  "Also, Spülmaschine und dann Update … heute geht's nicht. Danke!",
  "Hey, Müdigkeit. Einfach Müdigkeit. Nächstes Mal bin ich dabei!",
  // Erweiterte Alibis
  "Hey! Sport heute? Mein Körper hat Nein gesagt. Sorry!",
  "Ähm … Feiern klingt gut, aber ich bin schon im Entspannungsmodus. Nächstes Mal!",
  "Hey, sorry. Hab mir die Nacht um die Ohren geschlagen. Heute nicht. Bis bald!",
  "Hey … irgendwas mit dem Magen. Lieber daheim bleiben. Danke!",
  "Sorry, muss heute was für die Arbeit fertig machen. Wirklich. Nächstes Mal!",
  "Hey! Wetter sagt Regen. Oder ich bilde es mir ein. Bleib ich daheim. Sorry!",
  "Ähm, Kopfschmerzen. Keine Ahnung woher. Heute pass ich. Bis bald!",
  "Hey, sorry … Auto macht komische Geräusche. Muss ich checken. Nächstes Mal!",
  "Hey! Hab vergessen dass heute was anderes ansteht. Tja. Wir machen bald was!",
  "Sorry, bin grad in nem Flow. Couch-Flow. Geht nicht. Danke!",
  "Hey … Paket kommt heute. Muss zu Hause sein. Du weißt wie das ist. Bis bald!",
  "Ähm, Nachbar braucht Hilfe. Oder so. Heute leider nein. Sorry!",
  "Hey! Social Battery ist bei null. Brauch einen Tag Pause. Nächstes Mal!",
  "Sorry, hab mir die Zehen gestoßen. Klingt dumm, aber tut weh. Bis bald!",
  "Hey … Strecke mich heute mal aus. Im Bett. Nächstes Mal bin ich dabei!",
  "Hey! Einkaufen steht an. Und Wäsche. Und … heute geht's nicht. Sorry!",
  "Ähm, bin schon im Pyjama. Mental und physisch. Heute nein. Danke!",
  "Sorry … mag heute einfach nicht. Keine Ahnung warum. Bis bald!",
  "Hey! Meeting hat sich verschoben. Muss ran. Nächstes Mal!",
  "Hey, sorry. Kind könnte krank werden. Vorsichtsmaßnahme. Danke!",
  "Ähm … heute ist Ruhetag. Seit … immer. Nächstes Mal versprochen!",
  "Hey! Hab Migräne. Oder sowas. Kopf will nicht. Bis bald!",
  "Sorry, muss noch was reparieren. Und dann Update. Heute nichts. Danke!",
  "Hey … bin schon zu Hause eingegraben. Rausgehen … morgen vielleicht?",
  "Hey! Konzert/Club/Bar – zu viel für heute. Lieber Couch. Nächstes Mal!",
  "Ähm, Brunch ist zu früh. Für alles. Heute leider nein. Sorry!",
  "Sorry … Video-Call reicht mir heute. Live bin ich nicht bereit. Bis bald!",
  "Hey! Pendeln tue ich heute nicht. Einfach nicht. Nächstes Mal!",
  "Hey, irgendwas mit dem Rücken. Oder dem Nacken. Egal. Heute daheim. Danke!",
  "Ähm … spiritueller Ruhetag. Oder so. Heute pass ich. Bis bald!",
  // Weitere Peter-Style Alibis
  "Hey! Ich krieg heute keinen klaren Kopf. Lieber Couch. Nächstes Mal!",
  "Sorry, ich hab zu viel auf dem Zettel. Schaff ich heute nicht. Danke!",
  "Hey … ich fühl mich einfach leer. Muss auftanken. Bis bald!",
  "Ähm, ich hab grad einen Hänger. Heute nicht. Sorry!",
  "Hey, heute ist eher so ein Zuhause-Tag. Nächstes Mal wieder!",
  "Sorry, ich bin schon in der Abendroutine. Rausgehen passt nicht mehr.",
  "Hey … ich hab mich gerade erst eingegraben. Heute bleib ich.",
  "Ähm, ich muss morgen früh raus. Heute lieber chillen.",
  "Hey, mein Akku ist komplett weg. Ich brauch Ruhe. Bis bald!",
  "Sorry, ich hab ein bisschen Overload. Heute nein, morgen vielleicht.",
  "Hey … ich bin gerade nicht gesellschaftsfähig. Heute lieber nicht.",
  "Ähm, ich hab Kopflärm. Brauch Ruhe. Nächstes Mal!",
  "Hey! Heute gewinnt die Couch mit 3:0. Danke fürs Verständnis!",
  "Sorry, ich muss heute einfach nichts tun. Ist so ein Tag.",
  "Hey, ich bin aktuell im „mal schauen“-Modus. Heute nein.",
  // +10 weitere Peter-Ausreden
  "Hey! Router spinnt, muss ich checken. Heute leider nichts. Bis bald!",
  "Sorry … Theo hat schlecht geschlafen, ich auch. Nächstes Mal!",
  "Hey … Anika hat was angesagt, ich muss da sein. Danke!",
  "Ähm, Akku leer. Mein Akku. Brauch Ruhe. Sorry!",
  "Hey! Hab mir zu viel vorgenommen diese Woche. Heute Pause. Bis bald!",
  "Sorry, bin mental schon im Bett. Rausgehen geht nicht mehr. Nächstes Mal!",
  "Hey … Podcast läuft noch. Und dann noch ein Update. Heute nicht. Danke!",
  "Ähm, Wetterumschwung. Kopfweh. Oder Einbildung. Bleib ich daheim. Sorry!",
  "Hey! Hab mir den Rücken verhoben. Beim Nichtstun. Nächstes Mal!",
  "Sorry … zu viele Menschen diese Woche. Brauch einen Tag für mich. Bis bald!",
  "Hey, ist gerade eine komische Phase. Heute lieber nicht. Danke!",
  "Ähm … E-Mail-Postfach ruft. Muss ran. Heute geht's nicht. Sorry!",
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
  "Hey, Theo's super restless today … can't make it. Next time!",
  "Sorry, kid's sick, have to stay home. Thanks!",
  "Hey … Anika's stressed, I need to support. See you soon!",
  "Um, cold. Or allergy. Don't feel well. Sorry!",
  "Hey! Update still running, takes forever. Nothing today. Next time!",
  "Sorry, work got in the way. Last minute. See you soon!",
  "Hey … download still running, can't leave. Maybe tomorrow?",
  "So, dishwasher and then update … can't today. Thanks!",
  "Hey, tired. Just tired. I'll join next time!",
  // Extended alibis
  "Hey! Sports today? My body said no. Sorry!",
  "Um … party sounds good, but I'm already in relax mode. Next time!",
  "Hey, sorry. Burned the midnight oil. Not today. See you soon!",
  "Hey … something with my stomach. Better stay home. Thanks!",
  "Sorry, need to finish something for work today. Really. Next time!",
  "Hey! Weather says rain. Or I imagine it. Staying home. Sorry!",
  "Um, headache. No idea why. Passing today. See you soon!",
  "Hey, sorry … car's making weird noises. Need to check. Next time!",
  "Hey! Forgot I had something else today. Oops. We'll do something soon!",
  "Sorry, I'm in a flow. Couch flow. Can't go. Thanks!",
  "Hey … package arrives today. Need to be home. You know how it is. See you!",
  "Um, neighbor needs help. Or something. Sorry, no today. See you soon!",
  "Hey! Social battery at zero. Need a day off. Next time!",
  "Sorry, stubbed my toe. Sounds dumb but it hurts. See you soon!",
  "Hey … stretching out today. In bed. I'll join next time!",
  "Hey! Shopping's on the list. And laundry. And … can't today. Sorry!",
  "Um, already in my PJs. Mentally and physically. No today. Thanks!",
  "Sorry … just not feeling it today. No idea why. See you soon!",
  "Hey! Meeting got rescheduled. Gotta do it. Next time!",
  "Hey, sorry. Kid might get sick. Precaution. Thanks!",
  "Um … today's rest day. Since … forever. Promise next time!",
  "Hey! Have a migraine. Or something. Head says no. See you soon!",
  "Sorry, need to fix something. And then update. Nothing today. Thanks!",
  "Hey … already dug in at home. Going out … maybe tomorrow?",
  "Hey! Concert/club/bar – too much for today. Couch wins. Next time!",
  "Um, brunch is too early. For everything. Sorry, no today. See you!",
  "Sorry … video call is enough for me today. Not ready for live. See you!",
  "Hey! Not commuting today. Just not. Next time!",
  "Hey, something with my back. Or neck. Whatever. Staying home. Thanks!",
  "Um … spiritual rest day. Or something. Passing today. See you soon!",
  // More Peter-style alibis
  "Hey! My head isn't clear today. Couch wins. Next time!",
  "Sorry, I've got too much on my plate. Can't make it today. Thanks!",
  "Hey … I'm running on empty. Need to recharge. See you soon!",
  "Um, I'm in a slump. Not today. Sorry!",
  "Hey, today is more of a stay-home day. Next time!",
  "Sorry, I'm already in my evening routine. Going out doesn't fit anymore.",
  "Hey … I just settled in. Staying home today.",
  "Um, I have an early morning tomorrow. Better chill tonight.",
  "Hey, my battery is totally dead. Need rest. See you soon!",
  "Sorry, a bit overloaded right now. Not today, maybe tomorrow.",
  "Hey … I'm not really social-ready today. Better not.",
  "Um, my head is loud. Need quiet. Next time!",
  "Hey! Today the couch wins 3–0. Thanks for understanding!",
  "Sorry, I just need to do nothing today. It's that kind of day.",
  "Hey, I'm in \"we'll see\" mode. Not today.",
  // +10 more Peter excuses
  "Hey! Router's acting up, need to check it. Nothing today. See you soon!",
  "Sorry … Theo slept badly, so did I. Next time!",
  "Hey … Anika has something planned, I need to be there. Thanks!",
  "Um, battery dead. My battery. Need rest. Sorry!",
  "Hey! Bit off more than I could chew this week. Rest day today. See you!",
  "Sorry, mentally already in bed. Can't go out anymore. Next time!",
  "Hey … podcast still playing. And then an update. Not today. Thanks!",
  "Um, weather change. Headache. Or imagined. Staying home. Sorry!",
  "Hey! Threw my back out. From doing nothing. Next time!",
  "Sorry … too many people this week. Need a day for myself. See you!",
  "Hey, going through a weird phase. Better not today. Thanks!",
  "Um … inbox is calling. Gotta deal with it. Can't today. Sorry!",
];

// Peter-Ausreden (35–40 Stück) – typische Peter-Antworten
const PETER_EXCUSES_DE = [
  "Mal schaun.",
  "Kind ist gerade krank, schau ich ob's kurz besser wird.",
  "Muss ich mit Anika absprechen.",
  "Paket kommt heute.",
  "Je nachdem wie Theo drauf ist.",
  "Ist gerade schwierig.",
  "Ich meld mich später.",
  "Nicht so lange vielleicht.",
  "Lass mich kurz checken.",
  "Klingt gut, aber … mal schauen.",
  "Muss ich mir überlegen.",
  "Hängt davon ab, wie der Tag läuft.",
  "Keine Ahnung ob ich kann.",
  "Bin mir nicht sicher.",
  "Will nichts versprechen.",
  "Schauen wir.",
  "Meld mich, sobald ich weiß.",
  "Passt zeitlich vielleicht nicht.",
  "Habe da noch was offen.",
  "Bin noch am Überlegen.",
  "Theo könnte jeden Moment … du weißt schon.",
  "Anika ruft bestimmt gleich – muss erreichbar bleiben.",
  "Update läuft noch, kann nicht weg.",
  "Router spinnt, muss ich checken.",
  "Hab grad keine Energie.",
  "Social Battery ist bei null.",
  "Couch gewinnt heute.",
  "Bin schon im Pyjama. Mental.",
  "Download läuft noch.",
  "Muss morgen früh raus.",
  "Hab zu viel diese Woche.",
  "Kopf will nicht mehr.",
  "Ist so ein Tag.",
  "Müsste ich spontan entscheiden.",
  "Passt vielleicht nicht so.",
  "Weiß ich noch nicht so genau.",
  "Kann ich nicht versprechen.",
  "Bin noch nicht so weit.",
  "Lass mich schauen.",
];

const PETER_EXCUSES_EN = [
  "We'll see.",
  "Kid's sick right now, I'll check if it gets better shortly.",
  "Need to check with Anika.",
  "Package arriving today.",
  "Depends how Theo's doing.",
  "It's tricky right now.",
  "I'll let you know later.",
  "Maybe not for too long.",
  "Let me check quickly.",
  "Sounds good, but … we'll see.",
  "Need to think about it.",
  "Depends how the day goes.",
  "No idea if I can.",
  "Not sure yet.",
  "Don't want to promise.",
  "We'll see.",
  "I'll let you know as soon as I know.",
  "Timing might not work.",
  "Got something else pending.",
  "Still thinking about it.",
  "Theo could need me any moment … you know.",
  "Anika will probably call soon – need to stay reachable.",
  "Update still running, can't leave.",
  "Router's acting up, need to check.",
  "Zero energy right now.",
  "Social battery at zero.",
  "Couch wins today.",
  "Already in my PJs. Mentally.",
  "Download still running.",
  "Early start tomorrow.",
  "Too much this week.",
  "Head says no.",
  "It's that kind of day.",
  "Would have to decide spontaneously.",
  "Might not fit.",
  "Not sure yet.",
  "Can't promise.",
  "Not quite there yet.",
  "Let me see.",
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
  "Muss ich kurz mit Anika klären.",
  "Je nachdem wie Theo drauf ist.",
  "Nicht so lange vielleicht.",
  "Irgendwann mal.",
  "Sag ich dir Bescheid.",
  "Schauen wir.",
  "Weiß ich noch nicht so genau.",
  "Muss ich mir überlegen.",
  "Klingt gut, aber … mal schauen.",
  "Keine Ahnung ob ich kann.",
  "Müsste ich schauen.",
  "Bin mir nicht sicher.",
  "Passt vielleicht nicht.",
  "Wird knapp mit der Zeit.",
  "Kann ich nicht so genau sagen.",
  "Meld mich morgen nochmal.",
  "Hängt davon ab.",
  "Mal sehen wie der Tag wird.",
  "Will nichts versprechen.",
  "Könnte schwierig werden.",
  "Bin noch unschlüssig.",
  "Hätte eigentlich was anderes.",
  "Ist gerade eine blöde Phase.",
  "Nicht so mein Ding heute.",
  // +10 weitere Peter-Standardphrasen
  "Muss ich mit Anika absprechen.",
  "Kommt drauf an, wie der Tag läuft.",
  "Kann ich nicht versprechen.",
  "Bin noch am Überlegen.",
  "Will mich nicht festlegen.",
  "Passt zeitlich vielleicht nicht.",
  "Habe da noch was offen.",
  "Meld mich, sobald ich weiß.",
  "Lass mich kurz schauen.",
  "Weiß nicht, ob das klappt.",
  "Bin noch nicht so weit.",
  "Muss ich spontan entscheiden.",
];

const STANDARDPHRASEN_EN = [
  "We'll see.",
  "I'll let you know later.",
  "It's tricky right now.",
  "Need to check with Anika first.",
  "Depends how Theo's doing.",
  "Maybe not for too long.",
  "Someday.",
  "I'll tell you.",
  "We'll see.",
  "Not sure yet.",
  "Need to think about it.",
  "Sounds good, but … we'll see.",
  "No idea if I can.",
  "Would have to check.",
  "Not sure yet.",
  "Might not work.",
  "Time's gonna be tight.",
  "Can't say for sure.",
  "I'll text you tomorrow.",
  "Depends on things.",
  "We'll see how the day goes.",
  "Don't want to promise.",
  "Could get tricky.",
  "Still undecided.",
  "Had something else in mind.",
  "Going through a rough patch.",
  "Not really my thing today.",
  // +10 more Peter standard phrases
  "Need to run it by Anika.",
  "Depends how the day goes.",
  "Can't promise anything.",
  "Still thinking about it.",
  "Don't want to commit.",
  "Might not work time-wise.",
  "Got something else pending.",
  "I'll let you know as soon as I know.",
  "Let me check real quick.",
  "Not sure if that'll work.",
  "Not quite there yet.",
  "Gotta decide spontaneously.",
];

// Exit-Strategien (wenn man doch zugesagt hat)
const EXIT_STRATEGIEN_DE = [
  "„Nicht so lange vielleicht.“",
  "„Je nachdem wie Theo drauf ist.“",
  "„Ich schau, dass ich mal vorbeikomme.“",
  "„Ohne Garantie, aber ich versuch's.“",
  "„Kurz vorbeischauen geht vielleicht.“",
  "„Muss ich mit Anika absprechen, wie lang.“",
  "„So gegen … mal schauen, ob ich schaff.“",
  "„Keine Ahnung ob ich lange kann.“",
  "„Ich meld mich, wenn ich losfahr.“",
  "„Wenn es passt, komme ich.“",
  // +10 weitere Exit-Strategien
  "„Kurz reingeschaut, mehr geht heute nicht.“",
  "„Theo könnte jeden Moment … du weißt schon.“",
  "„Habe nur ein kurzes Zeitfenster.“",
  "„Komme vielleicht später dazu.“",
  "„Ohne festes Versprechen, aber ich versuch's.“",
  "„Meld mich, ob ihr noch da seid, wenn ich könnte.“",
  "„Anika ruft bestimmt gleich – muss erreichbar bleiben.“",
  "„Kann nicht garantieren, wie lange ich schaff.“",
  "„Bin auf Abruf, falls was mit Theo ist.“",
  "„Sag ich dir, wenn ich losfahr – wenn überhaupt.“",
  "„Schaue rein, bleibe aber flexibel.“",
  "„So ein bis zwei Stunden max, dann muss ich.“",
];

const EXIT_STRATEGIEN_EN = [
  "\"Maybe not for too long.\"",
  "\"Depends how Theo's doing.\"",
  "\"I'll try to swing by.\"",
  "\"No guarantees, but I'll try.\"",
  "\"Quick stop might work.\"",
  "\"Need to check with Anika how long.\"",
  "\"Around … we'll see if I can make it.\"",
  "\"No idea if I can stay long.\"",
  "\"I'll text when I'm heading out.\"",
  "\"If it works, I'll come.\"",
  // +10 more exit strategies
  "\"Just popping in, can't stay long today.\"",
  "\"Theo could need me any moment … you know how it is.\"",
  "\"Only have a small window.\"",
  "\"Might swing by later.\"",
  "\"No promises, but I'll try.\"",
  "\"Text me if you're still there when I could make it.\"",
  "\"Anika will probably call soon – need to stay reachable.\"",
  "\"Can't guarantee how long I'll last.\"",
  "\"On call in case something's up with Theo.\"",
  "\"I'll tell you when I'm heading out – if at all.\"",
  "\"Dropping by but staying flexible.\"",
  "\"An hour or two max, then I gotta go.\"",
];

// Peteritis-Fragen mit Optionen (score 0–3: höher = mehr Petern)
const PETERITIS_QUESTIONS_DE = [
  {
    q: "Wie viele Cola Zero hast du heute getrunken?",
    opts: [
      { t: "Keine", s: 0 },
      { t: "1 Dose", s: 1 },
      { t: "2–3 Dosen", s: 2 },
      { t: "Mehr als 3", s: 3 },
    ],
  },
  {
    q: "Wie viele Stunden warst du diese Woche auf der Couch?",
    opts: [
      { t: "Weniger als 3", s: 0 },
      { t: "3–6", s: 1 },
      { t: "7–10", s: 2 },
      { t: "Mehr als 10", s: 3 },
    ],
  },
  {
    q: "An wie vielen Aktivitäten hast du diese Woche teilgenommen?",
    opts: [
      { t: "4 oder mehr", s: 0 },
      { t: "2–3", s: 1 },
      { t: "1", s: 2 },
      { t: "Keine", s: 3 },
    ],
  },
  {
    q: "Wie viele Termine hast du diese Woche abgesagt?",
    opts: [
      { t: "Keine", s: 0 },
      { t: "1", s: 1 },
      { t: "2–3", s: 2 },
      { t: "4 oder mehr", s: 3 },
    ],
  },
  {
    q: "Wie oft haben dich andere diese Woche zu Aktivitäten gedrängt?",
    opts: [
      { t: "Gar nicht", s: 0 },
      { t: "1–2 mal", s: 1 },
      { t: "3–5 mal", s: 2 },
      { t: "Ständig", s: 3 },
    ],
  },
];

const PETERITIS_QUESTIONS_EN = [
  {
    q: "How many Cola Zero did you drink today?",
    opts: [
      { t: "None", s: 0 },
      { t: "1 can", s: 1 },
      { t: "2–3 cans", s: 2 },
      { t: "More than 3", s: 3 },
    ],
  },
  {
    q: "How many hours did you spend on the couch this week?",
    opts: [
      { t: "Less than 3", s: 0 },
      { t: "3–6", s: 1 },
      { t: "7–10", s: 2 },
      { t: "More than 10", s: 3 },
    ],
  },
  {
    q: "How many activities did you join this week?",
    opts: [
      { t: "4 or more", s: 0 },
      { t: "2–3", s: 1 },
      { t: "1", s: 2 },
      { t: "None", s: 3 },
    ],
  },
  {
    q: "How many appointments did you cancel this week?",
    opts: [
      { t: "None", s: 0 },
      { t: "1", s: 1 },
      { t: "2–3", s: 2 },
      { t: "4 or more", s: 3 },
    ],
  },
  {
    q: "How often were you pressured by others to do something this week?",
    opts: [
      { t: "Not at all", s: 0 },
      { t: "1–2 times", s: 1 },
      { t: "3–5 times", s: 2 },
      { t: "Constantly", s: 3 },
    ],
  },
];

// Diagnosen nach Gesamtscore (0–15)
const PETERITIS_DIAGNOSES_DE = {
  low: [
    "Cola-Zero-Level im Rahmen, Couchzeit vertretbar. Du bist in der komfortablen Peteritis-light-Zone.",
    "Noch alles okay: bisschen Sofa, bisschen Aktivität – keine akute Gefahr, aber beobachte dich.",
  ],
  mid: [
    "Peteritis normal: Cola Zero ist Standard, Couchstunden häufen sich. Ein Anruf von Freunden würde helfen.",
    "Leichte chronische Symptome: Du nimmst ab und zu teil, aber die Couch gewinnt häufig.",
    "Solide Peter-Dosis: Aktivitäten finden statt, aber nur wenn niemand auf dich wartet.",
  ],
  high: [
    "Peteritis chronisch: Cola Zero intravenös, Couch = Hauptwohnsitz. Sofortmaßnahmen nötig.",
    "Chronische Form: Aktivitäten? Fehlanzeige. Nur Gruppendruck oder Anika bringen dich raus.",
    "Peteritis Extrem: Du entwickelst Ausreden schneller als Updates laden. Absolute Spitzenklasse.",
  ],
};

const PETERITIS_DIAGNOSES_EN = {
  low: [
    "Cola Zero intake under control, couch hours reasonable. You're in the Peteritis light zone.",
    "All good for now: some sofa, some activity – keep an eye on it but you're fine.",
  ],
  mid: [
    "Peteritis normal: Cola Zero is a default beverage and the couch wins most evenings. Nudge required.",
    "Mild chronic symptoms: You join occasionally, but the sofa often takes priority.",
    "Solid Peter dosage: Activities happen only when nobody expects you.",
  ],
  high: [
    "Peteritis chronic: Cola Zero IV, couch = main residence. Intervention time.",
    "Chronic form: Activities? Nope. Only peer pressure or Anika can move you.",
    "Peteritis extreme: You invent excuses faster than updates install. Hall-of-fame status.",
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
const peterExcuseInput = document.getElementById("peter-excuse-input");
const btnPeterExcuse = document.getElementById("btn-peter-excuse");
const peterExcuseResultEl = document.getElementById("peter-excuse-result");
const petTodayActivityInput = document.getElementById("pet-today-activity");
const petTodayResultEl = document.getElementById("pet-today-result");
const btnPetToday = document.getElementById("btn-pet-today");
const commentInput = document.getElementById("comment-input");
const commentNameInput = document.getElementById("comment-name");
const btnAddComment = document.getElementById("btn-add-comment");
const commentsList = document.getElementById("comments-list");
const commentCharCount = document.getElementById("comment-char-count");

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

// Pet today: "Peter recommends" style – konkret, witzig, typisch Peter
const PET_TODAY_YES_DE = [
  "Peter empfiehlt: Nimm dir eine Cola Zero, leg die Füße hoch und sag allen anderen, dass du heute beschäftigt bist.",
  "Peter empfiehlt: Ein kleiner Kick, Lucky Strike, kalte Cola Zero – und den anderen schreiben: Kind krank, leider geht es heute nicht.",
  "Peter empfiehlt: Leider muss ich heute länger arbeiten, sehr wichtiges Projekt. Couch ist der produktivste Ort.",
  "Peter empfiehlt: Cola Zero holen, Füße hoch, Couch belegen und allen mitteilen: Heute leider keine Zeit.",
  "Peter empfiehlt: Paket kommt heute. Muss zu Hause sein. Perfekt, um in Ruhe zu petern.",
  "Peter empfiehlt: Download läuft noch – wichtiges Update, muss ich heute noch testen, deshalb kann ich nicht weg. Allen schreiben. Klassiker, funktioniert immer.",
  "Peter empfiehlt: Social Battery leer. Heute allen schreiben: Brauche einen Tag für mich. Couch ruft.",
  "Peter empfiehlt: Mit Anika absprechen – sie versteht. Und du bleibst daheim.",
  "Peter empfiehlt: Theo schläft? Perfekt. Jetzt Cola Zero, iPad, Couch. Keiner wird stören.",
  "Peter empfiehlt: Terminkalender sagt frei. Frei = Couch. Allen mitteilen: Leider schon verplant.",
  "Peter empfiehlt: Bin mental schon im Bett. Zählt. Sag das allen und bleib auf der Couch.",
  "Peter empfiehlt: Habe da noch was offen. Immer. Schreib das in die Gruppe und genieß den Tag.",
  "Peter empfiehlt: Erkaeltung im Anflug. Besser daheim bleiben. Cola Zero hilft. (Wirklich.)",
  "Peter empfiehlt: Kollegen schreiben: Heute Homeoffice, leider keine Kapazität. Couch = Office.",
  "Peter empfiehlt: Zu viele Menschen diese Woche. Heute: null. Schreib das – alle verstehen.",
  "Peter empfiehlt: Energie-Level unter null. Peter-Level hoch. Couch, Cola Zero, fertig.",
  "Peter empfiehlt: Mal schauen, meld mich später – und bleib auf der Couch. So geht Petern.",
  "Peter empfiehlt: Klingt gut, aber heute nicht. Schreib das, hol Cola Zero, Füße hoch.",
  "Peter empfiehlt: Wichtige Mail muss noch raus, Konferenz vorbereiten – sag allen: Heute viel zu tun, leider keine Zeit.",
  "Peter empfiehlt: Anika braucht mich heute, Theo hat einen Termin – du musst da sein. Allen Bescheid geben und Couch sichern.",
  "Peter empfiehlt: Umzug steht an, Kartons packen – zu Hause gebraucht. Perfekt als Ausrede.",
  "Peter empfiehlt: Handwerker kommt heute, muss zu Hause sein. Allen sagen und entspannt petern.",
  "Peter empfiehlt: Steuererklärung, Rechnungen sortieren – zu viel zu tun. Schreib das in die Gruppe.",
  "Peter empfiehlt: Sportkleidung in der Wäsche, Laufschuhe vergessen – leider heute nicht. Allen mitteilen.",
  "Peter empfiehlt: Fühle mich nicht hundert Prozent, bleib vorsichtshalber daheim. Cola Zero hilft.",
  "Peter empfiehlt: Autobatterie leer, muss laden – kann nicht weg. Klassiker.",
  "Peter empfiehlt: Netflix-Serie läuft, muss sie heute zu Ende schauen. Wichtig. Allen sagen.",
  "Peter empfiehlt: Zimmer aufräumen, dringend – zu Hause gebraucht. Couch zählt als Zimmer.",
];
const PET_TODAY_YES_EN = [
  "Peter recommends: Grab a Coke Zero, put your feet up on the couch, and tell everyone you're busy today.",
  "Peter recommends: A little kick, Lucky Strike, cold Coke Zero – and text the others: kid's sick, unfortunately doesn't work today.",
  "Peter recommends: Unfortunately I have to work longer today, very important project. Couch is the most productive spot.",
  "Peter recommends: Get Coke Zero, feet up, claim the couch, and let everyone know: no time today, sorry.",
  "Peter recommends: Package arrives today. Need to be home. Perfect for petering in peace.",
  "Peter recommends: Download still running – important update, need to test it today, so can't leave. Tell everyone. Classic, always works.",
  "Peter recommends: Social battery empty. Text everyone today: need a day for myself. Couch calls.",
  "Peter recommends: Check with Anika – she gets it. And you stay home.",
  "Peter recommends: Theo's asleep? Perfect. Coke Zero, iPad, couch. No one will disturb.",
  "Peter recommends: Calendar says free. Free = couch. Let everyone know: unfortunately already booked.",
  "Peter recommends: Mentally already in bed. Counts. Tell everyone that and stay on the couch.",
  "Peter recommends: Got something else pending. Always. Write that in the group and enjoy the day.",
  "Peter recommends: Cold coming on. Better stay home. Coke Zero helps. (Really.)",
  "Peter recommends: Text colleagues: Home office today, unfortunately no capacity. Couch = office.",
  "Peter recommends: Too many people this week. Today: zero. Write that – everyone understands.",
  "Peter recommends: Energy level below zero. Peter level high. Couch, Coke Zero, done.",
  "Peter recommends: We'll see, I'll get back to you later – and stay on the couch. That's how you Peter.",
  "Peter recommends: Sounds good, but not today. Write that, grab Coke Zero, feet up.",
  "Peter recommends: Important email still needs to go out, prep for conference – tell everyone: busy today, unfortunately no time.",
  "Peter recommends: Anika needs me today, Theo has an appointment – you have to be there. Let everyone know and secure the couch.",
  "Peter recommends: Move coming up, packing boxes – needed at home. Perfect excuse.",
  "Peter recommends: Handyman coming today, need to be home. Tell everyone and peter in peace.",
  "Peter recommends: Tax return, sorting receipts – too much to do. Write that in the group.",
  "Peter recommends: Sportswear in the wash, forgot running shoes – unfortunately not today. Let everyone know.",
  "Peter recommends: Not feeling a hundred percent, staying home to be safe. Coke Zero helps.",
  "Peter recommends: Car battery dead, need to charge – can't leave. Classic.",
  "Peter recommends: Netflix series is on, need to finish it today. Important. Tell everyone.",
  "Peter recommends: Room needs tidying, urgently – needed at home. Couch counts as room.",
];
const PET_TODAY_NO_DE = [
  "Nein, heute nicht. Du darfst raus. Selten, aber heute ja.",
  "Ausnahme! Heute sagt Peter: Du darfst. Nutze es.",
  "Selten – aber heute: Raus! Peter nickt zustimmend.",
];
const PET_TODAY_NO_EN = [
  "No, not today. You may go out. Rare, but today yes.",
  "Exception! Today Peter says: You may go. Use it.",
  "Rare – but today: Go out! Peter nods in agreement.",
];

function onPetToday() {
  const activity = (petTodayActivityInput && petTodayActivityInput.value.trim()) ||
    (currentLang === "en" ? "something" : "irgendwas");
  const petern = Math.random() < 0.98;
  const yesArr = currentLang === "en" ? PET_TODAY_YES_EN : PET_TODAY_YES_DE;
  const noArr = currentLang === "en" ? PET_TODAY_NO_EN : PET_TODAY_NO_DE;
  const text = petern ? pick(yesArr) : pick(noArr);
  const t = TRANSLATIONS[currentLang];
  const title = petern
    ? (currentLang === "en" ? "Yes, Peter today!" : "Ja, heute petern!")
    : (currentLang === "en" ? "No, not today." : "Nein, heute nicht.");
  if (petTodayResultEl) {
    petTodayResultEl.innerHTML = `
      <p class="pet-today-answer ${petern ? "petern" : "go"}">🛋️ <strong>${title}</strong></p>
      <p class="pet-today-text">${text}</p>
      <p class="pet-today-activity">"${activity}"</p>`;
    petTodayResultEl.classList.add("pet-today-done");
  }
}
window.onPetToday = onPetToday;

// Comments – Supabase REST API (no SDK) or localStorage fallback
const COMMENTS_KEY = "petern-comments";

const SUPABASE_URL_FALLBACK = "https://pmhuppxiprknvfbofmpd.supabase.co";
const SUPABASE_ANON_FALLBACK = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtaHVwcHhpcHJrbnZmYm9mbXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxODc3MDMsImV4cCI6MjA4NTc2MzcwM30._MKUDaLfQj-Vs1unM5OR53gtMeXQ6LApELSCj3OMXpA";

function getSupabaseConfig() {
  const url = (typeof window !== "undefined" && window.PETERN_SUPABASE_URL) || SUPABASE_URL_FALLBACK;
  const key = (typeof window !== "undefined" && window.PETERN_SUPABASE_ANON_KEY) || SUPABASE_ANON_FALLBACK;
  return { url: String(url).replace(/\/$/, ""), key: String(key).trim() };
}

function useSupabase() {
  const { url, key } = getSupabaseConfig();
  return !!(url && key);
}

function getSupabaseHeaders() {
  const { key } = getSupabaseConfig();
  return {
    "apikey": key,
    "Authorization": "Bearer " + key,
    "Content-Type": "application/json",
  };
}

async function fetchCommentsFromSupabase() {
  const { url } = getSupabaseConfig();
  // Only select columns that exist (id, text, created_at). 'name' may not exist yet.
  const res = await fetch(url + "/rest/v1/comments?select=id,text,created_at&order=created_at.desc", {
    method: "GET",
    headers: { ...getSupabaseHeaders(), "Accept": "application/json" },
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error("Fetch " + res.status + ": " + err);
  }
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

async function insertCommentToSupabase(text) {
  const { url } = getSupabaseConfig();
  const res = await fetch(url + "/rest/v1/comments", {
    method: "POST",
    headers: { ...getSupabaseHeaders(), "Prefer": "return=minimal" },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error("Insert " + res.status + ": " + err);
  }
}

function getCommentsLocal() {
  try {
    return JSON.parse(localStorage.getItem(COMMENTS_KEY) || "[]");
  } catch (_) { return []; }
}

function saveCommentsLocal(comments) {
  try { localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments)); } catch (_) {}
}

function escapeHtml(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

function renderCommentsList(items, isEmpty) {
  if (!commentsList) return;
  const t = TRANSLATIONS[currentLang];
  if (isEmpty || !items.length) {
    commentsList.innerHTML = `<p class="comments-empty">${t.commentsEmpty}</p>`;
    return;
  }
  const locale = currentLang === "en" ? "en-GB" : "de-DE";
  commentsList.innerHTML = items.map((c) => {
    const dateStr = (c.created_at || c.date)
      ? new Date(c.created_at || c.date).toLocaleDateString(locale, { day: "numeric", month: "short", year: "numeric" })
      : "";
    const displayName = (c.name || "").trim() || t.commentsAnonymous;
    return `<div class="comment-item"><p class="comment-meta"><span class="anonymous">${escapeHtml(displayName)}</span> · ${dateStr}</p><p class="comment-text">${escapeHtml(c.text)}</p></div>`;
  }).join("");
}

async function loadComments() {
  if (!commentsList) return;
  const t = TRANSLATIONS[currentLang];
  if (useSupabase()) {
    commentsList.innerHTML = `<p class="comments-empty comments-loading">${currentLang === "en" ? "Loading …" : "Laden …"}</p>`;
    try {
      const data = await fetchCommentsFromSupabase();
      renderCommentsList(data, false);
    } catch (e) {
      commentsList.innerHTML = `<p class="comments-empty comments-error">${currentLang === "en" ? "Could not load comments." : "Kommentare konnten nicht geladen werden."}</p>`;
    }
  } else {
    const local = getCommentsLocal();
    renderCommentsList(local, local.length === 0);
  }
}

function renderComments() {
  loadComments();
}

async function addComment() {
  if (!commentInput) return;
  const text = commentInput.value.trim();
  if (!text) return;

  if (useSupabase()) {
    const btn = document.getElementById("btn-add-comment");
    if (btn) { btn.disabled = true; btn.textContent = currentLang === "en" ? "Posting …" : "Wird gesendet …"; }
    try {
      await insertCommentToSupabase(text);
      commentInput.value = "";
      if (commentNameInput) commentNameInput.value = "";
      if (commentCharCount) commentCharCount.textContent = "0";
      await loadComments();
    } catch (e) {
      if (btn) btn.textContent = TRANSLATIONS[currentLang].commentsSubmit;
      btn.disabled = false;
      alert(currentLang === "en" ? "Could not post comment. Please try again." : "Kommentar konnte nicht gesendet werden. Bitte erneut versuchen.");
      return;
    }
    if (btn) { btn.disabled = false; btn.textContent = TRANSLATIONS[currentLang].commentsSubmit; }
  } else {
    const name = (commentNameInput && commentNameInput.value.trim()) || "";
    const comments = getCommentsLocal();
    comments.push({ text, name, date: new Date().toISOString() });
    saveCommentsLocal(comments);
    commentInput.value = "";
    if (commentNameInput) commentNameInput.value = "";
    if (commentCharCount) commentCharCount.textContent = "0";
    renderCommentsList(comments, false);
  }
}
window.addComment = addComment;

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
  const rawValue = activityInput ? activityInput.value.trim() : "";
  const activity = rawValue || t.defaultActivity;
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
  const container = document.querySelector(".quick-activities:not(.pet-today-chips)");
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

function renderPetTodayChips() {
  const container = document.querySelector(".pet-today-chips");
  if (!container) return;
  const t = TRANSLATIONS[currentLang];
  const labels = t.petTodayChipL || [];
  const activities = t.petTodayChipA || [];
  const chips = container.querySelectorAll(".chip");
  chips.forEach((chip, i) => {
    if (labels[i]) chip.textContent = labels[i];
    if (activities[i]) chip.dataset.activity = activities[i];
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
setupCollapse("btn-was-ist-petern", "was-ist-petern-content");

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
    let html = `<p class="peteritis-question"><strong>❓ ${q.q}</strong></p><div class="peteritis-options">`;
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
  if (peteritisScore <= 4) tier = "low";
  else if (peteritisScore >= 10) tier = "high";
  const result = pick(diagnoses[tier]);

  const t = TRANSLATIONS[currentLang];
  const stageLabelMap = {
    low: t.peteritisStageLight,
    mid: t.peteritisStageNormal,
    high: t.peteritisStageChronic,
  };
  const stageLabel = stageLabelMap[tier] || "";
  el.innerHTML = `<p class="peteritis-stage">${stageLabel}</p><p class="peteritis-diagnosis">${result}</p>`;
  el.classList.remove("peteritis-questions");
  el.classList.add("peteritis-done");

  const measureBtn = document.getElementById("btn-peteritis");
  if (measureBtn) measureBtn.textContent = TRANSLATIONS[currentLang].measureAgain || (currentLang === "en" ? "Measure again" : "Nochmal messen");

  peteritisStep = 0;
  window.peteritisStep = 0;
}

window.runPeteritisCheck = function() { peteritisStep = 0; runPeteritisCheck(); };

// Peter-Ausrede
function runPeterExcuse() {
  const arr = currentLang === "en" ? PETER_EXCUSES_EN : PETER_EXCUSES_DE;
  const excuse = pick(arr);
  const userInput = (peterExcuseInput && peterExcuseInput.value.trim()) || "";
  const safeInput = userInput ? escapeHtml(userInput) : "";
  const prefix = safeInput
    ? (currentLang === "en" ? `For \u201C${safeInput}\u201D? Peter says: ` : `Für \u201C${safeInput}\u201D? Peter sagt: `)
    : (currentLang === "en" ? "Peter says: " : "Peter sagt: ");
  if (peterExcuseResultEl) {
    peterExcuseResultEl.innerHTML = `<p class="peter-excuse-answer">${prefix}<strong>${escapeHtml(excuse)}</strong></p>`;
    peterExcuseResultEl.classList.add("peter-excuse-done");
  }
}
window.runPeterExcuse = runPeterExcuse;
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
  renderPetTodayChips();
  renderHistory();
  const noteEl = document.querySelector(".comments-note");
  if (noteEl) noteEl.textContent = useSupabase() ? t.commentsNoteShared : t.commentsNote;
  renderComments();
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
    if (peterExcuseResultEl) { peterExcuseResultEl.innerHTML = ""; peterExcuseResultEl.classList.remove("peter-excuse-done"); }
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
  if (e.target.closest("#btn-add-comment") || e.target.id === "btn-add-comment") {
    addComment();
    return;
  }
  if (e.target.closest("#btn-peter-excuse") || e.target.id === "btn-peter-excuse") {
    runPeterExcuse();
    return;
  }
  if (e.target.closest("#btn-pet-today") || e.target.id === "btn-pet-today") {
    onPetToday();
    return;
  }
  const petTodayChip = e.target.closest(".pet-today-chips .chip");
  if (petTodayChip && petTodayChip.dataset.activity && petTodayActivityInput) {
    petTodayActivityInput.value = petTodayChip.dataset.activity;
    petTodayActivityInput.focus();
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
  renderComments();
  if (commentInput && commentCharCount) {
    commentInput.addEventListener("input", () => {
      commentCharCount.textContent = (commentInput.value || "").length;
    });
  }
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
