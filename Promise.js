const posts = [
  { title: "Post One", body: "THis is post one" },
  { title: "Post Two", body: "THis is post two" }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li> ${post.body} </li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const err = false;

      if (!err) {
        resolve();
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  });
}

// createPost({ title: "Post Three", body: "THis is post Three" })
//   .then(getPosts)
//   .catch(err => console.log(err));
/// Promise.all
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "GoodBye");
});

const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  response => response.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then(values => {
  console.log(values);
});
