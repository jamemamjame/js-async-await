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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

const newPost = { title: 'Post Three' };

createPost(newPost, getPosts);