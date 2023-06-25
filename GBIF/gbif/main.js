const menus = [
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

let menuLength = menus.length;
let innerHTMLMenus = "";
for (let i = 0; i < menuLength; i++) {
  innerHTMLMenus += `<li class="main-menu" onclick="clickMenu(this,${i})"  id="main-menu-${i}"> <button id="btn-menu-${i}"  class="btn-menu ">${menus[i].name}</button>`;

  let objLength = menus[i].childrent_menu.length;
  // if (objLength) {
  //   innerHTMLMenus += `<nav id="sub-menu-${i}" class="sub-menu">`;
  //   // them vao menu con
  //   for (let j = 0; j < objLength; j++) {
  //     innerHTMLMenus += `<ul class="mainMenu__childItem list-group"><h2 class="menu-title">${menus[i].childrent_menu[j].title}</h2>`;
  //     let childrentMenuLength = menus[i].childrent_menu[j].sub_menu.length;
  //     for (let k = 0; k < childrentMenuLength; k++) {
  //       innerHTMLMenus +=
  //         '<li class="list-group-item"><a href="/occurrence/search">' +
  //         menus[i].childrent_menu[j].sub_menu[k] +
  //         "</a></li>";
  //     }
  //     innerHTMLMenus += "</ul>";
  //   }
  //   innerHTMLMenus += "</nav>";
}

innerHTMLMenus += "</li>";
// }
document.getElementById("menu").innerHTML = innerHTMLMenus;

let login = document.getElementById("btn-login-nav");
let blockLogin = document.getElementById("login");
let boxRegister = document.getElementById("btn-register");
let blockRegister = document.getElementById("register");
let backLogin = document.getElementById("btn-login_back");
let choise = 1;
let caseMenu1 = document.getElementById("btn-menu-0");
let blockSubMenu = document.getElementById("sub-menu-0");
let caseMenu2 = document.getElementById("btn-menu-1");
let blockSubMenu2 = document.getElementById("sub-menu-1");
let caseMenu3 = document.getElementById("btn-menu-2");
let blockSubMenu3 = document.getElementById("sub-menu-2");
let caseMenu4 = document.getElementById("btn-menu-3");
let blockSubMenu4 = document.getElementById("sub-menu-3");
let caseMenu5 = document.getElementById("btn-menu-4");
let blockSubMenu5 = document.getElementById("sub-menu-4");
let defaultMenu = document.getElementById("menu");

login.addEventListener("mousedown", hideMenu);

login.addEventListener("click", () => {
  blockLogin.style.display = "block";
  layout.style.display = "block";
});

boxRegister.addEventListener("click", () => {
  blockRegister.style.display = "block";
  blockLogin.style.display = "none";
});

backLogin.addEventListener("click", () => {
  blockLogin.style.display = "block";
  blockRegister.style.display = "none";
});

document.getElementById("xmark").addEventListener("click", closeBox);
document.getElementById("xmark-reg").addEventListener("click", closeBox);
function closeBox() {
  blockRegister.style.display = "none";
  blockLogin.style.display = "none";
}

let arr = [];
function clickMenu(x, y) {
  let innerHTMLMenus = "";
  if (checkX(arr, x)) {
    arr.push(x);
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i].style.background = "none";
  }
  x.style.background = "green";
  let objLength = menus[y].childrent_menu.length;
  for (let j = 0; j < objLength; j++) {
    innerHTMLMenus += `<ul class="mainMenu__childItem list-group"><h2 class="menu-title">${menus[y].childrent_menu[j].title}</h2>`;
    let childrentMenuLength = menus[y].childrent_menu[j].sub_menu.length;
    for (let k = 0; k < childrentMenuLength; k++) {
      innerHTMLMenus +=
        '<li class="list-group-item"><a href="/occurrence/search">' +
        menus[y].childrent_menu[j].sub_menu[k] +
        "</a></li>";
    }
    innerHTMLMenus += "</ul>";
  }
  document.getElementById("menu_aaa").innerHTML = innerHTMLMenus;
}

function checkX(array, x) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == x) {
      return false;
    }
  }
  return true;
}

