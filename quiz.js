const prompt = require("prompt-sync")({ sigint: true });

let player1or2 = 0;

let pointcountplayer1 = 0;
let pointcountplayer2 = 0;

const quiz = [
  {
    name: "1: Biologie",
    fragen: [
      {
        punkte: "250",
        frage: "Was ist ein Biotop?",
        antworten: [
          "ein Lebensraum",
          "eine Lebensgemeinschaft",
          "ein Ökosystem",
          "ein Lebewesen",
        ],
        richtigeAntwort: "ein Lebensraum",
      },
      {
        punkte: "500",
        frage: "Welches der folgenden Tiere ist ein Paarhufer?",
        antworten: ["Pferd", "Nashorn", "Zebra", "Schwein"],
        richtigeAntwort: "Schwein",
      },
      {
        punkte: "750",
        frage: "Welches der Folgenden Tiere ist ein Zehengänger?",
        antworten: ["Eisbär", "Pferd", "Papagei", "Gorilla"],
        richtigeAntwort: "Papagei",
      },
      {
        punkte: "1000",
        frage: "Was passiert bei der Meiose?",
        antworten: [
          "Bildung von Geschlechtszellen",
          "Wachstum von Fingernägeln",
          "Bildung von Blutkörperchen",
          "Muskelwachstum",
        ],
        richtigeAntwort: "Bildung von Geschlechtszellen",
      },
    ],
  },
  {
    name: "2: Geografie",
    fragen: [
      {
        punkte: "250",
        frage: "Wie viele Länger grenzen an Deutschland?",
        antworten: ["7", "9", "6", "8"],
        richtigeAntwort: "9",
      },
      {
        punkte: "500",
        frage: "Wie heißt die Hauptstadt von Südafrika?",
        antworten: ["Pretoria", "Kapstadt", "Johannesburg", "Bloemfontein"],
        richtigeAntwort: "Pretoria",
      },
      {
        punkte: "750",
        frage:
          "James Bond lässt grüßen. Zu welchem Land gehört die Ländervorwahl 007",
        antworten: ["Irak", "China", "Ukraine", "Russland"],
        richtigeAntwort: "Russland",
      },
      {
        punkte: "1000",
        frage:
          "Welches der folgenden Länder hatte im Jahr 2023 die höchste Inflationsrate?",
        antworten: ["Kamerun", "Italien", "Mongolei", "Burkina Faso"],
        richtigeAntwort: "Mongolei",
      },
    ],
  },
  {
    name: "3: Politik",
    fragen: [
      {
        punkte: "250",
        frage:
          "Ab welchem Alter sind deutsche Staatsbürger bei der Bundestagswahl wahlberechtigt?",
        antworten: [
          "Es gibt keine Altersbeschränkung für das aktive Wahlrecht",
          "16 Jahre",
          "18 Jahre",
          "21 Jahre",
        ],
        richtigeAntwort: "18 Jahre",
      },
      {
        punkte: "500",
        frage: "Wie viele Sterne hat die Europaflagge?",
        antworten: ["6", "12", "21", "27"],
        richtigeAntwort: "12",
      },
      {
        punkte: "750",
        frage: "Wer wählt den Bundeskanzler?",
        antworten: [
          "Der Bundesrat",
          "Das Volk",
          "Der Bundestag",
          "Der Bundespräsident",
        ],
        richtigeAntwort: "Der Bundestag",
      },
      {
        punkte: "1000",
        frage: "Wann wurde der Euro als Bargeld in Deutschland eingeführt?",
        antworten: ["1990", "1998", "2002", "2006"],
        richtigeAntwort: "2002",
      },
    ],
  },
  {
    name: "4: Allgemeinwissen",
    fragen: [
      {
        punkte: "250",
        frage: "Wie hoch ist der Eiffelturm?",
        antworten: ["150 m", "176 m", "220 m", "300 m"],
        richtigeAntwort: "300 m",
      },
      {
        punkte: "500",
        frage:
          "Welches Vitamin ist wichtig, insbesondere für unsere Knochen und unser Immunsystem?",
        antworten: ["Vitamin A", "Vitamin B", "Vitamin D", "Nichts davon"],
        richtigeAntwort: "Vitamin D",
      },
      {
        punkte: "750",
        frage: "Wer komponierte die Zauberflöte?",
        antworten: [
          "Joseph Hayden",
          "Albert Einstein",
          "Johann Sebastian Bach",
          "Wolfgang Amadeus Mozart",
        ],
        richtigeAntwort: "Wolfgang Amadeus Mozart",
      },
      {
        punkte: "1000",
        frage:
          "Was verursacht auf der Erde Jahreszeiten wie Sommer und Winter?",
        antworten: [
          "Auf- und Absteigen der Erde",
          "Erdrotation",
          "Neigung der Erdachse",
          "Etwas ganz anderes",
        ],
        richtigeAntwort: "Neigung der Erdachse",
      },
    ],
  },
];

