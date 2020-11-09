<template>
<div class="item-description" >
    <p class="item-category"> {{item.category}} </p>
    <p class="item-name"> {{item.name}} </p>
    <div class="item-price"> 
        <span class="item-price-currency">$</span> 
        <span class="item-price-value">  {{item.price}} </span> 
    </div>
</div>
</template>

<script>
export default {
    name: 'ItemDescription',
    props: {
        item: {
            type: Object
        }
    }
    // descriptions: [],

    // created() {
    //     fetch ("https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e")
    //         .then(resp => resp.json())
    //         .then(resp => {
    //             console.log(resp);
    //         });
    // }

}
</script>

<style scoped>
.item-description {
    text-align: left;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.item-category {
    color: #8d8c8c;
    text-transform: uppercase;
    font-size: 16px;
    margin: 5px 0;
}
.item-name {
    color: #000000;
    text-transform: capitalize;
    margin: 0 0 24px 0;
    font-size: 40px;
}
.item-price {
    display: flex;
}
.item-price .item-price-currency {
    vertical-align: top;
    margin: 10px 5px;
    font-size: 30px;
}
.item-price .item-price-value {
    font-size: 62px;
}

</style>