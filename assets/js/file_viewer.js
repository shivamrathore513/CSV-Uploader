console.log('Im in');
//  ligth & dark mode code
let mode = true;
const btn = document.querySelector('.btn-mode');
const of = document.querySelector('.of');
const light = document.querySelector('.mode-name');
const body = document.body;

btn.addEventListener('click', () => {
  console.log(`clicked`);

  if (mode) {
    btn.style.transform = "translateX(-40px)";
    of.style.transform = "translateX(25px)";
    of.textContent = "ON";
  
    body.style.color = "white";
    body.style.background = "linear-gradient(109.6deg, rgb(20, 30, 48) 11.2%, rgb(36, 59, 85) 91.1%)";
  } else {
    btn.style.transform = "translateX(0)";
    of.textContent = "OFF";
   
    of.style.transform = "translateX(0)";
    body.style.color = "black";
    body.style.background = "white";
  }

  // Toggle the mode
  mode = !mode;
});




document.getElementById("go").addEventListener("click", searchTable);

function searchTable() {
  // Get the input value and convert it to lowercase
  const input = document.getElementById("search-input").value.toLowerCase();
  console.log(input);

  // Get all table rows and iterate through them
  const rows = document.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    // Get the text content of each row and convert it to lowercase
    const rowText = rows[i].textContent.toLowerCase();

    // If the input value is found in the row text, highlight the row
    if (rowText.includes(input)) {
      rows[i].classList.add("highlight");
    } else {
      rows[i].classList.remove("highlight");
    }
  }
}