console.log(
  "\nWillkommen zu diesem wundervollen Quiz.\n\nDu erhälst Punkte, je nach Schwierigkeitsgrad deiner Frage.\n\nHier sind eure Kategorien:"
);

zug();

function zug() {
  player1or2 += 0;
  for (let c = 2; checkIfPointsLeft() === true; c++) {
    if (player1or2 % 2 === 0) {
      player1or2 += 1;
      console.log("Player 1: " + pointcountplayer1);
      console.log("Player 2: " + pointcountplayer2);
      console.log("");
      abfrage1();
    } else {
      player1or2 += 1;
      console.log("Player 1: " + pointcountplayer1);
      console.log("Player 2: " + pointcountplayer2);
      console.log("");
      abfrage2();
    }
  }
  end();
}

function end() {
  console.log("\nDas Spiel ist vorüber. Gewonnen hat: ");
  if (pointcountplayer1 > pointcountplayer2) {
    console.log("Spieler 1: " + pointcountplayer1);
    process.exit();
  } else if (pointcountplayer1 < pointcountplayer2) {
    console.log("Spieler 2: " + pointcountplayer2);
    process.exit();
  } else if (pointcountplayer1 === pointcountplayer2) {
    console.log("Es ist ein unentschieden");
    console.log("Spieler 1: " + pointcountplayer1);
    console.log("Spieler 2: " + pointcountplayer2);
    process.exit();
  }
}

function checkIfPointsLeft() {
  if (
    quiz[0].name === "0" &&
    quiz[1].name === "0" &&
    quiz[2].name === "0" &&
    quiz[3].name === "0"
  ) {
    return false;
  }
  return true;
}

function finalCheck() {
  checkIfCategHasPoints();
  checkIfPointsLeft();
}

function checkIfCategHasPoints() {
  if (
    quiz[0].fragen[0].punkte === "0" &&
    quiz[0].fragen[1].punkte === "0" &&
    quiz[0].fragen[2].punkte === "0" &&
    quiz[0].fragen[3].punkte === "0"
  ) {
    quiz[0].name = "0";
  }
  if (
    quiz[1].fragen[0].punkte === "0" &&
    quiz[1].fragen[1].punkte === "0" &&
    quiz[1].fragen[2].punkte === "0" &&
    quiz[1].fragen[3].punkte === "0"
  ) {
    quiz[1].name = "0";
  }
  if (
    quiz[2].fragen[0].punkte === "0" &&
    quiz[2].fragen[1].punkte === "0" &&
    quiz[2].fragen[2].punkte === "0" &&
    quiz[2].fragen[3].punkte === "0"
  ) {
    quiz[2].name = "0";
  }
  if (
    quiz[3].fragen[0].punkte === "0" &&
    quiz[3].fragen[1].punkte === "0" &&
    quiz[3].fragen[2].punkte === "0" &&
    quiz[3].fragen[3].punkte === "0"
  ) {
    quiz[3].name = "0";
  }
}

