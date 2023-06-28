const MENU = [
  {
    name: "Get data",
    url: "#",
    childrent_menu: [
      {
        title: "",
        sub_menu: [
          "Occurrences",
          "GBIF API",
          "Species",
          "Datasets",
          "Occurrences snapshots",
          "Hosted portals",
          "Trends",
        ],
      },
    ],
  },
  {
    name: "How to",
    url: "#",
    childrent_menu: [
      {
        title: "SHARE DATA",
        sub_menu: [
          "Quick-start guide ",
          "Dataset classes",
          "Data hosting",
          "Standards",
          "Become a publisher",
          "Data quality",
          "Data papers",
        ],
      },
      {
        title: "USE DATA",
        sub_menu: [
          "Featured data use",
          "Citation guidelines",
          "GBIF citations",
          "Citation widget",
        ],
      },
    ],
  },
  {
    name: "Tools",
    url: "#",
    childrent_menu: [
      {
        title: "PUBLISHING",
        sub_menu: [
          "IPT",
          "Data validator",
          "Scientific Collections",
          "Suggest a dataset",
          "New data model ⭐️",
        ],
      },
      {
        title: "DATA ACCESS AND USE",
        sub_menu: [
          "Hosted portals",
          "Data processing ",
          "Derived datasets",
          "rgbif",
          "pygbif",
          "MAXENT",
          "Tools catalogue",
        ],
      },
      {
        title: "GIBF LABS",
        sub_menu: [
          "Species matching ",
          "Name parser ",
          "Sequence ID",
          "Relative observation trends",
          "GBIF data blog",
        ],
      },
    ],
  },
  {
    name: "Community",
    url: "#",
    childrent_menu: [
      {
        title: "NETWORK",
        sub_menu: [
          "Participant network",
          "Nodes",
          "Publishers",
          "Network contacts",
          "Community forum",
          "alliance for biodiversity knowledge",
        ],
      },
      {
        title: "VOLUNTEERS",
        sub_menu: [
          "Mentors",
          "Ambassadors ",
          "Translators",
          "Citizen scientists ",
        ],
      },
      {
        title: "ACTIVITES",
        sub_menu: [
          "Capacity enhancement",
          "Programmes &amp; projects",
          "Training and learning resources",
          "Data Use Club",
          "Living Atlases",
        ],
      },
    ],
  },
  {
    name: "About",
    url: "#",
    childrent_menu: [
      {
        title: "INSIDE GIBF",
        sub_menu: [
          "What is GBIF?",
          "Become a member",
          "Governance",
          "Implementation plan",
          "Work Programme",
          "Funders",
          "Partnerships",
          "Release notes",
          "Contacts",
        ],
      },
      {
        title: "NEW & OUTREACH",
        sub_menu: [
          "News",
          "Newsletters and lists",
          "Events",
          "Awards",
          "Science Review ",
          "Data use",
        ],
      },
    ],
  },
];
let login = document.getElementById("btn-login-nav");
let blockLogin = document.getElementById("login");
let boxRegister = document.getElementById("btn-register");
let blockRegister = document.getElementById("register");
let backLogin = document.getElementById("btn-login_back");
let listSubMenu = document.getElementsByClassName("sub-menu");
document.addEventListener("load", function () {
  fn_loadData();
});

function fn_loadData() {
  let innerHTMLMenus = "";
  let menuLength = MENU.length;
  for (let i = 0; i < menuLength; i++) {
    innerHTMLMenus += `<li class="main-menu" id="main-menu${i}" ><button class="btn-menu  ">${MENU[i].name}</button>`;

    let objLength = MENU[i].childrent_menu.length;
    if (objLength) {
      innerHTMLMenus += `<nav class="sub-menu" id="check_list${i}">`;
      // them vao menu con
      for (let j = 0; j < objLength; j++) {
        innerHTMLMenus += `<ul  class="mainMenu__childItem list-group"><h2 class="menu-title">${MENU[i].childrent_menu[j].title}</h2>`;
        let childrentMenuLength = MENU[i].childrent_menu[j].sub_menu.length;
        for (let k = 0; k < childrentMenuLength; k++) {
          innerHTMLMenus +=
            '<li class="list-group-item"><a href="/occurrence/search">' +
            MENU[i].childrent_menu[j].sub_menu[k] +
            "</a></li>";
        }
        innerHTMLMenus += "</ul>";
      }
      innerHTMLMenus += "</nav>";
    }

    innerHTMLMenus += "</li>";
  }
  document.getElementById("menu").innerHTML = innerHTMLMenus;

  let listMenu = document.getElementsByClassName("main-menu");
  let listSubMenu = document.getElementsByClassName("sub-menu");
  function clickMenuData() {
    for (let i = 0; i < listMenu.length; i++) {
      listMenu[i].addEventListener("click", function () {
        // let x = true;
        for (let j = 0; j < listSubMenu.length; j++) {
          let subMenu = this.querySelector("nav.sub-menu");
          if (subMenu) {
            subMenu.style.display = "flex";
            listMenu[i].style.background = "green";
          }
        }
      });
      // listMenu[i].addEventListener("mousedown", function () {
      //   for (let j = 0; j < listSubMenu.length; j++) {
      //     let subMenu = this.querySelector("nav.sub-menu");
      //     if (subMenu) {
      //       listSubMenu[j].style.display = "none";
      //       listMenu[j].style.background = "none";
      //     }
      //   }
      // });
    }
  }
  document.addEventListener("DOMContentLoaded", clickMenuData);
}

