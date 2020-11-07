const headerElement = document.createElement("header");
const titleElement = document.createElement("h1");
titleElement.classList.add("title");
const titleHTML = 
`
    <span>Pinewood</span><br/>
    <span class="fnt-red">Cabin</span>
`;
titleElement.innerHTML = titleHTML;

const navbarElement = document.createElement("ul");
navbarElement.classList.add("nav");
const navbarHTML = 
`
    <li class="btn">Home</li>
    <li class="btn">Menu</li>
    <li class="btn">Contact</li>
`;
navbarElement.innerHTML = navbarHTML;

headerElement.appendChild(titleElement);
headerElement.appendChild(navbarElement);

const loadHeader = (contentElement) => {
    contentElement.insertBefore(headerElement, contentElement.childNodes[0]);
}


export {loadHeader};