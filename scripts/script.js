document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("verkrijgers-container");
    const addButton = document.getElementById("add-verkrijger");
    const firstVerkrijger = container.querySelector("fieldset"); // Het eerste veld om van te klonen
    let verkrijgerCount = 1;
    const maxVerkrijgers = 10; // Maximaal verkrijgers

    // verkrijgers toevoegen

    addButton.addEventListener("click", function () {
        if (verkrijgerCount < maxVerkrijgers) {
            // Vergroot de counter voor verkrijger
            verkrijgerCount++;

            // Clone de eerste verkrijger (het bestaande veld)
            const newVerkrijger = firstVerkrijger.cloneNode(true);

            // Pas de ID en de naamgeving aan voor het nieuwe veld
            newVerkrijger.setAttribute("id", `verkrijger_${verkrijgerCount}`);
            
            // Wijzig de naam van de inputs om conflicten te vermijden
            const inputs = newVerkrijger.querySelectorAll("input");
            inputs.forEach(input => {
                if (input.name) {
                    input.name = input.name.replace("1", `${verkrijgerCount}`);
                }
                // Reset de waarde van de input om ervoor te zorgen dat de velden leeg zijn
                input.value = '';

                // Verwijder de 'required' attributen tijdelijk om de rode omlijning te voorkomen
                input.removeAttribute('required');

                // Voeg de 'required' attributen weer toe zodra de gebruiker iets invult
                input.addEventListener('input', function () {
                    if (input.value.trim() !== '') {
                        input.setAttribute('required', 'required');
                    }
                });
            });

            // Verander de label teksten voor het nieuwe veld
            const legends = newVerkrijger.querySelectorAll("legend");
            legends.forEach((legend, index) => {
                if (index === 0) {
                    legend.textContent = `Verkrijger ${verkrijgerCount}`;
                } else if (index === 1) {
                    legend.textContent = `Krijgt deze verkrijger het hele vermogen?`;
                } else if (index === 2) {
                    legend.textContent = `Doet deze verkrijger een beroep op diens legitieme portie?`;
                }
            });

            // Voeg de verwijderknop toe voor het nieuwe veld
            const removeButton = document.createElement("button");
            removeButton.type = "button";
            removeButton.classList.add("remove-verkrijger");
            removeButton.textContent = "Verwijderen";

            removeButton.addEventListener("click", function () {
                container.removeChild(newVerkrijger);
                verkrijgerCount--;
                if (verkrijgerCount < maxVerkrijgers) {
                    addButton.disabled = false; // Heractiveer de knop als het aantal verkrijgers onder max is
                }
            });

            // Voeg de verwijderknop toe aan de gekloonde verkrijger
            newVerkrijger.appendChild(removeButton);

            // Voeg de gekloonde verkrijger toe aan de container
            container.appendChild(newVerkrijger);

            // Als het aantal verkrijgers gelijk is aan het maximum, zet de knop uit
            if (verkrijgerCount === maxVerkrijgers) {
                addButton.disabled = true;
            }
        }
    });
});



// ------------ PROGRESS BAR --------------

function updateProgress(step) {
    document.getElementById("progress-bar").value = step;
}


// validatie

const volgendeLinks = document.querySelectorAll('a[id^=volgende]');

volgendeLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        const section = this.closest('[id^=step]');
        const inputs = section.querySelectorAll('input[required]');
        let allFilled = true;

        // Voeg de validate class toe aan de huidige section
        section.classList.add('validate');

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                allFilled = false;
            }
        });

        if (!allFilled) {
            event.preventDefault();
            alert('Please fill all the required input fields in the section.');
        }
    });
});

// Live validatie: zodra je typt, krijgt een correct veld een groene rand
document.querySelectorAll('input[required]').forEach(input => {
    input.addEventListener('input', function () {
        this.classList.add('touched'); // Zorgt ervoor dat groene border direct verschijnt
    });
});

// ------- checked data required ----------

const jaRadioButton = document.querySelector('input[type="radio"][value="ja"]');
const inputs = document.querySelectorAll(".expandable input");

