const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

// ! ||--------------------------------------------------------------------------------||
// ! ||                                    Elements;                                   ||
// ! ||--------------------------------------------------------------------------------||

const profileEditButton = document.querySelector("#profile-edit-button"); //using ID to select//
const profileEditModal = document.querySelector("#profile-edit-modal");
const modalCloseButton = document.querySelector("#modal-close-button");
const profileTitle = document.querySelector(".profile__title"); //done for simplicity and unlikely to use again, but professional would be to create a class .js-profile-title or ID used just for javascript.//
const profileDescription = document.querySelector(".profile__description");
const modalProfileTitleInput = document.querySelector(".js-profile-title"); //creating another class just for javascript use//
const modalProfileDescriptionInput = document.querySelector(
  ".js-profile-description"
);
const modalProfileEditForm = document.forms["profile-edit-form"];
const modalProfileSaveButton = profileEditModal.querySelector(
  "#modal-profile-save-button"
);
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const addNewCardButton = document.querySelector("#profile-add-button");
const addCardModalCloseButton = document.querySelector(
  "#add-card-close-button"
);
// Form

// ! ||--------------------------------------------------------------------------------||
// ! ||                                   Functions                                   ||
// ! ||--------------------------------------------------------------------------------||

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

// function openModal() {
//   modalProfileTitleInput.value = profileTitle.textContent;
//   modalProfileDescriptionInput.value = profileDescription.textContent;
//   profileEditModal.classList.add("modal_opened");
// }

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function getCardElement(cardData) {
  //clone the template element with all its content and store it in a cardElement variable
  const cardElement = cardTemplate.cloneNode(true);
  //access the card title and image and store them in variables
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  //set the path to the image to the link field of the object
  cardImageEl.src = cardData.link;
  //set the image alt text to the name field of the object
  cardImageEl.alt = cardData.name;
  //set the card title to the name field of the object
  cardTitleEl.textContent = cardData.name;
  //return the ready HTML element with the filled-in data
  return cardElement;
}

// ! ||--------------------------------------------------------------------------------||
// ! ||                                 Event Handlers                                 ||
// ! ||--------------------------------------------------------------------------------||
function handleProfileEditSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = modalProfileTitleInput.value;
  profileDescription.textContent = modalProfileDescriptionInput.value;
  closePopup();
}

// ! ||--------------------------------------------------------------------------------||
// ! ||                                 Event Listeners                                ||
// ! ||--------------------------------------------------------------------------------||

profileEditButton.addEventListener("click", () => {
  openModal();
});

modalCloseButton.addEventListener("click", closePopup);

modalProfileEditForm.addEventListener("submit", handleProfileEditSubmit);

addNewCardButton.addEventListener("click", openModal);

addCardModalCloseButton.addEventListener("click", closePopup);

//best practice to catch the submission of a form rather than just the button like below as a fail safe and submit auto handles ENTER presses//
// modalProfileSaveButton.addEventListener("click", () => {
//   profileTitle.textContent = modalProfileTitleInput.value;
//   profileDescription.textContent = modalProfileDescriptionInput.value;
//   profileEditModal.classList.remove("modal__opened");
// });

// ! ||--------------------------------------------------------------------------------||
// ! ||                                     Loops                                     ||
// ! ||--------------------------------------------------------------------------------||

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.append(cardElement);
});

// Could do this for loop also://
// for (let i = 0; i < initialCards.length; i++) {
//   const card = initialCards[i];
// }
