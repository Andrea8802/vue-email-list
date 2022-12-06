const { createApp } = Vue;

createApp({
    data(){
        return{
            emailArr: []
        }
    },
    
    methods:{

    },
    
    mounted(){
        for (let i = 0; i < 10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then (response => {
                    this.emailArr.push(response.data.response)
                })
        }
        console.log(this.emailArr);
    }
}).mount("#app");