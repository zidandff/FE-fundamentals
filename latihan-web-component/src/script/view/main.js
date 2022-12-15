import "../components/image-figure.js";
import "../components/article-list.js";
import articles from "../data/articles.js";

function main() {
  const articleListElement = document.createElement("article-list");
  articleListElement.articles = articles;

  const app = document.getElementById("app");
  app.appendChild(articleListElement);
}

export default main;
