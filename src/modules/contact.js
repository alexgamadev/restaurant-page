function createEmailCategory() {
    const div = document.createElement("div");
    const emailHeader = document.createElement("h4");
    emailHeader.textContent = "Email Address";

    const emailContent = document.createElement("div");
    emailContent.textContent = "pinewoodcabin@outlook.com";

    div.appendChild(emailHeader);
    div.appendChild(emailContent);

    return div;
}

const numberDiv = document.createElement("div");
numberDiv.innerHTML = 
`
    <h4>Phone Number</h4>
    <div>(+44)7735419826</div>
`;

const locationDiv = document.createElement("div");
locationDiv.innerHTML = 
`
    <h4>Location</h4>
    <div>50  Folkestone Road</div>
    <div>WINKFIELD ROW</div>
    <div>RG42 9SQ</div>
`;

const socialDiv = document.createElement("div");
socialDiv.innerHTML = 
`
    <h4>Social Media</h4>
    <div class="social">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin-in"></i>
    </div>
`;

////////////////////////////////////////////

const container = document.createElement("div");
container.classList.add("container");
container.classList.add("contact");

const title = document.createElement("h3");
title.textContent = "Contact Us";

container.appendChild(title);
container.appendChild(createEmailCategory());
container.appendChild(numberDiv);
container.appendChild(locationDiv);
container.appendChild(socialDiv);

function loadContact(contentElement) {
    contentElement.appendChild(container);
    contentElement.style["justify-content"] = "flex-start";
}

export { loadContact }