jaRadioButton.addEventListener('change', function() {
  if (this.checked) {
    // Als 'Ja' is geselecteerd, maak de inputs onder expandable verplicht
    inputs.forEach(input => {
      input.setAttribute("required", "true");
    });
    
  } else {
    // Als 'Ja' niet is geselecteerd, verwijder het required attribuut
    inputs.forEach(input => {
      input.removeAttribute("required");
    });
  }
});


// -------gemachtigde 3 opties------


document.addEventListener("DOMContentLoaded", function () {
    const step2 = document.querySelector("#step2"); // Selecteer alleen step2
    if (!step2) return; // Stop als step2 niet bestaat (veiligheid)

    const inputs = step2.querySelectorAll('input[name="bsn"], input[name="becon"], input[name="protocol"]');

    // Stap 1: Reset de velden zodat ze niet disabled zijn bij het laden
    inputs.forEach(input => {
        input.disabled = false;

        // Zorg ervoor dat de velden required zijn voor validatie
        input.setAttribute('required', 'required');
    });

    // Stap 2: Voeg event listeners toe zodat slechts één veld ingevuld kan worden
    inputs.forEach(input => {
        input.addEventListener("input", function () {
            if (this.value.length > 0) {
                // Disable alle andere velden binnen step2
                inputs.forEach(otherInput => {
                    if (otherInput !== this) {
                        otherInput.disabled = true;
                    }
                });
            } else {
                // Als geen veld is ingevuld, enable alles weer
                let hasFilledInput = Array.from(inputs).some(input => input.value.length > 0);
                if (!hasFilledInput) {
                    inputs.forEach(otherInput => {
                        otherInput.disabled = false;
                    });
                }
            }

            // Pas de styling aan afhankelijk van de geldigheid van het veld
            if (this.checkValidity()) {
                this.classList.add('user-valid');
                this.classList.remove('user-invalid');
            } else {
                this.classList.add('user-invalid');
                this.classList.remove('user-valid');
            }
        });
    });
});


// local storage?

// const inputFields = document.querySelectorAll("input");
 
// inputFields.forEach((inputField) => {
//     if (localStorage.getItem(inputField.id)) {
//         inputField.value = localStorage.getItem(inputField.id);
//     }
//     inputField.addEventListener("input", () => {
//         localStorage.setItem(inputField.id, inputField.value);
//     });
// });
 


// local storage

// document.addEventListener("DOMContentLoaded", function () {
//     // Selecteer alle invoervelden (inclusief radio buttons)
//     const inputFields = document.querySelectorAll("input");

//     // Stap 1: Vul de invoervelden met de opgeslagen waarde uit localStorage, als die er is
//     inputFields.forEach(inputField => {
//         const storedValue = localStorage.getItem(inputField.name);

//         // Controleer of het een radio button is
//         if (storedValue && inputField.type === "radio") {
//             // Zet de geselecteerde radio button op basis van de opgeslagen waarde
//             if (inputField.value === storedValue) {
//                 inputField.checked = true;
//             }
//         } else if (storedValue) {
//             // Voor andere invoervelden (zoals tekstvelden) vul de waarde in
//             inputField.value = storedValue;
//         }
//     });

//     // Stap 2: Bewaar de waarde in localStorage telkens als een invoerveld verandert
//     inputFields.forEach(inputField => {
//         inputField.addEventListener("input", () => {
//             // Voor radio buttons slaan we alleen de waarde van de geselecteerde radio button op
//             if (inputField.type === "radio" && inputField.checked) {
//                 localStorage.setItem(inputField.name, inputField.value);
//             } else if (inputField.type !== "radio") {
//                 // Voor andere invoervelden slaan we de waarde op
//                 localStorage.setItem(inputField.name, inputField.value);
//             }
//         });
//     });

//     // Voeg validatie- en stylingcode toe
//     inputFields.forEach(inputField => {
//         inputField.addEventListener('input', function () {
//             // Validatie van het veld
//             if (this.checkValidity()) {
//                 this.classList.add('user-valid');
//                 this.classList.remove('user-invalid');
//             } else {
//                 this.classList.add('user-invalid');
//                 this.classList.remove('user-valid');
//             }
//         });
//     });
// });
