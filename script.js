// Set initial count

let count = 0;

// Select value and buttons

const value = document.querySelector("#value"); // value is an ID in HTML
const btns = document.querySelectorAll(".btn"); // Selecting ALL buttons

// Accessing the event object (e)
// Event object (e) has a current property of "current target"
// More specifically, were looking for the "classList" (classes this element has)

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // event object
    const styles = e.currentTarget.classList; // Which button did the user select (currentTarget)
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    // Change color of the numbers based on value

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }

    if (count === 0) {
      value.style.color = "black ";
    }
    value.textContent = count; // Displays the new count
  });
});

// So here's what we did:

// 1. We selected ALL of the buttons
// 2. We used forEach to look over ALL of the buttons
// 3. For each button, we added an Event Listener
// 4. We used the event object (e) to get the classList of the current target
