$(function () {

  var RecSalesPerson = $('#DataSalesPersonList');
  var RecSalesPerson2 = $('#DataSalesPersonList2');
  var TableLiseItem = $('#DataItemTable');


  var pieChartCanvasUI = document.getElementById('pieChart');
  var RecPieData = [];
  var selectIndexPie = 0;
  var pieChart;

  var RecSalesPersonJson = [
    {
      "Name": " น.ส. จินดา อัมพรากร ",
      "Target": " 3,000,000.00 ",
      "Sales": " 464,572.92 ",
      "Profit": " 88,298.96 "
    },
    {
      "Name": " น.ส. ธรรมชนก ธงชัยบริสุทธิ์ ",
      "Target": " 3,000,000.00 ",
      "Sales": " 1,601,915.39 ",
      "Profit": " 292,482.68 "
    },
    {
      "Name": " น.ส. พัชรินทร์ ยิ่งพูนทรัพย์ ",
      "Target": " 3,000,000.00 ",
      "Sales": " 1,547,150.87 ",
      "Profit": " 249,332.90 "
    },
    {
      "Name": " น.ส. ริญญภัสร์ ศิรภัสสรรัตน์ ",
      "Target": " 3,000,000.00 ",
      "Sales": " 790,854.66 ",
      "Profit": " 158,198.87 "
    },
    {
      "Name": " น.ส. วีรุทัย อัครศรีวร ",
      "Target": " 3,000,000.00 ",
      "Sales": " 3,539,421.94 ",
      "Profit": " 633,366.78 "
    },
    {
      "Name": " นาย ธรรมธร ศักดิ์บรรพต ",
      "Target": " 3,000,000.00 ",
      "Sales": " 1,331,863.58 ",
      "Profit": " 268,765.41 "
    },
    {
      "Name": " นาย อุดมศักดิ์ อภิศักดิ์ศิริกุล ",
      "Target": " 3,000,000.00 ",
      "Sales": " 232,126.01 ",
      "Profit": " 55,103.08 "
    },
    {
      "Name": " ลูกค้าหน้าร้าน ",
      "Target": " 3,000,000.00 ",
      "Sales": " 56,450.46 ",
      "Profit": " 21,054.08 "
    }
  ];

  var RecItem = [
    {
      "No": 1,
      "Name": "น.ส. จินดา อัมพรากร",
      "3M": " 4,499,625.19 ",
      "HOUSE BRAND": " 445,976.65 ",
      "NON3M": " 63,948.60 ",
      "NON3M-NONCOM": "",
      "OTHER": " 168.22 "
    },
    {
      "No": 2,
      "Name": "น.ส. ชลธิดาภรณ์ ฉ่ำฉวี",
      "3M": " 3,066,577.17 ",
      "HOUSE BRAND": " 327,200.01 ",
      "NON3M": " 18,738.32 ",
      "NON3M-NONCOM": " 3,738.32 ",
      "OTHER": " 2,762.61 "
    },
    {
      "No": 3,
      "Name": "น.ส. ธรรมชนก ธงชัยบริสุทธิ์",
      "3M": " 2,148,613.85 ",
      "HOUSE BRAND": " 244,193.42 ",
      "NON3M": " 100,965.42 ",
      "NON3M-NONCOM": "",
      "OTHER": " 5,258.88 "
    },
    {
      "No": 4,
      "Name": "น.ส. พัชรินทร์ ยิ่งพูนทรัพย์",
      "3M": " 1,864,317.57 ",
      "HOUSE BRAND": " 257,681.33 ",
      "NON3M": " 91,566.60 ",
      "NON3M-NONCOM": "",
      "OTHER": " 8,018.69 "
    },
    {
      "No": 5,
      "Name": "น.ส. ภัณฑิรา ศรีวะรมย์",
      "3M": " 3,367,985.12 ",
      "HOUSE BRAND": " 1,093,849.56 ",
      "NON3M": " 56,355.14 ",
      "NON3M-NONCOM": "",
      "OTHER": " 3,629.91 "
    },
    {
      "No": 6,
      "Name": "น.ส. ริญญภัสร์ ศิรภัสสรรัตน์",
      "3M": " 3,463,396.80 ",
      "HOUSE BRAND": " 476,002.30 ",
      "NON3M": " 55,261.69 ",
      "NON3M-NONCOM": "",
      "OTHER": " 4,989.70 "
    },
    {
      "No": 7,
      "Name": "น.ส. วีรุทัย อัครศรีวร",
      "3M": " 2,855,147.71 ",
      "HOUSE BRAND": " 541,742.94 ",
      "NON3M": " 365,995.32 ",
      "NON3M-NONCOM": "",
      "OTHER": " 7,285.98 "
    },
    {
      "No": 8,
      "Name": "นาย กาศไสว หอมเฮ้า",
      "3M": " 2,118,652.96 ",
      "HOUSE BRAND": " 826,432.27 ",
      "NON3M": " 95,700.94 ",
      "NON3M-NONCOM": "",
      "OTHER": " 728.97 "
    },
    {
      "No": 9,
      "Name": "นาย จีรเดช ประพันธ์วงศ์",
      "3M": " 1,111,925.00 ",
      "HOUSE BRAND": " 280,807.43 ",
      "NON3M": " 17,079.43 ",
      "NON3M-NONCOM": "",
      "OTHER": " 7,551.40 "
    },
    {
      "No": 10,
      "Name": "นาย ณัฐภัทรศ์ ผลพานิชย์",
      "3M": " 1,743,867.36 ",
      "HOUSE BRAND": " 423,782.71 ",
      "NON3M": " 94,494.87 ",
      "NON3M-NONCOM": "",
      "OTHER": " 560.75 "
    },
    {
      "No": 11,
      "Name": "นาย ธรรมธร ศักดิ์บรรพต",
      "3M": " 2,166,858.73 ",
      "HOUSE BRAND": " 420,838.76 ",
      "NON3M": " 438,218.92 ",
      "NON3M-NONCOM": "",
      "OTHER": " 6,564.48 "
    },
    {
      "No": 12,
      "Name": "นาย ปฎิวัติ เพชรนุ้ย",
      "3M": " 2,012,092.47 ",
      "HOUSE BRAND": " 232,967.75 ",
      "NON3M": " 19,628.03 ",
      "NON3M-NONCOM": "",
      "OTHER": " 168.22 "
    },
    {
      "No": 13,
      "Name": "นาย พอเจตน์ อภิศักดิ์ศิริกุล",
      "3M": " 980,938.77 ",
      "HOUSE BRAND": " 625,945.78 ",
      "NON3M": " 30,261.70 ",
      "NON3M-NONCOM": " 22,429.91 ",
      "OTHER": " 373.84 "
    },
    {
      "No": 14,
      "Name": "นาย อภิสิทธิ์ ปูชนีย์จันทรานนท์",
      "3M": " 1,985,505.20 ",
      "HOUSE BRAND": " 594,968.71 ",
      "NON3M": " 306,942.07 ",
      "NON3M-NONCOM": "",
      "OTHER": " 824.30 "
    },
    {
      "No": 15,
      "Name": "นาย อุดมศักดิ์ อภิศักดิ์ศิริกุล",
      "3M": " 10,535,353.29 ",
      "HOUSE BRAND": " 575,345.76 ",
      "NON3M": " 47,181.32 ",
      "NON3M-NONCOM": "",
      "OTHER": " 1,439.25 "
    },
    {
      "No": 16,
      "Name": "ลูกค้าหน้าร้าน",
      "3M": " 70,341.60 ",
      "HOUSE BRAND": " 15,829.44 ",
      "NON3M": " 36,168.22 ",
      "NON3M-NONCOM": " - ",
      "OTHER": " 36,884.08 "
    }
  ];

  RecSalesPerson.empty();
  RecSalesPerson2.empty();
  TableLiseItem.empty();

  for (var data in RecSalesPersonJson) {

    var Percen = parseFloat(RecSalesPersonJson[data].Profit.replace(/,/g, '')) / parseFloat(RecSalesPersonJson[data].Sales.replace(/,/g, ''));
    var PercenTraget = parseFloat(RecSalesPersonJson[data].Sales.replace(/,/g, '')) / parseFloat(RecSalesPersonJson[data].Target.replace(/,/g, ''));

    var Pie1 = parseFloat(Math.random() * 100.00) + 1.00;
    var Pie2 = Percen * 100;
    var Pie3 = PercenTraget * 100;
    RecPieData.push([Pie1.toFixed(2), Pie2.toFixed(2), Pie3.toFixed(2)]);


    RecSalesPerson.append(`
    <tr> 
      <td>`+ (parseInt(data) + 1) + `</td>
      <td>`+ RecSalesPersonJson[data].Name + `</td>
      <td><span class="badge badge-success">`+ RecSalesPersonJson[data].Target + `</span></td>
      <td>`+ RecSalesPersonJson[data].Sales + `</td>
      <td>`+ RecSalesPersonJson[data].Profit + `</td>
    </tr>
   `);
    RecSalesPerson2.append(`
      <tr id="P`+ (parseInt(data) + 1) + `">
        <td>`+ (parseInt(data) + 1) + `</td>
        <td>`+ RecSalesPersonJson[data].Name + `</td>
        <td><span class="badge badge-success">`+ RecSalesPersonJson[data].Target + `</span></td>
        <td>`+ RecPieData[data][0] + `%</td>
        <td>`+ RecPieData[data][1] + `%</td>
        <td>`+ RecSalesPersonJson[data].Sales + `</td>
        `+ (RecPieData[data][2] > 20 ? `<td style="color:green">` + RecPieData[data][2] + `%</td>` : `<td style="color:red">` + RecPieData[data][2] + `%</td>`) + `
        <td>`+ RecSalesPersonJson[data].Profit + `</td>
      </tr> 
      `);
    var upTop = document.getElementById('P' + (parseInt(data) + 1))
    upTop.addEventListener('click', function () {
      selectIndexPie = parseInt(this.id.replace('P', ''));

      pieChart.data = {
        labels: [
          '%ยอดขายเที่ยบกับยอดรวม',
          '%ยอดขายต่อเป้าการขาย',
          '%กำไรต่อยอดขาย',
        ],
        datasets: [
          {
            data: RecPieData[selectIndexPie],
            backgroundColor: ['#f56954', '#00a65a', '#f39c12'],
          }
        ]
      }
      pieChart.update();
    }, false);
  }

  for (var data in RecItem) {
    TableLiseItem.append(`
    <tr> 
      <td>`+ (parseInt(data) + 1) + `</td>
      <td>`+ RecItem[data].Name + `</td>
      <td>`+ RecItem[data]["3M"] + `</td>
      <td>`+ RecItem[data]["HOUSE BRAND"] + `</td>
      <td>`+ RecItem[data].NON3M + `</td>
      <td>`+ RecItem[data]["NON3M-NONCOM"] + `</td>
      <td>`+ RecItem[data].OTHER + `</td>
    </tr>
   `);
  }


  // Click Button
  $(".btn1").click(function () {

    RecSalesPerson.empty();
    var count = parseInt(Math.random() * 8) + 1;

    for (var data = 0; data < count; data++) {
      RecSalesPerson.append(`
        <tr>
          <td>`+ (parseInt(data) + 1) + `</td>
          <td>`+ RecSalesPersonJson[data].Name + `</td>
          <td><span class="badge badge-success">`+ RecSalesPersonJson[data].Target + `</span></td>
          <td>`+ RecSalesPersonJson[data].Sales + `</td>
          <td>`+ RecSalesPersonJson[data].Profit + `</td>
        </tr>
      `);
    }
  });


  /* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   */

  //-----------------------
  //- MONTHLY SALES CHART -
  //-----------------------

  // Get context with jQuery - using jQuery's .get() method.
  var salesChartCanvas = $('#salesChart').get(0).getContext('2d')

  var salesChartData = {
    labels: ['กรุงเทพ', 'ภาคเหนือ', 'ภาคกลาง', 'ภาคตะวันตก', 'ภาคตะวันออก', 'ภาคตะวันออกเฉียงเหนือ'],

    datasets: [
      {
        label: 'ยอดขาย',
        backgroundColor: 'rgba(60,141,188,0.9)',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: ["9564355.83 ", " 3501554.03 ", " 3719610.87 ", " 14122975.66  ", " 1095319.86  ", "  3230084.64 ", "  17987446.58 "]
      },
      {
        label: 'กำไร',
        backgroundColor: 'rgba(210, 214, 222, 1)',
        borderColor: 'rgba(210, 214, 222, 1)',
        pointRadius: false,
        pointColor: 'rgba(210, 214, 222, 1)',
        pointStrokeColor: '#c1c7d1',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: ["1766602.77", " 723871.07 ", " 675896.77 ", " 2621171.88 ", " 228194.68 ", " 558675.43 ", " 3407489.00 "]
      }
    ]
  }

  var ticksStyle = {
    fontColor: '#495057',
    fontStyle: 'bold'
  }

  var salesChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    datasetFill: false,
    tooltips: {
      mode: "index",
      intersect: true,
      callbacks: {
        label: function (tooltipItem, data) {
          return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " บาท";
        },
      }
    },
    responsive: true,
    datasetFill: false,
    scales: {
      yAxes: [{
        gridLines: {
          display: true,
          lineWidth: '4px',
          color: 'rgba(0, 0, 0, .2)',
          zeroLineColor: 'transparent'
        },
        ticks: $.extend({
          beginAtZero: true,
          callback: function (value, index, values) {
            if (value >= 1000000) {
              value /= 1000000
              value += ' ลบ.'
            }
            if (value >= 500000) {
              value /= 500000
              value += ' ลบ.'
            }
            return '' + value
          }
        }, ticksStyle)
      }],
      xAxes: [{
        display: true,
        gridLines: {
          display: false
        },
        ticks: ticksStyle
      }]
    }
  }

  // This will get the first returned node in the jQuery collection.
  var salesChart = new Chart(salesChartCanvas, {
    // type: 'polarArea', 
    type: 'bar',
    data: salesChartData,
    options: salesChartOptions
  });


  //On click
  document.getElementById("salesChart").onclick = function (evt) {
    var activePoints = salesChart.getElementsAtEventForMode(evt, 'point', salesChart.options);
    var firstPoint = activePoints[0];
    var label = salesChart.data.labels[firstPoint._index];
    var value = salesChart.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];
    // alert(label +':'+ value);
    $('#exampleModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget)
      var modal = $(this)
      modal.find('.modal-title').text(label);
    });
    $('#exampleModal').modal();
  };

  //---------------------------
  //- END MONTHLY SALES CHART -
  //---------------------------

  //-------------
  //- PIE CHART -
  //-------------
  // Get context with jQuery - using jQuery's .get() method.
  var pieChartCanvas = $('#pieChart').get(0).getContext('2d')
  var pieData = {
    labels: [
      '%ยอดขายเที่ยบกับยอดรวม',
      '%ยอดขายต่อเป้าการขาย',
      '%กำไรต่อยอดขาย',
    ],
    datasets: [
      {
        // data: ["9.39", "143.13", "18.12"],
        data: RecPieData[selectIndexPie],
        backgroundColor: ['#f56954', '#00a65a', '#f39c12'],
      }
    ]
  }
  var pieOptions = {
    legend: {
      display: false
    }
  }

  //Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  pieChart = new Chart(pieChartCanvas, {
    type: 'doughnut',
    data: {
      labels: [
        '%ยอดขายเที่ยบกับยอดรวม',
        '%ยอดขายต่อเป้าการขาย',
        '%กำไรต่อยอดขาย',
      ],
      datasets: [
        {
          data: RecPieData[selectIndexPie],
          backgroundColor: ['#f56954', '#00a65a', '#f39c12'],
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
    }
  });

  //-----------------
  //- END PIE CHART -
  //-----------------


  //-------------
  //- ITEM CHART -
  //-------------

  var itemChartCanvas = $('#itemChart').get(0).getContext('2d')

  var itemChartData = {
    labels: ['3M', 'HOUSE BRAND', 'NON3M', 'NON3M-NONCOM', 'OTHER'],

    datasets: [
      {
        label: 'ยอดขาย',
        backgroundColor: 'rgba(60,141,188,0.9)',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: false,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: ["43991198.79", "7383564.82", "1838506.59", "26168.23", "87209.28", "53326647.71"]
      },
    ]
  }

  var ticksStyle = {
    fontColor: '#495057',
    fontStyle: 'bold'
  }

  var itemChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    datasetFill: false,
    tooltips: {
      mode: "index",
      intersect: true,
      callbacks: {
        label: function (tooltipItem, data) {
          return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " บาท";
        },
      }
    },
    responsive: true,
    datasetFill: false,
    scales: {
      yAxes: [{
        gridLines: {
          display: true,
          lineWidth: '4px',
          color: 'rgba(0, 0, 0, .2)',
          zeroLineColor: 'transparent'
        },
        ticks: $.extend({
          beginAtZero: true,
          callback: function (value, index, values) {
            if (value >= 1000000) {
              value /= 1000000
              value += ' ลบ.'
            }
            if (value >= 500000) {
              value /= 500000
              value += ' ลบ.'
            }
            return '' + value
          }
        }, ticksStyle)
      }],
      xAxes: [{
        display: true,
        gridLines: {
          display: false
        },
        ticks: ticksStyle
      }]
    }
  }

  // This will get the first returned node in the jQuery collection.
  var itemChart = new Chart(itemChartCanvas, {
    // type: 'polarArea', 
    type: 'bar',
    data: itemChartData,
    options: itemChartOptions
  });

  //-----------------
  //- END ITEM CHART -
  //-----------------

  /* jVector Maps
   * ------------
   * Create a world map with markers
   */
  $('#world-map-markers').mapael({
    map: {
      name: "usa_states",
      zoom: {
        enabled: true,
        maxLevel: 10
      },
    },
  }
  );

})
