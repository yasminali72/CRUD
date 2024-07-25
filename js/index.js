var productName = document.getElementById("ProductName");
var productPrice = document.getElementById("ProductPrice");
var productDes = document.getElementById("ProductDes");
var productCategory = document.getElementById("ProductCategory");
var productImage = document.getElementById("ProductImage");
var ProductSearch=document.getElementById("ProductSearch");
var productContainer ;


if (localStorage.getItem('Products')==null) 
{
  productContainer = [];
  
}
else{
  productContainer=JSON.parse(localStorage.getItem('Products'))
  displayData(productContainer);

}



function addProduct() {
  var product = {
    code: productName.value,
    price: productPrice.value,
    des: productDes.value,
    category: productCategory.value,
    img: `img/${productImage.files[0].name}`,
  };
  console.log(product);
  productContainer.push(product);


  localStorage.setItem('Products',JSON.stringify(productContainer))
  
  displayData(productContainer);

  clearForm();
}

function clearForm() {
  productName.value = null;
  productPrice.value = null;
  productDes.value = null;
  productCategory.value = null;
  productImage.value=null;
}

function displayData(arr) {
    var cartouna='';
  for (var i = 0; i < arr.length; i++) {
    cartouna+=`<div class="col-md-3">
    <img src="${arr[i].img}" alt="...">
    <h4>Name:<span>${arr[i].code}</span> </h4>
    <h4>Price:<span>${arr[i].price}</span> </h4>
    <h4>Des:<span>${arr[i].des}</span> </h4>
    <h4 class="mb-4">Catergory:<span>${arr[i].category}</span> </h4>
    <button onclick="deleteProduct(${i})" type="button" class="btn btn-danger">Delete</button>
<button type="button" class="btn btn-warning">Update</button>
    
  </div>`
  }
  document.getElementById('demo').innerHTML=cartouna 

  
}



function search() 
{
 var term=ProductSearch.value;
 var searchContainer=[];
 for (var i = 0; i<productContainer.length; i++) {

  if (productContainer[i].code.toLowerCase().includes(term.toLowerCase())==true) {
    
    searchContainer.push(productContainer[i]);
    displayData(searchContainer)
  }
   
 }
}

function deleteProduct(index)
{
  productContainer.splice(index,1);
  displayData(productContainer);
  localStorage.setItem('Products',JSON.stringify(productContainer));

}


function validationProduct(element) {

 var regex = {
    ProductName: /^[A-Z][a-z]{3,8}$/,
    ProductPrice: /^[1-9][0-9][0-9]{1,9}$/,
    ProductDes: /.{5,9}/,
    ProductCategory: /^(tv|mobile|screen)$/

  };

if (regex[element.id].test(element.value))
{
  console.log('match');
  element.classList.add('is-valid');
  element.classList.remove('is-invalid');


}

else{
  console.log('not match');
  element.classList.add('is-invalid');
  element.classList.remove('is-valid');

}
 
}