function abfrage1() {
  console.log(
    quiz[0].name +
      "\n" +
      quiz[1].name +
      "\n" +
      quiz[2].name +
      "\n" +
      quiz[3].name +
      "\n"
  );
  let categdecision = prompt(
    "Spieler 1, wähle die Kategorie mithilfe der Zahl."
  );
  if (categdecision === "1") {
    return biologie();
  }
  if (categdecision === "2") {
    return geografie();
  }
  if (categdecision === "3") {
    return politik();
  }
  if (categdecision === "4") {
    return allgemeinwissen();
  } else {
    console.log("");
    console.log("Bitte wähle eine gültige Zahl!!");
    console.log("");
    return abfrage1();
  }
}

function abfrage2() {
  console.log(
    quiz[0].name +
      "\n" +
      quiz[1].name +
      "\n" +
      quiz[2].name +
      "\n" +
      quiz[3].name +
      "\n"
  );
  let categdecision = prompt(
    "Spieler 2, wähle die Kategorie mithilfe der Zahl."
  );
  if (categdecision === "1") {
    return biologie();
  }
  if (categdecision === "2") {
    return geografie();
  }
  if (categdecision === "3") {
    return politik();
  }
  if (categdecision === "4") {
    return allgemeinwissen();
  } else {
    console.log("");
    console.log("Bitte wähle eine gültige Zahl!!");
    console.log("");
    return abfrage2();
  }
}
//MARK: bio
function biologie() {
  console.log("\nHier sind die vorhandenen Schwierigkeitsgrade deiner Fragen.");
  for (let x = 0; x < quiz[0].fragen.length; x++) {
    console.log(quiz[0].fragen[x].punkte);
  }

  categauswahlbio();
}

function geografie() {
  console.log("\nHier sind die vorhandenen Schwierigkeitsgrade deiner Fragen.");
  for (let y = 0; y < quiz[1].fragen.length; y++) {
    console.log(quiz[1].fragen[y].punkte);
  }

  categauswahlgeo();
}

function politik() {
  console.log("\nHier sind die vorhandenen Schwierigkeitsgrade deiner Fragen.");
  for (let x = 0; x < quiz[2].fragen.length; x++) {
    console.log(quiz[2].fragen[x].punkte);
  }

  categauswahlpoli();
}

function allgemeinwissen() {
  console.log("\nHier sind die vorhandenen Schwierigkeitsgrade deiner Fragen.");
  for (let x = 0; x < quiz[3].fragen.length; x++) {
    console.log(quiz[3].fragen[x].punkte);
  }

  categauswahlallg();
}

