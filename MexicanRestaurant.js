// //Load the font
// font.load().then(
//   () => {
//     // Resolved - add font to document.fonts
//   },
//   (err) => {
//     console.error(err);
//   },
// );




const hamburger = document.getElementById("hamburger");
const holder = document.getElementById("burgerholder");
const title = document.getElementById("title");
console.log(title)
const widths = window.innerWidth;



let defaultMenuButton = document.querySelectorAll('[data-headercontainer="default"]');
let responsiveMenuButton = document.querySelectorAll('[data-headercontainer="responsive"]')

let ContainMenuId = document.getElementById("ContainMenu");



let ContainMenu = document.querySelector('[data-menustate="default"]');
//let SubmitButton = document.querySelector('[data-button="submit"]');
let PreviewButton = document.querySelectorAll('[data-button="SectionPreview"]');
//data-button="SectionPreview"

let ContainMenuChildren = ContainMenu.children;

let MenuButton = document.querySelectorAll('[data-button="defaultmenuitem"]');

let Openingbutton = document.getElementById("openingbutton")


let MenuArray = Array.from(MenuButton);




let contain = []





addEventListener("load", (event) => {
  if (widths > 768) {
    ContainMenuId.setAttribute("data-menustate", "responsive");
    ContainMenuId.classList.remove("header__defaultmenu--wrapper");
    ContainMenuId.classList.add("header__responsivemenu--wrapper");

    for (let i = 0; i < MenuButton.length; i++) {
      MenuButton[i].setAttribute("data-button", "responsivemenuitem");
      MenuButton[i].classList.remove("header__defaultmenu--item");
      MenuButton[i].classList.add("header__responsivemenu--item");
    }

    for (let i = 0; i < ContainMenuChildren.length; i++) {
      ContainMenuChildren[i].setAttribute("data-button", "responsivemenuitem");
    }

  }
});

addEventListener("resize", (event) => {
  const widths = window.innerWidth;
  if (widths > 768) {
    ContainMenuId.setAttribute("data-menustate", "responsive");
    ContainMenuId.classList.remove("header__defaultmenu--wrapper");
    ContainMenuId.classList.add("header__responsivemenu--wrapper");
    ContainMenuId.classList.remove("menuclassenter");
    hamburger.classList.remove("show")
    ContainMenuId.classList.remove("menuclassexit");


    for (let i = 0; i < MenuButton.length; i++) {
      MenuButton[i].setAttribute("data-button", "responsivemenuitem");
      MenuButton[i].classList.remove("header__defaultmenu--item");
      MenuButton[i].classList.add("header__responsivemenu--item");
    }


  } 
  
  
  else if(ContainMenu.classList.contains('menuclassenter')) {

ContainMenu.classList.remove('header__defaultmenu--wrapper')
  }

  
  else {
    ContainMenu.setAttribute("data-menustate", "default");
    ContainMenu.classList.remove("header__responsivemenu--wrapper");
    ContainMenu.classList.add("header__defaultmenu--wrapper");


    for (let i = 0; i <= MenuButton.length; i++) {
      MenuButton[i].setAttribute("data-button", "defaultmenuitem");
      MenuButton[i].classList.remove("header__responsivemenu--item");
      MenuButton[i].classList.add("header__defaultmenu--item");
    }
  }
});














title.addEventListener("click", (event) => {
 console.log("I LOVE MONKEYS")
  window.location.href = "index.html";
});


Openingbutton.addEventListener("click", (event) => {
  window.location.href = "menu.html"
})










// for (let i = 0; i < MenuButton.length; i++) {
  
//   let thehref = MenuButton[i].getAttribute("href");
//   contain.push(thehref);
  
// }







for (let l = 0; l < MenuButton.length; l++) {
  MenuButton[l].addEventListener("click", (evt) => {
  
      let thehref = MenuArray[l].getAttribute("href");
      contain.push(thehref);
     console.log(seccuss3)
    console.log(MenuArray)
          MenuArray[l].addEventListener("click", (evt) => {
            let thehref = MenuArray[l].getAttribute("href");
            console.log(thehref)
            let hrefslice = thehref.slice(1);
            window.location.href = `${hrefslice}.html`;
            contain = []
        
  
    });

  })}  



  for (let l = 0; l < PreviewButton.length; l++) {
console.log(PreviewButton[l])
    PreviewButton[l].addEventListener("click", () => {
      console.log("SUCCESS1") 

        let thehref = PreviewButton[l].getAttribute("href");
        contain.push(thehref);
        console.log(thehref)
      window.location.href= `${thehref}`


        //console.log(thehref) 
     // PreviewButton[l].addEventListener("click", (evt) => {
             // let thehref = PreviewButton[l].getAttribute("href");
//console.log(thehref) 
  //           let hrefslice = thehref.slice(1);
    //          window.location.href = `${hrefslice}.html`;
      //        contain = []
          
    
  //    });
  
    })}  
  















function Defaultscroll(evt) {

console.log("Defaultscroll")
}





function Responsivescroll(evt) {
  
  
  for (let k = 0; k < MenuButton.length; k++) {
console.log(MenuArray)
    MenuArray[k].addEventListener("click", (evt) => {
      let thehref = MenuArray[k].getAttribute("href");
      console.log(thehref)
      let hrefslice = thehref.slice(1);
      window.location.href = `${hrefslice}.html`;
      contain = []
        
  
   })
    


    console.log(MenuButton)
    console.log(MenuArray)
    evt.preventDefault();
    MenuButton[k].addEventListener("click", (event) => {


      let thehref = MenuArray[k].getAttribute("href");
      contain.push(thehref);
    
      });
  }
}







hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("show");

  if (
    !ContainMenuId.classList.contains("menuclassenter") &&
    !ContainMenuId.classList.contains("menuclassexit")
  ) {
    ContainMenuId.classList.add("menuclassenter");
    console.log("test1")
    return;
  }


  if (
  
    ContainMenuId.classList.contains("menuclassexit")
   
  ) {
    ContainMenuId.classList.remove("header__defaultmenu--wrapper") 
    ContainMenuId.classList.remove("menuclassexit");

    ContainMenuId.classList.add("menuclassenter");
    console.log("test2")

  } else if (ContainMenuId.classList.contains("menuclassenter")) {
   

    ContainMenuId.classList.remove("menuclassenter");

    ContainMenuId.classList.add("menuclassexit");
    console.log("test3")
    

    document.getElementById("hamburger").style.width = "";
  
   
  }
});





const keyframesRule = `
      @keyframes myAnimation {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `;





   //    SubmitButton.addEventListener("click", (evt) => {
     //    alert("Thank you for submitting.")        
       //})
