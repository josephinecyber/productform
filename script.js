const container = document.getElementById ("products-container");
const baseurl = "https://fakestoreapi.com/products";


// target our html container
const fetchProducts =async () =>{ 
 try {
    const response = await fetch(baseurl, {method : "GET" }); 
 console.log (response); 
 const data = await response.json();
 console.log(data);
 displayData(data);

 } catch (error) {
    console.log(error);

 }
 finally {
    console.log("")
 }
}; 


// display the products in the container

const displayData = (data) => {
console.log(data);

// loop over the data array
data.forEach((item, index) => {
const productCard =document.createElement ("div");
productCard.classList.add("product-card");
productCard.innerHTML = `

<img src=${item.image} alt=${item.title}/>
<h2>${item.title}</h2>
<p>${item.description}</p>
<h3>Price: ${item.price}</h3>
<h2>${item.category}</h4>

<button class="delete"> Delete </botton>

`;
container.appendChild(productCard);
})
}

fetchProducts (); 

const form = document.getElementById("myform")
const productname= document.getElementById("productname")
const productDescription = document.getElementById("product-description")
const imageurl = document.getElementById("imageurl")
const price = document.getElementById("price")









