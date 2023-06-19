// importações globais

import '../toggleSidebar.js'
import '../cart/toggleCart.js'
import '../cart/setupCart.js'

// importação de filtros

import setupSearch from '../filters/search.js'
import setupCompanies from '../filters/companies.js'
import setupPrice from '../filters/price.js'

// importações especificas

import {store, setupStore} from '../store.js'
import display from '../displayProducts.js'
import {getElement} from '../util.js'

