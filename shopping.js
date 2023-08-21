
let totalProductPrice = 0;
let productNumber = 1;

function handleClickDiv(target){
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target.querySelector(".productName").innerText;
    const productPrice = target.querySelector(".productPrice").innerText;
    calculateProductPrice(productPrice)
    const ol = document.createElement("ol");
    ol.innerText = productNumber+". "+ itemName;
    productNumber++;
    console.log(itemName);
    selectedItemContainer.appendChild(ol);


    
}

function calculateProductPrice(productPrice){

    totalProductPrice += parseInt(productPrice);
    document.getElementById('totalProductPrice').innerText = totalProductPrice;
    

}



    function handleClickButton(){
        
       let coupnValue = document.getElementById("couponField").value;
       if (coupnValue == "SELL200"){
        let discountPrice = (totalProductPrice * 20) / 100;
        let totalPrice = totalProductPrice - discountPrice;
        document.getElementById("discountPrice").innerText = discountPrice;
        document.getElementById("totalPrice").innerText = totalPrice;
       }
       
    }






