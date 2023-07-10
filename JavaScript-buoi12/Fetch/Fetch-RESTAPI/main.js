let courseApi = "http://localhost:3000/courses";

function start() {
  getCourses(renderCourses);

  handleCreateForm();
}

start();

// Functions

function getCourses(callback) {
  fetch(courseApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function createCourse(data, callback) {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(courseApi, options)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}

function handleDeleteCourse(id) {
  let options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(courseApi + "/" + id, options)
    .then(function (response) {
      response.json();
    })
    .then(function () {
    var  courseItem =  document.querySelector('.course-item-'+id);
    if(courseItem){
      courseItem.remove();
    }
    });
}

function renderCourses(courses) {
  let listCoursesBlock = document.querySelector("#list-course");
  let htmls = courses.map(function (course) {
    return `
        <li class="course-item-${course.id}">
        <h4>${course.name}</h4>
        <p>${course.descriptson}</p>
        <button onclick="handleDeleteCourse(${course.id})">Delete</button>
        <p></p>
        </li>`;
  });
  listCoursesBlock.innerHTML = htmls.join("");
}

function handleCreateForm() {
  var createBtn = document.querySelector("#create");

  createBtn.onclick = function () {
    var name = document.querySelector('input[name="name"').value;
    var descriptson = document.querySelector('input[name="descriptson"').value;

    var formData = {
      name: name,
      descriptson: descriptson,
    };

    createCourse(formData, function () {
      getCourses(renderCourses);
    });
  };
}
