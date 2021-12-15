require('./bootstrap');
require('../css/app.css');



import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes';
import VueQuillEditor from "vue-quill-editor/dist/ssr";

Vue.use(VueRouter);

// вводим стиль
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor);

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes)
});
