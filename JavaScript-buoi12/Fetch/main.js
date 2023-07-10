var postApi = "https://jsonplaceholder.typicode.com/todos/";
var file = "https://raw.githubusercontent.com/openai/gym/master/README.md";
//stream

fetch(postApi)
  .then(function (response) {
    return response.json();

    //JSON.parse: JSON -> Javascript type
  })
  .then(function (posts) {
    var htmls = posts.map(function (post) {
      return `<li>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        </li>`;
    });

    var html = htmls.join("");
    document.getElementById("post_block").innerHTML = html;
  })
  .catch(function (err) {
    alert("Link fail");
  });


// var courseApi = "http://localhost:3000/courses";

// fetch(courseApi)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (courses) {
//     console.log(courses);
//   });
