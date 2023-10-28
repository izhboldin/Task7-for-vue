<template>
  <!-- Слоти -->
  <first-component>
    <h1>Hello</h1>
    <p>world<span>!</span></p>
  </first-component>
  <hr>
  <second-component>
    <template v-slot:name>
      <p>Sasha</p>
    </template>
    <template v-slot:age>
      <p>20 year</p>
    </template>
    <template v-slot:country>
      <!-- <p>America</p> -->
    </template>
  </second-component>
  <hr>
  <third-component>
    <template v-slot:default="slotProps">
      <p>{{ slotProps.item }}</p>
    </template>
    <template v-slot:mess="message">
      <p>{{ message.message }}</p>
    </template>
  </third-component>
  <hr>
  <fourth-component>
    <template v-slot:header="header">
      <p>{{ header.modal }}</p>
    </template>
    <template v-slot:body="body">
      <p>{{ body.modal }}</p>
    </template>
    <template v-slot:footer="footer">
      <p>{{ footer.modal }}</p>
    </template>
  </fourth-component>
  <hr>
  <!-- Міксіни -->
  <h2>{{ isName }}</h2>
  <hr>
  <p>{{ mess }}</p>
  <p v-if="isOpen">Привет</p>
  <button @click="close()"><span>{{ isOpen ? 'Закрыть' : 'Открыть' }}</span></button>
  <hr>
  <form action="">
    <label for=""><Noscript></Noscript>Name: </label> <br>
    <input v-model="nameValue" type="text">
    <br><br>
    <label for="">Email: </label> <br>
    <input v-model="emailValue" type="text">
    <br><br>
    <label for="">Password: </label> <br>
    <input v-model="passValue" type="password">
    <br><br>
    <button @click="isValidation()" type="button">submit</button> <span>{{ conclusion }}</span>
  </form>
  <hr>
  <!-- Власні Директиви -->
  <h2 v-colorRed>red color</h2>
  <hr>
  <p v-fontSize="size">font-size: {{ size }}px</p>
  <hr>

  <button v-tooltip="'подсказка'">Наведи на меня</button>
  <br><br>
  <div v-draggable>
    Перетаскивай
  </div>
  <hr>
  <p v-textContent="'Новый текст'">старый текст</p>
</template>

<script>
import firstComponent from './components/slot/firstComponent.vue';
import secondComponent from './components/slot/secondComponent.vue';
import thirdComponent from './components/slot/thirdComponent.vue';
import fourthComponent from './components/slot/fourthComponent.vue';

import baseMixin from '@/mixin.js'

export default {
  mixins: [baseMixin],
  name: 'App',
  directives: {
    colorRed: {
      mounted(el) {
        el.style.color = 'red'

      },
    },
    fontSize: {
      mounted(el, binding) {
        console.log(el.style);
        el.style.fontSize = binding.value + 'px'
      }
    },
    tooltip: {
      mounted(el, binding) {
        el.style.position = 'relative';
        const tooltipElement = document.createElement('span');
        tooltipElement.textContent = binding.value;
        tooltipElement.className = 'tooltip';
        el.appendChild(tooltipElement);
        el.addEventListener('mouseenter', () => { tooltipElement.style.display = 'block' });
        el.addEventListener('mouseleave', () => { tooltipElement.style.display = 'none' });
      },
    },
    draggable: {
      mounted(el) {
        el.classList.add("draggable-element");
        el.style.zIndex = 999;
        let isDragging = false;


        const startDrag = () => {
          isDragging = true;
          document.addEventListener('mousemove', handleDrag);
          document.addEventListener('mouseup', stopDrag);
        };

        const handleDrag = (event) => {
          if (isDragging) {
            el.style.left = event.pageX - el.offsetWidth / 2 + "px";
            el.style.top = event.pageY - el.offsetHeight / 2 + "px";
          }
        };

        const stopDrag = () => {
          isDragging = false;
          // kоли користувач переміщує мишу по вікні
          document.removeEventListener('mousemove', handleDrag);
          // коли користувач відпускає кнопку миші
          document.removeEventListener('mouseup', stopDrag);
        };
        // коли користувач натискає кнопку миші
        el.addEventListener('mousedown', startDrag);
      },
    },
  },
  components: {
    'first-component': firstComponent,
    'second-component': secondComponent,
    'third-component': thirdComponent,
    'fourth-component': fourthComponent,
  },
  data() {
    return {
      size: 22,
    }
  },
  methods: {

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.tooltip {
  position: absolute;
  background-color: #333;
  color: yellow;
  padding: 5px;
  display: none;
  z-index: 1;
}

.draggable-element {
  position: absolute;
  cursor: pointer;
  user-select: none;
  background-color: #ffafaf;
  padding: 4px;
}
</style>
