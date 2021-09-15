// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

addGuestButton.addEventListener("click", function(){
    const guest = guestInput.value; //grab the input field when user clicks on button
    
    if (guest !== "") {
      addToList(guest);
      updateGuestCount();
    }
    clearInput(); //clear guest name
});

const clearInput = function(){
    guestInput.value = ""; //need to use .value to clear html input field
};

const addToList = function(guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
};

const updateGuestCount = function() {
    const guests = document.querySelectorAll(".guest-list li") //selects all the li in the guest-list class
    guestCount.innerText = guests.length;
    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestInput.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};

