import _ from 'lodash';
const mount = (el) => {
  el.innerHTML = "Cart";
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#cart-dev");
  if (el) {
    mount(el);
  }
}

export { mount };