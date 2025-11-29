async function loadProducts() {
    const resGet = await fetch("http://localhost:3000/products")
    const get = await resGet.json()
    const productsDiv = document.getElementById("products");

    productsDiv.innerHTML = get
    .map(product => `<p><strong>${product.title}</strong> - ${product.price} THB</p>`)
    .join("");
}
    async function addProduct() {
        const title = document.getElementById("title").value;
        const price = Number(document.getElementById("price").value);

        await fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, price})
        });
        loadProducts()
    }
window.onload = loadProducts;
