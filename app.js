const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakefast",
        price: 15.99,
        img: "./item-1.jpeg",
        desc: "Nothing sweeter than a nice quick breakfast of buutermilk pancake and coffee",
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./item-2.jpeg",
        desc: "Long day at work? no worries, we got the thing that would keep your body and soul together, try out our diner double and milkshake"
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        img: "./item-3.jpeg",
        desc: "Nothing like a godzilla milkshake after the days job, hmmmmmmm, yummy."
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./item-4.jpeg",
        desc: "country delight!!, who would want a taste of our finest smooties on deck."
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 18.99,
        img: "./item-5.jpeg",
        desc: "whats out world, its an egg invasion, just kidding, its our seasons dishes, on today's menu, we got one of our finest dish, egg attack"
    },
    {
        id: 6,
        title: "oreao dream",
        category: "shakes",
        price: 18.99,
        img: "./item-6.jpeg",
        desc: "oreao dreams, one of our finest daily shakes on the menu, who doesn't love the sweet delicious taste of coconut"
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./item-7.jpeg",
        desc: "no one can resist the sweet smell of bacon on a sunday evening, yummy"
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./item-8.jpeg",
        desc: "sounds like a hollywood million dollar movie, thats what you get when you chill out with america's favorite burger"
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./item-9.jpeg",
        desc: "ever feeling like chilling alone, just you, music on and a really nice cold smoothie, well try out our quarantine buddy. Really relaxing smoothie at your lone time "
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "./item-10.jpeg",
        desc: "Yep thats right, for all those meat lovers out there, we got steak on deck now, hang out with friends with a couple of drinks and our home-made bison steaks"
    }
]


const sectionCenter = document.querySelector(".section-center")
const btnContainer = document.querySelector(".btn-content")

window.addEventListener("DOMContentLoaded", function () {
    
    displayMenuItems(menu)
    displayMenuButtons()
})

function displayMenuItems(menuItems) {
    
    let displayMenu = menuItems.map(function (item) {
        

        return `<article class= menu-content>
        <img src=${item.img} alt=${item.title} class="pic"/>
        <div class="item-info">
           <header>
               <h4>${item.title}</h4>
               <h4 class="price">$${item.price}</h4>
           </header>
           <p class="item-text">
              ${item.desc}
           </p>
        </div>
        </article>`
    })

    displayMenu = displayMenu.join('')

    sectionCenter.innerHTML = displayMenu
}

function displayMenuButtons() {
    
    const categories = menu.reduce(
        function (values, item) {
            
            if(!values.includes(item.category)){
                values.push(item.category)
            }

            return values;
        },
        ["all"]
    )

    const categoryBtns = categories
    .map(function (category) {
        
        return `<button type="button" class="filter-btn" data-id=${category}>

        ${category}
        </button>`;
    })
    .join('')

    btnContainer.innerHTML = categoryBtns
    const filterBtns = btnContainer.querySelectorAll('.filter-btn')
    console.log(filterBtns)


    filterBtns.forEach(function (btn) {
        
        btn.addEventListener('click', function (e) {
            
            const category = e.currentTarget.dataset.id
            const menuCategory = menu.filter(function(menuItem) {
                
                if (menuItem.category === category) {
                    
                    return menuItem;
                }
            })

            if (category === "all") {
                
                displayMenuItems(menu)
            }else{
                displayMenuItems(menuCategory)
            }
        })
    })
}