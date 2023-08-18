const navBtn = document.querySelector('.nav-btn');
const header = document.querySelector('.header-desktop');
const menuContainer = document.querySelector('.mobile-menu-container');
const cross = document.querySelector('.cross');
const navMobile = document.querySelector('.nav-mobile');
const navItems = document.querySelectorAll('.header-desktop li');

navBtn.addEventListener('click', () => {
  header.classList.add('mobile-menu');
  menuContainer.style.display = 'block';
  cross.style.display = 'block';
  navMobile.style.display = 'block';
});

cross.addEventListener('click', () => {
  header.classList.remove('mobile-menu');
  menuContainer.style.display = 'none';
  cross.style.display = 'none';
  navMobile.style.display = 'none';
});

navItems.forEach((element) => {
  element.addEventListener('click', () => {
    header.classList.remove('mobile-menu');
    menuContainer.style.display = 'none';
    cross.style.display = 'none';
    navMobile.style.display = 'none';
  });
});

// Refactor Project Section
const workSection = document.querySelector('.works');
const projectGrid = document.createElement('div');
projectGrid.classList.add('project-grid');
workSection.appendChild(projectGrid);

const projects = [
  {
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: '<img src="assets/Snapshoot Portfolio.jpg" class="img-pop-up" alt="portfolio-image">',
    techs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'http://bh-observer.me/projects/todo/index.html',
    source: 'https://github.com/bhobserver/bhobserver.github.io/tree/main/projects/todo',
  },
  {
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: '<img src="assets/Snapshoot Portfolio.jpg" class="img-pop-up" alt="portfolio-image">',
    techs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'http://bh-observer.me/projects/randomcard/index.html',
    source: 'https://github.com/bhobserver/bhobserver.github.io/tree/main/projects/randomcard',
  },
  {
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: '<img src="assets/Snapshoot Portfolio.jpg" class="img-pop-up" alt="portfolio-image">',
    techs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'http://bh-observer.me/projects/patatapcloneproject/index.html',
    source: 'https://github.com/bhobserver/bhobserver.github.io/tree/main/projects/patatapcloneproject',
  },
  {
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: '<img src="assets/Snapshoot Portfolio.jpg" class="img-pop-up" alt="portfolio-image">',
    techs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'http://bh-observer.me/projects/message/index.html',
    source: 'https://github.com/bhobserver/bhobserver.github.io/tree/main/projects/message',
  },
  {
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: '<img src="assets/Snapshoot Portfolio.jpg" class="img-pop-up" alt="portfolio-image">',
    techs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'http://bh-observer.me/projects/mazegame/index.html',
    source: 'https://github.com/bhobserver/bhobserver.github.io/tree/main/projects/mazegame',
  },
  {
    name: 'Multi-Post Stories <br> Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: '<img src="assets/Snapshoot Portfolio.jpg" class="img-pop-up" alt="portfolio-image">',
    techs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'http://bh-observer.me/projects/colorgame/index.html',
    source: 'https://github.com/bhobserver/bhobserver.github.io/tree/main/projects/colorgame',
  },
];

projects.forEach((project) => {
  // Container for the grid.
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('project-container');
  // Container for the image.
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  projectContainer.appendChild(imgContainer);
  // Container for the project details
  const projectDetails = document.createElement('div');
  projectDetails.classList.add('project-details');
  projectContainer.appendChild(projectDetails);
  // Project title
  const projectTitle = document.createElement('h3');
  projectTitle.classList.add('project-title');
  projectTitle.innerHTML = project.name;
  projectDetails.appendChild(projectTitle);
  // Tech ul
  const techs = document.createElement('ul');
  techs.classList.add('tech-stack');
  projectDetails.appendChild(techs);
  // Tech li
  project.techs.forEach((item) => {
    const tech = document.createElement('li');
    tech.classList.add('tag');
    tech.innerHTML = item;
    techs.appendChild(tech);
  });
  // See project Button Container
  const seeProjectBtnContainer = document.createElement('div');
  seeProjectBtnContainer.classList.add('btn-container');
  projectDetails.appendChild(seeProjectBtnContainer);
  // See project Button
  const seeProjectButton = document.createElement('button');
  seeProjectButton.classList.add('see-project-btn');
  seeProjectButton.innerHTML = 'See project';
  seeProjectBtnContainer.appendChild(seeProjectButton);
  // Append container to work-section
  projectGrid.appendChild(projectContainer);
});

/* Add pop up */
const popUp = document.querySelector('.blur-bg');
const popUpHeading = document.querySelector('.pop-up-heading');
const popUpDescription = document.querySelector('.pop-up-description');
const seeProjectBtn = document.querySelectorAll('.see-project-btn');
const cancelMobile = document.querySelector('.close-pop-up-mobile');
const cancelDesktop = document.querySelector('.close-pop-up');
const liveBtn = document.querySelector('.see-live-btn');
const sourceBtn = document.querySelector('.see-source-btn');
const arr = Array.from(seeProjectBtn);
let targetCard;
let targetCardTitle;
let targetCardBtns;
let techList;

