const result = document.querySelector(".result");

const fetchProducts = async () => {
  try {
    const { data } = await axios.get("/api/complete-airtable-product");
    const products = data
      .map((product) => {
        const { id, name, url, price } = product;
        return `<a href="product.html?id=${id}" class="product">
        <img src="${url}" alt="${name}" />
        <div class="info">
        <h5>${name}</h5>
        <h5class="price">${price} ChF</h5>
        </div>
      </a>`;
      })
      .join("");
    result.innerHTML = products;
  } catch (error) {
    console.log(error);
    result.innerHTML = "<h4>There was an ERROR 😱</h4>";
  }
};

fetchProducts();
