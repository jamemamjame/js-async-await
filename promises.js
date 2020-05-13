const posts = [
  { title: 'Post One' },
  { title: 'Post Two' },
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach(post => {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong!');
      }
    }, 200);
  });
}

const newPost = { title: 'Post Three' };

// createPost(newPost)
//   .then(getPosts)
//   .catch(err => console.log(err));

// =========== Promise.all
const promise1 = Promise.resolve('Hello 1');
const promise2 = 'Hello2';
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, 'Hello3');
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users');

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));
