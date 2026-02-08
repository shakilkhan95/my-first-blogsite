function max(n1, n2, n3){
    if(n1 > n2 && n1 > n3){
        return n1;
    }else if(n2 > n3){
        return n2;
    } else {
        return n3;
    }
}
console.log(max(7, 6, 12));

const heights = [60, 66, 68, 69, 72, 73];
//find the max number
function findTallest(array){
    let tallest = array[0];
    for(const item of array){
        if(item > tallest){
            tallest = item;
        }
    }
    return tallest;
}
console.log("The tallest height is", findTallest(heights));
//find the min number
function getMin(array){
    let min = array[0];
    for(const item of array){
        if(item < min){
            min = item;
        }
    }
    return min;
}
console.log("The smallest height is:", getMin(heights));

//find the total 
const shirtPrice = 500;
const pantPrice = 800;
const shoePrice = 900;
function getTotal(shirtQuantity, pantQuantity, shoeQuantity){
    const shirtTotalPrice = shirtPrice * shirtQuantity;
    const pantTotalPrice = pantPrice * pantQuantity;
    const shoeTotalPrice = shoePrice * shoeQuantity;

    const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

    return totalPrice;
}
const myShopping = getTotal(2, 2, 1);
console.log("Total cost of my shopping:", myShopping);

//get the cheapest priced phone object;
const phones = [
    {name: 'Samsung', price: 25000, camera: '12 mp'},
    {name: 'Xiaomi', price: 35000, camera: '12 mp'},
    {name: 'Oppo', price: 22000, camera: '12 mp'},
    {name: 'I Phone', price: 125000, camera: '12 mp'}
];
function getCheapestPhone(phones){
    let cheapestPhone = phones[0];
    for(const phone of phones){
        if(phone.price < cheapestPhone.price){
            cheapestPhone = phone;
        }
    }
    return cheapestPhone;
}

const cheap = getCheapestPhone(phones);
console.log("The cheapest phone is:", cheap);

//find the expensive phone
function expensivePhones(phones){
    let expensive = phones[0];
    for(const phone of phones){
        if(phone.price > expensive.price){
            expensive = phone;
        }
    }
    return expensive;
}
const expensivePhone = expensivePhones(phones);
console.log(expensivePhone);

//get the total of shopping cart;
const productsInCart = [
    {name: 'Shampoo', price: 300},
    {name: 'Chiruni', price: 100},
    {name: 'Shirt', price: 700},
    {name: 'Pant', price: 1200}
];

function getTotalPrice(products){
    let total = 0;
    for(const product of products){
        total += product.price;
    }
    return total;
}

const total = getTotalPrice(productsInCart);
console.log("Total of Shopping cart is:", total);

//get the price with quantity
const productsInCart2 = [
    {name: 'Shampoo', price: 300, quantity: 2},
    {name: 'Chiruni', price: 100, quantity: 3},
    {name: 'Shirt', price: 700, quantity: 5},
    {name: 'Pant', price: 1200, quantity: 1}
];
function getTotal2(products){
    let total = 0;
    for(const product of products){
        total += product.price * product.quantity;
    }
    return total;
}
const totalWithQuantity = getTotal2(productsInCart2);
console.log("Total in the cart 2 is:", totalWithQuantity);

//get the discounted price
function discountedPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    } else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    } else{
        const total = quantity * 70;
        return total;
    }
}
const totalTicketPrice = discountedPrice(201);
console.log(totalTicketPrice);

//calculate layered discount
function discountedPrice2(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;
    
    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }else if(quantity <= 200){
        const totalOf100 = first100Price * 100;
        const quantityOf100To200 = quantity - 100;
        const totalOf100To200 = quantityOf100To200 * second100Price;
        const total = totalOf100 + totalOf100To200;

        return total
    } else{
        const totalOf100 = first100Price * 100;
        const totalOf100To200 = second100Price * 100;
        const quantityOf200Above = quantity - 200;
        const totalOfAbove200 = quantityOf200Above * above200Price;

        const total = totalOf100 + totalOf100To200 + totalOfAbove200;
        return total;
    }
}

const totalDiscountedPrice = discountedPrice2(300);
console.log(totalDiscountedPrice)