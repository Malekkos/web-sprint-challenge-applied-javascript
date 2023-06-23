import axios from "axios";
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardElement = document.createElement("div");
  const headlineElement = document.createElement("div")
  const authorElement = document.createElement("div")
  const imgContainerElement = document.createElement("div")
  const imgElement = document.createElement("img");
  const authorNameElement = document.createElement("span");
  cardElement.classList = "card";
  headlineElement.classList = "headline";
  authorElement.classList = "author";
  imgContainerElement.classList = "img-container";
  headlineElement.textContent = `${article.headline}`;
  // console.log(article.headline);
  imgElement.src = `${article.authorPhoto}`
  authorNameElement.textContent = `By ${article.authorName}`
  cardElement.appendChild(headlineElement);
  cardElement.appendChild(authorElement);
  authorElement.appendChild(imgContainerElement);
  imgContainerElement.appendChild(imgElement);
  authorElement.appendChild(authorNameElement);
  cardElement.addEventListener("click", () => {
    console.log(article.headline)
  })
  return cardElement
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const selected = document.querySelector(selector);
  axios.get("http://localhost:5001/api/articles")
  .then(res => {
    console.log(res.data.articles.javascript);
    res.data.articles.javascript.forEach(val => {
      const ele = Card(val);
      selected.appendChild(ele);
    })
    res.data.articles.bootstrap.forEach(val => {
      const ele = Card(val);
      selected.appendChild(ele);
    })
    res.data.articles.technology.forEach(val => {
      const ele = Card(val);
      selected.appendChild(ele);
    })
    res.data.articles.jquery.forEach(val => {
      const ele = Card(val);
      selected.appendChild(ele);
    })
    // const newNode = res.data.articles[4];
    // console.log("this is the node", res.data.articles.node)
    res.data.articles.node.forEach(val => {
      const ele = Card(val);
      selected.appendChild(ele);
    })
  })
  .catch(err => {
    console.log(err);
  })
}

export { Card, cardAppender }
