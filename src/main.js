import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {Form, Field, CellGroup, Checkbox} from 'vant';

const app = createApp(App);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Checkbox);

app.use(router).mount('#app')
