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
// // Async Await Example
// async function init(params) {
//   await createPost({ title: "Post Three", body: "THis is post Three" }); // wait for this function to execute and then execute
//   // the next line of code
//   getPosts();
// }

// init();
// Async Await Fetch
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

fetchUsers();
