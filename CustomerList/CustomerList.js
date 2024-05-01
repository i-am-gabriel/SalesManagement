window.onload = function() {
    const productdisplaySection = document.getElementById("customer_displays")

    // List of customers
    let ourCustomers = [
        {
            "id": 0,
            "name": "Gabriel",
            "email": "gabriel@js.mail",
            "phone": "+6870421419",
            "image": "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg"
        },
        {
            "id": 1,
            "name": "Joe Kim",
            "email": "joe@kim.mail",
            "phone": "+68421419",
            "image": "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg"
        },
        {
            "id": 2,
            "name": "Milli Cent",
            "email": "milli@cent.mail",
            "phone": "+68421419",
            "image": "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg"
        },
        {
            "id": 3,
            "name": "John Kanade",
            "email": "john@kanade.mail",
            "phone": "+68421419",
            "image": "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg"
        },
        {
            "id": 4,
            "name": "John Doe",
            "email": "john@doe.mail",
            "phone": "+1634587349",
            "image": "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg"
        },
    ]

    const customer_display = document.getElementById("customer_displays")

    for(let item = 0; item < ourCustomers.length; item++) {
        
        // Create a card Item for a single Card

        // Card Div
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "m-2");
        cardDiv.style.width="18rem"
        
        // Img Div
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("d-flex", "justify-content-center", "mt-5");
        // Image tag
        const image = document.createElement("img")
        image.classList.add("rounded-circle")
        image.style.height = ("5rem");
        image.style.width = ("5rem");
        // Attache the image source using src
        image.src = ourCustomers[item].image
        // Append Image to Image div
        imgDiv.appendChild(image)
        
        // body Div
        const bodyDiv = document.createElement("div");
        bodyDiv.classList.add("container", "h-75", "d-flex", "justify-content-between", "mb-3");
        // Create title element (h5)
        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = ourCustomers[item].name
        // Create email element (p)
        const email = document.createElement("p");
        email.classList.add("card-text");
        email.textContent = ourCustomers[item].email;
        // Append the title and email into the body div
        bodyDiv.appendChild(title);
        bodyDiv.appendChild(email);

        // HR Seperator
        const horizontal = document.createElement("hr")
        
        // button div
        const buttonDiv = document.createElement("div");
        buttonDiv.classList.add("container-fluid", "d-flex","justify-content-between","mb-3")
        // Message Btn
        const msgBtn = document.createElement("a");
        msgBtn.classList.add("btn", "btn-success", "d-flex", "justify-content-center", "flex-column") ;
        msgBtn.innerHTML = "<i class='bi bi-whatsapp fs-2'></i>";
        msgBtn.href = `https://wa.me/${ourCustomers[item].phone}`;
        // Email Btn
        const emailBtn = document.createElement("a");
        emailBtn.classList.add("btn", "btn-primary", "d-flex", "justify-content-center", "flex-column") ;
        emailBtn.innerHTML = "<i class='bi bi-envelope-at'></i>";
        emailBtn.href = `mailto:${ourCustomers[item].email}`;
        // Call Btnhttps://loseweightbyeating.com/cheesy-cauliflower-casserole/
        const callBtn = document.createElement("a");
        callBtn.classList.add("btn", "btn-warning", "d-flex", "justify-content-center", "flex-column") ;
        callBtn.innerHTML = "<i class='bi bi-telephone-outbound'></i>";
        callBtn.href = `https://wa.me/${ourCustomers[item].phone}`;
        
        // Append to buttonDIv
        buttonDiv.appendChild(msgBtn);
        buttonDiv.appendChild(emailBtn);
        buttonDiv.appendChild(callBtn);
        
        // Append to cardDiv
        cardDiv.appendChild(imgDiv);
        cardDiv.appendChild(bodyDiv);
        cardDiv.appendChild(horizontal);
        cardDiv.appendChild(buttonDiv);

        // Add the items into the customer display section one by one.
        customer_display.appendChild(cardDiv);
    }
}
