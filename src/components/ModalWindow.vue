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
                <input id="input-name" ref="inputName" @focus="setSuccess($refs.inputName)" @blur="nameValidation()" v-model="userName" placeholder="Name" type="text" required>
                <label id="label-name" ref="labelName" for="input-name"> </label>

                <input id="input-number" ref="inputNumber" @focus="setSuccess($refs.inputNumber)" @blur="numberValidation()" v-model.number="userNumber" placeholder="Number" type="text" required>
                <label id="label-number" ref="labelNumber" for="input-number"> </label>

                <button class="btn-submit" ref="btnSubmit" @click.prevent="dataValidation( nameValidation(), numberValidation() )"> ORDER</button>
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
        setError(inputField, errorMessage){
            inputField.classList.add("error");
            inputField.nextSibling.classList.add("error-message");
            inputField.nextSibling.innerText = errorMessage;
        },
        setSuccess(inputField){
            if(inputField.classList.contains("error")){
                inputField.classList.remove("error");
            }
            if(inputField.nextSibling.classList.contains("error-message")){
                inputField.nextSibling.classList.remove("error-message");
            }
        },
        nameValidation(){
            let name = this.$refs.inputName;
            let letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
            if ( name.value.match(letters) ){
                this.setSuccess(name);
                return name.value; //here name is returned to be used in dataValidation()
            } else if (name.value.length == 0) {
                this.setError(name, "This field is required");
            } else if (!name.value.match(letters)){
                this.setError(name, "Only letters allowed");
            }
        },
        numberValidation(){
            let number = this.$refs.inputNumber;
            let numbers = /^[0-9]+$/;

            if ( number.value.match(numbers) && number.value.length == 12 ){
                this.setSuccess(number);
                return number.value; //here phone number is returned to be used in dataValidation()
            } else if (number.value.length == 0) {
                this.setError(number, "This field is required");
            } else if (!number.value.match(numbers) && number.value.length != 0){
                this.setError(number, "Only numbers allowed");
            } else if (number.value.length != 12) {
                this.setError(number, "Should contain 12 characters");
            }
        },
        dataValidation(validName, validNumber){
            if (validName && validNumber) {
                console.log("user's name: ", validName);
                console.log("user's number: ", validNumber);
                this.$refs.btnSubmit.innerText = "Thank you for your order";
            }
        },
    },
}

</script>

<style scoped >
@import '../assets/modalWindow.css';
</style>

