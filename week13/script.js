async function loadProduct() {
        const resData = await fetch("http://localhost:3000/product")
        const data = await resData.json()

        document.getElementById("output")
        .innerText = `${data.title} - ${data.price} THB`;

};