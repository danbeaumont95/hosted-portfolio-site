const arrOfProjects = [
    {
        id: 1,
        title: 'Tip calculator',
        category: 'JavaScript',
        price: 15.99,
        img: './tipcalculator.jpg',
        desc: 'This was a pure JS tip calculator site that I created at the start of my JavaScript journey'
    },
    {
        id: 2,
        title: "Mean of results",
        category: "JavaScript",
        price: 13.99,
        img: "./mean.jpg",
        desc: `This is a codepen site that works out a students mean of 2 test results`,
      },
      {
        id: 2,
        title: "Paul Pogba fan page",
        category: "HTML/CSS",
        price: 13.99,
        img: "./Pogba.png",
        desc: `This is a HTML/CSS fanpage I created about a year ago when I first started my programming journey`,
      }
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
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
            <header>
              <h4>${item.title}</h4>   
            </header>
            <p class="item-text">${item.desc}</p>
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

