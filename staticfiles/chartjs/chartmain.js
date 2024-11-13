header('Content-Type: text/javascript');
<script type="text/javascript">
    (function(H) {

      var createElement = H.createElement,
      css = H.css,
      extend = H.extend,
      addEvent = H.addEvent,
      doc = H.doc,
      each = H.each;

      H.Chart.prototype.contextMenu = function (className, items, x, y, width, height, button) {
        var chart = this,
        navOptions = chart.options.navigation,
        chartWidth = chart.chartWidth,
        chartHeight = chart.chartHeight,
        cacheName = 'cache-' + className,
        menu = chart[cacheName],
      menuPadding = Math.max(width, height), // for mouse leave detection
      innerMenu,
      hide,
      menuStyle;

    // create the menu only the first time
      if (!menu) {

      // create a HTML element above the SVG
        chart[cacheName] = menu = createElement('div', {
          className: className
        }, {
          position: 'absolute',
          zIndex: 1000,
          padding: menuPadding + 'px'
        }, chart.container);

        innerMenu = createElement('div', { className: 'highcharts-menu' }, null, menu);

      /*= if (build.classic) { =*/
      // Presentational CSS
        css(innerMenu, extend({
          MozBoxShadow: '3px 3px 10px #888',
          WebkitBoxShadow: '3px 3px 10px #888',
          boxShadow: '3px 3px 10px #888'
        }, navOptions.menuStyle));
      /*= } =*/

      // hide on mouse out
        hide = function () {
          css(menu, { display: 'none' });
          if (button) {
            button.setState(0);
          }
          chart.openMenu = false;
        };

      // Hide the menu some time after mouse leave (#1357)
        chart.exportEvents.push(
          addEvent(menu, 'mouseleave', function () {
            menu.hideTimer = setTimeout(hide, 500);
          }),
          addEvent(menu, 'mouseenter', function () {
            clearTimeout(menu.hideTimer);
          }),

        // Hide it on clicking or touching outside the menu (#2258, #2335,
        // #2407)
          addEvent(doc, 'mouseup', function (e) {
            if (!chart.pointer.inClass(e.target, className)) {
              hide();
            }
          })
          );

      // create the items
        each(items, function (item) {

          if (typeof item === 'string') {
            item = chart.options.exporting.menuItemDefinitions[item];
          }   

          if (H.isObject(item, true)) {
            var element;

            if (item.separator) {
              element = createElement('hr', null, null, innerMenu);

            } else {
              element = createElement('div', {
                className: 'highcharts-menu-item',
                onclick: function (e) {
                if (e) { // IE7
                  e.stopPropagation();
                }
                hide();
                if (item.onclick) {
                  item.onclick.apply(chart, arguments);
                }
              },
              innerHTML: item.text || chart.options.lang[item.textKey]
            }, null, innerMenu);

              if(item.text === 'Download CSV') {
              /* for "disabled" effect */
                element.style['pointer-events'] = 'none';
                element.style.opacity = 0.5;
                element.style.background = '#CCC';
              }

              if(item.text === 'Download XLS') {
              /* for "disabled" effect */
                element.style['pointer-events'] = 'none';
                element.style.opacity = 0.5;
                element.style.background = '#CCC';
              }

            /*= if (build.classic) { =*/
              element.onmouseover = function () {
                css(this, navOptions.menuItemHoverStyle);
              };
              element.onmouseout = function () {
                css(this, navOptions.menuItemStyle);
              };
              css(element, extend({
                cursor: 'pointer'
              }, navOptions.menuItemStyle));
            /*= } =*/
            }

          // Keep references to menu divs to be able to destroy them
            chart.exportDivElements.push(element);
          }
        });

      // Keep references to menu and innerMenu div to be able to destroy them
        chart.exportDivElements.push(innerMenu, menu);

        chart.exportMenuWidth = menu.offsetWidth;
        chart.exportMenuHeight = menu.offsetHeight;
      }

      menuStyle = { display: 'block' };

    // if outside right, right align it
      if (x + chart.exportMenuWidth > chartWidth) {
        menuStyle.right = (chartWidth - x - width - menuPadding) + 'px';
      } else {
        menuStyle.left = (x - menuPadding) + 'px';
      }
    // if outside bottom, bottom align it
      if (y + height + chart.exportMenuHeight > chartHeight && button.alignOptions.verticalAlign !== 'top') {
        menuStyle.bottom = (chartHeight - y - menuPadding)  + 'px';
      } else {
        menuStyle.top = (y + height - menuPadding) + 'px';
      }

      css(menu, menuStyle);
      chart.openMenu = true;
    };

  })(Highcharts);

    //const data_const_won = {{ const_won_by_party_data|safe }};

    var chart1b = Highcharts.chart('container1b', {
      chart: {
        type: 'bar',
        style: {
          fontSize: '15px',
        },
      },
      title: {
        text: 'Total Seats Won Per Political Party (Parliament)',
        align: 'left',
        style: {
          fontSize: '13px'
        }
      },

      xAxis: {
        categories: {{ names | safe }},
        title: {
          text: 'Parties'
        },
        gridLineWidth: 1,
        lineWidth: 0
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total Valid Votes',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        },
        gridLineWidth: 0
      },
      tooltip: {
        valueSuffix: ''
      },
      plotOptions: {
        bar: {
          borderRadius: '50%',
          dataLabels: {
            enabled: true
          },
          groupPadding: 0.1
        }
      },
      exporting: {
        buttons: {
            contextButton: {
                menuItems: [
                    'viewFullscreen',
                    'printChart',
                    'separator',
                    'downloadPNG', // Keep the options you want to keep
                    'downloadJPEG', // Keep the options you want to keep                    
                    'downloadPDF', // Keep the options you want to keep
                    'downloadSVG', // Keep the options you want to keep
                    'separator',
                    {
                        text: 'Download CSV',
                        
                        // Custom onclick handler for the inactive item
                        onclick: function () {
                            // Do nothing or show a message indicating it's inactive
                        },
                        // Add a CSS class to style the inactive item
                        

                    },
                    {
                        text: 'Download XLS',

                        // Custom onclick handler for the inactive item
                        onclick: function () {
                            // Do nothing or show a message indicating it's inactive
                        },
                        // Add a CSS class to style the inactive item
                        className: 'inactive-menu-item'
                    },
                    {
                      text: 'View Data Table',

                      onclick: function() {
                        if (this.dataTableDiv && this.dataTableDiv.style.display !== 'none') {
                          this.dataTableDiv.style.display = 'none';
                        } else {
                          this.viewData();
                          this.dataTableDiv.style.display = '';
                        }
                      },
                      
                    
                    }
                    
                    ]
            }
        }
    },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Data',
        data: {{ count_y | safe }}
      }]
    });


    var chart1 = Highcharts.chart('container1', {
      chart: {
        type: 'bar',
        style: {
          fontSize: '15px', 
        },
      },
      title: {
        text: 'Total Valid Votes Per Political Party (Presidential)',
        align: 'left',
        style: {
          fontSize: '13px'
        }
      },

      xAxis: {
        categories: {{ graph2BXParties | safe }},
        min: 0,
        max: 5,
        scrollbar: {
          enabled: true
        },
        title: {
          text: 'Regions'
        },
        gridLineWidth: 1,
        lineWidth: 0
      },
      yAxis: {
        scrollbar: {
          enabled: false
        },
        min: 0,
        title: {
          text: 'Total Valid Votes',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        },
        gridLineWidth: 0
      },
      tooltip: {
        valueSuffix: ''
      },
      plotOptions: {
        bar: {
          borderRadius: '50%',
          dataLabels: {
            enabled: true
          },
          groupPadding: 0.1
        }
      },
      exporting: {
        buttons: {
            contextButton: {
                menuItems: [
                    'viewFullscreen',
                    'printChart',
                    'separator',
                    'downloadPNG', // Keep the options you want to keep
                    'downloadJPEG', // Keep the options you want to keep                    
                    'downloadPDF', // Keep the options you want to keep
                    'downloadSVG', // Keep the options you want to keep
                    'separator',
                    {
                        text: 'Download CSV',
                        
                        // Custom onclick handler for the inactive item
                        onclick: function () {
                            // Do nothing or show a message indicating it's inactive
                        },
                        // Add a CSS class to style the inactive item
                        

                    },
                    {
                        text: 'Download XLS',

                        // Custom onclick handler for the inactive item
                        onclick: function () {
                            // Do nothing or show a message indicating it's inactive
                        },
                        // Add a CSS class to style the inactive item
                        className: 'inactive-menu-item'
                    },
                    {
                      text: 'View Data Table',

                      onclick: function() {
                        if (this.dataTableDiv && this.dataTableDiv.style.display !== 'none') {
                          this.dataTableDiv.style.display = 'none';
                        } else {
                          this.viewData();
                          this.dataTableDiv.style.display = '';
                        }
                      },
                      
                    
                    }
                    
                    ]
            }
        }
    },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Data',
        data: {{ graph2BYParties | safe }},
        color: '#f0a754'
      }]
    });


    // Build the chart
    var chart2b = Highcharts.chart('container2b', {
      chart: {
        style: {
          fontSize: '15px'
        },
        events: {
          load() {
            dataLabels = {{ graph2AX | safe }};
            const chart = this;
            chart.series[0].points.forEach((point, index) => point.update({
              name: dataLabels[index]
            }), false);
            chart.redraw();
          }
        }
      },
      title: {
        text: 'Total Valid Votes Per Political Party (Parliament)',
        align: 'left',
        style: {
          fontSize: '13px',
          fontWeight: 'bold'
        }
      },
      exporting: {
        buttons: {
            contextButton: {
                menuItems: [
                    'viewFullscreen',
                    'printChart',
                    'separator',
                    'downloadPNG', // Keep the options you want to keep
                    'downloadJPEG', // Keep the options you want to keep                    
                    'downloadPDF', // Keep the options you want to keep
                    'downloadSVG', // Keep the options you want to keep
                    'separator',
                    {
                        text: 'Download CSV',
                        
                        // Custom onclick handler for the inactive item
                        onclick: function () {
                            // Do nothing or show a message indicating it's inactive
                        },
                        // Add a CSS class to style the inactive item
                        

                    },
                    {
                        text: 'Download XLS',

                        // Custom onclick handler for the inactive item
                        onclick: function () {
                            // Do nothing or show a message indicating it's inactive
                        },
                        // Add a CSS class to style the inactive item
                        className: 'inactive-menu-item'
                    },
                    {
                      text: 'View Data Table',

                      onclick: function() {
                        if (this.dataTableDiv && this.dataTableDiv.style.display !== 'none') {
                          this.dataTableDiv.style.display = 'none';
                        } else {
                          this.viewData();
                          this.dataTableDiv.style.display = '';
                        }
                      },
                      
                    
                    }
                    
                    ]
            }
        }
    },
      credits: {
        enabled: false
      },
      series: [{
        type: 'pie',
        showInLegend: true,
        data: {{ graph2AY | safe}},
        name: 'Valid Votes',
        colors: [
          '#0390fc', 
          '#e3051b', 
          '#f75464', 
          '#308a0a', 
          '#9d0fbd', 
          '#ded712', 
          '#f02274', 
          '#1f1cd9',
          '#0390fc', 
          '#e3051b', 
          '#f75464', 
          '#308a0a', 
          '#9d0fbd', 
          '#ded712', 
          '#f02274', 
          '#1f1cd9',
          '#f75464',
          '#ded712',
          '#308a0a',
          '#1eb39a',
          '#46e5fa',
          '#7a9c2c',
          '#41423e',
          '#d460eb',
          '#d18f38',
          '#f28907',
          '#f77c9d',
          '#8d76f5',
          '#b58931',
          '#ebd059'

        ]

      }]

    });


    var chart2 = Highcharts.chart('container2', {
      chart: {
        style: {
          fontSize: '15px'
        },
        events: {
          load() {
            dataLabels = {{ graph2BX | safe }};
            const chart = this;
            chart.series[0].points.forEach((point, index) => point.update({
              name: dataLabels[index]
            }), false);
            chart.redraw();
          }
        },
      },
      title: {
        text: 'Total Valid Votes Per Political Party (Presidential)',
        align: 'left',
        style: {
          fontSize: '13px',
          fontWeight: 'bold'
        }
      },
      exporting: {
        buttons: {
            contextButton: {
                menuItems: [
                    'viewFullscreen',
                    'printChart',
                    'separator',
                    'downloadPNG', // Keep the options you want to keep
                    'downloadJPEG', // Keep the options you want to keep                    
                    'downloadPDF', // Keep the options you want to keep
                    'downloadSVG', // Keep the options you want to keep
                    'separator',
                    {
                        text: 'Download CSV',
                        
                        // Custom onclick handler for the inactive item
                        onclick: function () {
                            // Do nothing or show a message indicating it's inactive
                        },
                        // Add a CSS class to style the inactive item
                        

                    },
                    {
                        text: 'Download XLS',

                        // Custom onclick handler for the inactive item
                        onclick: function () {
                            // Do nothing or show a message indicating it's inactive
                        },
                        // Add a CSS class to style the inactive item
                        className: 'inactive-menu-item'
                    },
                    {
                      text: 'View Data Table',

                      onclick: function() {
                        if (this.dataTableDiv && this.dataTableDiv.style.display !== 'none') {
                          this.dataTableDiv.style.display = 'none';
                        } else {
                          this.viewData();
                          this.dataTableDiv.style.display = '';
                        }
                      },
                      
                    
                    }
                    
                    ]
            }
        }
    },
      credits: {
        enabled: false
      },
      series: [{
        type: 'pie',
        showInLegend: true,
        data: {{ graph2BY | safe}},
        name: 'Valid Votes',
        colors: [
          '#0390fc', 
          '#e3051b', 
          '#f75464', 
          '#308a0a', 
          '#9d0fbd', 
          '#ded712', 
          '#f02274', 
          '#1f1cd9',
          '#0390fc', 
          '#e3051b', 
          '#f75464', 
          '#308a0a', 
          '#9d0fbd', 
          '#ded712', 
          '#f02274', 
          '#1f1cd9',
          '#f75464',
          '#ded712',
          '#308a0a',
          '#1eb39a',
          '#46e5fa',
          '#7a9c2c',
          '#41423e',
          '#d460eb',
          '#d18f38',
          '#f28907',
          '#f77c9d',
          '#8d76f5',
          '#b58931',
          '#ebd059'

        ]

      }]

    });


    // var colors = [
    //       '#0390fc', 
    //       '#e3051b', 
    //       '#f75464', 
    //       '#308a0a', 
    //       '#9d0fbd', 
    //       '#ded712', 
    //       '#f02274', 
    //       '#1f1cd9',
    //       '#0390fc', 
    //       '#e3051b', 
    //       '#f75464', 
    //       '#308a0a', 
    //       '#9d0fbd', 
    //       '#ded712', 
    //       '#f02274', 
    //       '#1f1cd9',
    //       '#f75464',
    //       '#ded712',
    //       '#308a0a',
    //       '#1eb39a',
    //       '#46e5fa',
    //       '#7a9c2c',
    //       '#41423e',
    //       '#d460eb',
    //       '#d18f38',
    //       '#f28907',
    //       '#f77c9d',
    //       '#8d76f5',
    //       '#b58931',
    //       '#ebd059'

    //     ]

    // const datum =  {{df_grouped3z | safe}};

    // // Extract categories (first column) and column names (header row)
    // const categories = datum.map(item => item[0]);
    // const columnNames = {{graph2AX | safe}};

    // // Extract series data (exclude the first row which contains column names)
    // const seriesData = datum.slice(0).map(item => item.slice(1));

    // var chart4 = Highcharts.chart('container4', {
    //   chart: {
    //     type: 'column',
    //     style: {
    //       fontSize: '15px'
    //     }
    //   },
    //   title: {
    //     text: 'Total Valid Votes for Each Political Party Per Region(Parliament)',
    //     style: {
    //       fontSize: '13px',
    //       fontWeight: 'bold'
    //     }
    //   },
    //   xAxis: {
    //     categories: categories,
    //     scrollbar: {
    //       enabled: false
    //     },
    //   },
    //   yAxis: {
    //     title: {
    //       scrollbar: {
    //       enabled: false
    //     },
    //       text: 'Valid Votes'
    //     }
    //   },
    //   exporting: {
    //     buttons: {
    //         contextButton: {
    //             menuItems: [
    //                 'viewFullscreen',
    //                 'printChart',
    //                 'separator',
    //                 'downloadPNG', // Keep the options you want to keep
    //                 'downloadJPEG', // Keep the options you want to keep                    
    //                 'downloadPDF', // Keep the options you want to keep
    //                 'downloadSVG', // Keep the options you want to keep
    //                 'separator',
    //                 {
    //                     text: 'Download CSV',
                        
    //                     // Custom onclick handler for the inactive item
    //                     onclick: function () {
    //                         // Do nothing or show a message indicating it's inactive
    //                     },
    //                     // Add a CSS class to style the inactive item
                        

    //                 },
    //                 {
    //                     text: 'Download XLS',

    //                     // Custom onclick handler for the inactive item
    //                     onclick: function () {
    //                         // Do nothing or show a message indicating it's inactive
    //                     },
    //                     // Add a CSS class to style the inactive item
    //                     className: 'inactive-menu-item'
    //                 },
    //                 {
    //                   text: 'View Data Table',

    //                   onclick: function() {
    //                     if (this.dataTableDiv && this.dataTableDiv.style.display !== 'none') {
    //                       this.dataTableDiv.style.display = 'none';
    //                     } else {
    //                       this.viewData();
    //                       this.dataTableDiv.style.display = '';
    //                     }
    //                   },
                      
                    
    //                 }
                    
    //                 ]
    //         }
    //     }
    // },
    //   credits: {
    //     enabled: false
    //   },
    //   tooltip: {
    //     headerFormat: '<b>{point.x}</b><br/>',
    //     pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    //   },
    //   plotOptions: {
    //     column: {
    //       stacking: 'normal',
    //     }
    //   },
    //   colors: this.colors,
    //   series: columnNames.map((columnName, index) => ({
    //     name: columnName,
    //     data: seriesData.map(dataSeries => dataSeries[index]),
    //     showInLegend: false,
    //   }))
    // });

    //const datum2 =  {{df_grouped4z | safe}};


    // Extract categories (first column) and column names (header row)
    // const categories2 = datum2.map(item => item[0]);
    // const columnNames2 = {{graph2BX | safe}};

    // Extract series data (exclude the first row which contains column names)
    // const seriesData2 = datum2.slice(0).map(item => item.slice(1));

    // var chart3b = Highcharts.chart('container3b', {
    //   chart: {
    //     type: 'column',
    //     style: {
    //       fontSize: '15px'
    //     }
    //   },
    //   title: {
    //     text: 'Total Valid Votes for Each Political Party Per Region(Presidential)',
    //     style: {
    //       fontSize: '13px',
    //       fontWeight: 'bold'
    //     }
    //   },
    //   xAxis: {
    //     categories: categories2,
    //     scrollbar: {
    //       enabled: false
    //     },
    //   },
    //   yAxis: {
    //     title: {
    //       scrollbar: {
    //       enabled: false
    //     },
    //       text: 'Valid Votes'
    //     }
    //   },
    //   exporting: {
    //     buttons: {
    //         contextButton: {
    //             menuItems: [
    //                 'viewFullscreen',
    //                 'printChart',
    //                 'separator',
    //                 'downloadPNG', // Keep the options you want to keep
    //                 'downloadJPEG', // Keep the options you want to keep                    
    //                 'downloadPDF', // Keep the options you want to keep
    //                 'downloadSVG', // Keep the options you want to keep
    //                 'separator',
    //                 {
    //                     text: 'Download CSV',
                        
    //                     // Custom onclick handler for the inactive item
    //                     onclick: function () {
    //                         // Do nothing or show a message indicating it's inactive
    //                     },
    //                     // Add a CSS class to style the inactive item
                        

    //                 },
    //                 {
    //                     text: 'Download XLS',

    //                     // Custom onclick handler for the inactive item
    //                     onclick: function () {
    //                         // Do nothing or show a message indicating it's inactive
    //                     },
    //                     // Add a CSS class to style the inactive item
    //                     className: 'inactive-menu-item'
    //                 },
    //                 {
    //                   text: 'View Data Table',

    //                   onclick: function() {
    //                     if (this.dataTableDiv && this.dataTableDiv.style.display !== 'none') {
    //                       this.dataTableDiv.style.display = 'none';
    //                     } else {
    //                       this.viewData();
    //                       this.dataTableDiv.style.display = '';
    //                     }
    //                   },
                      
                    
    //                 }
                    
    //                 ]
    //         }
    //     }
    // },
    //   credits: {
    //     enabled: false
    //   },
    //   tooltip: {
    //     headerFormat: '<b>{point.x}</b><br/>',
    //     pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    //   },
    //   plotOptions: {
    //     column: {
    //       stacking: 'normal',
    //     }
    //   },
    //   colors: this.colors,
    //   series: columnNames2.map((columnName, index) => ({
    //     name: columnName,
    //     data: seriesData2.map(dataSeries => dataSeries[index]),
    //     showInLegend: false,
    //   }))
    // });