// switch (choise) {
//   case 1: {
//     let x = 0;
//     caseMenu1.addEventListener("click", () => {
//       if (x == 0) {
//         blockSubMenu.style = "display:block";
//         document.getElementById("main-menu-0").style =
//           "background-color: green";
//         x = 1;
//       } else {
//         blockSubMenu.style = "display:none";
//         document.getElementById("main-menu-0").style = "background-color: none";
//         x = 0;
//       }
//       blockSubMenu2.style.display = "none";
//       blockSubMenu3.style.display = "none";
//       blockSubMenu4.style.display = "none";
//       blockSubMenu5.style.display = "none";
//       blockLogin.style.display = "none";
//       blockRegister.style.display = "none";
//       document.getElementById("layout").style.display = "block";
//     });
//   }
//   case 2: {
//     let x = 0;
//     caseMenu2.addEventListener("click", () => {
//       {
//         if (x == 0) {
//           blockSubMenu2.style.display = "flex";
//           document.getElementById("main-menu-1").style =
//             "background-color: green";
//           x = 1;
//         } else {
//           blockSubMenu2.style.display = "none";
//           document.getElementById("main-menu-1").style =
//             "background-color: none";
//           x = 0;
//         }
//       }
//       blockSubMenu.style.display = "none";
//       blockSubMenu3.style.display = "none";
//       blockSubMenu4.style.display = "none";
//       blockSubMenu5.style.display = "none";
//       blockLogin.style.display = "none";
//       blockRegister.style.display = "none";
//       document.getElementById("layout").style.display = "block";
//     });
//   }
//   case 3: {
//     let x = 0;
//     caseMenu3.addEventListener("click", () => {
//       {
//         if (x == 0) {
//           blockSubMenu3.style.display = "flex";
//           document.getElementById("main-menu-2").style =
//             "background-color: green";
//           x = 1;
//         } else {
//           blockSubMenu3.style.display = "none";
//           document.getElementById("main-menu-2").style =
//             "background-color: none";
//           x = 0;
//         }
//       }
//       blockSubMenu4.style.display = "none";
//       blockSubMenu5.style.display = "none";
//       blockSubMenu2.style.display = "none";
//       blockSubMenu.style.display = "none";
//       blockLogin.style.display = "none";
//       blockRegister.style.display = "none";
//       document.getElementById("layout").style.display = "block";
//     });
//   }
//   case 4: {
//     let x = 0;
//     caseMenu4.addEventListener("click", () => {
//       if (x == 0) {
//         document.getElementById("main-menu-3").style =
//           "background-color: green";
//         blockSubMenu4.style.display = "flex";
//         x = 1;
//       } else {
//         document.getElementById("main-menu-3").style = "background-color: none";
//         blockSubMenu4.style.display = "none";
//         x = 0;
//       }
//       blockSubMenu4.style.display = "flex";
//       blockSubMenu5.style.display = "none";
//       blockSubMenu2.style.display = "none";
//       blockSubMenu.style.display = "none";
//       blockSubMenu3.style.display = "none";
//       blockLogin.style.display = "none";
//       blockRegister.style.display = "none";
//       document.getElementById("layout").style.display = "block";
//     });
//   }
//   case 5: {
//     let x = 0;
//     caseMenu5.addEventListener("click", () => {
//       if (x == 0) {
//         blockSubMenu5.style.display = "flex";
//         document.getElementById("main-menu-4").style =
//           "background-color: green";
//         x = 1;
//       } else {
//         blockSubMenu5.style.display = "none";
//         document.getElementById("main-menu-4").style =
//           "background-color: green";
//         x = 0;
//       }
//       blockSubMenu5.style.display = "flex";
//       blockSubMenu2.style.display = "none";
//       blockSubMenu.style.display = "none";
//       blockSubMenu3.style.display = "none";
//       blockSubMenu4.style.display = "none";
//       blockLogin.style.display = "none";
//       blockRegister.style.display = "none";
//       document.getElementById("layout").style.display = "block";
//     });
//   }
// }
document.getElementById("layout").addEventListener("mousedown", hideMenu);
function hideMenu() {
  blockLogin.style.display = "none";
  blockRegister.style.display = "none";
  blockSubMenu.style.display = "none";
  blockSubMenu2.style.display = "none";
  blockSubMenu3.style.display = "none";
  blockSubMenu4.style.display = "none";
  blockSubMenu5.style.display = "none";
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
  // console.log(x);
  var element = document.getElementById("home-bg-img");
  // console.log(element);
  element.style = `background: url(${images[x]}) no-repeat;`;
}

document.addEventListener("DOMContentLoaded", randomImage);

function bgMenu() {
  document.getElementById("main-menu-0").style.backgroundColor = "green";
}
