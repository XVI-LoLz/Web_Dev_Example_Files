import manyPosts from "./postsData.mjs";

let params = new URLSearchParams(document.location.search);
let mainElement = document.querySelector("main");

function searchPostBySlug(slug) {
  const match = manyPosts.filter((post) => post.slug == slug)[0];
  return match ? match : null;
}

function populateAsPost(postData) {
  let converter = new showdown.Converter();
  mainElement.innerHTML = converter.makeHtml(postData.content);
  mainElement.classList.add("as-post");
}

// Using document API to create elements
function createPostCard(postData) {
  let cardElement = document.createElement("div");
  cardElement.classList.add("card");

  let cardHeader = document.createElement("header");
  cardHeader.innerHTML = postData.title;
  cardElement.appendChild(cardHeader);

  let cardContent = document.createElement("p");
  cardContent.innerHTML = postData.summary;
  cardElement.appendChild(cardContent);

  let cardDate = document.createElement("time");
  cardDate.innerHTML = postData.publishedAt.split("T")[0];
  cardElement.appendChild(cardDate);

  let cardCta = document.createElement("button");
  cardCta.classList.add("button");
  cardCta.innerHTML = "Go to article";
  cardCta.onclick = () => {
    params.set("title", postData.slug);
    window.location.search = params.toString();
  };
  cardElement.appendChild(cardCta);

  return cardElement;
}

// Using innerHTML to create elements
// Easier to read and extend
function createNewPostCard(postData) {
  let cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.classList.add("block");
  cardElement.innerHTML = `
  <div class="card-content">
    <h2 class="title">${postData.title}</h2>
    <p class="subtitle">${postData.publishedAt.split("T")[0]}</p>
    <div class="content">${postData.summary}</div>
    <footer class="card-footer">
      <p class="card-footer-item"><a href="?title=${
        postData.slug
      }">Go To Article</a></p>
    </footer>
  </div>`;

  return cardElement;
}

function populateAsMainPage() {
  mainElement.innerHTML = `<h1 class="is-size-1">Articles</h1>`;
  mainElement.classList.remove("as-post");

  let container = document.createElement("div");
  container.classList.add("container");

  for (const singlePost of manyPosts) {
    let card = createNewPostCard(singlePost);
    container.appendChild(card);
  }

  mainElement.appendChild(container);
}

function getMainContent() {
  let matchedPost = searchPostBySlug(params.get("title"));

  if (matchedPost) {
    populateAsPost(matchedPost);
  } else {
    populateAsMainPage();
  }
}

window.addEventListener("popstate", getMainContent);

window.addEventListener("load", getMainContent);
