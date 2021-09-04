<template>
  <div class="hello">
    <h1 ref="title">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      user: 'Cosmo',
    }
  },

  beforeCreate() {
    console.log('beforeCreate');
    console.log('Data: ', this.user);
    console.log('PROPS: ', this.msg);
    console.log('DOM: ', this.$refs.title);
    console.log('------------------------------------------------------------------');
  },

  created() {
    console.log('create');
    console.log('Data: ', this.user);
    console.log('PROPS: ', this.msg);
    console.log('DOM: ', this.$refs.title);
    console.log('------------------------------------------------------------------');
  },

  beforeMount() {
    console.log('beforeMount');
    console.log('Data: ', this.user);
    console.log('PROPS: ', this.msg);
    console.log('DOM: ', this.$refs.title);
    console.log('------------------------------------------------------------------');
  },

  mounted() {
    console.log('mounted');
    console.log('Data: ', this.user);
    console.log('PROPS: ', this.msg);
    console.log('DOM: ', this.$refs.title);
    console.log('------------------------------------------------------------------');
  },

  beforeUpdate() {
    console.log('beforeUpdate');
    console.log('Data: ', this.user);
    console.log('PROPS: ', this.msg);
    console.log('DOM: ', this.$refs.title);
    console.log('------------------------------------------------------------------');
  },

  updated() {
    console.log('updated');
    console.log('Data: ', this.user);
    console.log('PROPS: ', this.msg);
    console.log('DOM: ', this.$refs.title);
    console.log('------------------------------------------------------------------');
  },

  beforeDestroy() {
    console.log('beforeDestroy');
    console.log('Data: ', this.user);
    console.log('PROPS: ', this.msg);
    console.log('DOM: ', this.$refs.title);
    console.log('------------------------------------------------------------------');
  },

  destroyed() {
    console.log('destroyed');
    console.log('Data: ', this.user);
    console.log('PROPS: ', this.msg);
    console.log('DOM: ', this.$refs.title);
    console.log('------------------------------------------------------------------');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
