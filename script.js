// Product data
const products = [
  {
      id: 1,
      name: "Product 1",
      price: 10.00,
      image: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt606d6e4d042507d9/6176a21e5f96c207723aadbb/3-1.42d9e916e354da827c1d5467ffbe2477.jpg?format=pjpg&auto=webp&quality=75%2C90&width=360"
  },
  {
      id: 2,
      name: "Product 2",
      price: 15.00,
      image: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt606d6e4d042507d9/6176a21e5f96c207723aadbb/3-1.42d9e916e354da827c1d5467ffbe2477.jpg?format=pjpg&auto=webp&quality=75%2C90&width=360"
  },
  {
      id: 3,
      name: "Product 3",
      price: 20.00,
      image: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt606d6e4d042507d9/6176a21e5f96c207723aadbb/3-1.42d9e916e354da827c1d5467ffbe2477.jpg?format=pjpg&auto=webp&quality=75%2C90&width=360"
  },
  {
      id: 3,
      name: "Product 3",
      price: 20.00,
      image: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt606d6e4d042507d9/6176a21e5f96c207723aadbb/3-1.42d9e916e354da827c1d5467ffbe2477.jpg?format=pjpg&auto=webp&quality=75%2C90&width=360"
  }
];

function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Function to generate product HTML
function renderProducts() {
  const productList = document.getElementById('product-list');
  
  products.forEach(product => {
      const productHTML = `
          <div class="col-12 col-sm-6 col-md-3 col-lg-3">
              <div class="box-img mb-4">
                  <img src="${product.image}" alt="${product.name}" class="img-fluid w-100">
                  <div class="text-center mt-4">
                      <p class="mb-0 mt-2">${product.name}</p>
                      <h4 class="mt-2">$${product.price.toFixed(2)}</h4>
                      <a href="#" class="btn text-black bg-warning w-100 mt-2">Add to Cart</a>
                  </div>
              </div>
          </div>
      `;
      productList.innerHTML += productHTML;
  });
}

// Call the function to render products on page load
renderProducts();



