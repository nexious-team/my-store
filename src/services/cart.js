// Note index 0 = id, 1 = qty, 2 = product_unit_id

export function getCartItems() {
  let items = JSON.parse(localStorage.getItem("cart"));
  if (!items) items = new Array();
  const newCart = [];
  items.forEach((i) => {
    // with encoding
    // const id = new Buffer.from(i[0], "base64").toString("ascii");
    // const qty = new Buffer.from(i[1], "base64").toString("ascii");
    // newCart.push({ id: id, qty: qty });

    // without encoding
    newCart.push({ id: i[0], qty: i[1], unit_id: i[2] });
  });
  // console.log(newCart);
  return newCart;
}

export function editCartItems(index, qty) {
  // Convert items from string to JSON format
  let items = JSON.parse(localStorage.getItem("cart"));
  // Check if Items is empty
  if (!items) items = new Array();

  // with encoding
  // get items and decode string and convert to int
  // let q = new Buffer.from(items[index][1], "base64").toString("ascii");
  // q = Number.parseInt(qty);
  // items[index][1] = Buffer(q.toString()).toString("base64");

  // without Encoding
  items[index][1] = Number.parseInt(qty);
  localStorage.setItem("cart", JSON.stringify(items));
}

export function addItemToCart(id, pro_unit_id) {
  let oldArrCart;

  // Get Cart Items from Local Storage
  let prevCart = localStorage.getItem("cart");
  if (prevCart === null) {
    oldArrCart = [];
  } else {
    // Convert cart items from string to array
    oldArrCart = JSON.parse(prevCart);
  }

  // With Encoding
  // Create new array with id and qty
  // let newCart = [
  //   new Buffer(id.toString()).toString("base64"),
  //   new Buffer("1").toString("base64"),
  // ];
  // oldArrCart.forEach((i) => {
  //   console.log
  //   if (i[0] == id) {
  //     console.log("true");
  //   } else console.log("false");
  // });
  // console.log(oldArrCart);

  // Without Encoding
  let newCart = [id, "1", pro_unit_id];

  oldArrCart.push(newCart);
  localStorage.setItem("cart", JSON.stringify(oldArrCart));
  // console.log(id);
  // console.log(oldArrCart);
}
export default {
  getCartItems,
  addItemToCart,
  editCartItems,
};