function categauswahlbio() {
  let wertdecision = prompt("Wähle den Schwierigkeitsgrad deiner Frage aus. ");

  if (wertdecision === "250") {
    console.log(quiz[0].fragen[0].frage);
    console.log(quiz[0].fragen[0].antworten);
    console.log("Bitte gebe deine Antwort ein.");
    console.log("");
    let answer = prompt("Eingabe: ");
    if (answer === quiz[0].fragen[0].richtigeAntwort) {
      if (player1or2 % 2 === 1) {
        console.log("Richtig!");
        pointcountplayer1 += 250;
        quiz[0].fragen[0].punkte = "0";
        checkIfCategHasPoints();
        checkIfPointsLeft();
        return zug();
      } else if (player1or2 % 2 === 0) {
        console.log("Richtig!");
        pointcountplayer2 += 250;
        quiz[0].fragen[0].punkte = "0";
        finalCheck();
        return zug();
      }
      return zug();
    } else {
      console.log("Falsch, die richtige Antwort wäre:");
      console.log(quiz[0].fragen[0].richtigeAntwort);
      quiz[0].fragen[0].punkte = "0";
      finalCheck();
      return zug();
    }
  }
  if (wertdecision === "500") {
    console.log(quiz[0].fragen[1].frage);
    console.log(quiz[0].fragen[1].antworten);
    console.log("Bitte gebe deine Antwort ein.");
    console.log("");
    let answer = prompt("Eingabe: ");
    if (answer === quiz[0].fragen[1].richtigeAntwort) {
      if (player1or2 % 2 === 1) {
        console.log("Richtig!");
        pointcountplayer1 += 500;
        quiz[0].fragen[1].punkte = "0";
        finalCheck();
        return zug();
      } else if (player1or2 % 2 === 0) {
        console.log("Richtig!");
        pointcountplayer2 += 500;
        quiz[0].fragen[1].punkte = "0";
        finalCheck();
        return zug();
      }
    } else {
      console.log("Falsch, die richtige Antwort wäre:");
      console.log(quiz[0].fragen[1].richtigeAntwort);
      quiz[0].fragen[1].punkte = "0";
      finalCheck();
      return zug();
    }
  }
  if (wertdecision === "750") {
    console.log(quiz[0].fragen[2].frage);
    console.log(quiz[0].fragen[2].antworten);
    console.log("Bitte gebe deine Antwort ein.");
    console.log("");
    let answer = prompt("Eingabe: ");
    if (answer === quiz[0].fragen[2].richtigeAntwort) {
      if (player1or2 % 2 === 1) {
        console.log("Richtig!");
        pointcountplayer1 += 750;
        quiz[0].fragen[2].punkte = "0";
        finalCheck();
        return zug();
      } else if (player1or2 % 2 === 0) {
        console.log("Richtig!");
        pointcountplayer2 += 750;
        quiz[0].fragen[2].punkte = "0";
        finalCheck();
        return zug();
      }
    } else {
      console.log("Falsch, die richtige Antwort wäre:");
      console.log(quiz[0].fragen[2].richtigeAntwort);
      quiz[0].fragen[2].punkte = "0";
      finalCheck();
      return zug();
    }
  }
  if (wertdecision === "1000") {
    console.log(quiz[0].fragen[3].frage);
    console.log(quiz[0].fragen[3].antworten);
    console.log("Bitte gebe deine Antwort ein.");
    console.log("");
    let answer = prompt("Eingabe: ");
    if (answer === quiz[0].fragen[3].richtigeAntwort) {
      if (player1or2 % 2 === 1) {
        console.log("Richtig!");
        pointcountplayer1 += 1000;
        quiz[0].fragen[3].punkte = "0";
        finalCheck();
        return zug();
      } else if (player1or2 % 2 === 0) {
        console.log("Richtig!");
        pointcountplayer2 += 1000;
        quiz[0].fragen[3].punkte = "0";
        finalCheck();
        return zug();
      }
    } else {
      console.log("Falsch, die richtige Antwort wäre:");
      console.log(quiz[0].fragen[3].richtigeAntwort);
      quiz[0].fragen[3].punkte = "0";
      finalCheck();
      return zug();
    }
  } else {
    console.log("");
    console.log("Bitte wähle eine gültige Zahl!!");
    console.log("");
    return biologie();
  }
}

