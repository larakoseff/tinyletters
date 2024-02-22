Highcharts.chart('container', {

    title: {
      text: ''
    },
  
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    
    tooltip: {
      useHTML: true
    },
  
    series: [{
      type: 'pie',
      allowPointSelect: true,
      keys: ['name', 'y', 'selected', 'sliced'],
      data: [
        ['she/her', 29.9, false],
        ['body', 71.5, false],
        ['water/s', 106.4, false],
        ['baby', 129.2, false],
        ['remember', 144.0, false],
        ['labour', 176.0, false],
        ['one', 135.6, false],
        ['we', 148.5, false]
      ],
      showInLegend: true
    }]
  });