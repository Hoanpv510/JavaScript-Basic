// function highlight([first, ...strings], ...values) {
//   return values
//     .reduce((acc, curr) => [...acc, `<b>${curr}</b>`, strings.shift()], [first])
//     .join("");
// }

// var brand = "F8";
// var course = "Javascript";

// const html = highlight`Hoc lap trinh ${course} tai ${brand}`;

async function makeNetworkRequest() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
  return data;
}


async function readFile() {
  const response = await fetch(
    "https://raw.githubusercontent.com/openai/gym/master/README.md"
  );
  //   if (!response.ok) {
  //     const message = `An error has occured: ${response.status}`;
  //     throw new Error(message);
  //   }
  const data = await response.text();
  return data;
}

const doSomethingElse = async () => {
  // Make a HTTP request to the GitHub API.
  const response = await fetch("https://api.github.com/users/bard");
  if (response.status === 200) {
    const data = await response.json();
    return data.name;
  } else {
    return "Something went wrong with the HTTP request.";
  }
};

console.log(makeNetworkRequest());
console.log(readFile());
console.log(doSomethingElse());
