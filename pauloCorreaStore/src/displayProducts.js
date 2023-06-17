import {formatPrice} from './util.js'
import {addToCart} from './cart/setupCart.js'

const display = (products, elements, filters) => {
    elements.innerHTML = products.map((product) => {
        const {id, name, image, price} = product
        
    })
}