seeProjectBtn.forEach((e) => {
  e.addEventListener('click', () => {
    const idx = arr.indexOf(e);
    const { description, live, source } = projects[idx];
    const descriptionElement = (popUpDescription.querySelector('p'));
    targetCard = e.parentElement.parentElement;
    targetCardTitle = targetCard.querySelector('h3');
    targetCardBtns = targetCard.querySelector('.btn-container');
    techList = targetCard.querySelector('ul');
    targetCardTitle.removeAttribute('class');
    popUpHeading.appendChild(targetCardTitle);
    popUpHeading.appendChild(techList);
    descriptionElement.innerHTML = description;
    popUp.classList.toggle('hide');
    liveBtn.addEventListener('click', () => {
      window.location.href = live;
    });
    sourceBtn.addEventListener('click', () => {
      window.location.href = source;
    });
  });
});

cancelDesktop.addEventListener('click', () => {
  popUp.classList.add('hide');
  popUpHeading.removeChild(targetCardTitle);
  popUpHeading.removeChild(techList);
  targetCardTitle.classList.add('project-title');
  targetCard.insertBefore(targetCardTitle, targetCardBtns);
  targetCard.insertBefore(techList, targetCardBtns);
  targetCard = undefined;
});

cancelMobile.addEventListener('click', () => {
  popUp.classList.add('hide');
  popUpHeading.removeChild(targetCardTitle);
  popUpHeading.removeChild(techList);
  targetCardTitle.classList.add('project-title');
  targetCard.insertBefore(targetCardTitle, targetCardBtns);
  targetCard.insertBefore(techList, targetCardBtns);
  targetCard = undefined;
});

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 27 && targetCard !== undefined) {
    popUp.classList.add('hide');
    popUpHeading.removeChild(targetCardTitle);
    popUpHeading.removeChild(techList);
    targetCardTitle.classList.add('project-title');
    targetCard.insertBefore(targetCardTitle, targetCardBtns);
    targetCard.insertBefore(techList, targetCardBtns);
    targetCard = undefined;
  }
});

/* Contact Validation */
const formContact = document.querySelector('.form');
const fullNameINput = formContact.full_name;
const firstNameInput = formContact.first_name;
const lastNameInput = formContact.last_name;
const messageInput = formContact.message;
const errorELement = document.querySelector('.validation-message');
const errorMEssage = 'The email address should be in lowercase.';
const emailINput = formContact.email;
const submitBTn = formContact.submit;

submitBTn.addEventListener('click', (event) => {
  if (emailINput.value !== emailINput.value.toLowerCase()) {
    errorELement.textContent = errorMEssage;
    event.preventDefault();
  }
  if (window.innerWidth > 376) {
    firstNameInput.removeAttribute('required');
    lastNameInput.removeAttribute('required');
  } else {
    fullNameINput.removeAttribute('required');
  }
});

/* Functionaliy to preserve data in local storage */
const formData = {
  fullName: '',
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

if (localStorage.formDataStorage) {
  formData.fullName = JSON.parse(localStorage.formDataStorage).fullName;
  formData.firstName = JSON.parse(localStorage.formDataStorage).firstName;
  formData.lastName = JSON.parse(localStorage.formDataStorage).lastName;
  formData.email = JSON.parse(localStorage.formDataStorage).email;
  formData.message = JSON.parse(localStorage.formDataStorage).message;
  fullNameINput.value = formData.fullName;
  firstNameInput.value = formData.firstName;
  lastNameInput.value = formData.lastName;
  emailINput.value = formData.email;
  messageInput.value = formData.message;
}

fullNameINput.addEventListener('input', () => {
  formData.fullName = fullNameINput.value;
  localStorage.setItem('formDataStorage', JSON.stringify(formData));
});

firstNameInput.addEventListener('input', () => {
  formData.firstName = firstNameInput.value;
  localStorage.setItem('formDataStorage', JSON.stringify(formData));
});

lastNameInput.addEventListener('input', () => {
  formData.lastName = lastNameInput.value;
  localStorage.setItem('formDataStorage', JSON.stringify(formData));
});

emailINput.addEventListener('input', () => {
  formData.email = emailINput.value;
  localStorage.setItem('formDataStorage', JSON.stringify(formData));
});

messageInput.addEventListener('input', () => {
  formData.message = messageInput.value;
  localStorage.setItem('formDataStorage', JSON.stringify(formData));
});

/* Animation feature > Appear and disappear Nav-bar by clicking a specific key */
/* Animation feature > Nav-bar link to specific section */
/* Arrow hover feature > Make the arrow before the work section clickable and giving it a hover */
/* Give nav-bar a green border */
