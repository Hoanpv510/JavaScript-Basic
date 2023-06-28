const headerContent = document.querySelector(".container .container-content");

const h5 = document.createElement("h5");
const titleH5 = document.createTextNode(
  "GBIF | Global Biodiversity Information Facility"
);
h5.appendChild(titleH5);
headerContent.appendChild(h5);
const h1 = document.createElement("h1");
const br = document.createElement("br");
const contentH1 = document.createTextNode(
  `Free and open access to ${br} biodiversity data`
);
h1.appendChild(contentH1);
headerContent.appendChild(h1);

let header = document.getElementById("header");
header.appendChild(headerContent);