//   // Default information when no feature is clicked
//   var defaultInfo = [
//       ['Default Property 1', 'Default Value 1'],
//       ['Default Property 2', 'Default Value 2'],
//       ['Default Property 3', 'Default Value 3']
//   ];

//   var chart3b = Highcharts.chart('container3b', {
//     chart: {
//         type: 'column'
//     },
//     title: {
//         text: 'Feature Tooltip Data'
//     },
//     xAxis: {
//         type: 'category',
//         title: {
//             text: 'Property Name'
//         }
//     },
//     yAxis: {
//         title: {
//             text: 'Value'
//         }
//     },
//     exporting: {
//         buttons: {
//             contextButton: {
//                 menuItems: [
//                     'viewFullscreen',
//                     'printChart',
//                     'separator',
//                     'downloadPNG', // Keep the options you want to keep
//                     'downloadJPEG', // Keep the options you want to keep                    
//                     'downloadPDF', // Keep the options you want to keep
//                     'downloadSVG', // Keep the options you want to keep
//                     'separator',
//                     {
//                         text: 'Download CSV',
                        
//                         // Custom onclick handler for the inactive item
//                         onclick: function () {
//                             // Do nothing or show a message indicating it's inactive
//                         },
//                         // Add a CSS class to style the inactive item
                        

