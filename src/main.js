import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart,faAngleDown,faUser,faPhone,faEnvelope, faCartShopping,faSearch ,faSearchPlus} from '@fortawesome/free-solid-svg-icons'
import { fab  } from '@fortawesome/free-brands-svg-icons'
import VueCarousel from 'vue-carousel';
import App from './App.vue'
import router from './router'
 

library.add(faHeart,faAngleDown,faUser,faPhone,faEnvelope,faCartShopping,faSearch,faSearchPlus,fab)
createApp(App).use(router,VueCarousel).component('fa',FontAwesomeIcon).mount('#app')


