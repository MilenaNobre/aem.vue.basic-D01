import './map-components'
import { AuthoringUtils, ModelManager } from '@adobe/aem-spa-page-model-manager'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { Constants } from '@mavice/aem-vue-editable-components'
import axios from 'axios'
import store from './store/store'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use({
  install (Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: 'https://desafio-login-compass-default-rtdb.firebaseio.com/'
    })
  }
})

Vue.use(VueRouter)

document.addEventListener('DOMContentLoaded', () => {
  ModelManager.initialize().then(pageModel => {
    new Vue({
      store,
      router: new VueRouter({
        mode: 'history',
        routes: []
      }),
      render (createElement: Function) {
        return createElement(App, {
          props: {
            cqChildren: pageModel[Constants.CHILDREN_PROP],
            cqItems: pageModel[Constants.ITEMS_PROP],
            cqItemsOrder: pageModel[Constants.ITEMS_ORDER_PROP],
            cqPath: pageModel[Constants.PATH_PROP],
            isInEditor: AuthoringUtils.isInEditor(),
            locationPathname: window.location.pathname,
            injectPropsOnInit: true
          }
        })
      }
    }).$mount('#spa-root')
  })
})
