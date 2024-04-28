const hamburger = document.getElementById("hamburger");
const holder = document.getElementById("burgerholder");
const title = document.getElementById("title");
const widths = window.innerWidth;



//const defaultMenuButton =      document.getElementsByClassName("header__defaultmenu--item");
//const responsiveMenuButton =   document.getElementsByClassName("header__responsivemenu--item");

let defaultMenuButton = document.querySelectorAll('[data-headercontainer="default"]');
let responsiveMenuButton = document.querySelectorAll('[data-headercontainer="responsive"]')

let ContainMenuId = document.getElementById("ContainMenu");


let ContainMenu = document.querySelector('[data-menustate="default"]');
let ContainMenuChildren = ContainMenu.children;

let MenuButton = document.querySelectorAll('[data-button="defaultmenuitem"]');


const defaultMenuArray = Array.from(defaultMenuButton);
//const responsiveMenuArray = Array.from(responsiveMenuButton);

//const fusedMenuArray = defaultMenuArray.concat(responsiveMenuArray);





let contain = []





addEventListener("load", (event) => {
  if (widths > 768) {
    ContainMenuId.setAttribute("data-menustate", "responsive");
    console.log("testing")
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
  window.location.href = "index.html";
});










for (let i = 0; i < MenuButton.length; i++) {
  
  let thehref = MenuButton[i].getAttribute("href");
  contain.push(thehref);
  
}

for (let l = 0; l < MenuButton.length; l++) {
  MenuButton[l].addEventListener("click", (evt) => {
  
//    ClickMenuItem(evt);
  
    // if (widths > 491) {
    //   Responsivescroll(evt);
    // } else {
    //   Defaultscroll(evt);
    // } 
  
    //for (let k = 0; k < MenuButton.length; k++) {
      let thehref = fusedMenuArray[i].getAttribute("href");
      contain.push(thehref);
    
    console.log(fusedMenuArray)
          fusedMenuArray[k].addEventListener("click", (evt) => {
            let thehref = fusedMenuArray[k].getAttribute("href");
            console.log(thehref)
            let hrefslice = thehref.slice(1);
            window.location.href = `${hrefslice}.html`;
            contain = []
        
  
    });
//}
  })}  




function Defaultscroll(evt) {

console.log("Defaultscroll")
  //document.getElementById("hamburger").classList.toggle("show");
  //ContainMenu.classList.add("menuclassexit");
  //ContainMenu.classList.remove("menuclassenter");
}





function Responsivescroll(evt) {
  
  
  for (let k = 0; k < MenuButton.length; k++) {
console.log(fusedMenuArray)
    fusedMenuArray[k].addEventListener("click", (evt) => {
      let thehref = fusedMenuArray[k].getAttribute("href");
      console.log(thehref)
      let hrefslice = thehref.slice(1);
      window.location.href = `${hrefslice}.html`;
      contain = []
        
  
   })
    


    console.log(MenuButton)
    console.log(fusedMenuArray)
    evt.preventDefault();
    MenuButton[k].addEventListener("click", (event) => {


      let thehref = fusedMenuArray[k].getAttribute("href");
      contain.push(thehref);
    
      });
  }
}






// for (let i = 0; i < fusedMenuArray.length; i++) {
//   let thehref = fusedMenuArray[i].getAttribute("href");
//   contain.push(thehref);

  
// }

// for (let i = 0; i < fusedMenuArray.length; i++) {
//   fusedMenuArray[i].addEventListener("click", () => {
//     let thehref = fusedMenuArray[i].getAttribute("href");
//     let hrefslice = thehref.slice(1);
//     window.location.href = `${hrefslice}.html`;
//     contain = []
//   });
// }





//for (let k = 0; k < responsiveMenuButton.length; k++) {
  // responsiveMenuButton[k].addEventListener("click", (event) => {
  //   event.preventDefault();

  //   let topRelativeToDocument = getElementPositionRelativeToDocument(
  //     section[k]
  //   );

  //   let offsetPosition = topRelativeToDocument - heropadding; //- headerOffset;
  //   console.log(
  //     `offsetposition ${offsetPosition}  is ${heropadding} minus ${topRelativeToDocument}`
  //   );
  //   window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  // });
//}










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
    //ContainMenuId.classList.contains("menu_slide") 
   // ContainMenuId.classList.contains("header__defaultmenu--wrapper") ||
  
    ContainMenuId.classList.contains("menuclassexit")
   
  ) {
    //ContainMenuId.classList.remove("menu_slide");
    ContainMenuId.classList.remove("header__defaultmenu--wrapper") //||
    ContainMenuId.classList.remove("menuclassexit");

    ContainMenuId.classList.add("menuclassenter");
    console.log("test2")

  } else if (ContainMenuId.classList.contains("menuclassenter")) {
   // ContainMenuId.classList.remove("header__defaultmenu--wrapper");

    ContainMenuId.classList.remove("menuclassenter");

    ContainMenuId.classList.add("menuclassexit");
    console.log("test3")
    

    document.getElementById("hamburger").style.width = "";
  
    //Am i making the wrong thing the width of nothing?   
  }
});





// for (let l = 0; l < defaultMenuButton.length; l++) {
//   defaultMenuButton[l].addEventListener("click", (event) => {
//     event.preventDefault();
    
//     document.getElementById("hamburger").classList.toggle("show");
//     ContainMenuId.classList.add("menuclassexit");
//     ContainMenuId.classList.remove("menuclassenter");
//     document.getElementById("hamburger").style.width = "";
//   });
// }

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

//const ImageGallery = [];

//const ImageBackground = document.getElementsByClassName("imagecontainer");