function categauswahlgeo() {
  let wertdecision = prompt("Wähle den Schwierigkeitsgrad deiner Frage aus. ");
  if (wertdecision === "250") {
    console.log(quiz[1].fragen[0].frage);
    console.log(quiz[1].fragen[0].antworten);
    console.log("Bitte gebe deine Antwort ein.");
    console.log("");
    let answer = prompt("Eingabe: ");
    if (answer === quiz[1].fragen[0].richtigeAntwort) {
      if (player1or2 % 2 === 1) {
        console.log("Richtig!");
        pointcountplayer1 += 250;
        quiz[1].fragen[0].punkte = "0";
        finalCheck();
        return zug();
      } else if (player1or2 % 2 === 0) {
        console.log("Richtig!");
        pointcountplayer2 += 250;
        quiz[1].fragen[0].punkte = "0";
        finalCheck();
        return zug();
      }
    } else {
      console.log("Falsch, die richtige Antwort wäre:");
      console.log(quiz[1].fragen[0].richtigeAntwort);
      quiz[1].fragen[0].punkte = "0";
      finalCheck();
      return zug();
    }
  }
  if (wertdecision === "500") {
    console.log(quiz[1].fragen[1].frage);
    console.log(quiz[1].fragen[1].antworten);
    console.log("Bitte gebe deine Antwort ein.");
    console.log("");
    let answer = prompt("Eingabe: ");
    if (answer === quiz[1].fragen[1].richtigeAntwort) {
      if (player1or2 % 2 === 1) {
        console.log("Richtig!");
        pointcountplayer1 += 500;
        quiz[1].fragen[1].punkte = "0";
        finalCheck();
        return zug();
      } else if (player1or2 % 2 === 0) {
        console.log("Richtig!");
        pointcountplayer2 += 500;
        quiz[1].fragen[1].punkte = "0";
        finalCheck();
        return zug();
      }
    } else {
      console.log("Falsch, die richtige Antwort wäre:");
      console.log(quiz[1].fragen[1].richtigeAntwort);
      quiz[1].fragen[1].punkte = "0";
      finalCheck();
      return zug();
    }
  }
  if (wertdecision === "750") {
    console.log(quiz[1].fragen[2].frage);
    console.log(quiz[1].fragen[2].antworten);
    console.log("Bitte gebe deine Antwort ein.");
    console.log("");
    let answer = prompt("Eingabe: ");
    if (answer === quiz[1].fragen[2].richtigeAntwort) {
      if (player1or2 % 2 === 1) {
        console.log("Richtig!");
        pointcountplayer1 += 750;
        quiz[1].fragen[2].punkte = "0";
        finalCheck();
        return zug();
      } else if (player1or2 % 2 === 0) {
        console.log("Richtig!");
        pointcountplayer2 += 750;
        quiz[1].fragen[2].punkte = "0";
        finalCheck();
        return zug();
      }
    } else {
      console.log("Falsch, die richtige Antwort wäre:");
      console.log(quiz[1].fragen[2].richtigeAntwort);
      quiz[1].fragen[2].punkte = "0";
      finalCheck();
      return zug();
    }
  }
  if (wertdecision === "1000") {
    console.log(quiz[1].fragen[3].frage);
    console.log(quiz[1].fragen[3].antworten);
    console.log("Bitte gebe deine Antwort ein.");
    console.log("");
    let answer = prompt("Eingabe: ");
    if (answer === quiz[1].fragen[3].richtigeAntwort) {
      if (player1or2 % 2 === 1) {
        console.log("Richtig!");
        pointcountplayer1 += 1000;
        quiz[1].fragen[3].punkte = "0";
        finalCheck();
        return zug();
      } else if (player1or2 % 2 === 0) {
        console.log("Richtig!");
        pointcountplayer2 += 1000;
        quiz[1].fragen[3].punkte = "0";
        finalCheck();
        return zug();
      }
    } else {
      console.log("Falsch, die richtige Antwort wäre:");
      console.log(quiz[1].fragen[3].richtigeAntwort);
      quiz[1].fragen[3].punkte = "0";
      finalCheck();
      return zug();
    }
  } else {
    console.log("");
    console.log("Bitte wähle eine gültige Zahl!!");
    console.log("");
    return geografie();
  }
}