//                     },
//                     {
//                         text: 'Download XLS',

//                         // Custom onclick handler for the inactive item
//                         onclick: function () {
//                             // Do nothing or show a message indicating it's inactive
//                         },
//                         // Add a CSS class to style the inactive item
//                         className: 'inactive-menu-item'
//                     },
//                     {
//                       text: 'View Data Table',

//                       onclick: function() {
//                         if (this.dataTableDiv && this.dataTableDiv.style.display !== 'none') {
//                           this.dataTableDiv.style.display = 'none';
//                         } else {
//                           this.viewData();
//                           this.dataTableDiv.style.display = '';
//                         }
//                       },
                      
                    
//                     }
                    
//                     ]
//             }
//         }
//     },
//     series: [{
//         name: 'Tooltip Data',
//         data: defaultInfo  // Data will be dynamically added here using `addPoint`
//     }]
// });


    // Assume `defaultInfo` is your default data shown when nothing is clicked
// var defaultInfo = [
//     ['Property 1', 10],
//     ['Property 2', 20],
//     ['Property 3', 30]
// ];

// // Initialize Highcharts with default data
// var chart3b = Highcharts.chart('container3b', {
//     chart: {
//         type: 'column'
//     },
//     title: {
//         text: 'Feature Tooltip Data'
//     },
//     xAxis: {
//         type: 'category',
//         title: {
//             text: 'Property Name'
//         }
//     },
//     yAxis: {
//         title: {
//             text: 'Value'
//         }
//     },
//     exporting: {
//         buttons: {
//             contextButton: {
//                 menuItems: [
//                     'viewFullscreen',
//                     'printChart',
//                     'separator',
//                     'downloadPNG',
//                     'downloadJPEG',
//                     'downloadPDF',
//                     'downloadSVG',
//                     'separator',
//                     {
//                         text: 'Download CSV',
//                         onclick: function () {
//                             // Do nothing or show a message indicating it's inactive
//                         }
//                     },
//                     {
//                         text: 'Download XLS',
//                         onclick: function () {
//                             // Do nothing or show a message indicating it's inactive
//                         },
//                         className: 'inactive-menu-item'
//                     },
//                     {
//                       text: 'View Data Table',
//                       onclick: function() {
//                         if (this.dataTableDiv && this.dataTableDiv.style.display !== 'none') {
//                           this.dataTableDiv.style.display = 'none';
//                         } else {
//                           this.viewData();
//                           this.dataTableDiv.style.display = '';
//                         }
//                       }
//                     }
//                 ]
//             }
//         }
//     },
//     series: [{
//         name: 'Tooltip Data',
//         data: defaultInfo  // Data will be dynamically updated here using `setData`
//     }]
// });

