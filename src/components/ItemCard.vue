<template>
  <div class="item-card"  @click="openModal">
    <div class="item-description" >
      <p class="item-category"> {{item.category}} </p>
      <p class="item-name"> {{item.name}} </p>
      <div class="item-price"> 
        <span class="item-price-currency">$</span> 
        <span class="item-price-value">  {{item.price}} </span> 
      </div>
    </div>
   <button class="btn">BUY</button>
  </div>
</template>

<script>

export default {
  name: 'ItemCard',
  props: {
      item: {
          type: Object
      }
  },
  methods: {
    openModal: function() {
      this.$emit('open')
    }
  }
}

</script>

<style scoped>
@import '../assets/itemCard.css';
</style>
