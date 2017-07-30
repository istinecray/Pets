import request from 'superagent';

const apiUrl = 'http://localhost:8080/api/';

class Carousel {
   constructor(id, items) {
    this.id = id;
    this.carouselItems = items;
   }
 }

class CarouselItem {
  constructor(src, alt, heading, body) {
    this.src = src;
    this.alt = alt;
    this.caption = {
      heading,
      body
    }
  }
}

class Pet {
  constructor(name, owner, health, mood, hunger, age){
    this.name = name;
    this.owner = owner;
    this.health = health;
    this.mood = mood;
    this.hunger = hunger;
    this.age = age;
  }
}

const carouselItems = [
  new CarouselItem('http://via.placeholder.com/800x400', 'Slide One', 'Slide One', 'This is the first slide.'),
  new CarouselItem('http://via.placeholder.com/800x400', 'Slide Two', 'Slide Two', 'This is the second slide.'),
  new CarouselItem('http://via.placeholder.com/800x400', 'Slide Three', 'Slide Three', 'This is the third slide.')
];

const pets = [
  new Pet('Peach', 'Chichi', '20/20', 'Sleepy', 'Content', '2'),
  new Pet('Peach', 'Matt', '20/20', 'Sleepy', 'Content', '2'),
  new Pet('Christina', 'Fam', '50/50', 'Angery', 'Content', '11'),
]

const loginUser = (user) => {
  return request.post(apiUrl + 'login', user);
};

const registerUser = (user) => {
  return request.post(apiUrl + 'register', user);
};

const getCarousel = () => {
  return new Carousel('main-carousel', carouselItems);
};

const getActivePet = (owner) => {
  return pets.find((pet) => {
    return pet.owner.toLowerCase() === owner.toLowerCase();
  });
};

const api = {
  getCarousel: getCarousel,
  getActivePet: getActivePet,
  loginUser: loginUser,
  registerUser: registerUser
};

export default api;