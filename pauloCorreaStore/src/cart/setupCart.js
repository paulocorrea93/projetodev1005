import {getElement} from '../util.js'

const cartOverlay = getElement('.cart-overlay')
const closeCartBtn = getElement('.cart-close')
const toggleCartBtn = getElement('.toggle-cart')

toggleCartBtn.addEventListener('click', () => {
    cartOverlay.classList.add('show')
})