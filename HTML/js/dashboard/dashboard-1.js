(function($) {
 var dzChartlist = function(){
	
	var chartBar = function(){
		var optionsArea = {
          series: [{
            name: "Pasien Lama",
            data: [500, 230, 600, 360, 700, 890, 750, 420, 600, 300, 420, 220]
          },
          {
            name: "Pasien Baru",
            data: [250, 380, 200, 300, 200, 520,380, 770, 250, 520, 300, 900]
          }
        ],
          chart: {
          height: 350,
          type: 'area',
		  group: 'social',
		  toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2, 2],
		  colors:['#F46B68','#2BC155'],
		  curve: 'straight'
        },
        legend: {
          tooltipHoverFormatter: function(val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
          },
		  markers: {
			fillColors:['#F46B68','#2BC155'],
			width: 19,
			height: 19,
			strokeWidth: 0,
			radius: 19
		  }
        },
        markers: {
          size: 6,
		  border:0,
		  colors:['#F46B68','#2BC155'],
          hover: {
            size: 6,
          }
        },
        xaxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October','November','December',
            '10 Jan', '11 Jan', '12 Jan'
          ],
        },
		yaxis: {
			labels: {
		   style: {
			  colors: '#3e4954',
			  fontSize: '14px',
			   fontFamily: 'Poppins',
			  fontWeight: 100,
			  
			},
		  },
		},
		fill: {
			colors:['#F46B68','#2BC155'],
			type:'solid',
			opacity: 0.07
		},
        grid: {
          borderColor: '#f1f1f1',
        }
        };
		var chartArea = new ApexCharts(document.querySelector("#chartBar"), optionsArea);
        chartArea.render();

	}	
	
	/* Function ============ */
		return {
			init:function(){
				
			},
			
			
			load:function(){
				chartBar();
			},
			
			resize:function(){
			}
		}
	
	}();

	jQuery(document).ready(function(){
	});
		
	jQuery(window).on('load',function(){
		setTimeout(function(){
			dzChartlist.load();
		}, 1000); 
		
	});

	jQuery(window).on('resize',function(){
		
		
	});     

})(jQuery);