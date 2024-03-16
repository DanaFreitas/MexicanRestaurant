const ham = document.getElementById("hamburger");
const holder = document.getElementById("burgerholder");

const title = document.getElementById("title");

title.addEventListener("click", (event) => {
  window.location.href = "index.html";
});

const defaultMenuButton =      document.getElementsByClassName("header__defaultmenu--item");
const responsiveMenuButton =   document.getElementsByClassName("header__responsivemenu--item");
const defaultMenuArray = Array.from(defaultMenuButton);
const responsiveMenuArray = Array.from(responsiveMenuButton);

const fusedMenuArray = defaultMenuArray.concat(responsiveMenuArray);



const grave = document.getElementsByClassName("grave__Grave--CrossWrapper");

let contain = []

for (let i = 0; i < fusedMenuArray.length; i++) {
  
  let thehref = fusedMenuArray[i].getAttribute("href");
  contain.push(thehref);
  
}

for (let i = 0; i < fusedMenuArray.length; i++) {
  fusedMenuArray[i].addEventListener("click", () => {
    let thehref = fusedMenuArray[i].getAttribute("href");
    let hrefslice = thehref.slice(1);
    window.location.href = `${hrefslice}.html`;
    contain = []
  });
}




let section = document.getElementsByClassName("section");
function getElementPositionRelativeToDocument(section) {
  let rect = section.getBoundingClientRect();
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  let topRelativeToDocument = rect.top + scrollTop;

  return topRelativeToDocument;
}

const heropadding = document.getElementById("header").clientHeight;

for (let k = 0; k < responsiveMenuButton.length; k++) {
  responsiveMenuButton[k].addEventListener("click", (event) => {
    event.preventDefault();

    let topRelativeToDocument = getElementPositionRelativeToDocument(
      section[k]
    );

    let offsetPosition = topRelativeToDocument - heropadding; //- headerOffset;
    console.log(
      `offsetposition ${offsetPosition}  is ${heropadding} minus ${topRelativeToDocument}`
    );
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  });
}

ham.addEventListener("click", () => {
  ham.classList.toggle("show");

  if (
    !slidemenu.classList.contains("menuclassenter") &&
    !slidemenu.classList.contains("menuclassexit")
  ) {
    slidemenu.classList.add("menuclassenter");
  }

  if (
    slidemenu.classList.contains("menu_slide") ||
    slidemenu.classList.contains("menuclassexit")
  ) {
    slidemenu.classList.remove("menu_slide");

    slidemenu.classList.remove("menuclassexit");
    slidemenu.classList.add("menuclassenter");
  } else if (slidemenu.classList.contains("menuclassenter")) {
    slidemenu.classList.add("menuclassexit");
    slidemenu.classList.remove("menuclassenter");

    document.getElementById("hamburger").style.width = "";
  }
});

for (let l = 0; l < defaultMenuButton.length; l++) {
  defaultMenuButton[l].addEventListener("click", (event) => {
    event.preventDefault();
    let section = document.getElementsByClassName("section");

    const respon = document.getElementsByClassName("header__defaultmenu--item");
    document.getElementById("hamburger").classList.toggle("show");
    slidemenu.classList.add("menuclassexit");
    slidemenu.classList.remove("menuclassenter");
    document.getElementById("hamburger").style.width = "";
  });
}

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

const ImageGallery = [];

const ImageBackground = document.getElementsByClassName("imagecontainer");
