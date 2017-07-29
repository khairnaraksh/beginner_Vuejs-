new Vue({
  el: '#vue-app',
    data: {
    name:'',
    age:20,
    a:0,
    b:0
    },
  methods: {
    logName:function() {
    console.log('this is your name');
    },
    logAge:function() {
      console.log('this is your Age');
    },
    addToA:function()
      console.log('addToA');
      return this.a+this.age;
    },
    addToB:function() {
      return this.b+this.age;
    }
  }
});