function categauswahlpoli() {
  let wertdecision = prompt("Wähle den Schwierigkeitsgrad deiner Frage aus. ");
  if (wertdecision === "250") {
    console.log(quiz[2].fragen[0].frage);
    console.log(quiz[2].fragen[0].antworten);
    console.log("Bitte gebe deine Antwort ein.");
    console.log("");
    let answer = prompt("Eingabe: ");
    if (answer === quiz[2].fragen[0].richtigeAntwort) {
      if (player1or2 % 2 === 1) {
        console.log("Richtig!");
        pointcountplayer1 += 250;
        quiz[2].fragen[0].punkte = "0";
        finalCheck();
        return zug();
      } else if (player1or2 % 2 === 0) {
        console.log("Richtig!");
        pointcountplayer2 += 250;
        quiz[2].fragen[0].punkte = "0";
        finalCheck();
        return zug();
      }
    } else {
      console.log("Falsch, die richtige Antwort wäre:");
      console.log(quiz[2].fragen[0].richtigeAntwort);
      quiz[2].fragen[0].punkte = "0";
      finalCheck();
      return zug();
    }
  }
  if (wertdecision === "500") {
    console.log(quiz[2].fragen[1].frage);
    console.log(quiz[2].fragen[1].antworten);
    console.log("Bitte gebe deine Antwort ein.");
    console.log("");
    let answer = prompt("Eingabe: ");
    if (answer === quiz[2].fragen[1].richtigeAntwort) {
      if (player1or2 % 2 === 1) {
        console.log("Richtig!");
        pointcountplayer1 += 500;
        quiz[2].fragen[1].punkte = "0";
        finalCheck();
        return zug();
      } else if (player1or2 % 2 === 0) {
        console.log("Richtig!");
        ointcountplayer2 += 500;
        quiz[2].fragen[1].punkte = "0";
        finalCheck();
        return zug();
      }
    } else {
      console.log("Falsch, die richtige Antwort wäre:");
      console.log(quiz[2].fragen[1].richtigeAntwort);
      quiz[2].fragen[1].punkte = "0";
      finalCheck();
      return zug();
    }
  }
  if (wertdecision === "750") {
    console.log(quiz[2].fragen[2].frage);
    console.log(quiz[2].fragen[2].antworten);
    console.log("Bitte gebe deine Antwort ein.");
    console.log("");
    let answer = prompt("Eingabe: ");
    if (answer === quiz[2].fragen[2].richtigeAntwort) {
      if (player1or2 % 2 === 1) {
        console.log("Richtig!");
        pointcountplayer1 += 750;
        quiz[2].fragen[2].punkte = "0";
        finalCheck();
        return zug();
      } else if (player1or2 % 2 === 0) {
        console.log("Richtig!");
        pointcountplayer2 += 750;
        quiz[2].fragen[2].punkte = "0";
        finalCheck();
        return zug();
      }
    } else {
      console.log("Falsch, die richtige Antwort wäre:");
      console.log(quiz[2].fragen[2].richtigeAntwort);
      quiz[2].fragen[2].punkte = "0";
      finalCheck();
      return zug();
    }
  }
  if (wertdecision === "1000") {
    console.log(quiz[2].fragen[3].frage);
    console.log(quiz[2].fragen[3].antworten);
    console.log("Bitte gebe deine Antwort ein.");
    console.log("");
    let answer = prompt("Eingabe: ");
    if (answer === quiz[2].fragen[3].richtigeAntwort) {
      if (player1or2 % 2 === 1) {
        console.log("Richtig!");
        pointcountplayer1 += 1000;
        quiz[2].fragen[3].punkte = "0";
        finalCheck();
        return zug();
      } else if (player1or2 % 2 === 0) {
        console.log("Richtig!");
        pointcountplayer2 += 1000;
        quiz[2].fragen[3].punkte = "0";
        finalCheck();
        return zug();
      }
    } else {
      console.log("Falsch, die richtige Antwort wäre:");
      console.log(quiz[2].fragen[3].richtigeAntwort);
      quiz[2].fragen[3].punkte = "0";
      finalCheck();
      return zug();
    }
  } else {
    console.log("");
    console.log("Bitte wähle eine gültige Zahl!!");
    console.log("");
    return politik();
  }
}

