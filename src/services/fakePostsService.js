export const posts = [
  {
    _id: "5b21ca3eeb7f6fbccdw471818",
    byUser: "Ewa",
    content:
      "Integer suscipit, est eleifend rhoncus hendrerit, nisl ligula commodo metus, non tristique eros orci non sapien. Aliquam elit arcu, imperdiet a lectus euismod, convallis placerat metus. Nullam tincidunt nec tortor sit amet aliquam. Sed et rutrum nulla. In vel imperdiet lectus, sed condimentum quam. Nunc commodo eleifend mauris a tincidunt. Aenean euismod mauris nec enim scelerisque viverra. In sagittis quis leo sodales molestie. Nulla ornare condimentum velit nec imperdiet. Nullam molestie, dui nec vehicula accumsan, ex nunc pretium augue, imperdiet consequat nibh ante nec odio. Mauris mi odio, fringilla non diam id, blandit placerat dolor. Suspendisse sed tempor mauris. Aliquam nec rutrum ante, non feugiat urna. Sed id suscipit ante, et hendrerit nunc. Mauris et arcu eu sem bibendum sagittis ac non nulla..",
    date: "11.10.2018",
    profileImg: "./img/profiles/profile.svg"
  }
];

//function to create fake posts copy by with other id
function fakeIt() {
  for (var i = 20; i < 1000; i++) {
    posts.push({
      _id: "5b21ca3eeb7f6fbccd47w1820",
      byUser: "Jan",
      content:
        "Integer suscipit, est eleifend rhoncus hendrerit, nisl ligula commodo metus, non tristique eros orci non sapien. Aliquam elit arcu, imperdiet a lectus euismod, convallis placerat metus. Nullam tincidunt nec tortor sit amet aliquam. Sed et rutrum nulla. In vel imperdiet lectus, sed condimentum quam. Nunc commodo eleifend mauris a tincidunt. Aenean euismod mauris nec enim scelerisque viverra. In sagittis quis leo sodales molestie. Nulla ornare condimentum velit nec imperdiet. Nullam molestie, dui nec vehicula accumsan, ex nunc pretium augue, imperdiet consequat nibh ante nec odio. Mauris mi odio, fringilla non diam id, blandit placerat dolor. Suspendisse sed tempor mauris. Aliquam nec rutrum ante, non feugiat urna. Sed id suscipit ante, et hendrerit nunc. Mauris et arcu eu sem bibendum sagittis ac non nulla.",
      date: "21.10.2018",
      profileImg: "./img/profiles/profile.svg"
    });
  }

  for (var k in posts) {
    posts[k]._id = k;
  }
}

export function getPosts() {
  fakeIt();
  return posts;
}
