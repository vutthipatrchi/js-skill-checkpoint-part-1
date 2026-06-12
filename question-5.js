// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice(products,promotionCode){
  let totalPrice = 0;
  for(let num of products){
    totalPrice += num.price * num.quantity
  }
  return totalPrice
  if(promotionCode === "SALE20"){
    return (products.price*products.quantity)*0.80
  } else if(promotionCode === "SALE50"){
    return (products.price*products.quantity)*0.50
  } else{
    return "ไม่ได้รับส่วนลด"
  }
  return totalPrice;
}

console.log(calculateTotalPrice(products,"SALE50"));
// คิดว่าน่าจะต้องมีการใช้for เข้ามาร่วมด้วย ภายใต้function เพื่อมันวนแล้วรวมผลทุกตัว แต่ไม่รู้จะเอาไปใส่ยังไงครับ