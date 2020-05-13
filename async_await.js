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

async function init() {
  const newPost = { title: 'Post Three' };
  await createPost(newPost);
  getPosts();
}

init();

