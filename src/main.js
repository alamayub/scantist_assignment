import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title
  else if(previousNearestWithMeta) document.title = previousNearestWithMeta.meta.title 
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  if(!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');
    Object.keys(tagDef).forEach(key => { tag.setAttribute(key, tagDef[key]); });
    tag.setAttribute('data-vue-router-controlled', '');
    return tag;
  }).forEach(tag => document.head.appendChild(tag));
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
