// local reviews data (dados iniciais)
const initialReviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

// array principal (pode vir do localStorage ou do inicial)
let reviews = []

// selecionar itens
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

// selecionar botoes
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
const randomBtn = document.querySelector('.randomBtn')
const removeBtn = document.querySelector('.remover')

// selecionar inputs
const authorInput = document.getElementById('author-input')
const jobInput = document.getElementById('job-input')
const infoInput = document.getElementById('info-input')
const personImgInput = document.getElementById('person-img-input')
const addBtn = document.getElementById('add-btn')

// item inicial
let currentItem = 0

// salvar no localStorage
function saveToLocalStorage() {
  localStorage.setItem('reviews', JSON.stringify(reviews))
}

// carregar do localStorage ou usar inicial
function loadFromLocalStorage() {
  let savedReviews = JSON.parse(localStorage.getItem('reviews'))
  if (savedReviews && savedReviews.length > 0) {
    reviews = savedReviews
  } else {
    reviews = [...initialReviews]
  }
}

// carregar item inicial
window.addEventListener('DOMContentLoaded', function() {
  loadFromLocalStorage()
  showPerson()
})

// mostrar pessoa 
function showPerson() {
  const item = reviews[currentItem]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

nextBtn.addEventListener('click', function() {
  currentItem++
  if (currentItem > reviews.length - 1) {
    currentItem = 0
  }
  showPerson()
})

prevBtn.addEventListener('click', function() {
  currentItem--
  if (currentItem < 0) {
    currentItem = reviews.length - 1
  }
  showPerson()
})

randomBtn.addEventListener('click', function() {
  currentItem = Math.floor(Math.random() * reviews.length)
  showPerson()
})

function addPerson() {
  reviews.push({
    id: reviews.length,
    img: personImgInput.value,
    name: authorInput.value,
    job: jobInput.value,
    text: infoInput.value
  })
  saveToLocalStorage()
}

addBtn.addEventListener('click', function() {
  addPerson()
  console.log(reviews[reviews.length - 1])
  alert('Review adicionada com sucesso!')
})

removeBtn.addEventListener('click', function() {
  reviews.splice(currentItem, 1)
  saveToLocalStorage()
  loadFromLocalStorage()
  currentItem = 0
  showPerson()

  alert('Review removida com sucesso!')
})