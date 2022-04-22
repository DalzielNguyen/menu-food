const ICONS = [
  "fa-egg",
  "fa-stroopwafel",
  "fa-cheese",
  "fa-hotdog",
  "fa-drumstick-bite",
  "fa-apple-alt",
  "fa-ice-cream",
  "fa-cookie",
  "fa-fish",
  "fa-seedling"
]

const NAVBAR_ITEMS = {
  'Home': 'fa-home',
  'Meals': 'fa-utensils',
  'Burger': 'fa-hamburger',
  'Pizza': 'fa-pizza-slice',
  'Contact': 'fa-blender-phone'
}

const NUMBER_OF_SECTION = 4;

const SECTION_HEADING = [
  'Variety of Foods',
  'Popular meals',
  'gallery'
]

const CARDS = {
  'Fish' :'img/card-img-1.png',
  'Cake': 'img/card-img-2.png',
  'Lobster': 'img/card-img-3.png'
};

const GALLERY = {
  'Pancakes': 'img/gallery-img-1.jpg',
  'Cupcake': 'img/gallery-img-2.jpg',
  'Hummus': 'img/gallery-img-3.jpg',
  'Hamburger': 'img/gallery-img-4.jpg',
  'Salmon': 'img/gallery-img-5.jpg',
  'Vegetables': 'img/gallery-img-6.jpg',
}

const DEFAULT_DESCRIPTION = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa commodi possimus iure hic excepturi. Corporis!';


const createNavbar = () => {
  const navbar = createElement('nav', 'navbar');
  navbar.classList.add('target');

  Object.entries(NAVBAR_ITEMS).forEach(([key, value]) => {
    navbar.appendChild(creatNavItem(key, value));
  })

  return navbar;
}


const creatNavItem = (title, className) => {
  const a = createElement('a', 'navbar-link');
  a.href = '#';

  const i = createElement('i', 'fa');
  i.classList.add(className);

  const span = document.createElement('span');
  span.textContent = title;

  a.appendChild(i);
  a.appendChild(span);
  return a;
}
const createSection1 = (name) => {
  const section = createElement('section', name);
  const heading = createHeading(SECTION_HEADING[0]);
  const iconsContainer = createIconContainer();

  section.appendChild(heading);
  section.appendChild(iconsContainer);

  return section;
}

const createSection2 = (name) => {
  const section =  createElement('section', name);
  const heading = createHeading(SECTION_HEADING[1]);
  const cardContainer = creatCardContainer();

  section.appendChild(heading);
  section.appendChild(cardContainer);

  return section;
}

const createSection3 = (name) => {
  const section =  createElement('section', name);
  const heading = createHeading(SECTION_HEADING[2]);
  const gallery = createGallery();

  section.appendChild(heading);
  section.appendChild(gallery);
  return section;
}

const createSection4 = (name) => {
  const section = createElement('section', name);
  const form = createSignUpForm();
  const copyright = createElement('p', 'copyright');
  copyright.textContent = `NLSang &copy; All Rights Reserved`;

  section.appendChild(createTextContainer());
  section.appendChild(form);
  section.appendChild(copyright);

  return section;
}


const createSignUpForm = () => {
  const input = createElement('input', 'signup-form-input');
  input.type = 'email';
  input.placeholder = 'Enter Your Email';

  const button = createElement('button', 'signup-form-btn');
  button.type = 'submit';

  const i = createElement('i', 'fa');
  i.classList.add('fa-arrow-right');

  button.appendChild(i);

  const form = createElement('form', 'signup-form');
  form.appendChild(input);
  form.appendChild(button);

  return form;
}

const createTextContainer = () => {
  const heading = createElement('h2', 'section-4-heading');
  heading.textContent = 'Sign Me Up';

  const para = createElement('p', 'section-4-paragraph');
  para.textContent = 'Contact for more information';

  const container = createElement('div', 'section-4-text');
  container.appendChild(heading);
  container.appendChild(para);

  return container;
}

const createIconContainer = () => {
  const iconsContainer = createElement('div', 'section-1-icons');

  let isFirstName = true;

  ICONS.forEach((className) => {
    const element = createElement('i','fas');
    element.classList.add(className);
    if (isFirstName) {
      element.classList.add('change');
      isFirstName = !isFirstName;
    }
    iconsContainer.appendChild(element);
  })

  return iconsContainer;
}

const creatCardContainer = () => {
  const cardContainer = createElement('div','card-container');
  Object.entries(CARDS).forEach(([key, value]) => {
    cardContainer.appendChild(createCard(key, value));
  })

  return cardContainer;
}

const createGallery = () => {
  const gallery = createElement('div', 'gallery');
  Object.entries(GALLERY).forEach(([key, value]) => {
    gallery.appendChild(createGalleryLink(key, value));
  })
  return gallery;
}


const createGalleryLink = (name, src) => {
  const img = createElement('img', 'food-img');
  img.src = src;

  const heading = createElement('h3', 'food-name');
  heading.textContent = name;

  const param = createElement('p', 'food-description');
  param.textContent = DEFAULT_DESCRIPTION;

  const galleryLink = createElement('a', 'gallery-link');
  galleryLink.href = '#';
  galleryLink.title = 'Order Now';

  galleryLink.appendChild(img);
  galleryLink.appendChild(heading);
  galleryLink.appendChild(param);

  return galleryLink;
}

const createCard = (name, scr) => {
  const img = createElement('img','card-img');
  img.src = scr;

  const heading = createElement('h3', 'card-name');
  heading.textContent = name;

  const button = createElement('button', 'card-button');
  button.textContent = 'Order now';

  const card = createElement('div', 'card');

  card.appendChild(img);
  card.appendChild(heading);
  card.appendChild(button);

  return card;
}

const createHeading = (content) => {
  const heading = createElement('h1', 'section-heading');
  heading.textContent = content;
  return heading;
}

const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);

  return element;
}


const createSection = (name) => {
  switch (name) {
    case 'section-1':
      return createSection1(name);
    case 'section-2':
      return createSection2(name);
    case 'section-3':
      return createSection3(name);
    case 'section-4':
      return createSection4(name);
  }
}


const container = createElement('div', 'container');
const sectionNames = Array.from({length: NUMBER_OF_SECTION},
  (_, i) => 'section-'+ (i + 1));
sectionNames.forEach((name) => {
  const section = createSection(name);
  container.appendChild(section);
});

const navbar = createNavbar();

const menuTag = createElement('div', 'menu');
menuTag.classList.add('target');


document.body.appendChild(navbar);
document.body.appendChild(container);
document.body.appendChild(menuTag);

document.querySelector('.menu').addEventListener(
  'click', () => {
    document.querySelectorAll('.target').forEach((item)=> {
      item.classList.toggle('change')
    })
  }
)

const icons = document.querySelectorAll('.section-1-icons i');
let count = 0;
setInterval(() => {
  count++;
  const icon = document.querySelector('.section-1-icons .change')
  icon.classList.remove('change')
  if (count === icons.length) {
    count = 0;
    icons[count].classList.add('change');
  } else {
    icon.nextElementSibling.classList.add('change')
  }
}, 1000);

