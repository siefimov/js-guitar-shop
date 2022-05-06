'use strict'

class Products {
  render () {
    let htmlCatalog = ''

    //   виводить об'єкти
    // CATALOG.forEach((elem) => {
    //    console.log(elem)
    //  })

    // застосовуємо деструктуризацію -
    CATALOG.forEach(({ id, name, price, img }) => {
      htmlCatalog += `
      <li>
         <span>${name}</span>
         <img src="${img}" />
         <span>${price}</span>
         <button>Додати до кошика</button>
      </li>
      `
    })

    const html = `
      <ul>
         ${htmlCatalog}
      </ul>
      `

    ROOT_PRODUCTS.innerHTML = html
  }
}

const productPage = new Products()
productPage.render()
