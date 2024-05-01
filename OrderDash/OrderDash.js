window.onload = function () {
    // get tBody from the HTML doc
    const tBody = document.getElementById("ordersTable")

    // Create a list of products and store them in variable called 'orders'
    /**
     * [
        {
            "order_no": "001",
            "product_name": "nike Shoes",
            "cust_name": "John Doe",
            "quantity": "3",
            "status": "Pending",
        },
        {
            "order_no": "002",
            "product_name": "001",
            "cust_name": "Jane Doe",
            "quantity": "4",
            "status": "Shipped",
        },
     * 
     * ]
     * 
     */
    let orderList = [
        {
            "order_no": "068419",
            "product_name": "chep shoes",
            "customer_name": "Timmy",
            "quantity": "2.5",
            "status": "Shipping"
        },
        {
            "order_no": "694200",
            "product_name": "USB-C Charger",
            "customer_name": "User A",
            "quantity": "68",
            "status": "Packing"
        },
        {
            "order_no": "123456",
            "product_name": "Air",
            "customer_name": "I buy Air",
            "quantity": "10000",
            "status": "Processing"
        },
        {
            "order_no": "001168",
            "product_name": "Broken Chair",
            "customer_name": "The Rock",
            "quantity": "421",
            "status": "Paid"
        },        
        {
            "order_no": "901256",
            "product_name": "Money",
            "customer_name": "I need money",
            "quantity": "50000",
            "status": "Canceled"
        }
    ]
        
    // implement a for loop that iterates throgh the entire orderList creating the relevant tags
    for (let i = 0; i < orderList.length; i++)
    {
        // [Inside the for-loop] Use createElement to create a table row 'tr' 
        const row = document.createElement("tr");
        // [Inside the for-loop] Use createElement to create a table row 'td' called orderNumber (const)
        // [Inside the for-loop] Use textContext to the td the value of the respective item in the list orderList[iter].order_no
        const orderNo = document.createElement("td")
        orderNo.textContent = orderList[i].order_no
        // [Inside the for-loop] Use createElement to create a table row 'td' called productName (const)
        // [Inside the for-loop] Use textContext to the td the value of the respective item in the list orderList[iter].product_name
        const productName = document.createElement("td")
        productName.textContent = orderList[i].product_name
        // [Inside the for-loop] Use createElement to create a table row 'td' called customerName (const)
        // [Inside the for-loop] Use textContext to the td the value of the respective item in the list orderList[iter].customer_name
        const customerName = document.createElement("td")
        customerName.textContent = orderList[i].customer_name
        // [Inside the for-loop] Use createElement to create a table row 'td' called quantity (const)
        // [Inside the for-loop] Use textContext to the td the value of the respective item in the list orderList[iter].quantity
        const quantityI = document.createElement("td")
        quantityI.textContent = orderList[i].quantity
        // [Inside the for-loop] Use createElement to create a table row 'td' called status (const)
        // [Inside the for-loop] Use textContext to sthe td the value of the respective item in the list orderList[iter].status
        const statusI = document.createElement("td")
        statusI.textContent = orderList[i].status

        // Create the actions td
        const actions = document.createElement("td");

        // Implement the abve elements usign teh JS DOM
        // container div - class 'btn-group'
        const dropdownContainer = document.createElement("div")
        dropdownContainer.classList.add("btn-group")

        // dropdown button 2 - class 'btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split'
        const btnArrow = document.createElement("button")
        btnArrow.classList.add("btn", "btn-sm", "btn-secondary", "dropdown-toggle-split")
        btnArrow.setAttribute("type", "button")
        btnArrow.setAttribute("data-bs-toggle", "dropdown")
        btnArrow.setAttribute("aria-expanded", "false")

        // Bootstrap Icon - class 'bi bi-three-dots'
        const btnDots = document.createElement("i")
        btnDots.classList.add("bi", "bi-three-dots")
        
        // dropdown 'ul' - class 'dropdown-menu'
        const dropdownUl = document.createElement("ul")
        dropdownUl.classList.add("dropdown-menu")
        // dropdown Item one 'li'
        const dropdownLiOne = document.createElement("li")
        // dropdown Item two 'li'
        const dropdownLiTwo = document.createElement("li")
        // dropdown Item three 'li'
        const dropdownLiThree = document.createElement("li")
        
        const dropdownLiFour = document.createElement("li")
        
        // Edit button, style and context 
        const actionButtonOne = document.createElement("button")
        actionButtonOne.setAttribute("type", "button")
        actionButtonOne.classList.add("dropdown-item")
        actionButtonOne.textContent = "Edit Order";
        dropdownLiOne.appendChild(actionButtonOne)
        
        // Ship
        const actionButtonTwo = document.createElement("button")
        actionButtonTwo.setAttribute("type", "button")
        actionButtonTwo.classList.add("dropdown-item")
        actionButtonTwo.textContent = "Ship Order";
        dropdownLiTwo.appendChild(actionButtonTwo)
        // Decline
        const actionButtonThree = document.createElement("button")  
        actionButtonThree.setAttribute("type", "button")
        actionButtonThree.classList.add("dropdown-item")
        actionButtonThree.textContent = "Decline Order";
        dropdownLiThree.appendChild(actionButtonThree)
        // Reject
        const actionButtonFour = document.createElement("button")
        actionButtonFour.setAttribute("type", "button")
        actionButtonFour.classList.add("dropdown-item")
        actionButtonFour.textContent = "Reject Order";
        dropdownLiFour.appendChild(actionButtonFour)
        
        // Append the dropdown container 'dropdownContainer' into the actions td
        actions.appendChild(dropdownContainer)
        // Append the 'btnImage' and 'btnArrow' into the dropdown container 'dropdownContainer'
        dropdownContainer.appendChild(btnArrow)
        dropdownContainer.appendChild(dropdownUl)

        // Append the li options into the UL
        dropdownUl.appendChild(dropdownLiOne);
        dropdownUl.appendChild(dropdownLiTwo);
        dropdownUl.appendChild(dropdownLiThree);
        dropdownUl.appendChild(dropdownLiFour);

        // Append the 'btnDots' into the 'btnArrow'
        btnArrow.appendChild(btnDots)

        // [Inside the for-loop] Append the td's into the tr
        row.appendChild(orderNo)
        row.appendChild(productName)
        row.appendChild(customerName)
        row.appendChild(quantityI)
        row.appendChild(statusI)
        row.appendChild(actions)
        // [Inside the for-loop] Append the tr into the tbody
        tBody.appendChild(row)
    }


}