import Vue from 'vue'
import App from './App.vue'
import router from './components/router'
import LoadScript from 'vue-plugin-load-script'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
import firebase from 'firebase';

require("firebase/firestore");

const config = {
    // live

    apiKey: "AIzaSyBcRgzzOyvYZPOeWfW9tbLJ3aNmFRjwJzk",
    authDomain: "telacoach-1fc95.firebaseapp.com",
    databaseURL: "https://telacoach-1fc95.firebaseio.com",
    projectId: "telacoach-1fc95",
    storageBucket: "telacoach-1fc95.appspot.com",
    messagingSenderId: "889768961247",
    appId: "1:889768961247:web:1a3003c9420d656fe0f56a"

    // aliamer
    
    // apiKey: "AIzaSyBnbczh_JYlssOnfVMTuxhGggUTUqJV_ZY",
    // authDomain: "telacoach.firebaseapp.com",
    // databaseURL: "https://telacoach.firebaseio.com",
    // projectId: "telacoach",
    // storageBucket: "telacoach.appspot.com",
    // messagingSenderId: "552022590799",
    // appId: "1:552022590799:web:c228b24de06817a339313a"
};
firebase.initializeApp(config);

export default firebase;
 
Vue.use(VueSweetalert2);

Vue.use(LoadScript);
Vue.loadScript("/vendor/jquery/jquery.slim.min.js").then(() => {
    Vue.loadScript("/vendor/bootstrap/js/bootstrap.bundle.min.js").then(() => {
        Vue.loadScript("/js/custom.js").then(() => {}).catch(() => {});
    }).catch(() => {});
}).catch(() => {});

Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')