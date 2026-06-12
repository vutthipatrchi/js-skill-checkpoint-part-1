// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minquantity =inventory[0].quantity
let minprice = inventory[0].name

for(let num of inventory){
  console.log(num.quantity)
  if (num.quantity< minquantity){
    minquantity=num.quantity;
  minprice = num.name
}
}

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minprice} ซึ่งมี ${minquantity}`)
