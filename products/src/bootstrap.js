import _ from 'lodash';
const mount = (el) => {
  el.innerHTML = "Products";
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#products-dev");
  if (el) {
    mount(el);
  }
}

export { mount };
