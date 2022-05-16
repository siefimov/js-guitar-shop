class LocalStorageUtil {
   constructor() {
      this.keyName = "products";
   }

   getProducts() {
      const productsLocalStorage = localStorage.getItem(this.keyName);
      if (productsLocalStorage !== null) {
         return JSON.parse(productsLocalStorage);
      }
      return [];
   }

   putProducts(id) {
      // в переменную products полу4аем всё, 4то находится в локальном хранилище
      let products = this.getProducts();
      let pushProduct = false; // это 4тобы понимать, новый продукт или нет
      const index = products.indexOf(id);

      // если в массиве в localStorage еще нет id
      if (index === -1) {
         // добавляем этот id в localStorage
         products.push(id);
         pushProduct = true;
      } else {
         products.splice(index, 1); // удаляем повторяющийся элемент
      }

      localStorage.setItem(this.keyName, JSON.stringify(products));

      return { pushProduct, products };
   }
}

const localStorageUtil = new LocalStorageUtil();
