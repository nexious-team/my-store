export function getCartItems() {
  let items = JSON.parse(localStorage.getItem("cart"));
  if (!items) items = new Array();
  const newCart = [];
  items.forEach((i) => {
    const id = new Buffer.from(i[0], "base64").toString("ascii");
    const qty = new Buffer.from(i[1], "base64").toString("ascii");
    newCart.push({ id: id, qty: qty });
  });
  // console.log(newCart);
  return newCart;
}

export function editCartItems(index, qty) {
  let items = JSON.parse(localStorage.getItem("cart"));
  if (!items) items = new Array();
  const newCart = [];
  let q = new Buffer.from(items[index][1], "base64").toString("ascii");
  q = Number.parseInt(qty);
  items[index][1] = Buffer(q.toString()).toString("base64");
  localStorage.setItem("cart", JSON.stringify(items));
}

export function addItemToCart(id) {
  let oldArrCart;

  // Get Cart Items from Local Storage
  let prevCart = localStorage.getItem("cart");
  if (prevCart === null) {
    oldArrCart = [];
  } else {
    // Convert cart items from string to array
    oldArrCart = JSON.parse(prevCart);
  }

  // Create new array with id and qty
  let newCart = [
    new Buffer(id.toString()).toString("base64"),
    new Buffer("1").toString("base64"),
  ];

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
