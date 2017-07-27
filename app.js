new Vue({
  el: '#vue-app',
  data: {
    name: 'Akshay',
    job: 'Student',
    website: 'https://www.youtube.com',
    websiteTag:'<a href="https://www.youtube.com">youtube</a>',
    age:20,
    x:0,
    y:0
    },
  methods: {
      greet: function(time){
        return 'good '+time+' ' + this.name;
      },
      add: function(inc){
        this.age += inc;
      },
      sub: function(dec){
        this.age -= dec;
      },
      updateXY: function(event){
        this.x=event.offsetX;
        this.y=event.offsetY;
      },
      click: function () {
        alert('youtubestart');
      }
  }
});