function categauswahlallg() {
  let wertdecision = prompt("Wähle den Schwierigkeitsgrad deiner Frage aus. ");
  if (wertdecision === "250") {
    console.log(quiz[3].fragen[0].frage);
    console.log(quiz[3].fragen[0].antworten);
    console.log("Bitte gebe deine Antwort ein.");
    console.log("");
    let answer = prompt("Eingabe: ");
    if (answer === quiz[3].fragen[0].richtigeAntwort) {
      if (player1or2 % 2 === 1) {
        console.log("Richtig!");
        pointcountplayer1 += 250;
        quiz[3].fragen[0].punkte = "0";
        finalCheck();
        return zug();
      } else if (player1or2 % 2 === 0) {
        console.log("Richtig!");
        pointcountplayer2 += 250;
        quiz[3].fragen[0].punkte = "0";
        finalCheck();
        return zug();
      }
    } else {
      console.log("Falsch, die richtige Antwort wäre:");
      console.log(quiz[3].fragen[0].richtigeAntwort);
      quiz[3].fragen[0].punkte = "0";
      finalCheck();
      return zug();
    }
  }
  if (wertdecision === "500") {
    console.log(quiz[3].fragen[1].frage);
    console.log(quiz[3].fragen[1].antworten);
    console.log("Bitte gebe deine Antwort ein.");
    console.log("");
    let answer = prompt("Eingabe: ");
    if (answer === quiz[3].fragen[1].richtigeAntwort) {
      if (player1or2 % 2 === 1) {
        console.log("Richtig!");
        pointcountplayer1 += 500;
        quiz[3].fragen[1].punkte = "0";
        finalCheck();
        return zug();
      } else if (player1or2 % 2 === 0) {
        console.log("Richtig!");
        pointcountplayer2 += 500;
        quiz[3].fragen[1].punkte = "0";
        finalCheck();
        return zug();
      }
    } else {
      console.log("Falsch, die richtige Antwort wäre:");
      console.log(quiz[3].fragen[1].richtigeAntwort);
      quiz[3].fragen[1].punkte = "0";
      finalCheck();
      return zug();
    }
  }
  if (wertdecision === "750") {
    console.log(quiz[3].fragen[2].frage);
    console.log(quiz[3].fragen[2].antworten);
    console.log("Bitte gebe deine Antwort ein.");
    console.log("");
    let answer = prompt("Eingabe: ");
    if (answer === quiz[3].fragen[2].richtigeAntwort) {
      if (player1or2 % 2 === 1) {
        console.log("Richtig!");
        pointcountplayer1 += 750;
        quiz[3].fragen[2].punkte = "0";
        finalCheck();
        return zug();
      } else if (player1or2 % 2 === 0) {
        console.log("Richtig!");
        pointcountplayer1 += 750;
        quiz[3].fragen[2].punkte = "0";
        finalCheck();
        return zug();
      }
    } else {
      console.log("Falsch, die richtige Antwort wäre:");
      console.log(quiz[3].fragen[2].richtigeAntwort);
      quiz[3].fragen[2].punkte = "0";
      finalCheck();
      return zug();
    }
  }
  if (wertdecision === "1000") {
    console.log(quiz[3].fragen[3].frage);
    console.log(quiz[3].fragen[3].antworten);
    console.log("Bitte gebe deine Antwort ein.");
    console.log("");
    let answer = prompt("Eingabe: ");
    if (answer === quiz[3].fragen[3].richtigeAntwort) {
      if (player1or2 % 2 === 1) {
        console.log("Richtig!");
        pointcountplayer1 += 1000;
        quiz[3].fragen[3].punkte = "0";
        finalCheck();
        return zug();
      } else if (player1or2 % 2 === 0) {
        console.log("Richtig!");
        pointcountplayer2 += 1000;
        quiz[3].fragen[3].punkte = "0";
        finalCheck();
        return zug();
      }
    } else {
      console.log("Falsch, die richtige Antwort wäre:");
      console.log(quiz[3].fragen[3].richtigeAntwort);
      quiz[3].fragen[3].punkte = "0";
      finalCheck();
      return zug();
    }
  } else {
    console.log("");
    console.log("Bitte wähle eine gültige Zahl!!");
    console.log("");
    return allgemeinwissen();
  }
}
