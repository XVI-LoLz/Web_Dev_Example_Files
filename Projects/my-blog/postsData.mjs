const posts = [
  {
    title: "My first test post",
    slug: "test-1",
    publishedAt: "2021-10-20T00:58:35.454Z",
    summary: "A short description about the post",
    content:
      "# Some heading 1\r\n\r\nNice things in here\r\n\r\nThis is my first blog post ![Thinking emoji](https://images.emojiterra.com/twitter/v13.0/512px/1f914.png)\r\n",
  },
  {
    title: "My second test post",
    slug: "test-2",
    publishedAt: "2021-10-21T00:58:35.454Z",
    summary: "A short description about the post",
    content:
      "## Some heading 2\r\n\r\nNice things in here\r\n\r\nThis is my second blog post ![Dummy image](https://dummyimage.com/600x400/000/fff)\r\n",
  },
  {
    title: "My MD post",
    slug: "my-md-post",
    publishedAt: "2021-10-21T00:58:35.454Z",
    summary: "A short description about the post",
    content:
      "# Sample Markdown\r\n\r\nThis is some basic, sample markdown.\r\n\r\n## Second Heading\r\n\r\n * Unordered lists, and:\r\n  1. One\r\n  1. Two\r\n  1. Three\r\n * More\r\n\r\n> Blockquote\r\n\r\nAnd **bold**, *italics*, and even *italics and later **bold***. Even ~~strikethrough~~. [A link](https://markdowntohtml.com) to somewhere.\r\n\r\nAnd code highlighting:\r\n\r\n```js\r\nvar foo = 'bar';\r\n\r\nfunction baz(s) {\r\n   return foo + ':' + s;\r\n}\r\n```\r\n\r\nOr inline code like `var foo = 'bar';`.\r\n\r\nOr an image of bears\r\n\r\n![bears](http://placebear.com/200/200)\r\n\r\nThe end ...\r\n",
  },
];

export default posts;
