<template>
<div v-if="show" class="modal">
    <div class="modal-window-wraper" @click="closeModal"></div>
    <div class="modal-window">
          <div class="item-description" >
            <p class="item-category"> {{item.category}} </p>
            <p class="item-name"> {{item.name}} </p>
            <div class="item-price"> 
                <span class="item-price-currency">$</span> 
                <span class="item-price-value"> {{item.price}} </span> 
            </div>
            </div>
          <div class="close" @click="closeModal" ></div>
          <form class="customers-data" action="">
                <input id="input-name" @focus="fadeErrorMsg" @blur="nameValidation()" v-model="userName" placeholder="Name" type="text" required>
                <label id="label-name" for="input-name"> {{errorNameMessage}} </label>

                <input id="input-number" @focus="fadeErrorMsg" @blur="numberValidation()" v-model.number="userNumber" placeholder="Number" type="text" required>
                <label id="label-number" for="input-number"> {{errorNumberMessage}} </label>

                <button class="btn-submit" @click.prevent="dataValidation( nameValidation(), numberValidation() )"> ORDER</button>
          </form>
    </div>
</div>
</template>

<script>

export default {
    name: 'ModalWindow',
    data() {
        return {
            userName: "",
            userNumber: null,
            errorNameMessage: String,
            errorNumberMessage: String
        }
    },
    props: {
        show: {
            default: false
        },
        item: {
          type: Object
        },
    },
    methods: {
        closeModal: function () {
          this.$emit('close');
          this.userName = "";
          this.userNumber = "";
        },      
        nameValidation(){
            let name = document.querySelector('#input-name');
            let labelName = document.querySelector('#label-name');
            let letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
            if ( name.value.match(letters) ){
                if(name.classList.contains("error")){
                    name.classList.remove("error")
                }
                labelName.style.opacity = 0;
                return name.value; //here name is returned to be used in dataValidation()
            } else if (name.value.length == 0) {
                name.classList.add("error");
                this.errorNameMessage = "This field is required";
                labelName.style.opacity = 1;
            } else if (!name.value.match(letters)){
                name.classList.add("error");
                this.errorNameMessage = "Only letters allowed";
                labelName.style.opacity = 1;
            }
        },
        numberValidation(){
            let number = document.querySelector('#input-number');
            let labelNumber = document.querySelector('#label-number');
            let numbers = /^[0-9]+$/;

            if ( number.value.match(numbers) && number.value.length == 12 ){
                 if(number.classList.contains("error")){
                    number.classList.remove("error")
                }
                labelNumber.style.opacity = 0;
                return number.value; //here phone number is returned to be used in dataValidation()
            } else if (number.value.length == 0) {
                number.classList.add("error");
                this.errorNumberMessage = "This field is required";
                labelNumber.style.opacity = 1;
            } else if (!number.value.match(numbers) && number.value.length != 0){
                number.classList.add("error");
                this.errorNumberMessage = "Only numbers allowed";
                labelNumber.style.opacity = 1;
            } else if (number.value.length != 12) {
                number.classList.add("error");
                this.errorNumberMessage = "Should contain 12 characters";
                labelNumber.style.opacity = 1;
            }
        },
        dataValidation(a, b){
            if (a && b) {
                console.log("user's name: ",  a);
                console.log("user's number: ",  b);
                document.querySelector(".btn-submit").innerText = "Thank you for your order";
            }
        },
        fadeErrorMsg(el){
            let inp = document.querySelector("#"+el.target.id);
            if (document.hasFocus()){
                inp.labels[0].style.opacity = 0;
            }
        }
    },
}

</script>

<style scoped >
@import '../assets/modalWindow.css';
</style>

