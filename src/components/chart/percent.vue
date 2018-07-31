<template>
  <div class="chart-wrapper">
    <canvas width="300" height="300" id="percent" ref="percent"></canvas>
  </div>
</template>
<script>
const F2 = require('@antv/f2');
export default {
  data(){
    return {
      percentData: [{x: '1',y: 85}],
      chart:{}
    }
  },
  mounted () {
    this.setChart();
  },
  updated () {
    if (!this.chart) {
      this.setChart();
    }
  },
  methods:{
     setChart () {
        let  data=[{x: '1',y: 85}];
        let dom = this.$refs.percent;
        const chart = new F2.Chart({
          el: dom, // 指定图表容器 ID
         pixelRatio: window.devicePixelRatio
        });
        this.chart=chart;
        chart.source(data, {
            y: {
              max: 100,
              min: 0
            }});
        chart.axis(false);
        chart.tooltip(false);
        chart.coord('polar', {
          transposed: true,
          innerRadius: 0.8,
          radius: 0.85
        });
        chart.guide().arc({
          start: [0, 0],
          end: [1, 99.98],
          top: false,
          style: {
            lineWidth: 18,
            stroke: '#ccc'
          }
        });
        chart.guide().text({
          position: ['50%', '50%'],
          content: '85%',
          style: {
            fontSize: 18,
            fill: '#1890FF'
          }
        });
        chart.interval().position('x*y').size(16).animate({
          appear: {
            duration: 1200,
            easing: 'cubicIn'
          }
        });
        chart.render();
    },
  }
}
</script>

