const config = {
  chart: {
    polar: true,
    height: 300
  },

  title: {
    text: ''
  },

  pane: {
    startAngle: 0,
    endAngle: 360
  },

  xAxis: {
    tickInterval: 45,
    min: 0,
    max: 360,
    labels: {
      formatter: function () {
        return this.value + '°'
      }
    }
  },

  exporting: {
    enabled: false
  },

  yAxis: {
    min: 0
  },

  credits: {
    enabled: false
  },

  plotOptions: {
    series: {
      pointStart: 0,
      pointInterval: 45
    },
    column: {
      pointPadding: 0,
      groupPadding: 0
    }
  },

  series: [
    {
      type: 'column',
      name: 'Column',
      data: [8, 7, 6, 5, 4, 3, 2, 1],
      pointPlacement: 'between'
    },
    {
      type: 'line',
      name: 'Line',
      data: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
      type: 'area',
      name: 'Area',
      data: [1, 8, 2, 7, 3, 6, 4, 5],
      color: '#383838',
      lineColor: '#787878',
      marker: {
        enabled: false
      }
    }
  ]
}

export default config
