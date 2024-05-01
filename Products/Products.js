window.onload = function () {
    
    const products = [
        {
            name: "Hiking Shoes",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum nisi vel odio porttitor, vitae mattis ante feugiat.",
            category: "Sporsts",
            origin: "South Korea",
            image: "https://cdn.pixabay.com/photo/2014/12/31/11/41/shoes-584850_1280.jpg",
            price: 46.00,
            updated: "12/06/2021"
        },
        {
            name: "Gym Wear",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum nisi vel odio porttitor, vitae mattis ante feugiat.",
            category: "Men's Wear",
            origin: "South Korea",
            image: "https://cdn.pixabay.com/photo/2016/03/27/22/05/necktie-1284463_1280.jpg",
            price: 46.00,
            updated: "12/08/2021"
        },
        {
            name: "Kid's Shoes",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum nisi vel odio porttitor, vitae mattis ante feugiat.",
            category: "Kids",
            origin: "South Korea",
            image: "https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478_1280.jpg",
            price: 46.00,
            updated: "05/06/2021"
        },
        {
            name: "Sneaker",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum nisi vel odio porttitor, vitae mattis ante feugiat.",
            category: "Men's Wear",
            origin: "South Korea",
            image: "https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596_1280.jpg",
            price: 46.00,
            updated: "12/07/2021"
        },
        {
            name: "Casual Trousers",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum nisi vel odio porttitor, vitae mattis ante feugiat.",
            category: "Men's Wear",
            origin: "South Korea",
            image: "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg",
            price: 46.00,
            updated: "05/06/2021"
        },
        {
            name: "Cargo Pants",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum nisi vel odio porttitor, vitae mattis ante feugiat.",
            category: "Men's Wear",
            origin: "South Korea",
            image: "https://cdn.pixabay.com/photo/2023/09/04/17/40/ai-generated-8233281_1280.jpg",
            price: 46.00,
            updated: "05/01/2024"
        }
    ]
    const displayArea = document.getElementById("product");

    for( let item=0; item < products.length; item++){
        const productDiv = document.createElement("div");
        productDiv.classList.add("card", "mb-3", "p-0");
        
        const productInnerDiv = document.createElement("div");
        productInnerDiv.classList.add("row", "g-0");
        
        const productImgDiv = document.createElement("div");
        productImgDiv.classList.add("col-md-4");
        const productImg = document.createElement("img")
        productImg.src = products[item].image
        productImg.classList.add("img-fluid", "round-start")
        productImgDiv.appendChild(productImg)
        
        const productBodyContainerDiv = document.createElement("div");
        productBodyContainerDiv.classList.add("col-md-8");
        
        // Dropdown Div section
        const productDropdownDiv = document.createElement("div");
        productDropdownDiv.classList.add("d-flex", "justify-content-between", "p-2");
        const productName = document.createElement("h5");
        productName.classList.add("card-title");
        productName.textContent = products[item].name;

        // Dropdown configuration buttons
        const dropdown = document.createElement("div")
        dropdown.classList.add("dropdown");
        // Dropdown Button
        const dropdownBtn = document.createElement("button");
        dropdownBtn.classList.add("btn", "btn-secondary", "dropdown-toggle");
        dropdownBtn.setAttribute("type", "button")
        dropdownBtn.setAttribute("data-bs-toggle", "dropdown")
        dropdownBtn.setAttribute("aria-expanded", "false")
        dropdownBtn.innerHTML = `<i class="bi bi-menu-button-wide-fill"></i>`
        // Dropdown menu option items
        const optionsUl = document.createElement("ul")
        optionsUl.classList.add("dropdown-menu")
        // Action Buttons and 'li's
        // Edit Button and Li
        const editBtnLi = document.createElement("li");
        editBtnLi.classList.add("dropdown-item");
        const editBtn = document.createElement("a");
        editBtn.textContent = "Edit";
        editBtnLi.appendChild(editBtn);
        // Delete Button and Li
        const deleteBtnLi = document.createElement("Li")
        deleteBtnLi.classList.add("dropdown-item")
        const deleteBtn = document.createElement("a")
        deleteBtn.textContent = "Delete";
        deleteBtnLi.appendChild(deleteBtn)
        // publish Button and Li
        const publishBtnLi = document.createElement("li");
        publishBtnLi.classList.add("dropdown-item");
        const publishBtn = document.createElement("a");
        publishBtn.textContent = "Publish";
        publishBtnLi.appendChild(publishBtn);
        // Append all into the main Unordered List element
        optionsUl.appendChild(editBtnLi)
        optionsUl.appendChild(deleteBtnLi)
        optionsUl.appendChild(publishBtnLi)
        dropdownBtn.appendChild(optionsUl)
        dropdown.appendChild(dropdownBtn)
        dropdown.appendChild(optionsUl)
        // Add the name and the dropdown into the dropdown div
        productDropdownDiv.appendChild(productName)
        productDropdownDiv.appendChild(dropdown)

        // Configure the Edit Button 'click' Event Listener
        editBtn.addEventListener("click", function() {
            alert("Edit button clicked");
        });

        // Configure the Delete Button 'click' Event Listener
        deleteBtn.addEventListener("click", function() {
            alert("Delete button clicked");
        });
        
        // Configure the Publish Button 'click' Event Listener
        publishBtn.addEventListener("click", function() {
            alert("Publish button clicked");
        });

        const productCategoryDiv = document.createElement("div");
        productCategoryDiv.classList.add("d-flex","justify-content-between");

        const productCategorySpan = document.createElement("span");
        productCategorySpan.classList.add("badge", "badge-success", "bg-success");
        productCategorySpan.textContent = products[item].category;
        
        const productBodyDiv = document.createElement("div");
        productBodyDiv.classList.add("card-body");
        const prodDesc = document.createElement("p");
        prodDesc.classList.add("card-text");
        prodDesc.textContent = products[item].description;

        const productPriceDiv = document.createElement("div");
        productPriceDiv.classList.add("d-flex", "justify-content-end");
        const prodPrice = document.createElement("p");
        prodPrice.style.width = "fit-content";
        prodPrice.textContent = `Price: $${products[item].price}`;

        const productFooterDiv = document.createElement("div");
        productFooterDiv.classList.add("card-footer","d-flex", "justify-content-between");
        const prodUpdatedSmall = document.createElement("small");
        prodUpdatedSmall.classList.add("text-body-secondary");
        prodUpdatedSmall.textContent = products[item].updated;
        
        const prodOrigin = document.createElement("small");
        prodOrigin.classList.add("card-text","text-muted");
        prodOrigin.textContent = `Origin: ${products[item].origin}`;

        productPriceDiv.appendChild(prodPrice);
        productCategoryDiv.appendChild(productCategorySpan);
        productBodyDiv.appendChild(productCategoryDiv);
        productBodyDiv.appendChild(prodDesc);
        productBodyDiv.appendChild(productPriceDiv);
        productFooterDiv.appendChild(prodUpdatedSmall);
        productFooterDiv.appendChild(prodOrigin);
        
        productBodyContainerDiv.appendChild(productDropdownDiv)
        productBodyContainerDiv.appendChild(productBodyDiv)
        productBodyContainerDiv.appendChild(productFooterDiv)
        productInnerDiv.appendChild(productImgDiv)
        productInnerDiv.appendChild(productBodyContainerDiv)
        productDiv.appendChild(productInnerDiv);

        displayArea.appendChild(productDiv);
    }
}