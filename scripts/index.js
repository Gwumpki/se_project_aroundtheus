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
const modalProfileEditForm = profileEditModal.querySelector(".modal__form");
const modalProfileSaveButton = profileEditModal.querySelector(
  "#modal-profile-save-button"
);

// ! ||--------------------------------------------------------------------------------||
// ! ||                                   Functions                                   ||
// ! ||--------------------------------------------------------------------------------||

function closePopup() {
  profileEditModal.classList.remove("modal__opened");
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
  modalProfileTitleInput.value = profileTitle.textContent;
  modalProfileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal__opened");
});

modalCloseButton.addEventListener("click", () => {
  closePopup();
});

modalProfileEditForm.addEventListener("submit", handleProfileEditSubmit);

//best practice to catch the submission of a form rather than just the button as a fail safe like below//
// modalProfileSaveButton.addEventListener("click", () => {
//   profileTitle.textContent = modalProfileTitleInput.value;
//   profileDescription.textContent = modalProfileDescriptionInput.value;
//   profileEditModal.classList.remove("modal__opened");
// });
