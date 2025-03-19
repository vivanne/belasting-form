# 📌 Aangifte erfbelasting

## 📅 Week 1 [24/02/2025 - 02/03/2025]

### 🎯 Doelen

- [x] Basis opzet formulier (structuur uitvogelen)

### ✅ To-Do Lijst

- [x] Formulier doornemen
- [x] Informatie bestand doornemen
- [x] 1a als basis opzet bouwen
- [x] Basis stijling NS erin zetten

### 📝 Obstakels & Notities

- **Vorderingen:**

![basic stijling](./images/Screenshot%202025-03-19%20at%2012.42.40.png)
Ik heb de basic styling van ns gehaald. Van NS heb ik een formulier gekregen (van Quinten) zie bronnenlijst.

- **Probleem:** Tijdens de eerste paar dagen kon ik nog niet helemaal goed bepalen hoe nou een basisopzet voor een formulier eruit zou zien. Dit had ik gedaan doormiddel van ul en li elementen. In het gesprek op vrijdag kwam ik erachter dat dit overbodig was. En dat ik gebruik moest gaan maken van fieldset elementen.

- **Oplossing:** Ik ben onderzoek gaan doen naar Fieldset elementen op mozzilla.org en weet nu ongeveer m'n basis op te zetten.

---

## 📅 Week 2 [03/03/2025 - 09/03/2025]

### 🎯 Doelen

- [ ] HTML verder werken -> laat stijling voor later

### ✅ To-Do Lijst

- [x] html schrijven ;1
- [x] html schrijven ;3

### 📝 Obstakels & Notities

- **Probleem:**
  Ik ben erachter gekomen dat ik alsnog de html opzet niet helemaal goed heb gedaan. Ik heb nu 1 fieldset per gedeelte uit het formulier ipv per stuk vragen soms. Hierdoor moet ik mijn opzet een beetje gaan veranderen en meerdere fieldsets aan gebruiken ipv 1 met alle vragen erin. Ik liep hier tegenaan toen ik met radio buttons ging beginnen. Dit had ik opgezet door een p tag te gebruiken voor een kopje en dan label en input voor de radiobuttons. Dit had met een fieldset gemoeten ipv gezamelijk in 1 fieldset. Dit ga ik van het weekend nog aanpassen zodat ik deel 3 kan afronden voor deze week.

- **Oplossing:**
  Dit had met een fieldset gemoeten ipv gezamelijk in 1 fieldset. Dit ga ik van het weekend nog aanpassen zodat ik deel 3 kan afronden voor deze week.

---

## 📅 Week 3 [10/03/2025 - 16/03/2025]

### 🎯 Doelen

- [x] HTML verder werken -> laat stijling voor later
- [x] UX aspecten verwerken: error prevention/ meldingen bij lege invoer etc.

### ✅ To-Do Lijst

- [x] placeholders toevoegen
- [x] verkrijgers stuk
- [x] algemene stijling
- [x] buttons stijlen
- [ ] progressbar laten werken

### 📝 Obstakels & Notities

- **Probleem:**

Het is me nog neit gelukt om mijn progress bar werkend te krijgen. Ik heb het geprobeerd met deze bron en target selectors:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress.

elk gedeelte heb ik voor het opdelen van de content in een aparte fieldset gezet met een id: #step1,2,3 etc.
dit heb ik geprobeerd:

```css
/* progress bar */

progress {
  width: 100%;
  height: 20px;
  margin-top: 20px;
  border-radius: 5px;
}

.step {
  display: none;
  margin-top: 20px;
  border-radius: 5px;
}

#step1:target ~ #progressbar {
  value: 25;
}

#step2:target ~ #progressbar {
  value: 50;
}

#step3:target ~ #progressbar {
  value: 75;
}

#step4:target ~ #progressbar {
  value: 100;
}
```

- **Oplossing:**

Ik heb mezelf een tijdlimiet van 35 minuten gegeven om verder uit te zoeken hoe het zou moeten werken, maar het is me niet gelukt binnen mijn tijdsframe het op te lossen. En dus ben ik doorgegaan naar een andere taak.

---

## 📅 Week 4 [17/03/2025 - 23/03/2025]

### 🎯 Doelen

- [x] HTML verder werken -> laat stijling voor later
- [x] UX aspecten verwerken: error prevention/ meldingen bij lege invoer etc.

### ✅ To-Do Lijst

- [x] @support fixen
- [ ] Responsive maken
- [x] Local storage
- [ ] Validatie verbeteren -> teksten meegeven wanneer fout
- [x] Read me volgooien

### 📝 Obstakels & Notities

- **Probleem:**

Ik heb mn @supports verkeerd om gezet. Ik wil dat alles van default op block staat, dat stel has wordt niet ondersteund, alles op block staat. Daarnaast had ik nog niet met de support has selector gewerkt Eerst had ik dit:

```css
@supports selector(:checked) {
  .expandable {
    display: none;
    margin-top: 5px;
  }
  .inklap {
    display: block;
    margin-top: 5px;
  }
}

label:has(input[type="radio"]:checked) + .expandable {
  display: block;
}

label:has(input[type="checkbox"]:checked) ~ .inklap {
  display: none;
}
```

Dit heb ik aangepast naar:

```css
.expandable {
  display: block;
  margin-top: 5px;
}

.inklap {
  display: block;
  margin-top: 5px;
}

@supports (selector(:has(input[type="radio"]:checked))) {
  label:has([type="radio"]:not(:checked)) + .expandable {
    display: none;
  }
}

@supports (selector(:has(input[type="checkbox"]:checked))) {
  label:has(input[type="checkbox"]:checked) ~ .inklap {
    display: none;
  }
}
```

```css
/* progress bar */

progress {
  width: 100%;
  height: 20px;
  margin-top: 20px;
  border-radius: 5px;
}

.step {
  display: none;
  margin-top: 20px;
  border-radius: 5px;
}

#step1:target ~ #progressbar {
  value: 25;
}

#step2:target ~ #progressbar {
  value: 50;
}

#step3:target ~ #progressbar {
  value: 75;
}

#step4:target ~ #progressbar {
  value: 100;
}
```

- **Oplossing:**

Ik heb mezelf een tijdlimiet van 35 minuten gegeven om verder uit te zoeken hoe het zou moeten werken, maar het is me niet gelukt binnen mijn tijdsframe het op te lossen. En dus ben ik doorgegaan naar een andere taak.

## 💻 Bronnen

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
- https://www.ns.nl/formulieren/geld-terug.html
