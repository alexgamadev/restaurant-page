const taglineElement = document.createElement("h2");
taglineElement.classList.add("tagline");
taglineElement.textContent = "Delight in every bite";

const timesElement = document.createElement("div");
timesElement.classList.add("open-times");
timesElement.innerHTML = 
`
    Mon to Fri: 12am - 12pm <br/>
    Sat to Sun: 12am - 10pm
`

const loadHome = (contentElement) => {
    contentElement.appendChild(taglineElement);
    contentElement.appendChild(timesElement);
    contentElement.style["justify-content"] = "space-between";
}

export {loadHome}