// // Function to dynamically update the chart with new data
// function updateHighchartData(newData) {
//     chart3b.series[0].setData(newData, true);  // Update the chart with new data
// }

// // Function to show default info when no feature is clicked
// function showDefaultInfo() {
//     updateHighchartData(defaultInfo);
// }



    var chart3 = Highcharts.chart('container3', {
      chart: {
        type: 'bar',
        style: {
          fontSize: '15px', 
        },
      },
      title: {
        text: 'Population Demographics',
        align: 'left',
        style: {
          fontSize: '13px'
        }
      },
       subtitle: {
        text: '',
        align: 'left'
    },

      xAxis: {
        categories: {{ graph1AX2P | safe}},
        min: 0,
        max: 5,
        scrollbar: {
          enabled: true
        },
        title: {
          text: 'Regions'
        },
        gridLineWidth: 1,
        lineWidth: 0
      },
      yAxis: {
        scrollbar: {
          enabled: false
        },
        min: 0,
        title: {
          text: 'NOTE: Only 2020 Population Demographics Data is available',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        },
        gridLineWidth: 0
      },
      tooltip: {
        valueSuffix: ''
      },
      plotOptions: {
        bar: {
          borderRadius: '50%',
          dataLabels: {
            enabled: true
          },
          groupPadding: 0.1
        }
      },
      exporting: {
        buttons: {
            contextButton: {
                menuItems: [
                    'viewFullscreen',
                    'printChart',
                    'separator',
                    'downloadPNG', // Keep the options you want to keep
                    'downloadJPEG', // Keep the options you want to keep                    
                    'downloadPDF', // Keep the options you want to keep
                    'downloadSVG', // Keep the options you want to keep
                    'separator',
                    {
                        text: 'Download CSV',
                        
                        // Custom onclick handler for the inactive item
                        onclick: function () {
                            // Do nothing or show a message indicating it's inactive
                        },
                        // Add a CSS class to style the inactive item
                        

                    },
                    {
                        text: 'Download XLS',

                        // Custom onclick handler for the inactive item
                        onclick: function () {
                            // Do nothing or show a message indicating it's inactive
                        },
                        // Add a CSS class to style the inactive item
                        className: 'inactive-menu-item'
                    },
                    {
                      text: 'View Data Table',

                      onclick: function() {
                        if (this.dataTableDiv && this.dataTableDiv.style.display !== 'none') {
                          this.dataTableDiv.style.display = 'none';
                        } else {
                          this.viewData();
                          this.dataTableDiv.style.display = '';
                        }
                      },
                      
                    
                    }
                    
                    ]
            }
        }
    },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Data',
        data: {{ graph1AY2P | safe}},
        color: '#84b046'
      }]
    });



  </script>
