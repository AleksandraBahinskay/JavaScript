//1
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки
  orderedItems.forEach((element) => (totalPrice += element));

  // Пиши код выше этой строки
  return totalPrice;
}

//2
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки
  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  // Пиши код выше этой строки
  return filteredNumbers;
}

//3
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Пиши код ниже этой строки

  firstArray.forEach(function (element) {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  return commonElements;
  // Пиши код выше этой строки
}

//4
// Пиши код ниже этой строки

const calculateTotalPrice = (quantity, pricePerItem) => {
  // Пиши код выше этой строки
  return quantity * pricePerItem;
};

//5
// Пиши код ниже этой строки
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Пиши код выше этой строки

//6
// Пиши код ниже этой строки
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });
  return totalPrice;
};
// Пиши код выше этой строки

//7
// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Пиши код выше этой строки
  return filteredNumbers;
};

//8
// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Пиши код выше этой строки
  return commonElements;
};

//9
function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  return numbers.map((number) => {
    if (number % 2 === 0) {
      return number + value;
    }
    return number;
  });
  // Пиши код выше этой строки
}

//10
cconst planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map((planet) => (planet.length));

//11
const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Пиши код ниже этой строки
  
const titles = books.map(books => books.title);
  
//12
const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика']
    }
  ];
  // Пиши код ниже этой строки
 
const genres = books.flatMap((book) => book.genres);
  
//13
// Пиши код ниже этой строки
const getUserNames = users => {
 return users.map(user => user.name)};
  // Пиши код выше этой строки

//14
// Пиши код ниже этой строки
const getUserEmails = users => {
   return users.map(user => user.email) 

  };
  // Пиши код выше этой строки

//15
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => number % 2 == 0);
const oddNumbers = numbers.filter(number => number % 2);
//
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => number%2===0);
const oddNumbers = numbers.filter(number => number%2!==0);

//16
const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];
  // Пиши код ниже этой строки
  const allGenres = books.flatMap(book => book.genres);
  const uniqueGenres = allGenres.filter(
  (course, index, array) => array.indexOf(course) === index
);
//
 const allGenres = books.flatMap(book => book.genres);
 const uniqueGenres = allGenres.filter((book,index,array) => array.indexOf(book) === index);
console.log(allGenres);
console.log(uniqueGenres);

//17
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);
 
//18
const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};

//19
const getUsersWithAge = (users, minAge, maxAge) => {
 return users.filter((user) => user.age >= minAge && user.age <= maxAge);
};

//20
const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => {
    if (user.friends.includes(friendName)) {
      return user;
    }
  }); 
};

//21
const getFriends = (users) => {
  return users
    .flatMap((user) => user.friends)
    .filter((elem, index, arr) => arr.indexOf(elem) === index); 
};

//22
const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive === true);
 
};

//23
const getInactiveUsers = (users) => {
  return users.filter((user) => user.isActive !== true); 
};

//24
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);

//25
const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email); 
};

//26

//27

//28

//29

//30

//31

//32

//33

//34

//35

//36

//37

//38

//39

//40

//41

//42

//43

//44
