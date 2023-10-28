import { createApp } from 'vue'
import App from './App.vue'

const Mixin = {
    data() {
        return {
            isName: 'Vlad'
        }
    },
}
const myMixin = {
    data() {
        return {
          mess: "Цей компонент ще не створено"
        };
      },
      created() {
        this.mess = "Компонент створено";
        console.log("Компонент створено");
      },
      beforeDestroy() {
        console.log("Компонент знищено");
      }
}

const app = createApp(App);
app.directive('textContent', {
    mounted(el, binding) {
        el.textContent = binding.value
    },
  });
app.mixin(myMixin);
app.mixin(Mixin);
app.mount('#app')
