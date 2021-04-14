$(function () {
  'use strict'
  var DataItemHot = $('#DataItemHot');

  var RecItemHot = [
    {
      "No": 1,
      "Color": "#ff5959",
      "Name": "เครื่องเจียร 4\" MAKTEC MT-954",
      "sales": " 2,658,596.68 ",
      "percenprofit": "9.06%",
      "profit": " 240,847.06 ",
      "coss": "88.54%"
    },
    {
      "No": 2,
      "Color": "#facf5a",
      "Name": "ใบไฟเบอร์ MAKITA 14\"(A-89545)",
      "sales": " 1,950,827.69 ",
      "percenprofit": "9.73%",
      "profit": " 189,912.82 ",
      "coss": "88.08%"
    },
    {
      "No": 3,
      "Color": "#49beb7",
      "Name": "เครื่องเจียร 4\" MAKTEC MT-91A",
      "sales": " 1,694,293.54 ",
      "percenprofit": "13.02%",
      "profit": " 220,592.79 ",
      "coss": "79.04%"
    },
    {
      "No": 4,
      "Color": "#007bff",
      "Name": "COMBO KIT 12V MAX MAKITA CLX228X1 (HP333DZ+TD110DZ",
      "sales": " 1,366,075.96 ",
      "percenprofit": "15.22%",
      "profit": " 207,945.36 ",
      "coss": "79.80%"
    },
    {
      "No": 6,
      "Color": "#ced4da",
      "Name": "สว่านโรตารี่ MAKITA M8701B26",
      "sales": " 1,013,243.56 ",
      "percenprofit": "13.20%",
      "profit": " 133,706.08 ",
      "coss": "79.75%"
    },
    {
      "No": 7,
      "Color": "#28a745",
      "Name": "เครื่องเลื่อยวงเดือน MAKITA M5801B",
      "sales": " 938,359.54 ",
      "percenprofit": "13.01%",
      "profit": " 122,073.94 ",
      "coss": "79.03%"
    },
    {
      "No": 8,
      "Color": "#085f63",
      "Name": "เครื่องตัด 14\" MAKITA M2401B",
      "sales": " 816,967.47 ",
      "percenprofit": "12.24%",
      "profit": " 99,975.87 ",
      "coss": "83.72%"
    },
    {
      "No": 10,
      "Color": "#fcb1b1",
      "Name": "สกัดคอนกรีตไฟฟ้า MAKITA HM1306",
      "sales": " 778,418.65 ",
      "percenprofit": "15.01%",
      "profit": " 116,824.14 ",
      "coss": "82.32%"
    }
  ];

  DataItemHot.empty();
  for (var data in RecItemHot) {
    DataItemHot.append(`
    <tr> 
      <td>    
        <span>
          <i class="fas fa-square " style="color:`+ RecItemHot[data].Color + `!important "></i>
        </span>
      </td>
      <td>`+ (parseInt(data) + 1) + `</td>
      <td>`+ RecItemHot[data].Name + `</td>
      <td>`+ RecItemHot[data].sales + `</td>
      <td>`+ RecItemHot[data].percenprofit + `</td>
      <td>`+ RecItemHot[data].profit + `</td>
      <td>`+ RecItemHot[data].coss + `</td>
    </tr>
   `);
  }

  var ticksStyle = {
    fontColor: '#495057',
    fontStyle: 'bold'
  }

  var mode = 'index'
  var intersect = true

  var $salesChart = $('#sales-chart')


  var salesChart = new Chart($salesChart, {
    type: 'bar',
    data: {
      labels: ['ยอดขาย', 'กำไร',],
      datasets: [
        {


          backgroundColor: '#ff5959',
          borderColor: '#ff5959',
          label: '',
          data: [267700, 184626, 71923, 4618, 79328, 5444, 5415]
        },
        {
          backgroundColor: '#facf5a',
          borderColor: '#facf5a',
          label: '',
          data: [254183, 168315, 75461, 4619, 129889, 10697, 10697]
        },
        {
          backgroundColor: '#49beb7',
          borderColor: '#49beb7',
          label: '',
          data: [362326, 286002, 66980, 5182, 58695, -21407, 10697]
        },
        {
          backgroundColor: '#007bff',
          borderColor: '#007bff',
          label: '',
          data: [267700, 184626, 71923, 4618, 79328, 5444, 5415]
        },
        {
          backgroundColor: '#ced4da',
          borderColor: '#ced4da',
          label: '',
          data: [254183, 168315, 75461, 4619, 129889, 10697, 10697]
        },
        {
          backgroundColor: '#28a745',
          borderColor: '#28a745',
          label: '',
          data: [362326, 286002, 66980, 5182, 58695, -21407, 10697]
        },
        {
          backgroundColor: '#085f63',
          borderColor: '#085f63',
          label: '',
          data: [267700, 184626, 71923, 4618, 79328, 5444, 5415]
        },
        {
          backgroundColor: '#fcb1b1',
          borderColor: '#fcb1b1',
          label: '',
          data: [254183, 168315, 75461, 4619, 129889, 10697, 10697]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect,
        callbacks: {
          label: function (tooltipItem, data) {
            return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " ล้านบาท";
          },
        }
      },
      hover: {
        mode: mode,
        intersect: intersect,
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,

            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              if (value >= 1000000) {
                value /= 1000000
                value += 'ล้านบาท'
              }
              value = value.toString();
              value = value.split(/(?=(?:...)*$)/);
              value = value.join(',');
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
  });
});
