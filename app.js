const arrOfProjects = [
    {
        id: 1,
        title: 'React NC-News Front-end',
        category: 'JavaScript',
        price: 99.99,
        img: './nc-news-frontend.png',
        desc: 'This is my first full stack project, it is a news site (similar to reddit) where I used information from my own API to create a fully deployed website',
        link: 'https://dan-beaumont-nc-news.netlify.app/'
    },
    {
        id: 4,
        title: 'Tip calculator',
        category: 'JavaScript',
        price: 15.99,
        img: './tipcalculator.jpg',
        desc: 'This was a pure JS tip calculator site that I created at the start of my JavaScript journey',
        link: 'https://codepen.io/danbeaumont95/full/PozNENK'
    },
    {
        id: 2,
        title: "Mean of results",
        category: "JavaScript",
        price: 13.99,
        img: "./mean.jpg",
        desc: `This is a codepen site that works out a students mean of 2 test results`,
        link: 'https://codepen.io/danbeaumont95/full/jOrqvpd'
      },
      {
        id: 2,
        title: "Paul Pogba fan page",
        category: "HTML/CSS",
        price: 13.99,
        img: "./Pogba.png",
        desc: `This is a HTML/CSS fanpage I created about a year ago when I first started my programming journey`,
        link: 'https://codepen.io/danbeaumont95/full/LYPowLK'
      },
      {
          id: 3,
          title: 'React Caclculator app',
          category: 'JavaScript',
          price: 13.99,
          img: './Calculator.png',
          desc: 'This was a working calculator app that I created using React and is hosted on GitHub pages',
          link: 'https://danbeaumont95.github.io/react-calculator/'
      },
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container')


const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    //console.log(links.classList.contains('random'))

    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links')
    // }
    // else {
    //     links.classList.add('show-links')
    // }
    
    //BELOW DOES SAME
    links.classList.toggle('show-links')
})
//load items
window.addEventListener('DOMContentLoaded', function(){
 displayProjectItems(arrOfProjects)
    displayProjectButtons()
 
})



function displayProjectItems(projectItems) {
    let displayProjects = projectItems.map(function(item) {
        return `<article class="project-item">
        <a href=${item.link} target="_blank">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
            <header>
              <h4>${item.title}</h4>   
            </header>
            <p class="item-text">${item.desc}</p>
            </a>
        </div>
        
    </article>`
    })
    displayProjects = displayProjects.join('')
    sectionCenter.innerHTML = displayProjects;
}

function displayProjectButtons() {
    const categories = arrOfProjects.reduce(function(values, item) {
        if(!values.includes(item.category)) {
            values.push(item.category)
        }
       return values
    }, ['all'])
    const categoryBtns = categories.map(function(category) {
       return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    }).join('');
   
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll('.filter-btn')
   
    //filter items
    filterBtns.forEach(function(btn) {
       btn.addEventListener('click', function(e) {
           const category = e.currentTarget.dataset.id;
           const projectCategory = arrOfProjects.filter(function(projectItem) {
               if (projectItem.category === category) {
                   return projectItem    
               }
               
           })
           if (category === 'all') {
               displayProjectItems(arrOfProjects);
           }
           else {
               displayProjectItems(projectCategory)
           }
       })
   })
}

