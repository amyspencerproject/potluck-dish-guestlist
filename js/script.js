const addGuestButton = document.querySelector(".invite"); // invite button
const guestInputLabel = document.querySelector(".add-guest label"); // label for the invite button
const guestInput = document.querySelector(".add-guest input"); // text input box
const guestList = document.querySelector(".guest-list"); // unordered list (not yet visible)
const guestCount = document.querySelector(".attendance"); // span class for number of guests attending
const guestFull = document.querySelector(".alert"); // alert when guest list is full (not yet visible)
const assignButton = document.querySelector(".assign"); // assign button
const assignedItems = document.querySelector(".assigned-items"); // targets the list of both guest's name and assigned dish
const footer = document.querySelector("footer");

addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value; //grab the input field when user clicks on button
    
    if (guest !== "") {
      addToList(guest);
      updateGuestCount();
      clearInput(); //clear guest name
    }
});

const clearInput = function () {
    guestInput.value = ""; //need to use .value to clear html input field
};

const addToList = function (guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
};

const updateGuestCount = function () {
    const guests = document.querySelectorAll(".guest-list li"); //selects all the li in the guest-list class
    guestCount.innerText = guests.length;

    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestInput.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};

const assignItems = function () {
    const potluckItems = [
      "green salad",
      "potato sald",
      "cherry pie",
      "hot dogs",
      "buns",
      "chips",
      "soda",
      "beer",
      "brats",
      "deviled eggs",
      "water melon",
      "condiments"
    ];

    const allGuests = document.querySelectorAll(".guest-list li");

    for (let guest of allGuests) {
        let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
        let randomPotluckItem = potluckItems[randomPotluckIndex];
        
        let listItem = document.createElement("li");
        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
        assignedItems.append(listItem);

        potluckItems.splice(randomPotluckIndex, 1);
    }
};

assignButton.addEventListener("click", function () {
    assignItems();
    assignButton.disabled = true;
    footer.classList.remove("hide");
  });
