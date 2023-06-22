import axios from "axios";
//a
const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  console.log(topics);
    const topicsElement = document.createElement("div");
    const firstTab = document.createElement("div");
    const secondTab = document.createElement("div");
    const thirdTab = document.createElement("div");
    topicsElement.classList = "topics";
    firstTab.classList = "tab";
    secondTab.classList = "tab";
    thirdTab.classList = "tab";
    firstTab.textContent = topics[0];
    secondTab.textContent = topics[1];
    thirdTab.textContent = topics[2];
    topicsElement.appendChild(firstTab);
    topicsElement.appendChild(secondTab);
    topicsElement.appendChild(thirdTab);
    console.log(topicsElement);
    
  return topicsElement
}
//a
const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  console.log("http://localhost:5001/api/topics")
  //
  console.log("I am working");
  const gottenSelector = document.querySelector(`${selector}`);
  axios.get(`http://localhost:5001/api/topics`)
  .then(res => {
    const firstTab = res.data[0];
    firstTab.innerHTML = ""
    const secondTab = res.data[1];
    const thirdTab = res.data[2];
    gottenSelector.appendChild(firstTab);
  })
  .catch(err => {
    console.log(err);
  })
}

export { Tabs, tabsAppender }