console.log(fn_loadData());

login.addEventListener("mousedown", hideMenu);

document.getElementById("layout").addEventListener("mousedown", hideMenu);
function hideMenu() {
  blockLogin.style.display = "none";
  blockRegister.style.display = "none";
  document.getElementById("showsearch").style.display = "none";
}
login.addEventListener("click", () => {
  blockLogin.style.display = "block";
  layout.style.display = "block";
  document.getElementById("showsearch").style.display = "none";
});

boxRegister.addEventListener("click", () => {
  blockRegister.style.display = "block";
  blockLogin.style.display = "none";
  document.getElementById("showsearch").style.display = "none";
});

backLogin.addEventListener("click", () => {
  blockLogin.style.display = "block";
  blockRegister.style.display = "none";
  document.getElementById("showsearch").style.display = "none";
});

document.getElementById("xmark").addEventListener("click", closeBox);
document.getElementById("xmark-reg").addEventListener("click", closeBox);
function closeBox() {
  blockRegister.style.display = "none";
  blockLogin.style.display = "none";
}

function randomImage() {
  var images = [
    "./img/0aba1c3437a09fae95b8a09700f5403c.png",
    "./img/1a495e34570fff89868d6533d6e75e64.jpg",
    "./img/anh-nen-tieu-vu-tru_085727274.jpg",
    "./img/c01c2efdd2ad553dbe39916c15b45da9.jpg",
    "./img/hinh-anh-luffy-cuc-ngau-7-scaled.jpg",
    "./img/Hinh-nen-anime-24-min.png",
    "./img/hinh-nen-anime-full-hd.jpg",
    "./img/Máy-Tính-HTl_vũ-trụ-mới_-39-1-1-1024x576.jpg",
  ];
  var size = images.length;
  var x = Math.floor(size * Math.random());
  console.log(x);
  var element = document.getElementById("home-bg-img");
  console.log(element);
  element.style = `background: url(${images[x]}) no-repeat;`;
}

document.addEventListener("DOMContentLoaded", randomImage);

let showMiniSearch = document.getElementsByClassName("nav-link-icon");
let navIconShow = document.getElementsByClassName("show");
function show() {
  // for (let i = 0; i < showMiniSearch; i++) {
  //   showMiniSearch[i].addEventListener("click", function () {
  for (let j = 0; j < navIconShow.length; j++) {
    if (navIconShow) {
      blockLogin.style.display = "none";
      blockRegister.style.display = "none";
      navIconShow[j].style.display = "block";
    }
    //   }
    // });
  }
}

// let listSubMenu = document.getElementsByClassName("sub-menu");
// function handleClickOutside(event) {
//   const targetElement = event.target;
//   const classToCheck = "main-menu";

//   // Check if the target element or its ancestors contain the class
//   if (!targetElement.closest("." + classToCheck)) {
//     // Class not found, perform the desired action here
//     // For example, disable or enable the element
//     document.getElementsByClassName("sub-menu").disabled = true; // Disable
//     // document.getElementsByClassName("sub-menu").disabled = false; // Enable
//   }
// }

// Attach the event listener to the document
// document.addEventListener("click", handleClickOutside);
// document.addEventListener("click", function (e) {
//   if (!document.getElementById("check_list").contains(e.target)) {
//     document.getElementById("check_list").style.display = "none";
//   }
// });

const getdatabutton = document.getElementById("main-menu0");
const getdatabutton1 = document.getElementById("main-menu1");
const getdatabutton2 = document.getElementById("main-menu2");
const getdatabutton3 = document.getElementById("main-menu3");
const getdatabutton4 = document.getElementById("main-menu4");

const submenu0 = document.getElementById("check_list0");
const submenu1 = document.getElementById("check_list1");
const submenu2 = document.getElementById("check_list2");
const submenu3 = document.getElementById("check_list3");
const submenu4 = document.getElementById("check_list4");

const homebgimg = document.getElementById("home-bg-img");
homebgimg.addEventListener("click", function (e) {
  if (!getdatabutton.contains(e.target) && !submenu0.contains(e.target)) {
    submenu0.style.display = "none";
    getdatabutton.style.background = "none";
  } else {
    submenu0.style.display = "flex";
    getdatabutton.style.background = "green";
  }
  if (!getdatabutton1.contains(e.target) && !submenu1.contains(e.target)) {
    submenu1.style.display = "none";
    getdatabutton1.style.background = "none";
  } else {
    submenu1.style.display = "flex";
    getdatabutton1.style.background = "green";
  }

  if (!getdatabutton2.contains(e.target) && !submenu2.contains(e.target)) {
    submenu2.style.display = "none";
    getdatabutton2.style.background = "none";
  } else {
    submenu2.style.display = "flex";
    getdatabutton2.style.background = "green";
  }
  if (!getdatabutton3.contains(e.target) && !submenu3.contains(e.target)) {
    submenu3.style.display = "none";
    getdatabutton3.style.background = "none";
  } else {
    submenu3.style.display = "flex";
    getdatabutton3.style.background = "green";
  }
  if (!getdatabutton4.contains(e.target) && !submenu4.contains(e.target)) {
    submenu4.style.display = "none";
    getdatabutton4.style.background = "none";
  } else {
    submenu4.style.display = "flex";
    getdatabutton4.style.background = "green";
  }
});
