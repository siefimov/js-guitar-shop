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
      <li class="products-element">
         <span class="products-element__name">${name}</span>
         <img class="products-element__img" src="${img}" />
         <span class="products-element__price">
            ⚡ ${price.toLocaleString() } USD
         </span>
         <button class="products-element__btn">Додати до кошика</button>
      </li>
      `
    })

    const html = `
      <ul class="products-container">
         ${htmlCatalog}
      </ul> 
      `

    ROOT_PRODUCTS.innerHTML = html
  }
}

const productPage = new Products()
productPage.render()
