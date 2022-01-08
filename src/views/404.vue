<template>
   <section class="not-found">
       <h1>404</h1>
       <h2>Page not Found!!!</h2>
       <button @click="goHome()">Back to Home</button>
   </section>
</template>

<script>
export default {
    name: 'notFount',
    methods: {
        goHome() {
            this.$router.push('/home')
        }
    }
}
</script>

<style lang='scss' scoped>
.not-found {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >h1 {
        font-size: 50px;
        margin-bottom: 20px;
    }
    >h2 {
        font-size: 40px;
    }

    >button {
        height: 40px;
         display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    }
}
</style>