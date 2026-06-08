const homeLabel = document.getElementById("home-label");
const guestLabel = document.getElementById("guest-label");
const scoreBtn = document.querySelector(".score-btn");

let homecount = 0
let guestCount = 0
homeLabel.innerText = `${homecount}`;
guestLabel.innerText = `${guestCount}`;

function incrementHomeCountByOne() {
  homecount += 1;
  homeLabel.innerText = `${homecount}`;
}

function incrementHomeCountByTwo() {
  homecount += 2;
  homeLabel.innerText = `${homecount}`;
}

function incrementHomeCountByThree() {
  homecount += 3;
  homeLabel.innerText = `${homecount}`;
}

function incrementGuestCountByOne() {
  guestCount += 1;
  guestLabel.innerText = `${guestCount}`;
}

function incrementGuestCountByTwo() {
  guestCount += 2;
  guestLabel.innerText = `${guestCount}`;
}

function incrementGuestCountByThree() {
  guestCount += 3;
  guestLabel.innerText = `${guestCount}`;
}