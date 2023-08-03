/* Add Mobile Menu to mobile screen */
const navBtn = document.querySelector('.nav-icon');
const header = document.querySelector('.header-mobile');
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

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    header.classList.remove('mobile-menu');
    menuContainer.style.display = 'none';
    cross.style.display = 'none';
    navMobile.style.display = 'none';
  }
});

/* Add dynamic */

const featureSection = document.querySelector('.feature');
const performerContainer = document.createElement('div');
performerContainer.classList.add('performer-container');
featureSection.appendChild(performerContainer);

const perfomers = [
  {
    image: '<img src="./images/Tamikrest.jpg" alt="performer-photo" class="performer-img">',
    name: 'Tamikrest',
    type: 'Mali Band',
    intro: 'Tamikrest is a group of musicians who belong to the Tuareg people. The band was founded in 2006 in Kidal, Mali. They mix traditional African music with Western rock and pop influences and sing in Tamashek.',
  },
  {
    image: '<img src="./images/AsíAsí.jpg" alt="performer-photo" class="performer-img">',
    name: 'Así Así',
    type: 'Mexican/American band',
    intro: 'Así Así is a Mexican/American band formerly known as El Mañana formed in Mexico City in 2009. The band consists of Fernando de Buen (guitar/vocals), Ben Geissel (drums), Celeen Rusk (keyboards), and Sam Coplin (bass)',
  },
  {
    image: '<img src="./images/CheikhIbraFam.jpg" alt="performer-photo" class="performer-img">',
    name: 'Cheikh Ibra Fam',
    type: 'Performer',
    intro: 'Cheikh Ibra Fam is a multidimensional performer whose nearly 15 year career has demonstrated a free and futuristic spirit, well anchored in his Senegalese roots.',
  },
  {
    image: '<img src="./images/topdonn.jpg" alt="performer-photo" class="performer-img">',
    name: 'DJ TopDonn',
    type: 'Disc Jockey',
    intro: "Originally hailing from Nairobi, Kenya, DJ TopDonn's involvement on the Afro Urban music scene has seen him grace the stage in various capacities with industry heavyweights such as Mafikizolo, Koffi Olomide, Fally Ipupa, Serge Beynaud, Les Nubians, Angelique Kidjo & Yossou N'dour.",
  },
  {
    image: '<img src="./images/SanSalvador.jpg" alt="performer-photo" class="performer-img">',
    name: 'San Salvador',
    type: 'Folk Band',
    intro: 'Occitan polyphony is the starting point for this six-voice and percussion collective as they embark on their search for universal folklore, rooted in the region’s deep troubadour traditions yet circulating between cultures and musical genres.',
  },
  {
    image: '<img src="./images/rammurthy.jpg" alt="performer-photo" class="performer-img">',
    name: 'Ramakrishnan Murthy',
    type: 'Carnatic Music Vocalist',
    intro: 'Ramakrishnan Murthy is a Carnatic Music vocalist from India. He regularly performs in the annual Madras Music Season besides being featured in music festivals world over that focus on Indian Classical music',
  },
];

perfomers.forEach((element) => {
  const performer = document.createElement('div');
  performer.classList.add('performer');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('performer-photo-container');
  imgContainer.innerHTML = element.image;
  performer.appendChild(imgContainer);

  const performerDetails = document.createElement('div');
  performerDetails.classList.add('performer-details');
  performer.appendChild(performerDetails);

  const performerTitle = document.createElement('h3');
  performerTitle.classList.add('performer-name');
  performerTitle.innerHTML = element.name;
  performerDetails.appendChild(performerTitle);

  const performerType = document.createElement('p');
  performerType.classList.add('performer-type');
  performerType.innerText = element.type;
  performerDetails.appendChild(performerType);

  const dash = document.createElement('hr');
  dash.classList.add('dash');
  performerDetails.appendChild(dash);

  const intro = document.createElement('p');
  intro.classList.add('performer-intro');
  intro.innerText = element.intro;
  performerDetails.appendChild(intro);

  // Append container to feature-section
  performerContainer.appendChild(performer);
});

const moreBtnContainer = document.createElement('div');
moreBtnContainer.classList.add('more-btn-container');
moreBtnContainer.innerHTML = '<button class="moreBtn">More <span class="btnIcon">^</span> </button>';
performerContainer.appendChild(moreBtnContainer);

/* Add JS feature to More Button */
const moreBtn = document.querySelector('.moreBtn');
const performer = document.querySelectorAll('.performer');
moreBtn.addEventListener('click', () => {
  performer.forEach((e) => {
    e.style.display = 'flex';
  });
});