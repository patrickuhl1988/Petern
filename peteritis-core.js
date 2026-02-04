/* Peteritis + Visitor Counter - standalone, runs first */
(function() {
  "use strict";
  var PQ_DE = [
    {q:"Wie viele Cola Zero hast du heute getrunken?",opts:[{t:"Keine",s:0},{t:"1 Dose",s:1},{t:"2-3 Dosen",s:2},{t:"Mehr als 3",s:3}]},
    {q:"Wie viele Stunden warst du diese Woche auf der Couch?",opts:[{t:"Weniger als 3",s:0},{t:"3-6",s:1},{t:"7-10",s:2},{t:"Mehr als 10",s:3}]},
    {q:"An wie vielen Aktivitaeten hast du diese Woche teilgenommen?",opts:[{t:"4 oder mehr",s:0},{t:"2-3",s:1},{t:"1",s:2},{t:"Keine",s:3}]},
    {q:"Wie viele Termine hast du diese Woche abgesagt?",opts:[{t:"Keine",s:0},{t:"1",s:1},{t:"2-3",s:2},{t:"4 oder mehr",s:3}]},
    {q:"Wie oft haben dich andere diese Woche zu Aktivitaeten gedraengt?",opts:[{t:"Gar nicht",s:0},{t:"1-2 mal",s:1},{t:"3-5 mal",s:2},{t:"Staendig",s:3}]}
  ];
  var PQ_EN = [
    {q:"How many Cola Zero did you drink today?",opts:[{t:"None",s:0},{t:"1 can",s:1},{t:"2-3 cans",s:2},{t:"More than 3",s:3}]},
    {q:"How many hours did you spend on the couch this week?",opts:[{t:"Less than 3",s:0},{t:"3-6",s:1},{t:"7-10",s:2},{t:"More than 10",s:3}]},
    {q:"How many activities did you join this week?",opts:[{t:"4 or more",s:0},{t:"2-3",s:1},{t:"1",s:2},{t:"None",s:3}]},
    {q:"How many appointments did you cancel this week?",opts:[{t:"None",s:0},{t:"1",s:1},{t:"2-3",s:2},{t:"4 or more",s:3}]},
    {q:"How often were you pressured by others to do something this week?",opts:[{t:"Not at all",s:0},{t:"1-2 times",s:1},{t:"3-5 times",s:2},{t:"Constantly",s:3}]}
  ];
  var PD_DE = {low:["Cola-Zero-Level im Rahmen. Du bist in der Peteritis-light-Zone."],mid:["Peteritis normal: Cola Zero ist Standard, Couchstunden haeufen sich."],high:["Peteritis chronisch: Couch = Hauptwohnsitz."]};
  var PD_EN = {low:["Cola Zero under control. You are in the Peteritis light zone."],mid:["Peteritis normal: Cola Zero is default, couch hours add up."],high:["Peteritis chronic: couch = main residence."]};
  var pStep = 0, pScore = 0;

  function doPeteritis() {
    var el = document.getElementById("peteritis-result");
    if (!el) return;
    var l = document.documentElement.lang === "en" ? "en" : "de";
    var qs = l === "en" ? PQ_EN : PQ_DE;
    var diag = l === "en" ? PD_EN : PD_DE;
    var stages = {low: "Peteritis light", mid: "Peteritis normal", high: l === "en" ? "Peteritis extrem" : "Peteritis chronisch"};
    if (pStep === 0) { pScore = 0; pStep = 1; }
    if (pStep <= qs.length) {
      var q = qs[pStep - 1];
      var html = '<p class="peteritis-question"><strong>&#10067; ' + q.q + '</strong></p><div class="peteritis-options">';
      for (var i = 0; i < q.opts.length; i++) {
        var o = q.opts[i];
        html += '<button type="button" class="peteritis-opt btn-chip" data-score="' + o.s + '">' + o.t + '</button>';
      }
      html += "</div>";
      el.innerHTML = html;
      el.classList.remove("peteritis-done");
      el.classList.add("peteritis-questions");
      var opts = el.querySelectorAll(".peteritis-opt");
      for (var j = 0; j < opts.length; j++) {
        (function(opt) {
          opt.addEventListener("click", function() {
            pScore += parseInt(opt.getAttribute("data-score") || "0", 10);
            pStep++;
            if (pStep <= qs.length) {
              doPeteritis();
            } else {
              var tier = pScore <= 4 ? "low" : pScore >= 10 ? "high" : "mid";
              var r = diag[tier][Math.floor(Math.random() * diag[tier].length)];
              el.innerHTML = '<p class="peteritis-stage">' + stages[tier] + '</p><p class="peteritis-diagnosis">' + r + '</p>';
              el.classList.remove("peteritis-questions");
              el.classList.add("peteritis-done");
              pStep = 0;
              var btn = document.getElementById("btn-peteritis");
              if (btn) btn.textContent = l === "en" ? "Measure again" : "Nochmal messen";
            }
          });
        })(opts[j]);
      }
    }
  }

  window.runPeteritisCheck = function() { pStep = 0; doPeteritis(); };

  function initVisitor() {
    var vEl = document.getElementById("visitor-count");
    if (vEl) {
      try {
        var n = parseInt(localStorage.getItem("petern-visits") || "0", 10);
        n++;
        localStorage.setItem("petern-visits", String(n));
        vEl.textContent = n.toLocaleString();
      } catch (e) {
        vEl.textContent = "-";
      }
    }
  }

  function initPeteritisBtn() {
    var btn = document.getElementById("btn-peteritis");
    if (btn) {
      btn.onclick = function() { window.runPeteritisCheck(); };
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      initVisitor();
      initPeteritisBtn();
    });
  } else {
    initVisitor();
    initPeteritisBtn();
  }
})();
