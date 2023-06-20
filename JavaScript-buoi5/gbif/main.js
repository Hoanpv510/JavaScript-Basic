const menus = [
  {
    name: "Get data",
    url: "#",
    childrent_menu: [
      {
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
        sub_menu: [
          "IPT",
          "Data validator",
          "Scientific Collections",
          "Suggest a dataset",
          "New data model ⭐️",
        ],
      },
      {
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
    name: "Tools",
    url: "#",
    childrent_menu: [
      {
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
        sub_menu: [
          "Mentors",
          "Ambassadors ",
          "Translators",
          "Citizen scientists ",
        ],
      },
      {
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
    name: "How to",
    url: "#",
    childrent_menu: [
      {
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
let innerHTMLMenus = "";
let menuLength = menus.length;
for (let i = 0; i < menuLength; i++) {
  innerHTMLMenus += "<li>" + menus[i].name;

  let objLength = menus[i].childrent_menu.length;
  if (objLength) {
    innerHTMLMenus += '<ul class="mainMenu__childGroup "><nav class="sub-menu">';
    // them vao menu con
    for (let j = 0; j < objLength; j++) {
      innerHTMLMenus += '<ul class="mainMenu__childItem list-group"><h2></h2>';
      let childrentMenuLength = menus[i].childrent_menu[j].sub_menu.length;
      for (let k = 0; k < childrentMenuLength; k++) {
        innerHTMLMenus +=
          '<li class="list-group-item"><a href="/occurrence/search">' +
          menus[i].childrent_menu[j].sub_menu[k] +
          "</a></li>";
      }
      innerHTMLMenus += "</ul>";
    }
    innerHTMLMenus += "</nav></ul>";
  }

  innerHTMLMenus += "</li>";
}
document.getElementById("menu").innerHTML = innerHTMLMenus;
