<template>
  <div id="app">
    <div class="app-content" >
      <div v-for="(item, index) in itemsList" :key="item.name" >
        <ItemCard :item='item' @open="showModal(index)" />
      </div>
    </div>
      <button class="btn-buy-cheapest" @click="showModal( buyCheapest() )" > Buy cheapest </button>
      <ModalWindow :item='itemsList[indx]' :show="showed" @close="hideModal"  />
  </div>
</template>

<script>
import ItemCard from './components/ItemCard.vue'
import ModalWindow from './components/ModalWindow.vue'

export default {
  name: 'App',
  components: {
    ItemCard,
    ModalWindow
  },
  methods:{
    hideModal: function(){
      this.showed = false
    },
    showModal(index){
      this.showed = true;
      this.indx = index;
    },
    buyCheapest() {
      let items = this.itemsList;
      let min = items[0].price;

      for (let i=1; i < items.length; i++){
        if (min > items[i].price){
          min = items[i].price
          this.indx = i
        }
      }
      return this.indx;
    }
  },

  data() {
    return {
      // itemsList: [],
      showed: false,
      show: false,
      indx: 0,
      itemsList: [
    {
        "name": "orange Juice",
        "category": "Drinks",
        "price": 14.99
    },
    {
        "name": "Apples",
        "category": "fruits",
        "price": 4.99
    },
    {
        "name": "Tomatos",
        "category": "vegetables",
        "price": 6.39
    },
    {
        "name": "Coffee",
        "category": "Drinks",
        "price": 3.15
    },
    {
        "name": "Sweet Paper",
        "category": "Vegetables",
        "price": 12.15
    },
    {
        "name": "Grapes",
        "category": "FRUITS",
        "price": 20.49
    },
    {
        "name": "Pears",
        "category": "Fruits",
        "price": 1.35
    },
    {
        "name": "Team",
        "category": "Drinks",
        "price": 0.4
    }
],
    }
  },
  // created() {
  //   fetch ("https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e")
  //     .then(resp => resp.json())
  //     .then(resp => {
  //         this.itemsList = resp;
  //     });
  // }
}
</script>

<style>
.show {
  display: flex;
}
html {
    background-color: #F2F2F2;
    height: 100%;
}
body {
  margin: 0;
  height: 100%;
}
#app {
  font-family: Roboto, Arial, sans-serif ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.app-content{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.btn-buy-cheapest{
  width: 288px;
  min-height: 56px;
  color: #ffffff;
  background-color:#4BCFA0;
  border-radius: 16px;
  margin: 16px 0;
  border: 0;
  font-size: 16px;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  cursor: pointer;
  transition: .3s;
}
.btn-buy-cheapest:hover {
  background-color: #ffffff;
  color:#4BCFA0;
}
.btn-buy-cheapest:focus {
  outline: none;
}

@media screen and (min-width: 1600px) {
  #app {height: 100%;}
  .app-content {
    max-width: 1570px;
  }
}

@media screen and (max-width: 785px) {
  .btn-buy-cheapest {
    width: 260px;
  } 
  .app-content {
    display: block;
  }
} 
</style>
