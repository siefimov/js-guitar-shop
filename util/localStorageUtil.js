class LocalStorageUtil {
  constructor () {
    this.keyName = 'products'
  }
  getProducts () {
    const productsLocalStorage = localStorage.getItem(this.keyname)
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage)
    }
    return []
  }

  putProducts (id) {
    let products = this.getProducts
    let pushProduct = false
    const index = products.indexOf(id)

    if (index === -1) {
      products.push(id)
      pushProduct = true
    } else {
      products.slice(index, 1)
    }

    localStorage.setItem(this.keyName, JSON.stringify(products))

    return { pushProduct, products }
  }
}

const localStorageUtil = new LocalStorageUtil()
