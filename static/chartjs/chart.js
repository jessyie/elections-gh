

    var osmMap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '© <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'});
    var osmMap2 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '© <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'});

    var cartoMap = L.tileLayer(
      'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png',
      {
        // http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
        attribution: 'Carto © CC BY 3.0, OpenStreetMap © ODbL',
        name: 'Carto Light',
      },
    );

    ///(2)

    var cartoMap2 = L.tileLayer(
      'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png',
      {
        // http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
        attribution: 'Carto © CC BY 3.0, OpenStreetMap © ODbL',
        name: 'Carto Light',
      },
    );



    var imageryMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
})

    //(2)

    var imageryMap2 = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
})

    var map = L.map('map', {
        center: [6.67461973426974, -1.5654175654494509],
        zoom: 6,
        layers:[osmMap]

    });


    var map2 = L.map('map2', {
        center: [6.67461973426974, -1.5654175654494509],
        zoom: 6,
        layers:[osmMap2]

    });


    // create fullscreen control
        var fsControl = L.control.fullscreen();

        var fsControl2 = L.control.fullscreen();
        // add fullscreen control to the map
        map.addControl(fsControl);

        map2.addControl(fsControl2);





//Geojsons//
var regions = JSON.parse(document.getElementById('GHMap_json').textContent);

var regions_16 = JSON.parse(document.getElementById('GHMap2_json').textContent);


var polling_stations = JSON.parse(document.getElementById('GHMap_PS_json').textContent);



    function createRegionGeoJSON(regions) {
        return L.geoJSON(regions,{
        // Define onEachFeature function to create and bind tooltip
        onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.region) {
                layer.bindTooltip(feature.properties.region);
            }
        }
    })
    }

    var regionsData = createRegionGeoJSON(regions).addTo(map);

    var regionsData2 = createRegionGeoJSON(regions).addTo(map2);


    var regions16Data = createRegionGeoJSON(regions_16).addTo(map);

    var regions16Data2 = createRegionGeoJSON(regions_16).addTo(map2);

    // var ahafoData = L.geoJSON(ahafo,{
    //     // Define onEachFeature function to create and bind tooltip
    //     onEachFeature: function(feature, layer) {
    //         if (feature.properties) {
    //            var tooltipContent = feature.properties['PS Name'] + "<br>" + feature.properties['Plus code'];
    //             layer.bindTooltip(tooltipContent);
    //         }
    //     }
    // }
    //  ).addTo(map);


    // PLURAL POLLING STATIONS

    // var ahafoData = L.geoJSON(ahafo, {
    //      // Define onEachFeature function to create and bind tooltip
    //     onEachFeature: function(feature, layer) {
    //         if (feature.properties) {
    //             var tooltipContent = "PS Name: " + feature.properties['PS Name'] + "<br>" + "Plus code: " + feature.properties['Plus code'];
    //             layer.bindTooltip(tooltipContent);
    //         }
    //     },
    //     // Define pointToLayer function to create circle marker
    //     pointToLayer: function (feature, latlng){
    //         return L.circleMarker(latlng, {
    //             radius: 1,
    //             fillColor: 'red',
    //             color: 'red',
    //             weight: 0.3,
    //             opacity: 0.5,
    //             fillOpacity: 0.4
    //         });
    //     }

    // }).addTo(map);

    // var ashantiData = L.geoJSON(ashanti, {
    //      // Define onEachFeature function to create and bind tooltip
    //     onEachFeature: function(feature, layer) {
    //         if (feature.properties) {
    //             var tooltipContent = "PS Name: " + feature.properties['PS Name'] + "<br>" + "Plus code: " + feature.properties['Plus code'];
    //             layer.bindTooltip(tooltipContent);
    //         }
    //     },
    //     // Define pointToLayer function to create circle marker
    //     pointToLayer: function (feature, latlng){
    //         return L.circleMarker(latlng, {
    //             radius: 1,
    //             fillColor: 'blue',
    //             color: 'blue',
    //             weight: 0.3,
    //             opacity: 0.5,
    //             fillOpacity: 0.4
    //         });
    //     }

    // }).addTo(map);

    // var bonoData = L.geoJSON(bono, {
    //      // Define onEachFeature function to create and bind tooltip
    //     onEachFeature: function(feature, layer) {
    //         if (feature.properties) {
    //             var tooltipContent = "PS Name: " + feature.properties['PS Name'] + "<br>" + "Plus code: " + feature.properties['Plus code'];
    //             layer.bindTooltip(tooltipContent);
    //         }
    //     },
    //     // Define pointToLayer function to create circle marker
    //     pointToLayer: function (feature, latlng){
    //         return L.circleMarker(latlng, {
    //             radius: 1,
    //             fillColor: 'pink',
    //             color: 'pink',
    //             weight: 0.3,
    //             opacity: 0.5,
    //             fillOpacity: 0.4
    //         });
    //     }

    // }).addTo(map);

    // var bonoeastData = L.geoJSON(bonoeast, {
    //      // Define onEachFeature function to create and bind tooltip
    //     onEachFeature: function(feature, layer) {
    //         if (feature.properties) {
    //             var tooltipContent = "PS Name: " + feature.properties['PS Name'] + "<br>" + "Plus code: " + feature.properties['Plus code'];
    //             layer.bindTooltip(tooltipContent);
    //         }
    //     },
    //     // Define pointToLayer function to create circle marker
    //     pointToLayer: function (feature, latlng){
    //         return L.circleMarker(latlng, {
    //             radius: 1,
    //             fillColor: 'pink',
    //             color: 'pink',
    //             weight: 0.3,
    //             opacity: 0.5,
    //             fillOpacity: 0.4
    //         });
    //     }

    // }).addTo(map);

    // var centralData = L.geoJSON(central, {
    //      // Define onEachFeature function to create and bind tooltip
    //     onEachFeature: function(feature, layer) {
    //         if (feature.properties) {
    //             var tooltipContent = "PS Name: " + feature.properties['PS Name'] + "<br>" + "Plus code: " + feature.properties['Plus code'];
    //             layer.bindTooltip(tooltipContent);
    //         }
    //     },
    //     // Define pointToLayer function to create circle marker
    //     pointToLayer: function (feature, latlng){
    //         return L.circleMarker(latlng, {
    //             radius: 1,
    //             fillColor: 'purple',
    //             color: 'purple',
    //             weight: 0.3,
    //             opacity: 0.5,
    //             fillOpacity: 0.4
    //         });
    //     }

    // }).addTo(map);

    // var easternData = L.geoJSON(eastern, {
    //      // Define onEachFeature function to create and bind tooltip
    //     onEachFeature: function(feature, layer) {
    //         if (feature.properties) {
    //             var tooltipContent = "PS Name: " + feature.properties['PS Name'] + "<br>" + "Plus code: " + feature.properties['Plus code'];
    //             layer.bindTooltip(tooltipContent);
    //         }
    //     },
    //     // Define pointToLayer function to create circle marker
    //     pointToLayer: function (feature, latlng){
    //         return L.circleMarker(latlng, {
    //             radius: 1,
    //             fillColor: 'darkred',
    //             color: 'darkred',
    //             weight: 0.3,
    //             opacity: 0.5,
    //             fillOpacity: 0.4
    //         });
    //     }

    // }).addTo(map);

    // var greateraccraData = L.geoJSON(greateraccra, {
    //      // Define onEachFeature function to create and bind tooltip
    //     onEachFeature: function(feature, layer) {
    //         if (feature.properties) {
    //             var tooltipContent = "PS Name: " + feature.properties['PS Name'] + "<br>" + "Plus code: " + feature.properties['Plus code'];
    //             layer.bindTooltip(tooltipContent);
    //         }
    //     },
    //     // Define pointToLayer function to create circle marker
    //     pointToLayer: function (feature, latlng){
    //         return L.circleMarker(latlng, {
    //             radius: 1,
    //             fillColor: 'green',
    //             color: 'green',
    //             weight: 0.3,
    //             opacity: 0.5,
    //             fillOpacity: 0.4
    //         });
    //     }

    // }).addTo(map);

    // var northeastData = L.geoJSON(northeast, {
    //      // Define onEachFeature function to create and bind tooltip
    //     onEachFeature: function(feature, layer) {
    //         if (feature.properties) {
    //             var tooltipContent = "PS Name: " + feature.properties['PS Name'] + "<br>" + "Plus code: " + feature.properties['Plus code'];
    //             layer.bindTooltip(tooltipContent);
    //         }
    //     },
    //     // Define pointToLayer function to create circle marker
    //     pointToLayer: function (feature, latlng){
    //         return L.circleMarker(latlng, {
    //             radius: 1,
    //             fillColor: 'darkgreen',
    //             color: 'darkgreen',
    //             weight: 0.3,
    //             opacity: 0.5,
    //             fillOpacity: 0.4
    //         });
    //     }

    // }).addTo(map);

    // var northernData = L.geoJSON(northern, {
    //      // Define onEachFeature function to create and bind tooltip
    //     onEachFeature: function(feature, layer) {
    //         if (feature.properties) {
    //             var tooltipContent = "PS Name: " + feature.properties['PS Name'] + "<br>" + "Plus code: " + feature.properties['Plus code'];
    //             layer.bindTooltip(tooltipContent);
    //         }
    //     },
    //     // Define pointToLayer function to create circle marker
    //     pointToLayer: function (feature, latlng){
    //         return L.circleMarker(latlng, {
    //             radius: 1,
    //             fillColor: 'darkblue',
    //             color: 'darkblue',
    //             weight: 0.3,
    //             opacity: 0.5,
    //             fillOpacity: 0.4
    //         });
    //     }

    // }).addTo(map);

    // var otiData = L.geoJSON(oti, {
    //      // Define onEachFeature function to create and bind tooltip
    //     onEachFeature: function(feature, layer) {
    //         if (feature.properties) {
    //             var tooltipContent = "PS Name: " + feature.properties['PS Name'] + "<br>" + "Plus code: " + feature.properties['Plus code'];
    //             layer.bindTooltip(tooltipContent);
    //         }
    //     },
    //     // Define pointToLayer function to create circle marker
    //     pointToLayer: function (feature, latlng){
    //         return L.circleMarker(latlng, {
    //             radius: 1,
    //             fillColor: 'lightgreen',
    //             color: 'lightgreen',
    //             weight: 0.3,
    //             opacity: 0.5,
    //             fillOpacity: 0.4
    //         });
    //     }

    // }).addTo(map);

    // var savannahData = L.geoJSON(savannah, {
    //      // Define onEachFeature function to create and bind tooltip
    //     onEachFeature: function(feature, layer) {
    //         if (feature.properties) {
    //             var tooltipContent = "PS Name: " + feature.properties['PS Name'] + "<br>" + "Plus code: " + feature.properties['Plus code'];
    //             layer.bindTooltip(tooltipContent);
    //         }
    //     },
    //     // Define pointToLayer function to create circle marker
    //     pointToLayer: function (feature, latlng){
    //         return L.circleMarker(latlng, {
    //             radius: 1,
    //             fillColor: 'cadetblue',
    //             color: 'cadetblue',
    //             weight: 0.3,
    //             opacity: 0.5,
    //             fillOpacity: 0.4
    //         });
    //     }

    // }).addTo(map);

    // var uppereastData = L.geoJSON(uppereast, {
    //      // Define onEachFeature function to create and bind tooltip
    //     onEachFeature: function(feature, layer) {
    //         if (feature.properties) {
    //             var tooltipContent = "PS Name: " + feature.properties['PS Name'] + "<br>" + "Plus code: " + feature.properties['Plus code'];
    //             layer.bindTooltip(tooltipContent);
    //         }
    //     },
    //     // Define pointToLayer function to create circle marker
    //     pointToLayer: function (feature, latlng){
    //         return L.circleMarker(latlng, {
    //             radius: 1,
    //             fillColor: 'black',
    //             color: 'black',
    //             weight: 0.3,
    //             opacity: 0.5,
    //             fillOpacity: 0.4
    //         });
    //     }

    // }).addTo(map);

    // var upperwestData = L.geoJSON(upperwest, {
    //      // Define onEachFeature function to create and bind tooltip
    //     onEachFeature: function(feature, layer) {
    //         if (feature.properties) {
    //             var tooltipContent = "PS Name: " + feature.properties['PS Name'] + "<br>" + "Plus code: " + feature.properties['Plus code'];
    //             layer.bindTooltip(tooltipContent);
    //         }
    //     },
    //     // Define pointToLayer function to create circle marker
    //     pointToLayer: function (feature, latlng){
    //         return L.circleMarker(latlng, {
    //             radius: 1,
    //             fillColor: 'beige',
    //             color: 'beige',
    //             weight: 0.3,
    //             opacity: 0.5,
    //             fillOpacity: 0.4
    //         });
    //     }

    // }).addTo(map);

    // var voltaData = L.geoJSON(volta, {
    //      // Define onEachFeature function to create and bind tooltip
    //     onEachFeature: function(feature, layer) {
    //         if (feature.properties) {
    //             var tooltipContent = "PS Name: " + feature.properties['PS Name'] + "<br>" + "Plus code: " + feature.properties['Plus code'];
    //             layer.bindTooltip(tooltipContent);
    //         }
    //     },
    //     // Define pointToLayer function to create circle marker
    //     pointToLayer: function (feature, latlng){
    //         return L.circleMarker(latlng, {
    //             radius: 1,
    //             fillColor: 'gray',
    //             color: 'gray',
    //             weight: 0.3,
    //             opacity: 0.5,
    //             fillOpacity: 0.4
    //         });
    //     }

    // }).addTo(map);

    // var westerngData = L.geoJSON(westerng, {
    //      // Define onEachFeature function to create and bind tooltip
    //     onEachFeature: function(feature, layer) {
    //         if (feature.properties) {
    //             var tooltipContent = "PS Name: " + feature.properties['PS Name'] + "<br>" + "Plus code: " + feature.properties['Plus code'];
    //             layer.bindTooltip(tooltipContent);
    //         }
    //     },
    //     // Define pointToLayer function to create circle marker
    //     pointToLayer: function (feature, latlng){
    //         return L.circleMarker(latlng, {
    //             radius: 1,
    //             fillColor: 'orange',
    //             color: 'orange',
    //             weight: 0.3,
    //             opacity: 0.5,
    //             fillOpacity: 0.4
    //         });
    //     }

    // }).addTo(map);

    // var westernnorthData = L.geoJSON(westernnorth, {
    //      // Define onEachFeature function to create and bind tooltip
    //     onEachFeature: function(feature, layer) {
    //         if (feature.properties) {
    //             var tooltipContent = "PS Name: " + feature.properties['PS Name'] + "<br>" + "Plus code: " + feature.properties['Plus code'];
    //             layer.bindTooltip(tooltipContent);
    //         }
    //     },
    //     // Define pointToLayer function to create circle marker
    //     pointToLayer: function (feature, latlng){
    //         return L.circleMarker(latlng, {
    //             radius: 1,
    //             fillColor: 'lightgray',
    //             color: 'lightgray',
    //             weight: 0.3,
    //             opacity: 0.5,
    //             fillOpacity: 0.4
    //         });
    //     }

    // }).addTo(map);

    //____________________________


    // SINGULAR POLLING STATIONS


    //____________________________

    function createPolling_StationGeoJSON(polling_stations) {
        return L.geoJSON(polling_stations, {
         // Define onEachFeature function to create and bind tooltip
        onEachFeature: function(feature, layer) {
            if (feature.properties) {
                var tooltipContent = "PS Code: " + feature.properties['PS Code'] + "<br>" + "PS Name: " + feature.properties['PS Name'] + "<br>" + "Plus code: " + feature.properties['Plus code'] + "<br>" + "GHPostGPS: " + feature.properties['GhPostGPS'];
                layer.bindTooltip(tooltipContent);
            }
        },
        // Define pointToLayer function to create circle marker
        pointToLayer: function (feature, latlng){
            return L.circleMarker(latlng, {
                radius: 1,
                fillColor: 'black',
                color: 'black',
                weight: 0.3,
                opacity: 0.5,
                fillOpacity: 0.4
            });
        }

    })
    }

    var polling_stationData = createPolling_StationGeoJSON(polling_stations).addTo(map);

    var polling_stationData2 = createPolling_StationGeoJSON(polling_stations).addTo(map2);

    //_______________//

    // FLASH_PS

    //_______________//

//     var flashPS = JSON.parse(document.getElementById('polling_stations').textContent)

//     var incidentTypeNames = {
//     'F000' : "None",
//     'F100' : "Total Incidents",
//     'F101' : "Rowdiness",
//     'F102' : "Intimidation of voters",
//     'F103' : "Rowdiness and intimation of voter",
//     'F104' : "Religious/communal conflict",
//     'F105' : "Ethnic conflict",
//     'F106' : "Boundary/land dispute",
//     'F107' : "Intermittent conflict",
//     'F108' : "Unwanted arguments",
//     'F109' : "Clashes between political activists and supporters / misunderstanding",
//     'F110' : "Youth rowdicalism and violence",
//     'F111' : "Threat of other nationals /fulani herdsmen to participate in the exercise",
//     'F112' : "Chieftancy conflict/dispute",
//     'F113' : "Intimidation and assault on EC officials",
//     'F114' : "Destruction of EC materials",
//     'F115' : "Intimidation and ballot box snatching",
//     'F116' : "Guns & matchetes violence on voters",
//     'F117' : "Sales of alcohol and rowdiness",
//     'F118' : "Obstruction of the process and intimidation",
//     'F119' : "History of electoral violence",
//     // Add more mappings as needed
// };

//     var responseTypeNames = {
//     'R100': "None",
//     'R101': "Police",
//     'R102': "Police Personnel",
//     'R103': "Police Patrol Team",
//     'R104': "Police Presence/Protection",
//     'R105': "Army/Military",
//     'R106': "Army/Military Patrol Team",
//     'R107': "Patrol Team",
//     'R108': "Security Personnel",
//     'R109': "Extra Security Personnel",
//     'R110': "Police and Army",
//     // Add more mappings as needed
// };

//     // Function to get the name for incident type
//     function getIncidentTypeName(typeCode) {
//         return incidentTypeNames[typeCode] || typeCode;
// }

// // Function to get the name for response type
//     function getResponseTypeName(typeCode) {
//         return responseTypeNames[typeCode] || typeCode;
// }

//     var flashPS_Data = L.geoJSON(flashPS, {
//          // Define onEachFeature function to create and bind tooltip
//         onEachFeature: function(feature, layer) {
//             if (feature.properties) {
//             // Construct tooltip content with mapped names
//                 var tooltipContent = "PS Name: " + feature.properties['loc_of_inc'] + "<br>" +
//                      "PS Code: " + feature.properties['PSCode'] + "<br>" +
//                      "Incident Type: " + getIncidentTypeName(feature.properties['incident_type']) + "<br>" +
//                      "Response Type: " + getResponseTypeName(feature.properties['response_type']);

//                 // Bind tooltip to the layer
//                 layer.bindTooltip(tooltipContent);
//         }
//         },
//         // Define pointToLayer function to create circle marker
//         pointToLayer: function (feature, latlng) {
//         // Check if the incident type column is not empty
//             var fillColor = feature.properties['incident_type'] ? 'red' : 'black';
//             return L.circleMarker(latlng, {
//                 radius: 1,
//                 fillColor: fillColor,
//                 color: 'black',
//                 weight: 0.3,
//                 opacity: 0.5,
//                 fillOpacity: 0.4
//             });
//         }

//     }).addTo(map);

    //_________________________________________________________________________//

    var flashPS = JSON.parse(document.getElementById('polling_stations').textContent);

    var incidentTypeNames = {
        'F000': "None",
        'F100': "Total Incidents",
        'F101': "Rowdiness",
        'F102': "Intimidation of voters",
        'F103': "Rowdiness and intimidation of voters",
        'F104': "Religious/communal conflict",
        'F105': "Ethnic conflict",
        'F106': "Boundary/land dispute",
        'F107': "Intermittent conflict",
        'F108': "Unwanted arguments",
        'F109': "Clashes between political activists and supporters / misunderstanding",
        'F110': "Youth radicalism and violence",
        'F111': "Threat of other nationals / Fulani herdsmen to participate in the exercise",
        'F112': "Chieftaincy conflict/dispute",
        'F113': "Intimidation and assault on EC officials",
        'F114': "Destruction of EC materials",
        'F115': "Intimidation and ballot box snatching",
        'F116': "Guns & machetes violence on voters",
        'F117': "Sales of alcohol and rowdiness",
        'F118': "Obstruction of the process and intimidation",
        'F119': "History of electoral violence",
        // Add more mappings as needed
    };

    var responseTypeNames = {
        'R100': "None",
        'R101': "Police",
        'R102': "Police Personnel",
        'R103': "Police Patrol Team",
        'R104': "Police Presence/Protection",
        'R105': "Army/Military",
        'R106': "Army/Military Patrol Team",
        'R107': "Patrol Team",
        'R108': "Security Personnel",
        'R109': "Extra Security Personnel",
        'R110': "Police and Army",
        // Add more mappings as needed
    };

    // Function to get the name for incident type
    function getIncidentTypeName(typeCode) {
        return incidentTypeNames[typeCode] || typeCode;
    }

    // Function to get the name for response type
    function getResponseTypeName(typeCode) {
        return responseTypeNames[typeCode] || typeCode;
    }

    // Step 1: Aggregate the data by PSCode
    var aggregatedData = {};

    flashPS.features.forEach(function(feature) {
        var psCode = feature.properties['PSCode'];
        if (!aggregatedData[psCode]) {
            aggregatedData[psCode] = {
                loc_of_inc: feature.properties['loc_of_inc'],
                incidentTypes: {},
                responseTypes: {},
                rawData: []
            };
        }
        var incidentType = getIncidentTypeName(feature.properties['incident_type']);
        var responseType = getResponseTypeName(feature.properties['response_type']);

        // Aggregate incident types
        if (incidentType) {
            if (!aggregatedData[psCode].incidentTypes[incidentType]) {
                aggregatedData[psCode].incidentTypes[incidentType] = 0;
            }
            aggregatedData[psCode].incidentTypes[incidentType]++;
        }

        // Aggregate response types
        if (responseType) {
            if (!aggregatedData[psCode].responseTypes[responseType]) {
                aggregatedData[psCode].responseTypes[responseType] = 0;
            }
            aggregatedData[psCode].responseTypes[responseType]++;
        }

        // Add raw data
        aggregatedData[psCode].rawData.push(feature.properties);
    });

    // Function to create the popup content
    function createPopupContent(psCode) {
        var data = aggregatedData[psCode];
        if (!data) return '';

        var incidentTypeContent = Object.keys(data.incidentTypes).map(function(type) {
            return type ///+ ': ' + data.incidentTypes[type];
        }).join('<br>');

        var responseTypeContent = Object.keys(data.responseTypes).map(function(type) {
            return type ///+ ': ' + data.responseTypes[type];
        }).join('<br>');

        var rawTableContent = data.rawData.map(function(item, index) {
            return `<table>
            <tr>
                <th># </th>
                <th>PS Code</th>
                <th>PS Name</th>
                <th>Incident Type</th>
                <th>Response Type</th>
            </tr>
            <tr>
                <td>(${index + 1})</td>
                <td>${item['PSCode']}</td>
                <td>${item['loc_of_inc']}</td>
                <td>${getIncidentTypeName(item['incident_type'])}</td>
                <td>${getResponseTypeName(item['response_type'])}</td>
            </tr>
            </table>`;

        }).join('');

        var popupContent = "PS Code: " + psCode + "<br>" +
                           "Location of incident: " + data.loc_of_inc + "<br>" +
                           "Incident Type: " + incidentTypeContent + "<br>" +
                           "Response Type: " + responseTypeContent + "<br>" +
                           "Frequency: " + data.rawData.length + "<br>" +
                           '<button onclick="showRawTable(event, \'' + psCode + '\')">Show More</button>' +
                           '<div id="raw-table-' + psCode + '" style="display:none;"><table>' + rawTableContent + '</table></div>';

        return popupContent;
    }

    // Function to show the raw table
    function showRawTable(event, psCode) {
        event.preventDefault();
        var tableDiv = document.getElementById('raw-table-' + psCode);
        if (tableDiv) {
            tableDiv.style.display = tableDiv.style.display === 'none' ? 'block' : 'none';
        }
    }

    // Add the GeoJSON layer with popups
    // var flashPS_Data = L.geoJSON(flashPS, {
    //     onEachFeature: function(feature, layer) {
    //         var psCode = feature.properties['PSCode'];
    //         var popupContent = createPopupContent(psCode);
    //         layer.bindPopup(popupContent);
    //     },
    //     pointToLayer: function (feature, latlng) {
    //         var fillColor = feature.properties['incident_type'] ? 'red' : 'black';
    //         return L.circleMarker(latlng, {
    //             radius: 1,
    //             fillColor: fillColor,
    //             color: 'black',
    //             weight: 0.3,
    //             opacity: 0.5,
    //             fillOpacity: 0.4
    //         });
    //     }
    // }).addTo(map);

    // Add the GeoJSON layer with popups (2)

    function createFlashPSGeoJSON(flashPS) {
        return L.geoJSON(flashPS, {
        onEachFeature: function(feature, layer) {
            var psCode = feature.properties['PSCode'];
            var tooltipContent = createPopupContent(psCode);
            layer.bindPopup(tooltipContent);
        },
        pointToLayer: function (feature, latlng) {
            var fillColor = feature.properties['incident_type'] ? 'red' : 'black';
            return L.circleMarker(latlng, {
                radius: 1,
                fillColor: fillColor,
                color: 'black',
                weight: 0.3,
                opacity: 0.5,
                fillOpacity: 0.4
            });
        }
    })
    }


    var flashPS_Data2 = createFlashPSGeoJSON(flashPS).addTo(map2);

    // FEATURE GROUP //

    //var ps_name = L.featureGroup([ahafoData, ashantiData, greateraccraData, northernData, northeastData, voltaData, easternData, centralData, uppereastData, upperwestData, bonoeastData, bonoData, savannahData, otiData, westerngData, westernnorthData]).addTo(map);

    function createValidVotesGeoJSON(parliament10) {
    return L.geoJSON(parliament10, {
        onEachFeature: function(feature, layer) {
            if (feature.properties) {
                // Initial tooltip content
                var tooltipContent = "Region: " + feature.properties['region'] + "<br>" +
                    "Winner: " + feature.properties['Winner'] + " " + feature.properties['Winner_Percentage'] + "%" + "<br>" +
                    "Second place: " + feature.properties['Second_Highest_Value_Name'] + " " + feature.properties['Second_Highest_Percentage'] + "%";
                
                // Array to store previous winners
                var previousWinners = [];

                // Iterate over feature properties to find previous winners
                for (var key in feature.properties) {
                    if (key.startsWith("Winner_") && key !== "Winner_Percentage") {
                        var year = key.split("_")[1];
                        // Convert year to a number for sorting purposes, except for '2009'
                        var numericYear = (year === '2009') ? 2008.5 : parseFloat(year);
                        previousWinners.push({ year: year, numericYear: numericYear, value: feature.properties[key] });
                    }
                }

                // Sort previous winners based on numericYear in descending order
                previousWinners.sort(function(a, b) {
                    return b.numericYear - a.numericYear;
                });

                // Construct tooltip content from sorted previous winners
                previousWinners.forEach(function(item) {
                    // Rename year '2009' to '2008 Runoff' after sorting
                    var displayYear = (item.year === '2009') ? '2008 Runoff' : item.year;
                    tooltipContent += "<br>Winner " + displayYear + ": " + item.value;
                });

                // Bind the constructed tooltip to the layer
                layer.bindTooltip(tooltipContent);
            }
        },
        style: function(feature) {
            var value = feature.properties['Values_map'];
            var color;
            if (value === 8) {
                color = 'green';
            } else if (value === 10) {
                color = 'blue';
            } else {
                color = 'red';
            }
            return { fillColor: color, color: 'black', weight: 1, fillOpacity: 0.7 };
        }
    });
}


    var parliament10 = JSON.parse(document.getElementById('parliament10').textContent)


    var parliament_10 = createValidVotesGeoJSON(parliament10).addTo(map);


    var presidential10 = JSON.parse(document.getElementById('presidential10').textContent)


    var presidential_10 = createValidVotesGeoJSON(presidential10).addTo(map);


    var parliament16 = JSON.parse(document.getElementById('parliament16').textContent)


    var parliament_16 = createValidVotesGeoJSON(parliament16).addTo(map);


    var presidential16 = JSON.parse(document.getElementById('presidential16').textContent)


    var presidential_16 = createValidVotesGeoJSON(presidential16).addTo(map);

//     var parliamentConst16 = JSON.parse(document.getElementById('parliamentConst16').textContent)


//         var parliamentConst_16 = L.geoJSON(parliamentConst16, {
//             onEachFeature: function(feature, layer) {
//             if (feature.properties) {
//                 var tooltipContent = "Constituency: " + feature.properties['Constituen'] + "<br>" + "Winner: " + feature.properties['Winner'] + " " + feature.properties['Winner_Percentage'] + "%" + "<br>" + "Second place: " + feature.properties['Second_Highest_Value_Name'] + " " + feature.properties['Second_Highest_Percentage'] + "%";
//                  // Dynamically add previous years' winner data
//                 for (var key in feature.properties) {
//                     // Look for all keys that start with "Winner_" to get past election winners
//                     if (key.startsWith("Winner_")) {
//                         // Extract the year from the key (e.g., "Winner_2008" -> 2008)
//                         var year = key.split("_")[1];

//                         // Skip the current year (assuming it's the same key format)
//                         if (year !== 'Percentage') {
//                             // Add the winner for that previous year to the tooltip
//                             tooltipContent += "<br>Winner " + year + ": " + feature.properties[key];
//                         }
//                     }
//                 }
//                 layer.bindTooltip(tooltipContent);
//             }
//         },
//             style: function(feature) {
//             var value = feature.properties['Values_map']; // Assuming 'value' is the property containing the values
//             var color;
//             if (value === 8) {
//                 color = 'green';
//             } else if (value === 10) {
//                 color = 'blue';
//             } else {
//             color = 'red';
//         }
//         return { fillColor: color, color: 'black', weight: 1, fillOpacity: 0.7 };
//     }
// }).addTo(map);

//     var presidentialConst16 = JSON.parse(document.getElementById('presidentialConst16').textContent)


//         var presidentialConst_16 = L.geoJSON(presidentialConst16, {
//             onEachFeature: function(feature, layer) {
//             if (feature.properties) {
//                 var tooltipContent = "Constituency: " + feature.properties['Constituen'] + "<br>" + "Winner: " + feature.properties['Winner'] + " " + feature.properties['Winner_Percentage'] + "%" + "<br>" + "Second place: " + feature.properties['Second_Highest_Value_Name'] + " " + feature.properties['Second_Highest_Percentage'] + "%";
//                  // Dynamically add previous years' winner data
//                 for (var key in feature.properties) {
//                     // Look for all keys that start with "Winner_" to get past election winners
//                     if (key.startsWith("Winner_")) {
//                         // Extract the year from the key (e.g., "Winner_2008" -> 2008)
//                         var year = key.split("_")[1];

//                         // Skip the current year (assuming it's the same key format)
//                         if (year !== 'Percentage') {
//                             // Add the winner for that previous year to the tooltip
//                             tooltipContent += "<br>Winner " + year + ": " + feature.properties[key];
//                         }
//                     }
//                 }
//                 layer.bindTooltip(tooltipContent);
//             }
//         },
//             style: function(feature) {
//             var value = feature.properties['Values_map']; // Assuming 'value' is the property containing the values
//             var color;
//             if (value === 8) {
//                 color = 'green';
//             } else if (value === 10) {
//                 color = 'blue';
//             } else {
//             color = 'red';
//         }
//         return { fillColor: color, color: 'black', weight: 1, fillOpacity: 0.7 };
//     }
// }).addTo(map);


        ////////////////////////////////////////////////////////////////////////////

function createValidVotes_ConstGeoJSON(parliamentConst16CONST2) {
    return L.geoJSON(parliamentConst16CONST2, {
        onEachFeature: function(feature, layer) {
            if (feature.properties) {
                var tooltipContent = 
                    "Constituency: " + feature.properties['Constituen'] + "<br>" + 
                    "Constituency Code: " + feature.properties['ConstCode'] + "<br>" + 
                    "Winner: " + feature.properties['Winner'] + " " + feature.properties['Winner_Percentage'] + "%" + "<br>" + 
                    "Second place: " + feature.properties['Second_Highest_Value_Name'] + " " + feature.properties['Second_Highest_Percentage'] + "%";

                // Collect previous years' winner keys, excluding 'Winner_Percentage'
                var previousWinners = [];

                for (var key in feature.properties) {
                    // Look for keys that start with "Winner_" but exclude "Winner_Percentage"
                    if (key.startsWith("Winner_") && key !== "Winner_Percentage") {
                        var year = key.split("_")[1];
                        previousWinners.push({ year: year, value: feature.properties[key] });
                    }
                }

                // Sort previousWinners array in descending order based on the year
                previousWinners.sort(function(a, b) {
                    return parseFloat(b.year) - parseFloat(a.year); // Descending order
                });

                // Rename year '2009' to '2008 Runoff' after sorting
                previousWinners.forEach(function(item) {
                    if (item.year === '2009') {
                        item.year = '2008 Runoff';
                    }
                });

                // Add sorted previous winners to the tooltip content
                previousWinners.forEach(function(item) {
                    tooltipContent += "<br>Winner " + item.year + ": " + item.value;
                });

                layer.bindTooltip(tooltipContent);
            }
        },
        style: function(feature) {
            var value = feature.properties['Values_map']; // Assuming 'value' is the property containing the values
            var color;
            if (value === 8) {
                color = 'green';
            } else if (value === 10) {
                color = 'blue';
            } else {
                color = 'red';
            }
            return { fillColor: color, color: 'black', weight: 1, fillOpacity: 0.7 };
        }
    });
}



        // 2020 CONSTITUENCY PARLIAMENT

    var parliamentConst16CONST2 = JSON.parse(document.getElementById('parliamentConst16CONST2').textContent)


    var parliamentConst_16CONST2 = createValidVotes_ConstGeoJSON(parliamentConst16CONST2).addTo(map);


    var parliamentConst16CONST2_10 = JSON.parse(document.getElementById('parliamentConst16CONST2_10').textContent)


    var parliamentConst_16CONST2_10 = createValidVotes_ConstGeoJSON(parliamentConst16CONST2_10).addTo(map);


    var parliamentConst16CONST2_2024 = JSON.parse(document.getElementById('parliamentConst16CONST2_2024').textContent)


    var parliamentConst_16CONST2_2024 = createValidVotes_ConstGeoJSON(parliamentConst16CONST2_2024).addTo(map);


        ////////////////////////////////////////////////////////////////////////////


        // 2020 CONSTITUENCY PRESIDENTIAL

    var presidentialConst16CONST2 = JSON.parse(document.getElementById('presidentialConst16CONST2').textContent)


    var presidentialConst_16CONST2 = createValidVotes_ConstGeoJSON(presidentialConst16CONST2).addTo(map);


    var presidentialConst16CONST2_10 = JSON.parse(document.getElementById('presidentialConst16CONST2_10').textContent)


    var presidentialConst_16CONST2_10 = createValidVotes_ConstGeoJSON(presidentialConst16CONST2_10).addTo(map);


    var presidentialConst16CONST2_2024 = JSON.parse(document.getElementById('presidentialConst16CONST2_2024').textContent)


    var presidentialConst_16CONST2_2024 = createValidVotes_ConstGeoJSON(presidentialConst16CONST2_2024).addTo(map);

    // var parliament10 = L.geoJSON(merged_GHMap2A_p, {
    //     style: function(feature) {
    //         var value = feature['properties']['Values_map']; // Assuming 'value' is the property containing the values
    //         var color;
    //         if (value === 8) {
    //             color = 'green';
    //         } else if (value === 10) {
    //             color = 'blue';
    //         } else {
    //             color = 'red';
    //         }
    //         return { fillColor: color, color: 'black', weight: 1, fillOpacity: 0.7 };
    //     }
    // }).addTo(map);

    //----------------

    // CHOROPLETH //

        // REGIONS //

    var flash_REG = JSON.parse(document.getElementById('flashReg').textContent)

//     var flashREG = L.choropleth(flash_REG, {
//     valueProperty: 'F100', // which property in the features to use
//     scale: ['white', 'red'], // chroma.js scale - include as many as you like
//     steps: 5, // number of breaks or steps in range
//     mode: 'q', // q for quantile, e for equidistant, k for k-means
//     style: {
//         color: '#fff', // border color
//         weight: 2,
//         fillOpacity: 0.8
//     },
//     onEachFeature: function(feature, layer) {
//         // if (feature.properties) {
//         //         var tooltipContent = "Region: " + feature.properties['RegName'] + "<br>" + "Total: " + feature.properties['F100'] + "<br>" + "Rowdiness: " + feature.properties['F101'] + "<br>" + "Intimidation of voters: " + feature.properties['F102'] + "<br>" + "Rowdiness and Intimidation of voters: " + feature.properties['F103'] + "<br>" + "Religious/communal confict: " + feature.properties['F104'] + "<br>" + "Ethnic conflict: " + feature.properties['F105'] + "<br>" + "Boundary/land dispute: " + feature.properties['F106'] + "<br>" + "Intermittent conflict: " + feature.properties['F107'] + "<br>" + "Unwanted arguments: " + feature.properties['F108'] + "<br>" + "Clashes between political activists and supporters / misunderstanding: " + feature.properties['F109'] + "<br>" + "Youth rowdicalism and violence: " + feature.properties['F110'] + "<br>" + "Threat of other nationals /fulani herdsmen to participate in the exercise: " + feature.properties['F111'] + "<br>" + "Chieftancy conflict/dispute: " + feature.properties['F112'] + "<br>" + "Intimidation and assault on EC officials: " + feature.properties['F113'] + "<br>" + "Destruction of EC materials: " + feature.properties['F114'] + "<br>" + "Intimidation and ballot box snatching: " + feature.properties['F115'] + "<br>" + "Guns & matchetes violence on voters: " + feature.properties['F116'] + "<br>" + "Sales of alcohol and rowdiness: " + feature.properties['F117'] + "<br>" + "Obstruction of the process and intimidation: " + feature.properties['F118'] + "<br>" + "History of electoral violence: " + feature.properties['F119'];
//         //         layer.bindTooltip(tooltipContent);
//         //     }
//         if (feature.properties) {
//             var tooltipContent = "Region: " + feature.properties['RegName'] + "<br>" + "PS Total: " + feature.properties['PS_total'] + "<br>" + "PS affected: " + feature.properties['PS_affected'] + "<br>" + "Percentage PS_affected: " + feature.properties['percentage_PS_affected'] + "%";
            
//             // Add manually specified properties to tooltip content if their value is not zero
//             var properties = {
//                 "Total Incidents": 'F100',
//                 "Rowdiness": 'F101',
//                 "Intimidation of voters": 'F102',
//                 "Rowdiness and intimation of voter": 'F103',
//                 "Religious/communal conflict": 'F104',
//                 "Ethnic conflict": 'F105',
//                 "Boundary/land dispute": 'F106',
//                 "Intermittent conflict": 'F107',
//                 "Unwanted arguments": 'F108',
//                 "Clashes between political activists and supporters / misunderstanding": 'F109',
//                 "Youth rowdicalism and violence": 'F110',
//                 "Threat of other nationals /fulani herdsmen to participate in the exercise": 'F111',
//                 "Chieftancy conflict/dispute": 'F112',
//                 "Intimidation and assault on EC officials": 'F113',
//                 "Destruction of EC materials": 'F114',
//                 "Intimidation and ballot box snatching": 'F115',
//                 "Guns & matchetes violence on voters": 'F116',
//                 "Sales of alcohol and rowdiness": 'F117',
//                 "Obstruction of the process and intimidation": 'F118',
//                 "History of electoral violence": 'F119',

//                 // Add more properties here
//             };
            
//             for (var propName in properties) {
//                 var propertyValue = feature.properties[properties[propName]];
//                 if (propertyValue !== 0) {
//                     tooltipContent += "<br>" + propName + ": " + propertyValue;
//                 }
//             }
            
//             layer.bindTooltip(tooltipContent);
//         }
//     }
// }).addTo(map)

    // (2)

    function flashREG2_choropleth(flash_REG) {
        return L.choropleth(flash_REG, {
    valueProperty: 'F100', // which property in the features to use
    scale: ['white', 'red'], // chroma.js scale - include as many as you like
    steps: 5, // number of breaks or steps in range
    mode: 'q', // q for quantile, e for equidistant, k for k-means
    style: {
        color: '#fff', // border color
        weight: 2,
        fillOpacity: 0.8
    },
    onEachFeature: function(feature, layer) {
        // if (feature.properties) {
        //         var tooltipContent = "Region: " + feature.properties['RegName'] + "<br>" + "Total: " + feature.properties['F100'] + "<br>" + "Rowdiness: " + feature.properties['F101'] + "<br>" + "Intimidation of voters: " + feature.properties['F102'] + "<br>" + "Rowdiness and Intimidation of voters: " + feature.properties['F103'] + "<br>" + "Religious/communal confict: " + feature.properties['F104'] + "<br>" + "Ethnic conflict: " + feature.properties['F105'] + "<br>" + "Boundary/land dispute: " + feature.properties['F106'] + "<br>" + "Intermittent conflict: " + feature.properties['F107'] + "<br>" + "Unwanted arguments: " + feature.properties['F108'] + "<br>" + "Clashes between political activists and supporters / misunderstanding: " + feature.properties['F109'] + "<br>" + "Youth rowdicalism and violence: " + feature.properties['F110'] + "<br>" + "Threat of other nationals /fulani herdsmen to participate in the exercise: " + feature.properties['F111'] + "<br>" + "Chieftancy conflict/dispute: " + feature.properties['F112'] + "<br>" + "Intimidation and assault on EC officials: " + feature.properties['F113'] + "<br>" + "Destruction of EC materials: " + feature.properties['F114'] + "<br>" + "Intimidation and ballot box snatching: " + feature.properties['F115'] + "<br>" + "Guns & matchetes violence on voters: " + feature.properties['F116'] + "<br>" + "Sales of alcohol and rowdiness: " + feature.properties['F117'] + "<br>" + "Obstruction of the process and intimidation: " + feature.properties['F118'] + "<br>" + "History of electoral violence: " + feature.properties['F119'];
        //         layer.bindTooltip(tooltipContent);
        //     }
        if (feature.properties) {
            var tooltipContent = "Region: " + feature.properties['RegName'] + "<br>" + "PS Total: " + feature.properties['PS_total'] + "<br>" + "PS affected: " + feature.properties['PS_affected'] + "<br>" + "Percentage PS_affected: " + feature.properties['percentage_PS_affected'] + "%";
            
            // Add manually specified properties to tooltip content if their value is not zero
            var properties = {
                "Total Incidents": 'F100',
                "Rowdiness": 'F101',
                "Intimidation of voters": 'F102',
                "Rowdiness and intimation of voter": 'F103',
                "Religious/communal conflict": 'F104',
                "Ethnic conflict": 'F105',
                "Boundary/land dispute": 'F106',
                "Intermittent conflict": 'F107',
                "Unwanted arguments": 'F108',
                "Clashes between political activists and supporters / misunderstanding": 'F109',
                "Youth rowdicalism and violence": 'F110',
                "Threat of other nationals /fulani herdsmen to participate in the exercise": 'F111',
                "Chieftancy conflict/dispute": 'F112',
                "Intimidation and assault on EC officials": 'F113',
                "Destruction of EC materials": 'F114',
                "Intimidation and ballot box snatching": 'F115',
                "Guns & matchetes violence on voters": 'F116',
                "Sales of alcohol and rowdiness": 'F117',
                "Obstruction of the process and intimidation": 'F118',
                "History of electoral violence": 'F119',

                // Add more properties here
            };
            
            for (var propName in properties) {
                var propertyValue = feature.properties[properties[propName]];
                if (propertyValue !== 0) {
                    tooltipContent += "<br>" + propName + ": " + propertyValue;
                }
            }
            
            layer.bindTooltip(tooltipContent);
        }
    }
})
    }

    var flashREG2 = flashREG2_choropleth(flash_REG).addTo(map2)

       // CONSTITUENCIES //

    function flashCONST2_choropleth(flash_CONST) {
        return L.choropleth(flash_CONST, {
    valueProperty: 'F100', // which property in the features to use
    scale: ['white', 'red'], // chroma.js scale - include as many as you like
    steps: 5, // number of breaks or steps in range
    mode: 'q', // q for quantile, e for equidistant, k for k-means
    style: {
        color: '#fff', // border color
        weight: 2,
        fillOpacity: 0.8
    },
    onEachFeature: function(feature, layer) {
        // if (feature.properties) {
        //         var tooltipContent = "Constituency: " + feature.properties['ConstName'] + "<br>" + "Total: " + feature.properties['F100'] + "<br>" + "Rowdiness: " + feature.properties['F101'] + "<br>" + "Intimidation of voters: " + feature.properties['F102'] + "<br>" + "Rowdiness and Intimidation of voters: " + feature.properties['F103'] + "<br>" + "Religious/communal confict: " + feature.properties['F104'] + "<br>" + "Ethnic conflict: " + feature.properties['F105'] + "<br>" + "Boundary/land dispute: " + feature.properties['F106'] + "<br>" + "Intermittent conflict: " + feature.properties['F107'] + "<br>" + "Unwanted arguments: " + feature.properties['F108'] + "<br>" + "Clashes between political activists and supporters / misunderstanding: " + feature.properties['F109'] + "<br>" + "Youth rowdicalism and violence: " + feature.properties['F110'] + "<br>" + "Threat of other nationals /fulani herdsmen to participate in the exercise: " + feature.properties['F111'] + "<br>" + "Chieftancy conflict/dispute: " + feature.properties['F112'] + "<br>" + "Intimidation and assault on EC officials: " + feature.properties['F113'] + "<br>" + "Destruction of EC materials: " + feature.properties['F114'] + "<br>" + "Intimidation and ballot box snatching: " + feature.properties['F115'] + "<br>" + "Guns & matchetes violence on voters: " + feature.properties['F116'] + "<br>" + "Sales of alcohol and rowdiness: " + feature.properties['F117'] + "<br>" + "Obstruction of the process and intimidation: " + feature.properties['F118'] + "<br>" + "History of electoral violence: " + feature.properties['F119'];
        //         layer.bindTooltip(tooltipContent);
        //     }
        if (feature.properties) {
            var tooltipContent = "Constituency: " + feature.properties['ConstName'];
            
            // Add manually specified properties to tooltip content if their value is not zero
            var properties = {
                "Total Incidents": 'F100',
                "Rowdiness": 'F101',
                "Intimidation of voters": 'F102',
                "Rowdiness and intimation of voter": 'F103',
                "Religious/communal conflict": 'F104',
                "Ethnic conflict": 'F105',
                "Boundary/land dispute": 'F106',
                "Intermittent conflict": 'F107',
                "Unwanted arguments": 'F108',
                "Clashes between political activists and supporters / misunderstanding": 'F109',
                "Youth rowdicalism and violence": 'F110',
                "Threat of other nationals /fulani herdsmen to participate in the exercise": 'F111',
                "Chieftancy conflict/dispute": 'F112',
                "Intimidation and assault on EC officials": 'F113',
                "Destruction of EC materials": 'F114',
                "Intimidation and ballot box snatching": 'F115',
                "Guns & matchetes violence on voters": 'F116',
                "Sales of alcohol and rowdiness": 'F117',
                "Obstruction of the process and intimidation": 'F118',
                "History of electoral violence": 'F119',

                // Add more properties here
            };
            
            for (var propName in properties) {
                var propertyValue = feature.properties[properties[propName]];
                if (propertyValue !== 0) {
                    tooltipContent += "<br>" + propName + ": " + propertyValue;
                }
            }
            
            layer.bindTooltip(tooltipContent);
        }
    }
})
    }

    // var flash_CONST = JSON.parse(document.getElementById('flashConst').textContent)

//     var flashCONST = L.choropleth(flash_CONST, {
//     valueProperty: 'F100', // which property in the features to use
//     scale: ['white', 'red'], // chroma.js scale - include as many as you like
//     steps: 5, // number of breaks or steps in range
//     mode: 'q', // q for quantile, e for equidistant, k for k-means
//     style: {
//         color: '#fff', // border color
//         weight: 2,
//         fillOpacity: 0.8
//     },
//     onEachFeature: function(feature, layer) {
//         // if (feature.properties) {
//         //         var tooltipContent = "Constituency: " + feature.properties['ConstName'] + "<br>" + "Total: " + feature.properties['F100'] + "<br>" + "Rowdiness: " + feature.properties['F101'] + "<br>" + "Intimidation of voters: " + feature.properties['F102'] + "<br>" + "Rowdiness and Intimidation of voters: " + feature.properties['F103'] + "<br>" + "Religious/communal confict: " + feature.properties['F104'] + "<br>" + "Ethnic conflict: " + feature.properties['F105'] + "<br>" + "Boundary/land dispute: " + feature.properties['F106'] + "<br>" + "Intermittent conflict: " + feature.properties['F107'] + "<br>" + "Unwanted arguments: " + feature.properties['F108'] + "<br>" + "Clashes between political activists and supporters / misunderstanding: " + feature.properties['F109'] + "<br>" + "Youth rowdicalism and violence: " + feature.properties['F110'] + "<br>" + "Threat of other nationals /fulani herdsmen to participate in the exercise: " + feature.properties['F111'] + "<br>" + "Chieftancy conflict/dispute: " + feature.properties['F112'] + "<br>" + "Intimidation and assault on EC officials: " + feature.properties['F113'] + "<br>" + "Destruction of EC materials: " + feature.properties['F114'] + "<br>" + "Intimidation and ballot box snatching: " + feature.properties['F115'] + "<br>" + "Guns & matchetes violence on voters: " + feature.properties['F116'] + "<br>" + "Sales of alcohol and rowdiness: " + feature.properties['F117'] + "<br>" + "Obstruction of the process and intimidation: " + feature.properties['F118'] + "<br>" + "History of electoral violence: " + feature.properties['F119'];
//         //         layer.bindTooltip(tooltipContent);
//         //     }
//         if (feature.properties) {
//             var tooltipContent = "Constituency: " + feature.properties['ConstName'];
            
//             // Add manually specified properties to tooltip content if their value is not zero
//             var properties = {
//                 "Total Incidents": 'F100',
//                 "Rowdiness": 'F101',
//                 "Intimidation of voters": 'F102',
//                 "Rowdiness and intimation of voter": 'F103',
//                 "Religious/communal conflict": 'F104',
//                 "Ethnic conflict": 'F105',
//                 "Boundary/land dispute": 'F106',
//                 "Intermittent conflict": 'F107',
//                 "Unwanted arguments": 'F108',
//                 "Clashes between political activists and supporters / misunderstanding": 'F109',
//                 "Youth rowdicalism and violence": 'F110',
//                 "Threat of other nationals /fulani herdsmen to participate in the exercise": 'F111',
//                 "Chieftancy conflict/dispute": 'F112',
//                 "Intimidation and assault on EC officials": 'F113',
//                 "Destruction of EC materials": 'F114',
//                 "Intimidation and ballot box snatching": 'F115',
//                 "Guns & matchetes violence on voters": 'F116',
//                 "Sales of alcohol and rowdiness": 'F117',
//                 "Obstruction of the process and intimidation": 'F118',
//                 "History of electoral violence": 'F119',

//                 // Add more properties here
//             };
            
//             for (var propName in properties) {
//                 var propertyValue = feature.properties[properties[propName]];
//                 if (propertyValue !== 0) {
//                     tooltipContent += "<br>" + propName + ": " + propertyValue;
//                 }
//             }
            
//             layer.bindTooltip(tooltipContent);
//         }
//     }
// }).addTo(map)

    // (2)

    // var flashCONST2 = flashCONST2_choropleth(flash_CONST).addTo(map2)


    // FLASH CONST NEW(ALL CONSTIUENCIES)

    var flash_CONSTNEW = JSON.parse(document.getElementById('flashConstNew').textContent)

    var flashCONST2NEW = flashCONST2_choropleth(flash_CONSTNEW).addTo(map2)

    var flash_CONSTNEW_2024 = JSON.parse(document.getElementById('flashConstNew_2024').textContent)

    var flashCONST2NEW_2024 = flashCONST2_choropleth(flash_CONSTNEW_2024).addTo(map2)


    var baseMaps = {
        'OSM' : osmMap,
        'CartoDB' : cartoMap,
        'WorldImagery' : imageryMap
    }

     var baseMaps2 = {
        'OSM' : osmMap2,
        'CartoDB' : cartoMap2,
        'WorldImagery' : imageryMap2
    }

    var overlayMaps = {
        '10 regions' : regionsData,
        '16 regions' : regions16Data,
        'PS name' : polling_stationData,
        'Parliament 10 Regions' : parliament_10,
        'Presidential 10 Regions' : presidential_10,
        'Parliament 16 Regions' : parliament_16,
        'Presidential 16 Regions' : presidential_16,
        'Parliament 230 constituencies' : parliamentConst_16CONST2_10,
        'Presidential 230 constituencies' : presidentialConst_16CONST2_10,
        'Parliament 275 constituencies' : parliamentConst_16CONST2,
        'Presidential 275 constituencies' : presidentialConst_16CONST2,
        'Parliament 276 constituencies' : parliamentConst_16CONST2_2024,
        'Presidential 276 constituencies' : presidentialConst_16CONST2_2024,
        
    } 

    var overlayMaps2 = {
        '16 regions' : regions16Data2,
        'PS name' : polling_stationData2,
        'Flash Incident Regions' : flashREG2,
        'Flash Incident 275 Constinuencies' : flashCONST2NEW,
        'Flash Incident 276 Constinuencies' : flashCONST2NEW_2024,
        'Flash Incident Polling Stations' : flashPS_Data2
        
        
    } 


// // Global variables to track the highlighted layers on each map
// var highlightLayerMap = null;
// var highlightLayerMap2 = null;

// // Define a style for the highlight
// var highlightStyle = {
//     weight: 5,
//     color: 'yellow',
//     dashArray: '',
//     fillOpacity: 0.7
// };

// // Function to highlight the clicked feature by adding a new 'highlight' layer
// function highlightFeature(e, mapId) {
//     var layer = e.target;
//     var featureGeoJSON = layer.feature;

//     // Remove the previous highlight layer
//     if (mapId === 'map' && highlightLayerMap) {
//         map.removeLayer(highlightLayerMap);
//     } else if (mapId === 'map2' && highlightLayerMap2) {
//         map2.removeLayer(highlightLayerMap2);
//     }

//     // Create a new GeoJSON layer for the highlighted feature
//     var highlightLayer = L.geoJSON(featureGeoJSON, {
//         style: highlightStyle
//     });

//     // Add the new highlight layer to the correct map
//     if (mapId === 'map') {
//         highlightLayer.addTo(map);
//         highlightLayerMap = highlightLayer;  // Store it globally for removal later
//     } else if (mapId === 'map2') {
//         highlightLayer.addTo(map2);
//         highlightLayerMap2 = highlightLayer;  // Store it globally for removal later
//     }

//     // Optionally zoom to the highlighted feature
    
//     if (mapId === 'map') {
//         map.fitBounds(layer.getBounds());
//     } else if (mapId === 'map2') {
//         map2.fitBounds(layer.getBounds());
//     }
// }

// // Attach event listeners for each feature in the layer
// function onEachFeature(feature, layer, mapId) {
//     layer.on({
//         click: function (e) {
//             highlightFeature(e, mapId);   // Highlight on click
//         }
//     });
// }

// // Assuming you already have your GeoJSON layers added, bind the click handler to each feature

// // For map (first map)
// for (var layerName in overlayMaps) {
//     overlayMaps[layerName].eachLayer(function (layer) {
//         onEachFeature(null, layer, 'map');
//     });
// }

// // For map2 (second map)
// for (var layerName in overlayMaps2) {
//     overlayMaps2[layerName].eachLayer(function (layer) {
//         onEachFeature(null, layer, 'map2');
//     });
// }

////////////////
    // (2)

    // Global variables to track the highlighted layers on each map
var highlightLayerMap = null;
var highlightLayerMap2 = null;

// Define a style for the highlight
var highlightStyle = {
    weight: 5,
    color: 'yellow',
    dashArray: '',
    fillOpacity: 0.7
};

// Function to highlight the clicked feature by adding a new 'highlight' layer
function highlightFeature(e, mapId) {
    var layer = e.target;
    var featureGeoJSON = layer.feature;

    // Remove the previous highlight layer
    if (mapId === 'map' && highlightLayerMap) {
        map.removeLayer(highlightLayerMap);
    } else if (mapId === 'map2' && highlightLayerMap2) {
        map2.removeLayer(highlightLayerMap2);
    }

    // Create a new GeoJSON layer for the highlighted feature
    var highlightLayer = L.geoJSON(featureGeoJSON, {
        style: highlightStyle
    });

    // Add the new highlight layer to the correct map
    if (mapId === 'map') {
        highlightLayer.addTo(map);
        highlightLayerMap = highlightLayer;  // Store it globally for removal later
    } else if (mapId === 'map2') {
        highlightLayer.addTo(map2);
        highlightLayerMap2 = highlightLayer;  // Store it globally for removal later
    }

    // Zoom to the feature based on its geometry type
    if (layer.getBounds) {
        // For polygon or line features
        if (mapId === 'map') {
            map.fitBounds(layer.getBounds());
        } else if (mapId === 'map2') {
            map2.fitBounds(layer.getBounds());
        }
    } else if (layer.getLatLng) {
        // For point features (like markers)
        if (mapId === 'map') {
            map.setView(layer.getLatLng(), 14);  // Adjust zoom level to 14 or as desired
        } else if (mapId === 'map2') {
            map2.setView(layer.getLatLng(), 14);  // Adjust zoom level to 14 or as desired
        }
    }

    // Get the content from either a tooltip or a popup
    var tooltipContent = '';
    
    if (layer.getTooltip && layer.getTooltip()) {
        tooltipContent = layer.getTooltip().getContent();  // Tooltip content
    } else if (layer.getPopup && layer.getPopup()) {
        tooltipContent = layer.getPopup().getContent();  // Popup content
    }
    // Update the card content with the captured tooltip
    updateCardContent(tooltipContent);
}

// Function to update card content dynamically
function updateCardContent(tooltipContent) {
    var cardContent = document.getElementById('card-content');
    
    // Clear the default content
    cardContent.innerHTML = '';

    // Split the tooltipContent by <br> and add each as a list item
    var tooltipItems = tooltipContent.split('<br>');
    tooltipItems.forEach(function(item) {
        var listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = item;
        cardContent.appendChild(listItem);
    });
}

// Attach event listeners for each feature in the layer
function onEachFeature(feature, layer, mapId) {
    layer.on({
        click: function (e) {
            highlightFeature(e, mapId);   // Highlight on click
        }
    });
}

// Assuming you already have your GeoJSON layers added, bind the click handler to each feature

// For map (first map)
for (var layerName in overlayMaps) {
    overlayMaps[layerName].eachLayer(function (layer) {
        onEachFeature(null, layer, 'map');
    });
}

// For map2 (second map)
for (var layerName in overlayMaps2) {
    overlayMaps2[layerName].eachLayer(function (layer) {
        onEachFeature(null, layer, 'map2');
    });
}

// Set the default card content when no feature is clicked
updateCardContent('No selection from Map');


// Bind click events to dynamically added layers (like presidentialConst_16_REG2 and presidentialConst_16_REG)
    function bindClickToDynamicLayers(layer, mapId) {
        layer.eachLayer(function (singleLayer) {
            onEachFeature(null, singleLayer, mapId);
        });
    }




var maplayers = L.control.layers(baseMaps, overlayMaps).addTo(map);

//(2)
var maplayers2 = L.control.layers(baseMaps2, overlayMaps2).addTo(map2);


var searchControl1 = new L.Control.Search({
                layer: polling_stationData,
                zoom: '15',
                propertyName: 'PS Name',
                textPlaceholder: 'Search PS Name',
                hideMarkerOnCollapse: true
                }).addTo(map);



map.addControl(searchControl1);

  
function jsoncreateValidVotesGeoJSON(merged_GHMap2A) {
    return L.geoJSON(JSON.parse(merged_GHMap2A), {
        onEachFeature: function(feature, layer) {
            if (feature.properties) {
                // Initial tooltip content
                var tooltipContent = "Region: " + feature.properties['region'] + "<br>" +
                    "Winner: " + feature.properties['Winner'] + " " + feature.properties['Winner_Percentage'] + "%" + "<br>" +
                    "Second place: " + feature.properties['Second_Highest_Value_Name'] + " " + feature.properties['Second_Highest_Percentage'] + "%";
                
                // Array to store previous winners
                var previousWinners = [];

                // Iterate over feature properties to find previous winners
                for (var key in feature.properties) {
                    if (key.startsWith("Winner_") && key !== "Winner_Percentage") {
                        var year = key.split("_")[1];
                        // Convert year to a number for sorting purposes, except for '2009'
                        var numericYear = (year === '2009') ? 2008.5 : parseFloat(year);
                        previousWinners.push({ year: year, numericYear: numericYear, value: feature.properties[key] });
                    }
                }

                // Sort previous winners based on numericYear in descending order
                previousWinners.sort(function(a, b) {
                    return b.numericYear - a.numericYear;
                });

                // Construct tooltip content from sorted previous winners
                previousWinners.forEach(function(item) {
                    // Rename year '2009' to '2008 Runoff' after sorting
                    var displayYear = (item.year === '2009') ? '2008 Runoff' : item.year;
                    tooltipContent += "<br>Winner " + displayYear + ": " + item.value;
                });

                // Bind the constructed tooltip to the layer
                layer.bindTooltip(tooltipContent);
            }
        },
        style: function(feature) {
            var value = feature.properties['Values_map'];
            var color;
            if (value === 8) {
                color = 'green';
            } else if (value === 10) {
                color = 'blue';
            } else {
                color = 'red';
            }
            return { fillColor: color, color: 'black', weight: 1, fillOpacity: 0.7 };
        }
})
}

function jsoncreateFlashPSGeoJSON(mergedFlashPS_GHMap2) {
    return L.geoJSON(JSON.parse(mergedFlashPS_GHMap2), {
        onEachFeature: function(feature, layer) {
            var psCode = feature.properties['PSCode'];
            var popupContent = createPopupContent(psCode);
            layer.bindPopup(popupContent);
        },
        pointToLayer: function (feature, latlng) {
            var fillColor = feature.properties['incident_type'] ? 'red' : 'black';
            return L.circleMarker(latlng, {
                radius: 1,
                fillColor: fillColor,
                color: 'black',
                weight: 0.3,
                opacity: 0.5,
                fillOpacity: 0.4
            });
        }
    })
}

function jsonflashREG2_choropleth(mergedFlashREG_GHMap2) {
    return L.choropleth(JSON.parse(mergedFlashREG_GHMap2), {
        valueProperty: 'F100', // which property in the features to use
        scale: ['white', 'red'], // chroma.js scale - include as many as you like
        steps: 5, // number of breaks or steps in range
        mode: 'q', // q for quantile, e for equidistant, k for k-means
        style: {
            color: '#fff', // border color
            weight: 2,
            fillOpacity: 0.8
        },
        onEachFeature: function(feature, layer) {
            // if (feature.properties) {
            //         var tooltipContent = "Region: " + feature.properties['RegName'] + "<br>" + "Total: " + feature.properties['F100'] + "<br>" + "Rowdiness: " + feature.properties['F101'] + "<br>" + "Intimidation of voters: " + feature.properties['F102'] + "<br>" + "Rowdiness and Intimidation of voters: " + feature.properties['F103'] + "<br>" + "Religious/communal confict: " + feature.properties['F104'] + "<br>" + "Ethnic conflict: " + feature.properties['F105'] + "<br>" + "Boundary/land dispute: " + feature.properties['F106'] + "<br>" + "Intermittent conflict: " + feature.properties['F107'] + "<br>" + "Unwanted arguments: " + feature.properties['F108'] + "<br>" + "Clashes between political activists and supporters / misunderstanding: " + feature.properties['F109'] + "<br>" + "Youth rowdicalism and violence: " + feature.properties['F110'] + "<br>" + "Threat of other nationals /fulani herdsmen to participate in the exercise: " + feature.properties['F111'] + "<br>" + "Chieftancy conflict/dispute: " + feature.properties['F112'] + "<br>" + "Intimidation and assault on EC officials: " + feature.properties['F113'] + "<br>" + "Destruction of EC materials: " + feature.properties['F114'] + "<br>" + "Intimidation and ballot box snatching: " + feature.properties['F115'] + "<br>" + "Guns & matchetes violence on voters: " + feature.properties['F116'] + "<br>" + "Sales of alcohol and rowdiness: " + feature.properties['F117'] + "<br>" + "Obstruction of the process and intimidation: " + feature.properties['F118'] + "<br>" + "History of electoral violence: " + feature.properties['F119'];
            //         layer.bindTooltip(tooltipContent);
            //     }
            if (feature.properties) {
                var tooltipContent = "Region: " + feature.properties['RegName'] + "<br>" + "PS Total: " + feature.properties['PS_total'] + "<br>" + "PS affected: " + feature.properties['PS_affected'] + "<br>" + "Percentage PS_affected: " + feature.properties['percentage_PS_affected'] + "%";
                
                // Add manually specified properties to tooltip content if their value is not zero
                var properties = {
                    "Total Incidents": 'F100',
                    "Rowdiness": 'F101',
                    "Intimidation of voters": 'F102',
                    "Rowdiness and intimation of voter": 'F103',
                    "Religious/communal conflict": 'F104',
                    "Ethnic conflict": 'F105',
                    "Boundary/land dispute": 'F106',
                    "Intermittent conflict": 'F107',
                    "Unwanted arguments": 'F108',
                    "Clashes between political activists and supporters / misunderstanding": 'F109',
                    "Youth rowdicalism and violence": 'F110',
                    "Threat of other nationals /fulani herdsmen to participate in the exercise": 'F111',
                    "Chieftancy conflict/dispute": 'F112',
                    "Intimidation and assault on EC officials": 'F113',
                    "Destruction of EC materials": 'F114',
                    "Intimidation and ballot box snatching": 'F115',
                    "Guns & matchetes violence on voters": 'F116',
                    "Sales of alcohol and rowdiness": 'F117',
                    "Obstruction of the process and intimidation": 'F118',
                    "History of electoral violence": 'F119',

                    // Add more properties here
                };
                
                for (var propName in properties) {
                    var propertyValue = feature.properties[properties[propName]];
                    if (propertyValue !== 0) {
                        tooltipContent += "<br>" + propName + ": " + propertyValue;
                    }
                }
                
                layer.bindTooltip(tooltipContent);
            }
        }
    })
}

function jsonflashCONST2_choropleth(mergedFlashCONST_GHMap2New) {
    return L.choropleth(JSON.parse(mergedFlashCONST_GHMap2New), {
        valueProperty: 'F100', // which property in the features to use
        scale: ['white', 'red'], // chroma.js scale - include as many as you like
        steps: 5, // number of breaks or steps in range
        mode: 'q', // q for quantile, e for equidistant, k for k-means
        style: {
            color: '#fff', // border color
            weight: 2,
            fillOpacity: 0.8
        },
        onEachFeature: function(feature, layer) {
            // if (feature.properties) {
            //         var tooltipContent = "Constituency: " + feature.properties['ConstName'] + "<br>" + "Total: " + feature.properties['F100'] + "<br>" + "Rowdiness: " + feature.properties['F101'] + "<br>" + "Intimidation of voters: " + feature.properties['F102'] + "<br>" + "Rowdiness and Intimidation of voters: " + feature.properties['F103'] + "<br>" + "Religious/communal confict: " + feature.properties['F104'] + "<br>" + "Ethnic conflict: " + feature.properties['F105'] + "<br>" + "Boundary/land dispute: " + feature.properties['F106'] + "<br>" + "Intermittent conflict: " + feature.properties['F107'] + "<br>" + "Unwanted arguments: " + feature.properties['F108'] + "<br>" + "Clashes between political activists and supporters / misunderstanding: " + feature.properties['F109'] + "<br>" + "Youth rowdicalism and violence: " + feature.properties['F110'] + "<br>" + "Threat of other nationals /fulani herdsmen to participate in the exercise: " + feature.properties['F111'] + "<br>" + "Chieftancy conflict/dispute: " + feature.properties['F112'] + "<br>" + "Intimidation and assault on EC officials: " + feature.properties['F113'] + "<br>" + "Destruction of EC materials: " + feature.properties['F114'] + "<br>" + "Intimidation and ballot box snatching: " + feature.properties['F115'] + "<br>" + "Guns & matchetes violence on voters: " + feature.properties['F116'] + "<br>" + "Sales of alcohol and rowdiness: " + feature.properties['F117'] + "<br>" + "Obstruction of the process and intimidation: " + feature.properties['F118'] + "<br>" + "History of electoral violence: " + feature.properties['F119'];
            //         layer.bindTooltip(tooltipContent);
            //     }
            if (feature.properties) {
                var tooltipContent = "Constituency: " + feature.properties['ConstName'];
                
                // Add manually specified properties to tooltip content if their value is not zero
                var properties = {
                    "Total Incidents": 'F100',
                    "Rowdiness": 'F101',
                    "Intimidation of voters": 'F102',
                    "Rowdiness and intimation of voter": 'F103',
                    "Religious/communal conflict": 'F104',
                    "Ethnic conflict": 'F105',
                    "Boundary/land dispute": 'F106',
                    "Intermittent conflict": 'F107',
                    "Unwanted arguments": 'F108',  
                    "Clashes between political activists and supporters / misunderstanding": 'F109',
                    "Youth rowdicalism and violence": 'F110',
                    "Threat of other nationals /fulani herdsmen to participate in the exercise": 'F111',
                    "Chieftancy conflict/dispute": 'F112',
                    "Intimidation and assault on EC officials": 'F113',
                    "Destruction of EC materials": 'F114',
                    "Intimidation and ballot box snatching": 'F115',
                    "Guns & matchetes violence on voters": 'F116',
                    "Sales of alcohol and rowdiness": 'F117',
                    "Obstruction of the process and intimidation": 'F118',
                    "History of electoral violence": 'F119',

                    // Add more properties here
                };
                
                for (var propName in properties) {
                    var propertyValue = feature.properties[properties[propName]];
                    if (propertyValue !== 0) {
                        tooltipContent += "<br>" + propName + ": " + propertyValue;
                    }
                }
                
                layer.bindTooltip(tooltipContent);
            }
        }
    })
}
function jsoncreateValidVotes_ConstGeoJSON(merged2_GHMap2ConstCONST2) {
    return L.geoJSON(JSON.parse(merged2_GHMap2ConstCONST2), {
        onEachFeature: function(feature, layer) {
            if (feature.properties) {
                var tooltipContent = 
                    "Constituency: " + feature.properties['Constituen'] + "<br>" + 
                    "Constituency Code: " + feature.properties['ConstCode'] + "<br>" + 
                    "Winner: " + feature.properties['Winner'] + " " + feature.properties['Winner_Percentage'] + "%" + "<br>" + 
                    "Second place: " + feature.properties['Second_Highest_Value_Name'] + " " + feature.properties['Second_Highest_Percentage'] + "%";

                // Collect previous years' winner keys, excluding 'Winner_Percentage'
                var previousWinners = [];

                for (var key in feature.properties) {
                    // Look for keys that start with "Winner_" but exclude "Winner_Percentage"
                    if (key.startsWith("Winner_") && key !== "Winner_Percentage") {
                        var year = key.split("_")[1];
                        previousWinners.push({ year: year, value: feature.properties[key] });
                    }
                }

                // Sort previousWinners array in descending order based on the year
                previousWinners.sort(function(a, b) {
                    return parseFloat(b.year) - parseFloat(a.year); // Descending order
                });

                // Rename year '2009' to '2008 Runoff' after sorting
                previousWinners.forEach(function(item) {
                    if (item.year === '2009') {
                        item.year = '2008 Runoff';
                    }
                });

                // Add sorted previous winners to the tooltip content
                previousWinners.forEach(function(item) {
                    tooltipContent += "<br>Winner " + item.year + ": " + item.value;
                });

                layer.bindTooltip(tooltipContent);
            }
        },
        style: function(feature) {
            var value = feature.properties['Values_map']; // Assuming 'value' is the property containing the values
            var color;
            if (value === 8) {
                color = 'green';
            } else if (value === 10) {
                color = 'blue';
            } else {
                color = 'red';
            }
            return { fillColor: color, color: 'black', weight: 1, fillOpacity: 0.7 };
        }
})
}

var presidentialConst_16_REG = null;
var presidentialConst_16_REG2 = null;
var presidentialConst_16_REG_2024 = null;
var flashCONST2REG = null;
var flashCONST2REG_2024 = null;


let socket = null;

function loadChartData(selectedYear, region, census, electoral) {
    // If the selected year is 2024, open the WebSocket connection for real-time data
    if (selectedYear === "2024") {
        if (socket === null) {
            socket = new WebSocket("ws://127.0.0.1:8001/ws/data-updates/");

            // WebSocket open event
            socket.onopen = function() {
                console.log("WebSocket connection established.");
            }
            socket.onmessage = function (event) {
                const data = JSON.parse(event.data);
                // console.log(data)
                // Update the chart only if the data matches the year 2024
                updateChart(data, selectedYear); // Function to update the chart in real-time
                
            };
        }
    } else {
        // Close WebSocket if the year is not 2024 and load static chart data instead
        if (socket) {
            socket.close();
            socket = null;
        }
        
    }
}

// function updateCharts(selectedYear, region, census, electoral) {
//     // Show the modal spinner before the fetch request starts
//     $('#staticBackdrop').css('padding-right', '650px').modal('show');

//     loadChartData(selectedYear, region, census, electoral); // Load either real-time or static data

//     // Hide the modal spinner after the fetch request completes
//     $('#staticBackdrop').modal('hide');
// }

function updateChart(data, selectedYear) {
    // Your chart updating logic here, using the data parameter
    // For example:
    console.log("Chart data updated:", data);


    
    // Update chart configuration and data based on the fetched data

    document.querySelector('#parliamentTotal').innerHTML = data.tSum + " : VALID VOTES";
    document.querySelector('#presidentialTotal').innerHTML = data.tSum2 + " : VALID VOTES"; 
    
    
    var selectElement = document.getElementById("regionSelection");

    // Store the currently selected region
    var selectedRegion = selectElement.value;

    // Get the "Region" option element
    // var regionOption = document.getElementById("regionOption");

    // Clear existing options except the "National" and "Regions" option
    while (selectElement.options.length > 2) {
        selectElement.remove(selectElement.options.length - 1);
    }

    //Iterate over the fetched data and create new options
    for (var i = 0; i < data.graph1BX.length; i++) {
        var option = document.createElement("option");
        option.textContent = data.graph1BX[i];
        selectElement.appendChild(option);
    }

    //Iterate to permenantly clear the layers
//     for (var key in overlayMaps) {
//     if (overlayMaps.hasOwnProperty(key)) {
//         delete overlayMaps[key];  // Delete each layer from overlayMaps
//     }
// }


    // Check if the layers have been created and added to the map before trying to remove them
    if (presidentialConst_16_REG && map.hasLayer(presidentialConst_16_REG)) {
        map.removeLayer(presidentialConst_16_REG);
    }

    if (presidentialConst_16_REG2 && map.hasLayer(presidentialConst_16_REG2)) {
        map.removeLayer(presidentialConst_16_REG2);
    }

    if (flashCONST2REG && map2.hasLayer(flashCONST2REG)) {
        map2.removeLayer(flashCONST2REG);
    }

    if (highlightLayerMap && map.hasLayer(highlightLayerMap)) {
        map.removeLayer(highlightLayerMap);
    }

    if (highlightLayerMap2 && map2.hasLayer(highlightLayerMap2)) {
        map2.removeLayer(highlightLayerMap2);
    }

    if (presidentialConst_16_REG_2024 && map.hasLayer(presidentialConst_16_REG_2024)) {
        map.removeLayer(presidentialConst_16_REG_2024);
    }

    if (flashCONST2REG_2024 && map.hasLayer(flashCONST2REG_2024)) {
        map.removeLayer(flashCONST2REG_2024);
    }

    

    // current commenting test
    //-------------------------

    // map.removeLayer(polling_stationData);
    // if (map.hasLayer(overlayMaps['Parliament 10 Regions'])) {
    // map.removeLayer(overlayMaps['Parliament 10 Regions']);
    // }

    overlayMaps['Parliament 10 Regions'].clearLayers();

    var merged_GHMap2A = data.merged_GHMap2A

    var parliament_10 = jsoncreateValidVotesGeoJSON(merged_GHMap2A).addTo(map);

    overlayMaps['Parliament 10 Regions'] = parliament_10;


    // if (map.hasLayer(overlayMaps['Presidential 10 Regions'])) {
    //     map.removeLayer(overlayMaps['Presidential 10 Regions']);
    // }
    overlayMaps['Presidential 10 Regions'].clearLayers();

    var merged2_GHMap2A = data.merged2_GHMap2A

    var presidential_10 = jsoncreateValidVotesGeoJSON(merged2_GHMap2A).addTo(map);

    overlayMaps['Presidential 10 Regions'] = presidential_10;


    // if (map.hasLayer(overlayMaps['Parliament 16 Regions'])) {
    //     map.removeLayer(overlayMaps['Parliament 16 Regions']);
    // }
    overlayMaps['Parliament 16 Regions'].clearLayers();

    var merged_GHMap2 = data.merged_GHMap2

    var parliament_16 = jsoncreateValidVotesGeoJSON(merged_GHMap2).addTo(map);

    overlayMaps['Parliament 16 Regions'] = parliament_16;


    // if (map.hasLayer(overlayMaps['Presidential 16 Regions'])) {
    //     map.removeLayer(overlayMaps['Presidential 16 Regions']);
    // }
    overlayMaps['Presidential 16 Regions'].clearLayers();

    var merged2_GHMap2 = data.merged2_GHMap2

    var presidential_16 = jsoncreateValidVotesGeoJSON(merged2_GHMap2).addTo(map);

    overlayMaps['Presidential 16 Regions'] = presidential_16;


    ////////////////////////////////////////////// Constituencies


    overlayMaps['Parliament 275 constituencies'].clearLayers();

    var merged_GHMap2ConstCONST2 = data.merged_GHMap2ConstCONST2

    var parliamentConst_16 = jsoncreateValidVotes_ConstGeoJSON(merged_GHMap2ConstCONST2).addTo(map);

    overlayMaps['Parliament 275 constituencies'] = parliamentConst_16;


    overlayMaps['Parliament 230 constituencies'].clearLayers();

    var merged_GHMap2ConstCONST2_10 = data.merged_GHMap2ConstCONST2_10

    var parliamentConst_16_10 = jsoncreateValidVotes_ConstGeoJSON(merged_GHMap2ConstCONST2_10).addTo(map);

    overlayMaps['Parliament 230 constituencies'] = parliamentConst_16_10;

    overlayMaps['Presidential 275 constituencies'].clearLayers();

    var merged2_GHMap2ConstCONST2 = data.merged2_GHMap2ConstCONST2

    var presidentialConst_16 = jsoncreateValidVotes_ConstGeoJSON(merged2_GHMap2ConstCONST2).addTo(map);

    overlayMaps['Presidential 275 constituencies'] = presidentialConst_16;


    overlayMaps['Presidential 230 constituencies'].clearLayers();

    var merged2_GHMap2ConstCONST2_10 = data.merged2_GHMap2ConstCONST2_10

    var presidentialConst_16_10 = jsoncreateValidVotes_ConstGeoJSON(merged2_GHMap2ConstCONST2_10).addTo(map);

    overlayMaps['Presidential 230 constituencies'] = presidentialConst_16_10;


    overlayMaps['Parliament 276 constituencies'].clearLayers();

    var merged_GHMap2ConstCONST2024 = data.merged_GHMap2ConstCONST2024

    var parliamentConst_2024 = jsoncreateValidVotes_ConstGeoJSON(merged_GHMap2ConstCONST2024).addTo(map);

    overlayMaps['Parliament 276 constituencies'] = parliamentConst_2024;


    overlayMaps['Presidential 276 constituencies'].clearLayers();

    var merged2_GHMap2ConstCONST2024 = data.merged2_GHMap2ConstCONST2024

    var presidentialConst_2024 = jsoncreateValidVotes_ConstGeoJSON(merged2_GHMap2ConstCONST2024).addTo(map);

    overlayMaps['Presidential 276 constituencies'] = presidentialConst_2024;



    // not part of current commenting test
    //-------------------------------------

    maplayers.remove();

    

    


    ///////////////////////////////////////////////////////////////////
    // FLASH REG

    // current commenting test
    //-------------------------

    // overlayMaps2['PS name'].clearLayers();

    // if (map.hasLayer(overlayMaps['Flash Incident Polling Stations'])) {
    //     map.removeLayer(overlayMaps['Flash Incident Polling Stations']);
    // }

    overlayMaps2['Flash Incident Polling Stations'].clearLayers();

    var mergedFlashPS_GHMap2 = data.mergedFlashPS_GHMap2

    var flashPS_Data2 = jsoncreateFlashPSGeoJSON(mergedFlashPS_GHMap2).addTo(map2);

    overlayMaps2['Flash Incident Polling Stations'] = flashPS_Data2;


    //map2.removeLayer(overlayMaps2['Flash Incident Polling Stations'])


    // if (map.hasLayer(overlayMaps['Flash Incident Regions'])) {
    //     map.removeLayer(overlayMaps['Flash Incident Regions']);
    // }
    overlayMaps2['Flash Incident Regions'].clearLayers();

    var mergedFlashREG_GHMap2 = data.mergedFlashREG_GHMap2

    var flashREG2 = jsonflashREG2_choropleth(mergedFlashREG_GHMap2).addTo(map2)

    overlayMaps2['Flash Incident Regions'] = flashREG2;


    overlayMaps2['Flash Incident 275 Constinuencies'].clearLayers();

    var mergedFlashCONST_GHMap2New = data.mergedFlashCONST_GHMap2New

    var flashCONST2 = jsonflashCONST2_choropleth(mergedFlashCONST_GHMap2New).addTo(map2)

    overlayMaps2['Flash Incident 275 Constinuencies'] = flashCONST2;


    overlayMaps2['Flash Incident 276 Constinuencies'].clearLayers();

    var mergedFlashCONST_GHMap2New2024 = data.mergedFlashCONST_GHMap2New2024

    var flashCONST2024 = jsonflashCONST2_choropleth(mergedFlashCONST_GHMap2New2024).addTo(map2)

    overlayMaps2['Flash Incident 276 Constinuencies'] = flashCONST2024;



    maplayers2.remove();


    //////////// HIGHLIGHT  ////////////

    // Define a style for the highlight
    var highlightStyle = {
        weight: 5,
        color: 'yellow',
        dashArray: '',
        fillOpacity: 0.7
    };

    // Function to highlight the clicked feature by adding a new 'highlight' layer
    function highlightFeature(e, mapId) {
        var layer = e.target;
        var featureGeoJSON = layer.feature;

        // Remove the previous highlight layer
        if (mapId === 'map' && highlightLayerMap) {
            map.removeLayer(highlightLayerMap);
        } else if (mapId === 'map2' && highlightLayerMap2) {
            map2.removeLayer(highlightLayerMap2);
        }

        // Create a new GeoJSON layer for the highlighted feature
        var highlightLayer = L.geoJSON(featureGeoJSON, {
            style: highlightStyle
        });

        // Add the new highlight layer to the correct map
        if (mapId === 'map') {
            highlightLayer.addTo(map);
            highlightLayerMap = highlightLayer;  // Store it globally for removal later
        } else if (mapId === 'map2') {
            highlightLayer.addTo(map2);
            highlightLayerMap2 = highlightLayer;  // Store it globally for removal later
        }

        // Zoom to the feature based on its geometry type
        if (layer.getBounds) {
            // For polygon or line features
            if (mapId === 'map') {
                map.fitBounds(layer.getBounds());
            } else if (mapId === 'map2') {
                map2.fitBounds(layer.getBounds());
            }
        } else if (layer.getLatLng) {
            // For point features (like markers)
            if (mapId === 'map') {
                map.setView(layer.getLatLng(), 14);  // Adjust zoom level to 14 or as desired
            } else if (mapId === 'map2') {
                map2.setView(layer.getLatLng(), 14);  // Adjust zoom level to 14 or as desired
            }
        }

         // Get the content from either a tooltip or a popup
        var tooltipContent = '';
        
        if (layer.getTooltip && layer.getTooltip()) {
            tooltipContent = layer.getTooltip().getContent();  // Tooltip content
        } else if (layer.getPopup && layer.getPopup()) {
            tooltipContent = layer.getPopup().getContent();  // Popup content
        }
        // Update the card content with the captured tooltip
        updateCardContent(tooltipContent);
    }

    // Function to update card content dynamically
    function updateCardContent(tooltipContent) {
        var cardContent = document.getElementById('card-content');
        
        // Clear the default content
        cardContent.innerHTML = '';

        // Split the tooltipContent by <br> and add each as a list item
        var tooltipItems = tooltipContent.split('<br>');
        tooltipItems.forEach(function(item) {
            var listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.innerHTML = item;
            cardContent.appendChild(listItem);
        });
    }

    // Attach event listeners for each feature in the layer
    function onEachFeature(feature, layer, mapId) {
        layer.on({
            click: function (e) {
                highlightFeature(e, mapId);   // Highlight on click
            }
        });
    }

    // Assuming you already have your GeoJSON layers added, bind the click handler to each feature

    // For map (first map)
    for (var layerName in overlayMaps) {
        overlayMaps[layerName].eachLayer(function (layer) {
            onEachFeature(null, layer, 'map');
        });
    }

    // For map2 (second map)
    for (var layerName in overlayMaps2) {
        overlayMaps2[layerName].eachLayer(function (layer) {
            onEachFeature(null, layer, 'map2');
        });
    }

    // Set the default card content when no feature is clicked
    updateCardContent('No selection from Map');


    //////////// END OF HIGHLIGHT //////

    maplayers2 = L.control.layers(baseMaps2, overlayMaps2).addTo(map2);

    maplayers = L.control.layers(baseMaps, overlayMaps).addTo(map);


    // current commenting test
    //--------------------------

    map.removeLayer(overlayMaps['Parliament 10 Regions']);

    map.removeLayer(overlayMaps['Parliament 16 Regions']);

    map.removeLayer(overlayMaps['Parliament 275 constituencies']);

    map.removeLayer(overlayMaps['Presidential 275 constituencies']);

    map.removeLayer(overlayMaps['Parliament 230 constituencies']);

    map.removeLayer(overlayMaps['Presidential 230 constituencies']);

    map.removeLayer(overlayMaps['Parliament 276 constituencies']);

    map.removeLayer(overlayMaps['Presidential 276 constituencies']);

    if (selectedYear === "2004" || selectedYear === "2008" || selectedYear === "2009" || selectedYear === "2012" || selectedYear === "2016") {
      map.removeLayer(overlayMaps['Presidential 16 Regions']);  
    } else {
        map.removeLayer(overlayMaps['Presidential 10 Regions']);
    }   



    /////FLASH CONTROL

    map2.removeLayer(overlayMaps2['Flash Incident Polling Stations'])

    map2.removeLayer(overlayMaps2['Flash Incident 275 Constinuencies']);

    map2.removeLayer(overlayMaps2['Flash Incident 276 Constinuencies']);

    // current commenting test
    if (selectedYear === "2004" || selectedYear === "2008" || selectedYear === "2009" || selectedYear === "2012" || selectedYear === "2016") {
        map2.addLayer(overlayMaps2['Flash Incident Regions']);  
    } else {
        map2.addLayer(overlayMaps2['Flash Incident Regions']);
    }




    //////////////////////////////////////////////////////////////////
    




    function resetMap() {
      map.setView(initialView.getCenter(), 6);
      map.addLayer(ps_name);
      // map.removeLayer(presidential_10);
      // map.removeLayer(presidential_16);
      if (overlayMaps['Presidential 16 Regions']) {
        map.removeLayer(overlayMaps['Presidential 16 Regions']);
    }
      if (overlayMaps['Presidential 10 Regions']) {
        map.removeLayer(overlayMaps['Presidential 10 Regions']);
    }

       regionsData.eachLayer(function(layer) {
          layer.setStyle({
            // Set your highlighting style here
            fillOpacity: 0
          });
        })


       regions16Data.eachLayer(function(layer) {
          layer.setStyle({
            // Set your highlighting style here
            fillOpacity: 0
          });
        })
    }

    ///////////////

    ////// (2)

    //////////////

    const colorsA = [
          '#f75464',
          '#0390fc',
          '#308a0a',
          '#f02274',
          '#ded712',
          '#f77c9d',
          '#8d76f5',
          '#b58931',
          '#ded712',
          '#f02274',
          '#0390fc',
          ] // Colors for 2004

    const colorsB = [
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

        ] // Colors for other years

    // Deciding the colors based on the year
    let chartColors;
    if (selectedYear === '2004') {
    chartColors = colorsA;
    } else {
    chartColors = colorsB;
    }


    
    ///////////////////////////////////////////////////////////////////

    // Set the value of the select element to the stored selected region
    // selectElement.value = selectedRegion;

    // // Ensure the "Region" option is always the first option

    // selectElement.insertBefore(regionOption, selectElement.options[0]);

    // const data_const_won = data.const_won_by_party_data;
    // console.log(data_const_won);

    // const transformedData = {
    //       products: data_const_won
    //     };

    // const data_const_won_name = data_const_won.products.map(item => item.name)
    // console.log(data_const_won_name);
    // const data_const_won_y = data_const_won.products.map(item => item.y)
    var categories1 = data.names;
    var visibleRange = 5; // Set how many categories to show at once


    chart1b.update({
      chart: {
        type: 'bar',
        style: {
          fontSize: '15px',
        },
      },
      title: {
        text: 'Total Seats Won Per Political Party (Parliament)',
        align: 'left'
      },

      xAxis: {
        categories: categories1,
        min: 0,
        max: categories1.length > visibleRange ? visibleRange : categories1.length - 1, // Adjust max based on data size
        scrollbar: {
          enabled: categories1.length > visibleRange // Enable scrollbar only if needed
        }, 
        title: {
          text: 'Parties'
        },
        gridLineWidth: 1,
        lineWidth: 0
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total Constituency Wins',
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
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 30,
        floating: true,
        borderWidth: 1,
        backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Constituency Wins',
        data: data.count_y
      }]
    });


    chart1.update({
      chart: {
        type: 'bar',
        style: {
          fontSize: '15px',
        },
      },
      title: {
        text: 'Total Valid Votes Per Political Party (Presidential)',
        align: 'left'
      },

      xAxis: {
        categories: data.graph2BXParties,
        min: 0,
        max: 5,
        scrollbar: {
          enabled: true
        },
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
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 30,
        floating: true,
        borderWidth: 1,
        backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Valid Votes',
        data: data.graph2BYParties
      }]
    });

    chart2b.update({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Total Valid Votes Per Political Party (Parliament)'
      },
      
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {                  
            enabled: true,
            color: '#000000',
            connectorColor: '#000000',
          }
        }
      },
      series: [{
        type: 'pie',
        showInLegend: true,
        name: 'Valid Votes',
        data: data.tSumCA,
        colors: chartColors
      }]

    });

    chart2.update({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Total Valid Votes Per Political Party (Presidential)'
      },
      
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            color: '#000000',
            connectorColor: '#000000',
          }
        }
      },
      series: [{
        type: 'pie',
        showInLegend: true,
        name: 'Valid Votes',
        data: data.tSumDA,
        colors: chartColors
      }]
    });

    // const datum =  data.df_grouped3z;

    // // Extract categories (first column) and column names (header row)
    // const categories = datum.map(item => item[0]);
    // const columnNames = data.graph2AX;

    // // Extract series data (exclude the first row which contains column names)
    // const seriesData = datum.slice(0).map(item => item.slice(1));

    // chart4.update({
    //   chart: {
    //     type: 'column'
    //   },
    //   title: {
    //     text: 'Total Valid Votes for Each Political Party Per Region(Parliament)',
    //     style: {
    //       fontSize: '17px',
    //       fontWeight: 'bold'
    //     }
    //   },
    //   xAxis: {
    //     categories: categories
    //   },
    //   yAxis: {
    //     title: {
    //       text: 'Valid Votes'
    //     }
    //   },
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
    //   series: columnNames.map((columnName, index) => ({
    //     name: columnName,
    //     data: seriesData.map(dataSeries => dataSeries[index]),
    //     showInLegend: false,
    //   }))

    // });


    // const datum2 =  data.df_grouped4z;


    // // Extract categories (first column) and column names (header row)
    // const categories2 = datum2.map(item => item[0]);
    // const columnNames2 = data.graph2BX;

    // // Extract series data (exclude the first row which contains column names)
    // const seriesData2 = datum2.slice(0).map(item => item.slice(1));

    // chart3b.update({
    //   chart: {
    //     type: 'column'
    //   },
    //   title: {
    //     text: 'Total Valid Votes for Each Political Party Per Region(Presidential)',
    //     // style: {
    //     //   fontSize: '17px',
    //     //   fontWeight: 'bold'
    //     // }
    //   },
    //   xAxis: {
    //     categories: categories2,
    //     min: 0,
    //     max: 5,
    //     scrollbar: {
    //       enabled: true
    //     },
    //   },
    //   yAxis: {
    //     title: {
    //       text: 'Valid Votes'
    //     }
    //   },
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
    //   colors: chartColors,
    //   series: columnNames2.map((columnName, index) => ({
    //     name: columnName,
    //     data: seriesData2.map(dataSeries => dataSeries[index]),
    //     showInLegend: false,
    //   }))
    // });


    chart3.update({
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Population Demographics',
        align: 'left'
      },
      subtitle: {
        text: '',
        align: 'left'
    },
      xAxis: {
        categories: data.graph1AX2P,
        title: {
          text: 'Regions'
        },
        gridLineWidth: 1,
        lineWidth: 0
      },
      yAxis: {
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
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 30,
        floating: true,
        borderWidth: 1,
        backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Population Demographics',
        data: data.graph1AY2P
      }]
    });
    // Hide the modal spinner once the chart is updated
    $('#staticBackdrop').modal('hide');

  
    // Add your chart updating code here to render `data` on the chart
}
    


// Function to fetch and update chart data
function updateCharts(selectedYear, region, census, electoral) {

  // Show the modal spinner before the fetch request starts
  $('#staticBackdrop').css('padding-right', '650px').modal('show');

  fetch(`/update_charts?year=${selectedYear}&region=${''}&census=${''}&electoral=${''}`)
  .then(response => response.json())
  .then(data => {
    
    // Update chart configuration and data based on the fetched data

    document.querySelector('#parliamentTotal').innerHTML = data.tSum + " : VALID VOTES";
    document.querySelector('#presidentialTotal').innerHTML = data.tSum2 + " : VALID VOTES"; 
    
    
    var selectElement = document.getElementById("regionSelection");

    // Store the currently selected region
    var selectedRegion = selectElement.value;

    // Get the "Region" option element
    // var regionOption = document.getElementById("regionOption");

    // Clear existing options except the "National" and "Regions" option
    while (selectElement.options.length > 2) {
        selectElement.remove(selectElement.options.length - 1);
    }

    //Iterate over the fetched data and create new options
    for (var i = 0; i < data.graph1BX.length; i++) {
        var option = document.createElement("option");
        option.textContent = data.graph1BX[i];
        selectElement.appendChild(option);
    }

    //Iterate to permenantly clear the layers
//     for (var key in overlayMaps) {
//     if (overlayMaps.hasOwnProperty(key)) {
//         delete overlayMaps[key];  // Delete each layer from overlayMaps
//     }
// }


    // Check if the layers have been created and added to the map before trying to remove them
    if (presidentialConst_16_REG && map.hasLayer(presidentialConst_16_REG)) {
        map.removeLayer(presidentialConst_16_REG);
    }

    if (presidentialConst_16_REG2 && map.hasLayer(presidentialConst_16_REG2)) {
        map.removeLayer(presidentialConst_16_REG2);
    }

    if (flashCONST2REG && map2.hasLayer(flashCONST2REG)) {
        map2.removeLayer(flashCONST2REG);
    }

    if (highlightLayerMap && map.hasLayer(highlightLayerMap)) {
        map.removeLayer(highlightLayerMap);
    }

    if (highlightLayerMap2 && map2.hasLayer(highlightLayerMap2)) {
        map2.removeLayer(highlightLayerMap2);
    }

    if (presidentialConst_16_REG_2024 && map.hasLayer(presidentialConst_16_REG_2024)) {
        map.removeLayer(presidentialConst_16_REG_2024);
    }

    if (flashCONST2REG_2024 && map.hasLayer(flashCONST2REG_2024)) {
        map.removeLayer(flashCONST2REG_2024);
    }

    

    // current commenting test
    //-------------------------

    // map.removeLayer(polling_stationData);
    // if (map.hasLayer(overlayMaps['Parliament 10 Regions'])) {
    // map.removeLayer(overlayMaps['Parliament 10 Regions']);
    // }

    overlayMaps['Parliament 10 Regions'].clearLayers();

    var merged_GHMap2A = data.merged_GHMap2A

    var parliament_10 = jsoncreateValidVotesGeoJSON(merged_GHMap2A).addTo(map);

    overlayMaps['Parliament 10 Regions'] = parliament_10;


    // if (map.hasLayer(overlayMaps['Presidential 10 Regions'])) {
    //     map.removeLayer(overlayMaps['Presidential 10 Regions']);
    // }
    overlayMaps['Presidential 10 Regions'].clearLayers();

    var merged2_GHMap2A = data.merged2_GHMap2A

    var presidential_10 = jsoncreateValidVotesGeoJSON(merged2_GHMap2A).addTo(map);

    overlayMaps['Presidential 10 Regions'] = presidential_10;


    // if (map.hasLayer(overlayMaps['Parliament 16 Regions'])) {
    //     map.removeLayer(overlayMaps['Parliament 16 Regions']);
    // }
    overlayMaps['Parliament 16 Regions'].clearLayers();

    var merged_GHMap2 = data.merged_GHMap2

    var parliament_16 = jsoncreateValidVotesGeoJSON(merged_GHMap2).addTo(map);

    overlayMaps['Parliament 16 Regions'] = parliament_16;


    // if (map.hasLayer(overlayMaps['Presidential 16 Regions'])) {
    //     map.removeLayer(overlayMaps['Presidential 16 Regions']);
    // }
    overlayMaps['Presidential 16 Regions'].clearLayers();

    var merged2_GHMap2 = data.merged2_GHMap2

    var presidential_16 = jsoncreateValidVotesGeoJSON(merged2_GHMap2).addTo(map);

    overlayMaps['Presidential 16 Regions'] = presidential_16;


    ////////////////////////////////////////////// Constituencies


    overlayMaps['Parliament 275 constituencies'].clearLayers();

    var merged_GHMap2ConstCONST2 = data.merged_GHMap2ConstCONST2

    var parliamentConst_16 = jsoncreateValidVotes_ConstGeoJSON(merged_GHMap2ConstCONST2).addTo(map);

    overlayMaps['Parliament 275 constituencies'] = parliamentConst_16;


    overlayMaps['Parliament 230 constituencies'].clearLayers();

    var merged_GHMap2ConstCONST2_10 = data.merged_GHMap2ConstCONST2_10

    var parliamentConst_16_10 = jsoncreateValidVotes_ConstGeoJSON(merged_GHMap2ConstCONST2_10).addTo(map);

    overlayMaps['Parliament 230 constituencies'] = parliamentConst_16_10;

    overlayMaps['Presidential 275 constituencies'].clearLayers();

    var merged2_GHMap2ConstCONST2 = data.merged2_GHMap2ConstCONST2

    var presidentialConst_16 = jsoncreateValidVotes_ConstGeoJSON(merged2_GHMap2ConstCONST2).addTo(map);

    overlayMaps['Presidential 275 constituencies'] = presidentialConst_16;


    overlayMaps['Presidential 230 constituencies'].clearLayers();

    var merged2_GHMap2ConstCONST2_10 = data.merged2_GHMap2ConstCONST2_10

    var presidentialConst_16_10 = jsoncreateValidVotes_ConstGeoJSON(merged2_GHMap2ConstCONST2_10).addTo(map);

    overlayMaps['Presidential 230 constituencies'] = presidentialConst_16_10;


    overlayMaps['Parliament 276 constituencies'].clearLayers();

    var merged_GHMap2ConstCONST2024 = data.merged_GHMap2ConstCONST2024

    var parliamentConst_2024 = jsoncreateValidVotes_ConstGeoJSON(merged_GHMap2ConstCONST2024).addTo(map);

    overlayMaps['Parliament 276 constituencies'] = parliamentConst_2024;


    overlayMaps['Presidential 276 constituencies'].clearLayers();

    var merged2_GHMap2ConstCONST2024 = data.merged2_GHMap2ConstCONST2024

    var presidentialConst_2024 = jsoncreateValidVotes_ConstGeoJSON(merged2_GHMap2ConstCONST2024).addTo(map);

    overlayMaps['Presidential 276 constituencies'] = presidentialConst_2024;



    // not part of current commenting test
    //-------------------------------------

    maplayers.remove();

    

    


    ///////////////////////////////////////////////////////////////////
    // FLASH REG

    // current commenting test
    //-------------------------

    // overlayMaps2['PS name'].clearLayers();

    // if (map.hasLayer(overlayMaps['Flash Incident Polling Stations'])) {
    //     map.removeLayer(overlayMaps['Flash Incident Polling Stations']);
    // }

    overlayMaps2['Flash Incident Polling Stations'].clearLayers();

    var mergedFlashPS_GHMap2 = data.mergedFlashPS_GHMap2

    var flashPS_Data2 = jsoncreateFlashPSGeoJSON(mergedFlashPS_GHMap2).addTo(map2);

    overlayMaps2['Flash Incident Polling Stations'] = flashPS_Data2;


    //map2.removeLayer(overlayMaps2['Flash Incident Polling Stations'])


    // if (map.hasLayer(overlayMaps['Flash Incident Regions'])) {
    //     map.removeLayer(overlayMaps['Flash Incident Regions']);
    // }
    overlayMaps2['Flash Incident Regions'].clearLayers();

    var mergedFlashREG_GHMap2 = data.mergedFlashREG_GHMap2

    var flashREG2 = jsonflashREG2_choropleth(mergedFlashREG_GHMap2).addTo(map2)

    overlayMaps2['Flash Incident Regions'] = flashREG2;


    overlayMaps2['Flash Incident 275 Constinuencies'].clearLayers();

    var mergedFlashCONST_GHMap2New = data.mergedFlashCONST_GHMap2New

    var flashCONST2 = jsonflashCONST2_choropleth(mergedFlashCONST_GHMap2New).addTo(map2)

    overlayMaps2['Flash Incident 275 Constinuencies'] = flashCONST2;


    overlayMaps2['Flash Incident 276 Constinuencies'].clearLayers();

    var mergedFlashCONST_GHMap2New2024 = data.mergedFlashCONST_GHMap2New2024

    var flashCONST2024 = jsonflashCONST2_choropleth(mergedFlashCONST_GHMap2New2024).addTo(map2)

    overlayMaps2['Flash Incident 276 Constinuencies'] = flashCONST2024;



    maplayers2.remove();


    //////////// HIGHLIGHT  ////////////

    // Define a style for the highlight
    var highlightStyle = {
        weight: 5,
        color: 'yellow',
        dashArray: '',
        fillOpacity: 0.7
    };

    // Function to highlight the clicked feature by adding a new 'highlight' layer
    function highlightFeature(e, mapId) {
        var layer = e.target;
        var featureGeoJSON = layer.feature;

        // Remove the previous highlight layer
        if (mapId === 'map' && highlightLayerMap) {
            map.removeLayer(highlightLayerMap);
        } else if (mapId === 'map2' && highlightLayerMap2) {
            map2.removeLayer(highlightLayerMap2);
        }

        // Create a new GeoJSON layer for the highlighted feature
        var highlightLayer = L.geoJSON(featureGeoJSON, {
            style: highlightStyle
        });

        // Add the new highlight layer to the correct map
        if (mapId === 'map') {
            highlightLayer.addTo(map);
            highlightLayerMap = highlightLayer;  // Store it globally for removal later
        } else if (mapId === 'map2') {
            highlightLayer.addTo(map2);
            highlightLayerMap2 = highlightLayer;  // Store it globally for removal later
        }

        // Zoom to the feature based on its geometry type
        if (layer.getBounds) {
            // For polygon or line features
            if (mapId === 'map') {
                map.fitBounds(layer.getBounds());
            } else if (mapId === 'map2') {
                map2.fitBounds(layer.getBounds());
            }
        } else if (layer.getLatLng) {
            // For point features (like markers)
            if (mapId === 'map') {
                map.setView(layer.getLatLng(), 14);  // Adjust zoom level to 14 or as desired
            } else if (mapId === 'map2') {
                map2.setView(layer.getLatLng(), 14);  // Adjust zoom level to 14 or as desired
            }
        }

         // Get the content from either a tooltip or a popup
        var tooltipContent = '';
        
        if (layer.getTooltip && layer.getTooltip()) {
            tooltipContent = layer.getTooltip().getContent();  // Tooltip content
        } else if (layer.getPopup && layer.getPopup()) {
            tooltipContent = layer.getPopup().getContent();  // Popup content
        }
        // Update the card content with the captured tooltip
        updateCardContent(tooltipContent);
    }

    // Function to update card content dynamically
    function updateCardContent(tooltipContent) {
        var cardContent = document.getElementById('card-content');
        
        // Clear the default content
        cardContent.innerHTML = '';

        // Split the tooltipContent by <br> and add each as a list item
        var tooltipItems = tooltipContent.split('<br>');
        tooltipItems.forEach(function(item) {
            var listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.innerHTML = item;
            cardContent.appendChild(listItem);
        });
    }

    // Attach event listeners for each feature in the layer
    function onEachFeature(feature, layer, mapId) {
        layer.on({
            click: function (e) {
                highlightFeature(e, mapId);   // Highlight on click
            }
        });
    }

    // Assuming you already have your GeoJSON layers added, bind the click handler to each feature

    // For map (first map)
    for (var layerName in overlayMaps) {
        overlayMaps[layerName].eachLayer(function (layer) {
            onEachFeature(null, layer, 'map');
        });
    }

    // For map2 (second map)
    for (var layerName in overlayMaps2) {
        overlayMaps2[layerName].eachLayer(function (layer) {
            onEachFeature(null, layer, 'map2');
        });
    }

    // Set the default card content when no feature is clicked
    updateCardContent('No selection from Map');


    //////////// END OF HIGHLIGHT //////

    maplayers2 = L.control.layers(baseMaps2, overlayMaps2).addTo(map2);

    maplayers = L.control.layers(baseMaps, overlayMaps).addTo(map);


    // current commenting test
    //--------------------------

    map.removeLayer(overlayMaps['Parliament 10 Regions']);

    map.removeLayer(overlayMaps['Parliament 16 Regions']);

    map.removeLayer(overlayMaps['Parliament 275 constituencies']);

    map.removeLayer(overlayMaps['Presidential 275 constituencies']);

    map.removeLayer(overlayMaps['Parliament 230 constituencies']);

    map.removeLayer(overlayMaps['Presidential 230 constituencies']);

    map.removeLayer(overlayMaps['Parliament 276 constituencies']);

    map.removeLayer(overlayMaps['Presidential 276 constituencies']);

    if (selectedYear === "2004" || selectedYear === "2008" || selectedYear === "2009" || selectedYear === "2012" || selectedYear === "2016") {
      map.removeLayer(overlayMaps['Presidential 16 Regions']);  
    } else {
        map.removeLayer(overlayMaps['Presidential 10 Regions']);
    }   



    /////FLASH CONTROL

    map2.removeLayer(overlayMaps2['Flash Incident Polling Stations'])

    map2.removeLayer(overlayMaps2['Flash Incident 275 Constinuencies']);

    map2.removeLayer(overlayMaps2['Flash Incident 276 Constinuencies']);

    // current commenting test
    if (selectedYear === "2004" || selectedYear === "2008" || selectedYear === "2009" || selectedYear === "2012" || selectedYear === "2016") {
        map2.addLayer(overlayMaps2['Flash Incident Regions']);  
    } else {
        map2.addLayer(overlayMaps2['Flash Incident Regions']);
    }


    
    //////////////////////////////////////////////////////////////////
    




    function resetMap() {
      map.setView(initialView.getCenter(), 6);
      map.addLayer(ps_name);
      // map.removeLayer(presidential_10);
      // map.removeLayer(presidential_16);
      if (overlayMaps['Presidential 16 Regions']) {
        map.removeLayer(overlayMaps['Presidential 16 Regions']);
    }
      if (overlayMaps['Presidential 10 Regions']) {
        map.removeLayer(overlayMaps['Presidential 10 Regions']);
    }

       regionsData.eachLayer(function(layer) {
          layer.setStyle({
            // Set your highlighting style here
            fillOpacity: 0
          });
        })


       regions16Data.eachLayer(function(layer) {
          layer.setStyle({
            // Set your highlighting style here
            fillOpacity: 0
          });
        })
    }

    ///////////////

    ////// (2)

    //////////////

    const colorsA = [
          '#f75464',
          '#0390fc',
          '#308a0a',
          '#f02274',
          '#ded712',
          '#f77c9d',
          '#8d76f5',
          '#b58931',
          '#ded712',
          '#f02274',
          '#0390fc',
          ] // Colors for 2004

    const colorsB = [
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

        ] // Colors for other years

    // Deciding the colors based on the year
    let chartColors;
    if (selectedYear === '2004') {
    chartColors = colorsA;
    } else {
    chartColors = colorsB;
    }


    
    ///////////////////////////////////////////////////////////////////

    // Set the value of the select element to the stored selected region
    // selectElement.value = selectedRegion;

    // // Ensure the "Region" option is always the first option

    // selectElement.insertBefore(regionOption, selectElement.options[0]);

    // const data_const_won = data.const_won_by_party_data;
    // console.log(data_const_won);

    // const transformedData = {
    //       products: data_const_won
    //     };

    // const data_const_won_name = data_const_won.products.map(item => item.name)
    // console.log(data_const_won_name);
    // const data_const_won_y = data_const_won.products.map(item => item.y)
    var categories1 = data.names;
    var visibleRange = 5; // Set how many categories to show at once


    chart1b.update({
      chart: {
        type: 'bar',
        style: {
          fontSize: '15px',
        },
      },
      title: {
        text: 'Total Seats Won Per Political Party (Parliament)',
        align: 'left'
      },

      xAxis: {
        categories: categories1,
        min: 0,
        max: categories1.length > visibleRange ? visibleRange : categories1.length - 1, // Adjust max based on data size
        scrollbar: {
          enabled: categories1.length > visibleRange // Enable scrollbar only if needed
        }, 
        title: {
          text: 'Parties'
        },
        gridLineWidth: 1,
        lineWidth: 0
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total Constituency Wins',
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
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 30,
        floating: true,
        borderWidth: 1,
        backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Constituency Wins',
        data: data.count_y
      }]
    });


    chart1.update({
      chart: {
        type: 'bar',
        style: {
          fontSize: '15px',
        },
      },
      title: {
        text: 'Total Valid Votes Per Political Party (Presidential)',
        align: 'left'
      },

      xAxis: {
        categories: data.graph2BXParties,
        min: 0,
        max: 5,
        scrollbar: {
          enabled: true
        },
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
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 30,
        floating: true,
        borderWidth: 1,
        backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Valid Votes',
        data: data.graph2BYParties
      }]
    });

    chart2b.update({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Total Valid Votes Per Political Party (Parliament)'
      },
      
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {                  
            enabled: true,
            color: '#000000',
            connectorColor: '#000000',
          }
        }
      },
      series: [{
        type: 'pie',
        showInLegend: true,
        name: 'Valid Votes',
        data: data.tSumCA,
        colors: chartColors
      }]

    });

    chart2.update({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Total Valid Votes Per Political Party (Presidential)'
      },
      
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            color: '#000000',
            connectorColor: '#000000',
          }
        }
      },
      series: [{
        type: 'pie',
        showInLegend: true,
        name: 'Valid Votes',
        data: data.tSumDA,
        colors: chartColors
      }]
    });

    // const datum =  data.df_grouped3z;

    // // Extract categories (first column) and column names (header row)
    // const categories = datum.map(item => item[0]);
    // const columnNames = data.graph2AX;

    // // Extract series data (exclude the first row which contains column names)
    // const seriesData = datum.slice(0).map(item => item.slice(1));

    // chart4.update({
    //   chart: {
    //     type: 'column'
    //   },
    //   title: {
    //     text: 'Total Valid Votes for Each Political Party Per Region(Parliament)',
    //     style: {
    //       fontSize: '17px',
    //       fontWeight: 'bold'
    //     }
    //   },
    //   xAxis: {
    //     categories: categories
    //   },
    //   yAxis: {
    //     title: {
    //       text: 'Valid Votes'
    //     }
    //   },
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
    //   series: columnNames.map((columnName, index) => ({
    //     name: columnName,
    //     data: seriesData.map(dataSeries => dataSeries[index]),
    //     showInLegend: false,
    //   }))

    // });


    // const datum2 =  data.df_grouped4z;


    // // Extract categories (first column) and column names (header row)
    // const categories2 = datum2.map(item => item[0]);
    // const columnNames2 = data.graph2BX;

    // // Extract series data (exclude the first row which contains column names)
    // const seriesData2 = datum2.slice(0).map(item => item.slice(1));

    // chart3b.update({
    //   chart: {
    //     type: 'column'
    //   },
    //   title: {
    //     text: 'Total Valid Votes for Each Political Party Per Region(Presidential)',
    //     // style: {
    //     //   fontSize: '17px',
    //     //   fontWeight: 'bold'
    //     // }
    //   },
    //   xAxis: {
    //     categories: categories2,
    //     min: 0,
    //     max: 5,
    //     scrollbar: {
    //       enabled: true
    //     },
    //   },
    //   yAxis: {
    //     title: {
    //       text: 'Valid Votes'
    //     }
    //   },
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
    //   colors: chartColors,
    //   series: columnNames2.map((columnName, index) => ({
    //     name: columnName,
    //     data: seriesData2.map(dataSeries => dataSeries[index]),
    //     showInLegend: false,
    //   }))
    // });


    chart3.update({
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Population Demographics',
        align: 'left'
      },
      subtitle: {
        text: '',
        align: 'left'
    },
      xAxis: {
        categories: data.graph1AX2P,
        title: {
          text: 'Regions'
        },
        gridLineWidth: 1,
        lineWidth: 0
      },
      yAxis: {
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
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 30,
        floating: true,
        borderWidth: 1,
        backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Population Demographics',
        data: data.graph1AY2P
      }]
    });
    // Hide the modal spinner once the chart is updated
    $('#staticBackdrop').modal('hide');

  })
  
  
  resetMap(region, selectedYear);
  updateMap(region, selectedYear, false);
  resetMap2(region, selectedYear);
  updateMap2(region, selectedYear, false);
  loadChartData(selectedYear, region, census, electoral); // Load either real-time or static data


  // .catch(error => {
  //   console.error('Error fetching data:', error);
  //   // Optionally hide the spinner modal even if there's an error
  //   $('#staticBackdrop').modal('hide');
  // });
  

};


// Helper function to get the CSRF token from cookies
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function changeChartYear() {
  const yearSelector = document.querySelector("#yearSelection")
  const regionSelector = document.querySelector("#regionSelection")
  const censusSelector = document.querySelector("#censusSelection")
  const electoralSelector = document.querySelector("#electoralSelection1")
  
  activeYear = yearSelector.value || '2020'
  //activeRegion = regionSelector.value 
  activeCencus = censusSelector.value 
  activeElectoral = electoralSelector.value 

  // List of valid regions
  const validRegions = ["Ashanti", "Greater Accra", "Western", "Eastern", "Volta", "Northern", "Central", "Upper East", "Upper West", "Brong Ahafo", "Western North", "Oti", "Bono East", "Ahafo", "North East", "Savannah", "Bono"];

  // Only assign activeRegion if it is a valid region
  const selectedRegion = regionSelector.value;

  if (validRegions.includes(selectedRegion)) {
    activeRegion = selectedRegion;
  } else {
    // Fallback if no valid region is selected
    activeRegion = 'Ashanti';  // Default to 'Ashanti' or any region of your choice
  }
  
  updateCharts(activeYear, activeRegion, activeCencus, activeElectoral);
  
}

///////////////////////////////////////////////////////////////////
// REGIONS SELECTION

    // Function to fetch and update chart data
function updateChartsRegions(selectedYear, region, census, electoral) {

  // Show the modal spinner before the fetch request starts
  $('#staticBackdrop').css('padding-right', '650px').modal('show');

  fetch(`/update_charts?year=${selectedYear}&region=${''}&census=${''}&electoral=${''}`)
  .then(response => response.json())
  .then(data => {
    
    // Update chart configuration and data based on the fetched data

    document.querySelector('#parliamentTotal').innerHTML = data.tSum + " : VALID VOTES";
    document.querySelector('#presidentialTotal').innerHTML = data.tSum2 + " : VALID VOTES"; 
    
    // Get the select element
    // var selectElement = document.getElementById("regionSelection");

    // // Store the currently selected region
    // var selectedRegion = selectElement.value;

    // // Get the "Region" option element
    // // var regionOption = document.getElementById("regionOption");

    // // Clear existing options except the "Region" option
    // while (selectElement.options.length > 1) {
    //     selectElement.remove(1);
    // }

    // //Iterate over the fetched data and create new options
    // for (var i = 0; i < data.graph1BX.length; i++) {
    //     var option = document.createElement("option");
    //     option.textContent = data.graph1BX[i];
    //     selectElement.appendChild(option);
    // }


    // Check if the layers have been created and added to the map before trying to remove them
    if (presidentialConst_16_REG && map.hasLayer(presidentialConst_16_REG)) {
        map.removeLayer(presidentialConst_16_REG);
    }

    if (presidentialConst_16_REG2 && map.hasLayer(presidentialConst_16_REG2)) {
        map.removeLayer(presidentialConst_16_REG2);
    }

    if (flashCONST2REG && map2.hasLayer(flashCONST2REG)) {
        map2.removeLayer(flashCONST2REG);
    }

    if (highlightLayerMap && map.hasLayer(highlightLayerMap)) {
        map.removeLayer(highlightLayerMap);
    }

    if (highlightLayerMap2 && map2.hasLayer(highlightLayerMap2)) {
        map2.removeLayer(highlightLayerMap2);
    }

    if (presidentialConst_16_REG_2024 && map.hasLayer(presidentialConst_16_REG_2024)) {
        map.removeLayer(presidentialConst_16_REG_2024);
    }

    if (flashCONST2REG_2024 && map.hasLayer(flashCONST2REG_2024)) {
        map.removeLayer(flashCONST2REG_2024);
    }


    // current commenting test
    // -------------------------

    var merged_GHMap2A = data.merged_GHMap2A
    var merged2_GHMap2A = data.merged2_GHMap2A
    var merged_GHMap2 = data.merged_GHMap2
    var merged2_GHMap2 = data.merged2_GHMap2
    var mergedFlashPS_GHMap2 = data.mergedFlashPS_GHMap2
    var mergedFlashREG_GHMap2 = data.mergedFlashREG_GHMap2


    // if (map.hasLayer(overlayMaps['Parliament 10 Regions'])) {
    //     map.removeLayer(overlayMaps['Parliament 10 Regions']);
    // }
    overlayMaps['Parliament 10 Regions'].clearLayers();
    // map.removeLayer(polling_stationData);

    var parliament_10 = jsoncreateValidVotesGeoJSON(merged_GHMap2A).addTo(map);

    overlayMaps['Parliament 10 Regions'] = parliament_10;


    // if (map.hasLayer(overlayMaps['Presidential 10 Regions'])) {
    //     map.removeLayer(overlayMaps['Presidential 10 Regions']);
    // }
    overlayMaps['Presidential 10 Regions'].clearLayers();

    var presidential_10 = jsoncreateValidVotesGeoJSON(merged2_GHMap2A).addTo(map);

    overlayMaps['Presidential 10 Regions'] = presidential_10;


    // if (map.hasLayer(overlayMaps['Parliament 16 Regions'])) {
    //     map.removeLayer(overlayMaps['Parliament 16 Regions']);
    // }
    overlayMaps['Parliament 16 Regions'].clearLayers();

    var parliament_16 = jsoncreateValidVotesGeoJSON(merged_GHMap2).addTo(map);

    overlayMaps['Parliament 16 Regions'] = parliament_16;


    // if (map.hasLayer(overlayMaps['Presidential 16 Regions'])) {
    //     map.removeLayer(overlayMaps['Presidential 16 Regions']);
    // }
    overlayMaps['Presidential 16 Regions'].clearLayers();

    var presidential_16 = jsoncreateValidVotesGeoJSON(merged2_GHMap2).addTo(map);

    overlayMaps['Presidential 16 Regions'] = presidential_16;


    ////////////////////////////////////////////// Constituencies


    overlayMaps['Parliament 265 constituencies'].clearLayers();

    var merged_GHMap2ConstCONST2 = data.merged_GHMap2ConstCONST2

    var parliamentConst_16 = jsoncreateValidVotes_ConstGeoJSON(merged_GHMap2ConstCONST2).addTo(map);

    overlayMaps['Parliament 265 constituencies'] = parliamentConst_16;


    overlayMaps['Parliament 230 constituencies'].clearLayers();

    var merged_GHMap2ConstCONST2_10 = data.merged_GHMap2ConstCONST2_10

    var parliamentConst_16_10 = jsoncreateValidVotes_ConstGeoJSON(merged_GHMap2ConstCONST2_10).addTo(map);

    overlayMaps['Parliament 230 constituencies'] = parliamentConst_16_10;

    overlayMaps['Presidential 275 constituencies'].clearLayers();

    var merged2_GHMap2ConstCONST2 = data.merged2_GHMap2ConstCONST2

    var presidentialConst_16 = jsoncreateValidVotes_ConstGeoJSON(merged2_GHMap2ConstCONST2).addTo(map);

    overlayMaps['Presidential 275 constituencies'] = presidentialConst_16;


    overlayMaps['Presidential 230 constituencies'].clearLayers();

    var merged2_GHMap2ConstCONST2_10 = data.merged2_GHMap2ConstCONST2_10

    var presidentialConst_16_10 = jsoncreateValidVotes_ConstGeoJSON(merged2_GHMap2ConstCONST2_10).addTo(map);

    overlayMaps['Presidential 230 constituencies'] = presidentialConst_16_10;


    overlayMaps['Parliament 276 constituencies'].clearLayers();

    var merged_GHMap2ConstCONST2024 = data.merged_GHMap2ConstCONST2024

    var parliamentConst_2024 = jsoncreateValidVotes_ConstGeoJSON(merged_GHMap2ConstCONST2024).addTo(map);

    overlayMaps['Parliament 276 constituencies'] = parliamentConst_2024;


    overlayMaps['Presidential 276 constituencies'].clearLayers();

    var merged2_GHMap2ConstCONST2024 = data.merged2_GHMap2ConstCONST2024

    var presidentialConst_2024 = jsoncreateValidVotes_ConstGeoJSON(merged2_GHMap2ConstCONST2024).addTo(map);

    overlayMaps['Presidential 276 constituencies'] = presidentialConst_2024;



    // not part of current commenting test
    //--------------------------------------

    maplayers.remove();
    


    ///////////////////////////////////////////////////////////////////
    // FLASH REG

    // current commenting test
    //------------------------

    //overlayMaps2['PS name'].clearLayers();


    // if (map.hasLayer(overlayMaps['Flash Incident Polling Stations'])) {
    //     map.removeLayer(overlayMaps['Flash Incident Polling Stations']);
    // }

    overlayMaps2['Flash Incident Polling Stations'].clearLayers();

    var flashPS_Data2 = jsoncreateFlashPSGeoJSON(mergedFlashPS_GHMap2).addTo(map2);

    overlayMaps2['Flash Incident Polling Stations'] = flashPS_Data2;

    //map2.removeLayer(overlayMaps2['Flash Incident Polling Stations'])


    // if (map.hasLayer(overlayMaps['Flash Incident Regions'])) {
    //     map.removeLayer(overlayMaps['Flash Incident Regions']);
    // }
    overlayMaps2['Flash Incident Regions'].clearLayers();

    var flashREG2 = jsonflashREG2_choropleth(mergedFlashREG_GHMap2).addTo(map2)

    overlayMaps2['Flash Incident Regions'] = flashREG2;


    overlayMaps2['Flash Incident 275 Constinuencies'].clearLayers();

    var mergedFlashCONST_GHMap2New = data.mergedFlashCONST_GHMap2New

    var flashCONST2 = jsonflashCONST2_choropleth(mergedFlashCONST_GHMap2New).addTo(map2)

    overlayMaps2['Flash Incident 275 Constinuencies'] = flashCONST2;


    overlayMaps2['Flash Incident 276 Constinuencies'].clearLayers();

    var mergedFlashCONST_GHMap2New2024 = data.mergedFlashCONST_GHMap2New2024

    var flashCONST2024 = jsonflashCONST2_choropleth(mergedFlashCONST_GHMap2New2024).addTo(map2)

    overlayMaps2['Flash Incident 276 Constinuencies'] = flashCONST2024;


    // not part current commenting test
    //---------------------------------

    maplayers2.remove();

    //////////// HIGHLIGHT  ////////////

    // Define a style for the highlight
    var highlightStyle = {
        weight: 5,
        color: 'yellow',
        dashArray: '',
        fillOpacity: 0.7
    };

    // Function to highlight the clicked feature by adding a new 'highlight' layer
    function highlightFeature(e, mapId) {
        var layer = e.target;
        var featureGeoJSON = layer.feature;

        // Remove the previous highlight layer
        if (mapId === 'map' && highlightLayerMap) {
            map.removeLayer(highlightLayerMap);
        } else if (mapId === 'map2' && highlightLayerMap2) {
            map2.removeLayer(highlightLayerMap2);
        }

        // Create a new GeoJSON layer for the highlighted feature
        var highlightLayer = L.geoJSON(featureGeoJSON, {
            style: highlightStyle
        });

        // Add the new highlight layer to the correct map
        if (mapId === 'map') {
            highlightLayer.addTo(map);
            highlightLayerMap = highlightLayer;  // Store it globally for removal later
        } else if (mapId === 'map2') {
            highlightLayer.addTo(map2);
            highlightLayerMap2 = highlightLayer;  // Store it globally for removal later
        }

        // Zoom to the feature based on its geometry type
        if (layer.getBounds) {
            // For polygon or line features
            if (mapId === 'map') {
                map.fitBounds(layer.getBounds());
            } else if (mapId === 'map2') {
                map2.fitBounds(layer.getBounds());
            }
        } else if (layer.getLatLng) {
            // For point features (like markers)
            if (mapId === 'map') {
                map.setView(layer.getLatLng(), 14);  // Adjust zoom level to 14 or as desired
            } else if (mapId === 'map2') {
                map2.setView(layer.getLatLng(), 14);  // Adjust zoom level to 14 or as desired
            }
        }

        // Get the content from either a tooltip or a popup
        var tooltipContent = '';
        
        if (layer.getTooltip && layer.getTooltip()) {
            tooltipContent = layer.getTooltip().getContent();  // Tooltip content
        } else if (layer.getPopup && layer.getPopup()) {
            tooltipContent = layer.getPopup().getContent();  // Popup content
        }
        // Update the card content with the captured tooltip
        updateCardContent(tooltipContent);
    }

    // Function to update card content dynamically
    function updateCardContent(tooltipContent) {
        var cardContent = document.getElementById('card-content');
        
        // Clear the default content
        cardContent.innerHTML = '';

        // Split the tooltipContent by <br> and add each as a list item
        var tooltipItems = tooltipContent.split('<br>');
        tooltipItems.forEach(function(item) {
            var listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.innerHTML = item;
            cardContent.appendChild(listItem);
        });
    }

    // Attach event listeners for each feature in the layer
    function onEachFeature(feature, layer, mapId) {
        layer.on({
            click: function (e) {
                highlightFeature(e, mapId);   // Highlight on click
            }
        });
    }

    // Assuming you already have your GeoJSON layers added, bind the click handler to each feature

    // For map (first map)
    for (var layerName in overlayMaps) {
        overlayMaps[layerName].eachLayer(function (layer) {
            onEachFeature(null, layer, 'map');
        });
    }

    // For map2 (second map)
    for (var layerName in overlayMaps2) {
        overlayMaps2[layerName].eachLayer(function (layer) {
            onEachFeature(null, layer, 'map2');
        });
    }

    // Set the default card content when no feature is clicked
    updateCardContent('No selection from Map');

    //////////// END OF HIGHLIGHT //////

    maplayers2 = L.control.layers(baseMaps2, overlayMaps2).addTo(map2);

    maplayers = L.control.layers(baseMaps, overlayMaps).addTo(map);


    // current commenting test
    //-------------------------

    map.removeLayer(overlayMaps['Parliament 10 Regions']);

    map.removeLayer(overlayMaps['Parliament 16 Regions']);

    map.removeLayer(overlayMaps['Parliament 275 constituencies']);

    map.removeLayer(overlayMaps['Presidential 275 constituencies']);

    map.removeLayer(overlayMaps['Parliament 230 constituencies']);
    
    map.removeLayer(overlayMaps['Presidential 230 constituencies']);

    map.removeLayer(overlayMaps['Parliament 275 constituencies']);
    
    map.removeLayer(overlayMaps['Presidential 275 constituencies']);

    if (selectedYear === "2004" || selectedYear === "2008" || selectedYear === "2009" || selectedYear === "2012" || selectedYear === "2016") {
      map.removeLayer(overlayMaps['Presidential 16 Regions']);  
    } else {
        map.removeLayer(overlayMaps['Presidential 10 Regions']);
    }

    ////FLASH CONTROL

    map2.removeLayer(overlayMaps2['Flash Incident Polling Stations'])

    map2.removeLayer(overlayMaps2['Flash Incident 275 Constinuencies']);

    map2.removeLayer(overlayMaps2['Flash Incident 276 Constinuencies']);


    // current commenting test
    //-------------------------

    if (selectedYear === "2004" || selectedYear === "2008" || selectedYear === "2009" || selectedYear === "2012" || selectedYear === "2016") {
        map2.addLayer(overlayMaps2['Flash Incident Regions']);  
    } else {
        map2.addLayer(overlayMaps2['Flash Incident Regions']);
    }



    //////////////////////////////////////////////////////////////////
    




    function resetMap() {
      map.setView(initialView.getCenter(), 6);
      map.addLayer(ps_name);
      // map.removeLayer(presidential_10);
      // map.removeLayer(presidential_16);
      if (overlayMaps['Presidential 16 Regions']) {
        map.removeLayer(overlayMaps['Presidential 16 Regions']);
    }
      if (overlayMaps['Presidential 10 Regions']) {
        map.removeLayer(overlayMaps['Presidential 10 Regions']);
    }

       regionsData.eachLayer(function(layer) {
          layer.setStyle({
            // Set your highlighting style here
            fillOpacity: 0
          });
        })


       regions16Data.eachLayer(function(layer) {
          layer.setStyle({
            // Set your highlighting style here
            fillOpacity: 0
          });
        })
    }

    ///////////////

    ////// (2)

    //////////////

    const colorsA = [
          '#f75464',
          '#0390fc',
          '#308a0a',
          '#f02274',
          '#ded712',
          '#f77c9d',
          '#8d76f5',
          '#b58931',
          '#ded712',
          '#f02274',
          '#0390fc',
          ] // Colors for 2004

    const colorsB = [
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

        ] // Colors for other years

    // Deciding the colors based on the year
    let chartColors;
    if (selectedYear === '2004') {
    chartColors = colorsA;
    } else {
    chartColors = colorsB;
    }


    
    ///////////////////////////////////////////////////////////////////

    // Set the value of the select element to the stored selected region
    // selectElement.value = selectedRegion;

    // // Ensure the "Region" option is always the first option

    // selectElement.insertBefore(regionOption, selectElement.options[0]);

    //const data_const_won = data.const_won_by_party_data; 
    var categories1 = data.graph1AX;
    var visibleRange = 5; // Set how many categories to show at once


    chart1b.update({
      chart: {
        type: 'bar',
        style: {
          fontSize: '15px',
        },
      },
      title: {
        text: 'Total Valid Votes Per Political Party (Parliament)',
        align: 'left'
      },

      xAxis: {
        categories: categories1,
        min: 0,
        max: categories1.length > visibleRange ? visibleRange : categories1.length - 1, // Adjust max based on data size
        scrollbar: {
          enabled: categories1.length > visibleRange // Enable scrollbar only if needed
        }, 
        title: {
          text: 'Parties'
        },
        gridLineWidth: 1,
        lineWidth: 0
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total Consituency wins',
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
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 30,
        floating: true,
        borderWidth: 1,
        backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Consituency wins',
        data: data.graph1AY
      }]
    }); 

    chart1.update({
      chart: {
        type: 'bar',
        style: {
          fontSize: '15px',
        },
      },
      title: {
        text: 'Total Valid Votes Per Political Party (Presidential)',
        align: 'left'
      },

      xAxis: {
        categories: data.graph1BX,
        min: 0,
        max: 5,
        scrollbar: {
          enabled: true
        },
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
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 30,
        floating: true,
        borderWidth: 1,
        backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Valid Votes',
        data: data.graph1BY
      }]
    });

    chart2b.update({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Total Valid Votes Per Political Party (Parliament)'
      },
      
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {                  
            enabled: true,
            color: '#000000',
            connectorColor: '#000000',
          }
        }
      },
      series: [{
        type: 'pie',
        showInLegend: true,
        name: 'Valid Votes',
        data: data.tSumCA,
        colors: chartColors
      }]

    });

    chart2.update({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Total Valid Votes Per Political Party (Presidential)'
      },
      
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            color: '#000000',
            connectorColor: '#000000',
          }
        }
      },
      series: [{
        type: 'pie',
        showInLegend: true,
        name: 'Valid Votes',
        data: data.tSumDA,
        colors: chartColors
      }]
    });

    // const datum =  data.df_grouped3z;

    // // Extract categories (first column) and column names (header row)
    // const categories = datum.map(item => item[0]);
    // const columnNames = data.graph2AX;

    // // Extract series data (exclude the first row which contains column names)
    // const seriesData = datum.slice(0).map(item => item.slice(1));

    // chart4.update({
    //   chart: {
    //     type: 'column'
    //   },
    //   title: {
    //     text: 'Total Valid Votes for Each Political Party Per Region(Parliament)',
    //     style: {
    //       fontSize: '17px',
    //       fontWeight: 'bold'
    //     }
    //   },
    //   xAxis: {
    //     categories: categories
    //   },
    //   yAxis: {
    //     title: {
    //       text: 'Valid Votes'
    //     }
    //   },
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
    //   series: columnNames.map((columnName, index) => ({
    //     name: columnName,
    //     data: seriesData.map(dataSeries => dataSeries[index]),
    //     showInLegend: false,
    //   }))

    // });


    // const datum2 =  data.df_grouped4z;


    // // Extract categories (first column) and column names (header row)
    // const categories2 = datum2.map(item => item[0]);
    // const columnNames2 = data.graph2BX;

    // // Extract series data (exclude the first row which contains column names)
    // const seriesData2 = datum2.slice(0).map(item => item.slice(1));

    // chart3b.update({
    //   chart: {
    //     type: 'column'
    //   },
    //   title: {
    //     text: 'Total Valid Votes for Each Political Party Per Region(Presidential)',
    //     // style: {
    //     //   fontSize: '17px',
    //     //   fontWeight: 'bold'
    //     // }
    //   },
    //   xAxis: {
    //     categories: categories2,
    //     min: 0,
    //     max: 5,
    //     scrollbar: {
    //       enabled: true
    //     },
    //   },
    //   yAxis: {
    //     title: {
    //       text: 'Valid Votes'
    //     }
    //   },
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
    //   colors: chartColors,
    //   series: columnNames2.map((columnName, index) => ({
    //     name: columnName,
    //     data: seriesData2.map(dataSeries => dataSeries[index]),
    //     showInLegend: false,
    //   }))
    // });

    

    chart3.update({
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Population Demographics',
        align: 'left'
      },
      subtitle: {
        text: '',
        align: 'left'
    },
      xAxis: {
        categories: data.graph1AX2P,
        title: {
          text: 'Regions'
        },
        gridLineWidth: 1,
        lineWidth: 0
      },
      yAxis: {
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
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 30,
        floating: true,
        borderWidth: 1,
        backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Population Demographics',
        data: data.graph1AY2P
      }]
    });
     // Hide the modal spinner once the chart is updated
    $('#staticBackdrop').modal('hide');

  })
  
  
  resetMap(region, selectedYear);
  updateMap(region, selectedYear, false);
  resetMap2(region, selectedYear);
  updateMap2(region, selectedYear, false);

  // .catch(error => {
  //   console.error('Error fetching data:', error);
  //   // Optionally hide the spinner modal even if there's an error
  //   $('#staticBackdrop').modal('hide');
  // });
  

};


// Helper function to get the CSRF token from cookies
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function changeChartYearRegions() {
  const yearSelector = document.querySelector("#yearSelection")
  const regionSelector = document.querySelector("#regionSelection")
  const censusSelector = document.querySelector("#censusSelection")
  const electoralSelector = document.querySelector("#electoralSelection1")
  
  activeYear = yearSelector.value || '2020'
  //activeRegion = regionSelector.value 
  activeCencus = censusSelector.value 
  activeElectoral = electoralSelector.value 

  // List of valid regions
  const validRegions = ["Ashanti", "Greater Accra", "Western", "Eastern", "Volta", "Northern", "Central", "Upper East", "Upper West", "Brong Ahafo", "Western North", "Oti", "Bono East", "Ahafo", "North East", "Savannah", "Bono"];

  // Only assign activeRegion if it is a valid region
  const selectedRegion = regionSelector.value;

  if (validRegions.includes(selectedRegion)) {
    activeRegion = selectedRegion;
  } else {
    // Fallback if no valid region is selected
    activeRegion = 'Ashanti';  // Default to 'Ashanti' or any region of your choice
  }
  
  updateChartsRegions(activeYear, activeRegion, activeCencus, activeElectoral);
  
}




///////////////////////////////////////////////////////////////////


  // Function to fetch and update chart data
function updateCharts2(year, selectedRegion, census, electoral) {

  // Show the modal spinner before the fetch request starts
  $('#staticBackdrop').css('padding-right', '650px').modal('show');

  fetch(`/update_charts?year=${year}&region=${selectedRegion}&census=${''}&electoral=${''}`)
  .then(response => response.json())
  .then(data => {



    /////////////////////////////////////////////////////////////////
    // FLASH CONST

    // current commenting test
    //-------------------------

    // map2.removeLayer(overlayMaps2['Flash Incident Regions']);

    // if (map.hasLayer(overlayMaps['Flash Incident Constinuencies'])) {
    //     map.removeLayer(overlayMaps['Flash Incident Constinuencies']);
    // }


    // Check if the layers have been created and added to the map before trying to remove them
    if (presidentialConst_16_REG && map.hasLayer(presidentialConst_16_REG)) {
        map.removeLayer(presidentialConst_16_REG);
    }
    

    if (presidentialConst_16_REG2 && map.hasLayer(presidentialConst_16_REG2)) {
        map.removeLayer(presidentialConst_16_REG2);
    }

    if (flashCONST2REG && map2.hasLayer(flashCONST2REG)) {
        map2.removeLayer(flashCONST2REG);
    }

    if (highlightLayerMap && map.hasLayer(highlightLayerMap)) {
        map.removeLayer(highlightLayerMap);
    }

    if (highlightLayerMap2 && map2.hasLayer(highlightLayerMap2)) {
        map2.removeLayer(highlightLayerMap2);
    }

    if (presidentialConst_16_REG_2024 && map.hasLayer(presidentialConst_16_REG_2024)) {
        map.removeLayer(presidentialConst_16_REG_2024);
    }

    if (flashCONST2REG_2024 && map.hasLayer(flashCONST2REG_2024)) {
        map.removeLayer(flashCONST2REG_2024);
    }


    overlayMaps2['Flash Incident 275 Constinuencies'].clearLayers();

    var mergedFlashCONST_GHMap2New = data.mergedFlashCONST_GHMap2New

    var flashCONST2 = jsonflashCONST2_choropleth(mergedFlashCONST_GHMap2New).addTo(map2)

    overlayMaps2['Flash Incident 275 Constinuencies'] = flashCONST2;


    overlayMaps2['Flash Incident 276 Constinuencies'].clearLayers();

    var mergedFlashCONST_GHMap2New2024 = data.mergedFlashCONST_GHMap2New2024

    var flashCONST2024 = jsonflashCONST2_choropleth(mergedFlashCONST_GHMap2New2024).addTo(map2)

    overlayMaps2['Flash Incident 276 Constinuencies'] = flashCONST2024;


    var mergedFlashCONST_GHMap2 = data.mergedFlashCONST_GHMap2

    var mergedFlashCONST_GHMap2024 = data.mergedFlashCONST_GHMap2024

    if (year === "2004" || year === "2008" || year === "2009" || year === "2012" || year === "2016" || year === "2020") {
        flashCONST2REG = jsonflashCONST2_choropleth(mergedFlashCONST_GHMap2).addTo(map2);
        bindClickToDynamicLayers(flashCONST2REG, 'map2');
    } else {
        flashCONST2REG_2024 = jsonflashCONST2_choropleth(mergedFlashCONST_GHMap2024).addTo(map2);
        bindClickToDynamicLayers(flashCONST2REG_2024, 'map2');
    }

  

    // not part of current commenting test
    //------------------------------------

    maplayers2.remove();
    
    //map2.addLayer(regions16Data);




    ///////////////////////////////////////////////////////////

    // current commenting test
    //-------------------------
    map.removeLayer(overlayMaps['Parliament 10 Regions']);
    map.removeLayer(overlayMaps['Presidential 16 Regions']);
    map.removeLayer(polling_stationData);

    //map.addLayer(regions16Data);

    

    // current commenting test
    //-------------------------
    overlayMaps['Parliament 275 constituencies'].clearLayers();

    // if (map.hasLayer(overlayMaps['Parliament 16 constituencies'])) {
    //     map.removeLayer(overlayMaps['Parliament 16 constituencies']);
    // }

    var merged_GHMap2ConstCONST2 = data.merged_GHMap2ConstCONST2

    var parliamentConst_16 = jsoncreateValidVotes_ConstGeoJSON(merged_GHMap2ConstCONST2).addTo(map);

    overlayMaps['Parliament 275 constituencies'] = parliamentConst_16;


    overlayMaps['Parliament 230 constituencies'].clearLayers();

    var merged_GHMap2ConstCONST2_10 = data.merged_GHMap2ConstCONST2_10

    var parliamentConst_16_10 = jsoncreateValidVotes_ConstGeoJSON(merged_GHMap2ConstCONST2_10).addTo(map);

    overlayMaps['Parliament 230 constituencies'] = parliamentConst_16_10;


    // if (map.hasLayer(overlayMaps['Presidential 16 constituencies'])) {
    //     map.removeLayer(overlayMaps['Presidential 16 constituencies']);
    // }
    overlayMaps['Presidential 275 constituencies'].clearLayers();

    var merged2_GHMap2ConstCONST2 = data.merged2_GHMap2ConstCONST2

    var presidentialConst_16 = jsoncreateValidVotes_ConstGeoJSON(merged2_GHMap2ConstCONST2).addTo(map);

    overlayMaps['Presidential 275 constituencies'] = presidentialConst_16;


    overlayMaps['Presidential 230 constituencies'].clearLayers();

    var merged2_GHMap2ConstCONST2_10 = data.merged2_GHMap2ConstCONST2_10

    var presidentialConst_16_10 = jsoncreateValidVotes_ConstGeoJSON(merged2_GHMap2ConstCONST2_10).addTo(map);

    overlayMaps['Presidential 230 constituencies'] = presidentialConst_16_10;


    overlayMaps['Parliament 276 constituencies'].clearLayers();

    var merged_GHMap2ConstCONST2024 = data.merged_GHMap2ConstCONST2024

    var parliamentConst_2024 = jsoncreateValidVotes_ConstGeoJSON(merged_GHMap2ConstCONST2024).addTo(map);

    overlayMaps['Parliament 276 constituencies'] = parliamentConst_2024;


    overlayMaps['Presidential 276 constituencies'].clearLayers();

    var merged2_GHMap2ConstCONST2024 = data.merged2_GHMap2ConstCONST2024

    var presidentialConst_2024 = jsoncreateValidVotes_ConstGeoJSON(merged2_GHMap2ConstCONST2024).addTo(map);

    overlayMaps['Presidential 276 constituencies'] = presidentialConst_2024;




    // not part of current commenting test
    //-------------------------------------

    maplayers.remove();

    //////////// HIGHLIGHT  ////////////

    // Define a style for the highlight
    var highlightStyle = {
        weight: 5,
        color: 'yellow',
        dashArray: '',
        fillOpacity: 0.7
    };

    // Function to highlight the clicked feature by adding a new 'highlight' layer
    function highlightFeature(e, mapId) {
        var layer = e.target;
        var featureGeoJSON = layer.feature;

        // Remove the previous highlight layer
        if (mapId === 'map' && highlightLayerMap) {
            map.removeLayer(highlightLayerMap);
        } else if (mapId === 'map2' && highlightLayerMap2) {
            map2.removeLayer(highlightLayerMap2);
        }

        // Create a new GeoJSON layer for the highlighted feature
        var highlightLayer = L.geoJSON(featureGeoJSON, {
            style: highlightStyle
        });

        // Add the new highlight layer to the correct map
        if (mapId === 'map') {
            highlightLayer.addTo(map);
            highlightLayerMap = highlightLayer;  // Store it globally for removal later
        } else if (mapId === 'map2') {
            highlightLayer.addTo(map2);
            highlightLayerMap2 = highlightLayer;  // Store it globally for removal later
        }

        // Zoom to the feature based on its geometry type
        if (layer.getBounds) {
            // For polygon or line features
            if (mapId === 'map') {
                map.fitBounds(layer.getBounds());
            } else if (mapId === 'map2') {
                map2.fitBounds(layer.getBounds());
            }
        } else if (layer.getLatLng) {
            // For point features (like markers)
            if (mapId === 'map') {
                map.setView(layer.getLatLng(), 14);  // Adjust zoom level to 14 or as desired
            } else if (mapId === 'map2') {
                map2.setView(layer.getLatLng(), 14);  // Adjust zoom level to 14 or as desired
            }
        }

      // Get the content from either a tooltip or a popup
        var tooltipContent = '';
        
        if (layer.getTooltip && layer.getTooltip()) {
            tooltipContent = layer.getTooltip().getContent();  // Tooltip content
        } else if (layer.getPopup && layer.getPopup()) {
            tooltipContent = layer.getPopup().getContent();  // Popup content
        }
        // Update the card content with the captured tooltip
        updateCardContent(tooltipContent);
    }

    // Function to update card content dynamically
    function updateCardContent(tooltipContent) {
        var cardContent = document.getElementById('card-content');
        
        // Clear the default content
        cardContent.innerHTML = '';

        // Split the tooltipContent by <br> and add each as a list item
        var tooltipItems = tooltipContent.split('<br>');
        tooltipItems.forEach(function(item) {
            var listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.innerHTML = item;
            cardContent.appendChild(listItem);
        });
    }

    // Attach event listeners for each feature in the layer
    function onEachFeature(feature, layer, mapId) {
        layer.on({
            click: function (e) {
                highlightFeature(e, mapId);   // Highlight on click
            }
        });
    }

    // Assuming you already have your GeoJSON layers added, bind the click handler to each feature

    // For map (first map)
    for (var layerName in overlayMaps) {
        overlayMaps[layerName].eachLayer(function (layer) {
            onEachFeature(null, layer, 'map');
        });
    }

    // For map2 (second map)
    for (var layerName in overlayMaps2) {
        overlayMaps2[layerName].eachLayer(function (layer) {
            onEachFeature(null, layer, 'map2');
        });
    }

    // Set the default card content when no feature is clicked
    updateCardContent('No selection from Map');

    //////////// END OF HIGHLIGHT //////

    maplayers = L.control.layers(baseMaps, overlayMaps).addTo(map);

    maplayers2 = L.control.layers(baseMaps2, overlayMaps2).addTo(map2);

    ////FLASH CONTROL////

    map2.removeLayer(overlayMaps2['Flash Incident 275 Constinuencies']);
    map2.removeLayer(overlayMaps2['Flash Incident 276 Constinuencies']);

    // current commenting test
    //-------------------------
    map.removeLayer(overlayMaps['Parliament 275 constituencies']);
    map.removeLayer(overlayMaps['Presidential 275 constituencies']);
    map.removeLayer(overlayMaps['Parliament 230 constituencies']);
    map.removeLayer(overlayMaps['Presidential 230 constituencies']);
    map.removeLayer(overlayMaps['Parliament 276 constituencies']);
    map.removeLayer(overlayMaps['Presidential 276 constituencies']);

    var merged2_GHMap2Const = data.merged2_GHMap2Const

    var merged2_GHMap2Const2 = data.merged2_GHMap2Const2

    var merged2_GHMap2Const2024 = data.merged2_GHMap2Const2024

    if (year === "2004" || year === "2008" || year === "2009") {
      presidentialConst_16_REG2 = jsoncreateValidVotes_ConstGeoJSON(merged2_GHMap2Const2).addTo(map);
      bindClickToDynamicLayers(presidentialConst_16_REG2, 'map');  
    }
    else if (year === "2012" || year === "2016" || year === "2020") {
      presidentialConst_16_REG2 = jsoncreateValidVotes_ConstGeoJSON(merged2_GHMap2Const).addTo(map);
      bindClickToDynamicLayers(presidentialConst_16_REG2, 'map');  
    } else {
        presidentialConst_16_REG_2024 = jsoncreateValidVotes_ConstGeoJSON(merged2_GHMap2Const2024).addTo(map);
        bindClickToDynamicLayers(presidentialConst_16_REG_2024, 'map');
    }



    ////////////////////////////////////////////////////////////////



    // Update chart configuration and data based on the fetched data

    document.querySelector('#parliamentTotal').innerHTML = data.tSumR + " : VALID VOTES";
    document.querySelector('#presidentialTotal').innerHTML = data.tSum2R + " : VALID VOTES";
    

    var selectElement = document.getElementById("regionSelection");
    //var selectCensus = document.getElementById("censusSelection");


    // Store the currently selected region
    var selectedRegion = selectElement.value;

    // Encode the selected region to handle spaces and special characters
    //var encodedRegion = encodeURIComponent(selectedRegion);

    // console.log("Selected region:", selectedRegion);

    // Get the "Region" option element
    // var regionOption = document.getElementById("regionOption");

    // Clear existing options except the "National" and "Region" option
    while (selectElement.options.length > 2) {
        selectElement.remove(selectElement.options.length - 1); 

      }

    //Iterate over the fetched data and create new options
    for (var i = 0; i < data.graph1BX.length; i++) {
        var option = document.createElement("option");
        option.textContent = data.graph1BX[i];
        selectElement.appendChild(option);
    }

    // Set the value of the select element to the stored selected region
    selectElement.value = selectedRegion;


    const colorsA = [
          '#f75464',
          '#0390fc',
          '#308a0a',
          '#f02274',
          '#ded712',
          '#f77c9d',
          '#8d76f5',
          '#b58931',
          '#ded712',
          '#f02274',
          '#0390fc',
          ] // Colors for 2004

    const colorsB = [
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

        ] // Colors for other years


    // Deciding the colors based on the year
    let chartColors;
    if (year === '2004') {
    chartColors = colorsA;
    } else {
    chartColors = colorsB;
    }
    


    chart1b.update({
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Total Valid Votes Per Constituency (Parliament)',
        align: 'left'
      },
      xAxis: {
        categories: data.graphSub1AX,
        min: 0,
        max: 2,
        scrollbar: {
          enabled: data.graphSub1AX.length > 8
        },
        title: {
          text: 'Constituencies'
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
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 30,
        floating: true,
        borderWidth: 1,
        backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Valid Votes',
        data: data.graphSub1AY
      }]
    });

    chart1.update({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Total Valid Votes Per Constituency (Presidential)',
        align: 'left'
      },

      xAxis: {
        categories: data.graphSub1BX,
        min: 0,
        max: 5,
        scrollbar: {
          enabled: true
        },
        title: {
          text: 'Constituencies'
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
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 30,
        floating: true,
        borderWidth: 1,
        backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Valid Votes',
        data: data.graphSub1BY,
      }]
    });

    chart2b.update({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Total Valid Votes Per Political Party Constituency(Parliament)',
        // style: {
        //   fontSize: '17px',
        //   fontWeight: 'bold'
        // }
      },
      
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {                  
            enabled: true,
            color: '#000000',
            connectorColor: '#000000',
          }
        }
      },
      series: [{
        type: 'pie',
        showInLegend: true,
        name: 'Valid Votes',
        data: data.tSumCAP,
        colors: chartColors
      }]

    });

    chart2.update({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Total Valid Votes Per Political Party Constituency(Presidential)',
        // style: {
        //   fontSize: '17px',
        //   fontWeight: 'bold'
        // }
      },
      
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            color: '#000000',
            connectorColor: '#000000',
          }
        }
      },
      series: [{
        type: 'pie',
        showInLegend: true,
        name: 'Valid Votes',
        data: data.tSumDAP,
        colors: chartColors
      }]
    });

    // const datum3 =  data.df_grouped3zP;

    // // Extract categories (first column) and column names (header row)
    // const categories3 = datum3.map(item => item[0]);
    // const columnNames3 = data.graph2AXP;

    // // Extract series data (exclude the first row which contains column names)
    // const seriesData3 = datum3.slice(0).map(item => item.slice(1));

    // chart4.update({
    //   chart: {
    //     type: 'column'
    //   },
    //   title: {
    //     text: 'Total Valid Votes for Each Political Party Per Constituency(Parliament)',
    //     style: {
    //       fontSize: '17px',
    //       fontWeight: 'bold'
    //     }
    //   },
    //   xAxis: {
    //     categories: categories3,
    //     min: 0,
    //     max: 5,
    //     scrollbar: {
    //       enabled: true
    //     },
    //   },
    //   yAxis: {
    //     title: {
    //       text: 'Valid Votes'
    //     }
    //   },
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
    //   series: columnNames3.map((columnName, index) => ({
    //     name: columnName,
    //     data: seriesData3.map(dataSeries => dataSeries[index]),
    //     showInLegend: false,
    //   }))

    // });


    // const datum4 =  data.df_grouped3zP2;


    // // Extract categories (first column) and column names (header row)
    // const categories4 = datum4.map(item => item[0]);
    // const columnNames4 = data.graph2BXP;

    // // Extract series data (exclude the first row which contains column names)
    // const seriesData4 = datum4.slice(0).map(item => item.slice(2));

    // chart3b.update({
    //   chart: {
    //     type: 'column'
    //   },
    //   title: {
    //     text: 'Total Valid Votes for Each Political Party Per Constituency(Presidential)',
    //     // style: {
    //     //   fontSize: '17px',
    //     //   fontWeight: 'bold'
    //     // }
    //   },
    //   xAxis: {
    //     categories: categories4,
    //     min: 0,
    //     max: 5,
    //     scrollbar: {
    //       enabled: true
    //     },
    //   },
    //   yAxis: {
    //     title: {
    //       text: 'Valid Votes'
    //     }
    //   },
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
    //   colors: chartColors,
    //   series: columnNames4.map((columnName, index) => ({
    //     name: columnName,
    //     data: seriesData4.map(dataSeries => dataSeries[index]),
    //     showInLegend: false,
    //   }))
    // });

    chart3.update({
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Population Demographics',
        align: 'left'
      },
      subtitle: {
        text: '',
        align: 'left'
    },
      xAxis: {
        categories: data.graph1BX2P,
        min: 0,
        max: 5,
        scrollbar: {
          enabled: true
        },
        title: {
          text: 'Constituencies'
        },
        gridLineWidth: 1,
        lineWidth: 0
      },
      yAxis: {
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
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 30,
        floating: true,
        borderWidth: 1,
        backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Population Demographics',
        data: data.graph1BY2P
      }]
    });
    // Hide the modal spinner once the chart is updated
    $('#staticBackdrop').modal('hide');
    
  })

  updateLayerVisibility(selectedRegion, year);
  map.on("zoomend", updateLayerVisibility());
  resetMap(selectedRegion, year);
  updateMap(selectedRegion, year);

  updateLayerVisibility2(selectedRegion, year);
  map2.on("zoomend", updateLayerVisibility2());
  resetMap2(selectedRegion, year);
  updateMap2(selectedRegion, year);

  // .catch(error => {
  //   console.error('Error fetching data:', error);
  //   // Optionally hide the spinner modal even if there's an error
  //   $('#staticBackdrop').modal('hide');
  // });

};


// Helper function to get the CSRF token from cookies
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function changeChartRegion() {
  const yearSelector = document.querySelector("#yearSelection")
  const regionSelector = document.querySelector("#regionSelection")
  const censusSelector = document.querySelector("#censusSelection")
  const electoralSelector = document.querySelector("#electoralSelection1")
 
  //activeRegion = regionSelector.value || 'Ashanti'
  activeYear = yearSelector.value ||'2020'
  activeCencus = censusSelector.value 
  activeElectoral = electoralSelector.value 

  // List of valid regions
  const validRegions = ["Ashanti", "Greater Accra", "Western", "Eastern", "Volta", "Northern", "Central", "Upper East", "Upper West", "Brong Ahafo", "Western North", "Oti", "Bono East", "Ahafo", "North East", "Savannah", "Bono"];

  // Only assign activeRegion if it is a valid region
  const selectedRegion = regionSelector.value;

  if (validRegions.includes(selectedRegion)) {
    activeRegion = selectedRegion;
  } else {
    // Fallback if no valid region is selected
    activeRegion = 'Ashanti';  // Default to 'Ashanti' or any region of your choice
  }
  
  updateCharts2(activeYear, activeRegion, activeCencus, activeElectoral); 

}


  // Function to fetch and update chart data
function updateCharts3(censusSelected, year, region, electoral) {

   // Show the modal spinner before the fetch request starts
  $('#staticBackdrop').css('padding-right', '650px').modal('show');

  fetch(`/update_charts?census=${censusSelected}&year=${year}&region=${''}&electoral=${''}`)
  .then(response => response.json())
  .then(data => {

    var selectCensus = document.getElementById("censusSelection");
    var subtitleText = selectCensus.value !== 'Total_Pop' ? selectCensus.value + ' %' : '';


     chart3.update({
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Population Demographics',
        align: 'left'
      },
      subtitle: {
        text: subtitleText,
        align: 'left'
    },
      xAxis: {
        categories: data.graph1AX2P,
        min: 0,
        max: 5,
        scrollbar: {
          enabled: true
        },
        title: {
          text: 'Constituencies'
        },
        gridLineWidth: 1,
        lineWidth: 0
      },
      yAxis: {
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
        valueSuffix: selectCensus.value !== 'Total_Pop' ? '%' : '' 
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
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 30,
        floating: true,
        borderWidth: 1,
        backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Population Demographics',
        data: data.graph1AY2P
      }]
    });

     // Hide the modal spinner once the chart is updated
    $('#staticBackdrop').modal('hide');

  })
  // .catch(error => {
  //   console.error('Error fetching data:', error);
  //   // Optionally hide the spinner modal even if there's an error
  //   $('#staticBackdrop').modal('hide');
  // });
}
      
// Helper function to get the CSRF token from cookies
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

  // Function to fetch and update chart data
function updateCharts4(censusSelected, year, region) {

  // Show the modal spinner before the fetch request starts
  // $('#staticBackdrop').css('padding-right', '650px').modal('show');

  fetch(`/selectCensus?census=${censusSelected}&year=${''}&region=${region}`)
  .then(response => response.json())
  .then(data => {

    var selectCensus = document.getElementById("censusSelection");
    var subtitleText = selectCensus.value !== 'Total_Pop' ? selectCensus.value + ' %' : '';


     chart3.update({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Population Demographics',
        align: 'left'
      },
      subtitle: {
        text: subtitleText,
        align: 'left'
    },
      xAxis: {
        categories: data.graph1BX2P,
        min: 0,
        max: 5,
        scrollbar: {
          enabled: true
        },
        title: {
          text: 'Constituencies'
        },
        gridLineWidth: 1,
        lineWidth: 0
      },
      yAxis: {
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
        valueSuffix: selectCensus.value !== 'Total_Pop' ? '%' : '' 
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
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 30,
        floating: true,
        borderWidth: 1,
        backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Population Demographics',
        data: data.graph1BY2P
      }]
    });
     // Hide the modal spinner once the chart is updated
    // $('#staticBackdrop').modal('hide');

  })
  // .catch(error => {
  //   console.error('Error fetching data:', error);
  //   // Optionally hide the spinner modal even if there's an error
  //   $('#staticBackdrop').modal('hide');
  // });
}
      
// Helper function to get the CSRF token from cookies
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function changeChart_YearCensus() {
  //const censusSelector = document.querySelector("#censusSelection2")
  const yearSelector = document.querySelector("#yearSelection")
  const regionSelector = document.querySelector("#regionSelection")
  const censusSelector = document.querySelector("#censusSelection")
  const electoralSelector = document.querySelector("#electoralSelection1")


  activeCensus = censusSelector.value || 'Total_Pop'
  //activeRegion = regionSelector.value
  activeYear = yearSelector.value ||'2020'
  activeElectoral = electoralSelector.value

  // List of valid regions
  const validRegions = ["Ashanti", "Greater Accra", "Western", "Eastern", "Volta", "Northern", "Central", "Upper East", "Upper West", "Brong Ahafo", "Western North", "Oti", "Bono East", "Ahafo", "North East", "Savannah", "Bono"];

  // Only assign activeRegion if it is a valid region
  const selectedRegion = regionSelector.value;

  if (validRegions.includes(selectedRegion)) {
    activeRegion = selectedRegion;
  } else {
    // Fallback if no valid region is selected
    activeRegion = 'Ashanti';  // Default to 'Ashanti' or any region of your choice
  }

  // if (!activeRegion) {
  //   updateCharts3(activeCensus, activeYear);
  // }else {
  //   updateCharts3(activeCensus, activeYear, activeRegion);
  // }
  updateCharts3(activeCensus, activeYear, activeRegion, activeElectoral);
  

}

function changeChart_RegionalCensus() {
  const censusSelector = document.querySelector("#censusSelection")
  const yearSelector = document.querySelector("#yearSelection")
  const regionSelector = document.querySelector("#regionSelection")
  //const electoralSelector = document.querySelector("#electoralSelection1")

  activeCensus = censusSelector.value || 'Total_Pop'
  //activeRegion = regionSelector.value || 'Ashanti'
  activeYear = yearSelector.value || '2020'
  //activeElectoral = electoralSelector.value

  // List of valid regions
  const validRegions = ["Ashanti", "Greater Accra", "Western", "Eastern", "Volta", "Northern", "Central", "Upper East", "Upper West", "Brong Ahafo", "Western North", "Oti", "Bono East", "Ahafo", "North East", "Savannah", "Bono"];

  // Only assign activeRegion if it is a valid region
  const selectedRegion = regionSelector.value;

  if (validRegions.includes(selectedRegion)) {
    activeRegion = selectedRegion;
  } else {
    // Fallback if no valid region is selected
    activeRegion = 'Ashanti';  // Default to 'Ashanti' or any region of your choice
  }

  
  // if (!activeRegion) {
  //   updateCharts4(activeCensus, activeYear);
  // }else {
  //   updateCharts4(activeCensus, activeYear, activeRegion);
  // }
  updateCharts4(activeCensus, activeYear, activeRegion);

}




/////////////////////////////////////////////////////

//             DYNAMIC USER CHARTS 

/////////////////////////////////////////////////////


  // Function to fetch and update chart data
function updateCharts5(electoralSelected, year, region, census) {

  // Show the modal spinner before the fetch request starts
  $('#staticBackdrop').css('padding-right', '650px').modal('show');

  fetch(`/update_charts?electoral=${electoralSelected}&year=${year}&region=${''}&census=${''}`)
  .then(response => response.json())
  .then(data => {

    var selectElectoral10 = document.getElementById("electoralSelection1");
    var subtitleText10 = selectElectoral10.value;

     chart1.update({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Total Valid Votes Per Region (Presidential)',
        align: 'left'
      },

      xAxis: {
        categories: data.graph1BX,
        title: {
          text: 'Regions'
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
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 30,
        floating: true,
        borderWidth: 1,
        backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Valid Votes',
        data: data.graph1BY
      }]
    });
     // Hide the modal spinner once the chart is updated
    $('#staticBackdrop').modal('hide');

  })

  // .catch(error => {
  //   console.error('Error fetching data:', error);
  //   // Optionally hide the spinner modal even if there's an error
  //   $('#staticBackdrop').modal('hide');
  // });
}
      
// Helper function to get the CSRF token from cookies
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}


  // Function to fetch and update chart data
function updateCharts6(electoralSelected, year, region) {

  // // Show the modal spinner before the fetch request starts
  // $('#staticBackdrop').css('padding-right', '650px').modal('show');

  fetch(`/selectElectoral1?electoral=${electoralSelected}&year=${year}&region=${region}`)
  .then(response => response.json())
  .then(data => {

    // var selectElectoral11 = document.getElementById("electoralSelection1");
    // var subtitleText11 = selectElectoral11.value;

     chart1.update({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Total Valid Votes Per Constituency (Presidential)',
        align: 'left'
      },

      xAxis: {
        categories: data.graphSub1BX,
        min: 0,
        max: 5,
        scrollbar: {
          enabled: true
        },
        title: {
          text: 'Constituencies'
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
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 30,
        floating: true,
        borderWidth: 1,
        backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Valid Votes',
        data: data.graphSub1BY
      }]
    });
    //  // Hide the modal spinner once the chart is updated
    // $('#staticBackdrop').modal('hide');

  })
  
  // .catch(error => {
  //   console.error('Error fetching data:', error);
  //   // Optionally hide the spinner modal even if there's an error
  //   $('#staticBackdrop').modal('hide');
  // });
}
      
// Helper function to get the CSRF token from cookies
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}



function changeChart_YearElectoral1() {
  const electoralSelector = document.querySelector("#electoralSelection1")
  const yearSelector = document.querySelector("#yearSelection")
  const regionSelector = document.querySelector("#regionSelection")
  const censusSelector = document.querySelector("#censusSelection")

  activeElectoral = electoralSelector.value || 'valid_votes'
  //activeRegion = regionSelector.value 
  activeYear = yearSelector.value || '2020'
  activeCencus = censusSelector.value 

  // List of valid regions
  const validRegions = ["Ashanti", "Greater Accra", "Western", "Eastern", "Volta", "Northern", "Central", "Upper East", "Upper West", "Brong Ahafo", "Western North", "Oti", "Bono East", "Ahafo", "North East", "Savannah", "Bono"];

  // Only assign activeRegion if it is a valid region
  const selectedRegion = regionSelector.value;

  if (validRegions.includes(selectedRegion)) {
    activeRegion = selectedRegion;
  } else {
    // Fallback if no valid region is selected
    activeRegion = 'Ashanti';  // Default to 'Ashanti' or any region of your choice
  }

  // if (!activeRegion) {
  //   updateCharts5(activeElectoral, activeYear);
  // }else {
  //   updateCharts5(activeElectoral, activeYear, activeRegion);
  // }
  updateCharts5(activeElectoral, activeYear, activeRegion, activeCencus);
  

}

function changeChart_RegionalElectoral1() {
  const electoralSelector = document.querySelector("#electoralSelection1")
  const yearSelector = document.querySelector("#yearSelection")
  const regionSelector = document.querySelector("#regionSelection")
  //const censusSelector = document.querySelector("#censusSelection")


  activeElectoral = electoralSelector.value || 'valid_votes'
  //activeRegion = regionSelector.value || 'Ashanti'
  activeYear = yearSelector.value || '2020'
  //activeCencus = censusSelector.value 

  // List of valid regions
  const validRegions = ["Ashanti", "Greater Accra", "Western", "Eastern", "Volta", "Northern", "Central", "Upper East", "Upper West", "Brong Ahafo", "Western North", "Oti", "Bono East", "Ahafo", "North East", "Savannah", "Bono"];

  // Only assign activeRegion if it is a valid region
  const selectedRegion = regionSelector.value;

  if (validRegions.includes(selectedRegion)) {
    activeRegion = selectedRegion;
  } else {
    // Fallback if no valid region is selected
    activeRegion = 'Ashanti';  // Default to 'Ashanti' or any region of your choice
  }

  
  // if (!activeRegion) {
  //   updateCharts6(activeElectoral, activeYear);
  // }else {
  //   updateCharts6(activeElectoral, activeYear, activeRegion);
  // }
  updateCharts6(activeElectoral, activeYear, activeRegion);

}


// CHART (B)


  // Function to fetch and update chart data
function updateCharts7(electoralSelected, year, region, census) {

   // Show the modal spinner before the fetch request starts
  $('#staticBackdrop').css('padding-right', '650px').modal('show');

  fetch(`/update_charts?electoral=${electoralSelected}&year=${year}&region=${''}&census=${''}`)
  .then(response => response.json())
  .then(data => {

    var selectElectoral12 = document.getElementById("electoralSelection2");
    var subtitleText12 = selectElectoral12.value;


     chart1b.update({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Total Valid Votes Per Region (Parliament)',
        align: 'left'
      },

      xAxis: {
        categories: data.graph1AX,
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
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 30,
        floating: true,
        borderWidth: 1,
        backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Valid Votes',
        data: data.graph1AY
      }]
    });
     // Hide the modal spinner once the chart is updated
    $('#staticBackdrop').modal('hide');

  })
  
  // .catch(error => {
  //   console.error('Error fetching data:', error);
  //   // Optionally hide the spinner modal even if there's an error
  //   $('#staticBackdrop').modal('hide');
  // });
}
      
// Helper function to get the CSRF token from cookies
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}



  // Function to fetch and update chart data
function updateCharts8(electoralSelected, year, region) {

  // // Show the modal spinner before the fetch request starts
  // $('#staticBackdrop').css('padding-right', '650px').modal('show');

  fetch(`/selectElectoral1?electoral=${electoralSelected}&year=${year}&region=${region}`)
  .then(response => response.json())
  .then(data => {

    // var selectElectoral13 = document.getElementById("electoralSelection2");
    // var subtitleText13 = selectElectoral13.value


     chart1b.update({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Total Valid Votes Per Constituency (Parliament)',
        align: 'left'
      },

      xAxis: {
        categories: data.graphSub1AX,
        min: 0,
        max: 5,
        scrollbar: {
          enabled: true
        },
        title: {
          text: 'Constituencies'
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
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 30,
        floating: true,
        borderWidth: 1,
        backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Valid Votes',
        data: data.graphSub1AY
      }]
    });
    //  // Hide the modal spinner once the chart is updated
    // $('#staticBackdrop').modal('hide');

  })
  
  // .catch(error => {
  //   console.error('Error fetching data:', error);
  //   // Optionally hide the spinner modal even if there's an error
  //   $('#staticBackdrop').modal('hide');
  // });
}
      
// Helper function to get the CSRF token from cookies
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}


function changeChart_YearElectoral2() {
  const electoralSelector = document.querySelector("#electoralSelection2")
  const yearSelector = document.querySelector("#yearSelection")
  const regionSelector = document.querySelector("#regionSelection")
  const censusSelector = document.querySelector("#censusSelection")

  activeElectoral = electoralSelector.value || 'valid_votes'
  //activeRegion = regionSelector.value 
  activeYear = yearSelector.value || '2020'
  activeCensus = censusSelector.value 

  // List of valid regions
  const validRegions = ["Ashanti", "Greater Accra", "Western", "Eastern", "Volta", "Northern", "Central", "Upper East", "Upper West", "Brong Ahafo", "Western North", "Oti", "Bono East", "Ahafo", "North East", "Savannah", "Bono"];

  // Only assign activeRegion if it is a valid region
  const selectedRegion = regionSelector.value;

  if (validRegions.includes(selectedRegion)) {
    activeRegion = selectedRegion;
  } else {
    // Fallback if no valid region is selected
    activeRegion = 'Ashanti';  // Default to 'Ashanti' or any region of your choice
  }

  // if (!activeRegion) {
  //   updateCharts7(activeElectoral, activeYear);
  // }else {
  //   updateCharts7(activeElectoral, activeYear, activeRegion);
  // }
  updateCharts7(activeElectoral, activeYear, activeRegion, activeCensus);
  

}

function changeChart_RegionalElectoral2() {
  const electoralSelector = document.querySelector("#electoralSelection2")
  const yearSelector = document.querySelector("#yearSelection")
  const regionSelector = document.querySelector("#regionSelection")
  //const censusSelector = document.querySelector("#censusSelection")

  activeElectoral = electoralSelector.value || 'valid_votes'
  //activeRegion = regionSelector.value || 'Ashanti'
  activeYear = yearSelector.value || '2020'
  //activeCensus = censusSelector.value 

  // List of valid regions
  const validRegions = ["Ashanti", "Greater Accra", "Western", "Eastern", "Volta", "Northern", "Central", "Upper East", "Upper West", "Brong Ahafo", "Western North", "Oti", "Bono East", "Ahafo", "North East", "Savannah", "Bono"];

  // Only assign activeRegion if it is a valid region
  const selectedRegion = regionSelector.value;

  if (validRegions.includes(selectedRegion)) {
    activeRegion = selectedRegion;
  } else {
    // Fallback if no valid region is selected
    activeRegion = 'Ashanti';  // Default to 'Ashanti' or any region of your choice
  }

  
  // if (!activeRegion) {
  //   updateCharts8(activeElectoral, activeYear);
  // }else {
  //   updateCharts8(activeElectoral, activeYear, activeRegion);
  // }
  updateCharts8(activeElectoral, activeYear, activeRegion);

}

///////////////////////////////////////////
// PIE

  // Function to fetch and update chart data
// function updateCharts9(electoralSelected, year, region, census) {

//   // Show the modal spinner before the fetch request starts
//   $('#staticBackdrop').css('padding-right', '650px').modal('show');

//   fetch(`/update_charts?electoral=${electoralSelected}&year=${year}&region=${''}&census=${''}`)
//   .then(response => response.json())
//   .then(data => {

//     // var selectElectoral10 = document.getElementById("electoralSelection1");
//     // var subtitleText10 = selectElectoral10.value;

//      chart2.update({
//       chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false
//       },
//       title: {
//         text: 'Total Valid Votes Per Political Party (Presidential)'
//       },
      
//       plotOptions: {
//         pie: {
//           allowPointSelect: true,
//           cursor: 'pointer',
//           dataLabels: {
//             enabled: true,
//             color: '#000000',
//             connectorColor: '#000000',
//           }
//         }
//       },
//       series: [{
//         type: 'pie',
//         showInLegend: true,
//         name: 'Valid Votes',
//         data: data.tSumDA
//       }]
//     });
//      // Hide the modal spinner once the chart is updated
//     $('#staticBackdrop').modal('hide');

//   })
//   // .catch(error => {
//   //   console.error('Error fetching data:', error);
//   //   // Optionally hide the spinner modal even if there's an error
//   //   $('#staticBackdrop').modal('hide');
//   // });
// }
      
// // Helper function to get the CSRF token from cookies
// function getCookie(name) {
//   let cookieValue = null;
//   if (document.cookie && document.cookie !== "") {
//     const cookies = document.cookie.split(";");
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim();
//       if (cookie.substring(0, name.length + 1) === name + "=") {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   return cookieValue;
// }


//   // Function to fetch and update chart data
// function updateCharts10(electoralSelected, year, region) {

//   // Show the modal spinner before the fetch request starts
//   $('#staticBackdrop').css('padding-right', '650px').modal('show');

//   fetch(`/selectElectoral1?electoral=${electoralSelected}&year=${year}&region=${region}`)
//   .then(response => response.json())
//   .then(data => {

//     // var selectElectoral11 = document.getElementById("electoralSelection1");
//     // var subtitleText11 = selectElectoral11.value;

//      chart2.update({
//       chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false
//       },
//       title: {
//         text: 'Total Valid Votes Per Political Party Constituency(Presidential)',
//         style: {
//           fontSize: '17px',
//           fontWeight: 'bold'
//         }
//       },
      
//       plotOptions: {
//         pie: {
//           allowPointSelect: true,
//           cursor: 'pointer',
//           dataLabels: {
//             enabled: true,
//             color: '#000000',
//             connectorColor: '#000000',
//           }
//         }
//       },
//       series: [{
//         type: 'pie',
//         showInLegend: true,
//         name: 'Valid Votes',
//         data: data.tSumDAP
//       }]
//     });
//      // Hide the modal spinner once the chart is updated
    

//   })
//   $('#staticBackdrop').modal('hide');
//   // .catch(error => {
//   //   console.error('Error fetching data:', error);
//   //   // Optionally hide the spinner modal even if there's an error
//   //   $('#staticBackdrop').modal('hide');
//   // });
// }
      
// // Helper function to get the CSRF token from cookies
// function getCookie(name) {
//   let cookieValue = null;
//   if (document.cookie && document.cookie !== "") {
//     const cookies = document.cookie.split(";");
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim();
//       if (cookie.substring(0, name.length + 1) === name + "=") {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   return cookieValue;
// }



// function changeChart_YearElectoral3() {
//   const electoralSelector = document.querySelector("#electoralSelection3")
//   const yearSelector = document.querySelector("#yearSelection")
//   const regionSelector = document.querySelector("#regionSelection")
//   const censusSelector = document.querySelector("#censusSelection")

//   activeElectoral = electoralSelector.value || 'valid_votes'
//   //activeRegion = regionSelector.value 
//   activeYear = yearSelector.value || '2020'
//   activeCencus = censusSelector.value 

//   // List of valid regions
//   const validRegions = ["Ashanti", "Greater Accra", "Western", "Eastern", "Volta", "Northern", "Central", "Upper East", "Upper West", "Brong Ahafo", "Western North", "Oti", "Bono East", "Ahafo", "North East", "Savannah", "Bono"];

//   // Only assign activeRegion if it is a valid region
//   const selectedRegion = regionSelector.value;

//   if (validRegions.includes(selectedRegion)) {
//     activeRegion = selectedRegion;
//   } else {
//     // Fallback if no valid region is selected
//     activeRegion = 'Ashanti';  // Default to 'Ashanti' or any region of your choice
//   }

//   // if (!activeRegion) {
//   //   updateCharts5(activeElectoral, activeYear);
//   // }else {
//   //   updateCharts5(activeElectoral, activeYear, activeRegion);
//   // }
//   updateCharts9(activeElectoral, activeYear, activeRegion, activeCencus);
  

// }

// function changeChart_RegionalElectoral3() {
//   const electoralSelector = document.querySelector("#electoralSelection3")
//   const yearSelector = document.querySelector("#yearSelection")
//   const regionSelector = document.querySelector("#regionSelection")
//   //const censusSelector = document.querySelector("#censusSelection")


//   activeElectoral = electoralSelector.value || 'valid_votes'
//   //activeRegion = regionSelector.value || 'Ashanti'
//   activeYear = yearSelector.value || '2020'
//   //activeCencus = censusSelector.value 

//   // List of valid regions
//   const validRegions = ["Ashanti", "Greater Accra", "Western", "Eastern", "Volta", "Northern", "Central", "Upper East", "Upper West", "Brong Ahafo", "Western North", "Oti", "Bono East", "Ahafo", "North East", "Savannah", "Bono"];

//   // Only assign activeRegion if it is a valid region
//   const selectedRegion = regionSelector.value;

//   if (validRegions.includes(selectedRegion)) {
//     activeRegion = selectedRegion;
//   } else {
//     // Fallback if no valid region is selected
//     activeRegion = 'Ashanti';  // Default to 'Ashanti' or any region of your choice
//   }

  
//   // if (!activeRegion) {
//   //   updateCharts6(activeElectoral, activeYear);
//   // }else {
//   //   updateCharts6(activeElectoral, activeYear, activeRegion);
//   // }
//   updateCharts10(activeElectoral, activeYear, activeRegion);

// }


// // CHART (B)


//   // Function to fetch and update chart data
// function updateCharts11(electoralSelected, year, region, census) {

//   // Show the modal spinner before the fetch request starts
//   $('#staticBackdrop').css('padding-right', '650px').modal('show');

//   fetch(`/update_charts?electoral=${electoralSelected}&year=${year}&region=${''}&census=${''}`)
//   .then(response => response.json())
//   .then(data => {

//     // var selectElectoral12 = document.getElementById("electoralSelection2");
//     // var subtitleText12 = selectElectoral12.value;


//      chart2b.update({
//       chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false
//       },
//       title: {
//         text: 'Total Valid Votes Per Political Party (Parliament)'
//       },
      
//       plotOptions: {
//         pie: {
//           allowPointSelect: true,
//           cursor: 'pointer',
//           dataLabels: {                  
//             enabled: true,
//             color: '#000000',
//             connectorColor: '#000000',
//           }
//         }
//       },
//       series: [{
//         type: 'pie',
//         showInLegend: true,
//         name: 'Valid Votes',
//         data: data.tSumCA
//       }]

//     });
//      // Hide the modal spinner once the chart is updated
//     $('#staticBackdrop').modal('hide');

//   })
//   // .catch(error => {
//   //   console.error('Error fetching data:', error);
//   //   // Optionally hide the spinner modal even if there's an error
//   //   $('#staticBackdrop').modal('hide');
//   // });
// }
      
// // Helper function to get the CSRF token from cookies
// function getCookie(name) {
//   let cookieValue = null;
//   if (document.cookie && document.cookie !== "") {
//     const cookies = document.cookie.split(";");
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim();
//       if (cookie.substring(0, name.length + 1) === name + "=") {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   return cookieValue;
// }



//   // Function to fetch and update chart data
// function updateCharts12(electoralSelected, year, region) {

//   // Show the modal spinner before the fetch request starts
//   $('#staticBackdrop').css('padding-right', '650px').modal('show');

//   fetch(`/selectElectoral1?electoral=${electoralSelected}&year=${year}&region=${region}`)
//   .then(response => response.json())
//   .then(data => {

//     // var selectElectoral13 = document.getElementById("electoralSelection2");
//     // var subtitleText13 = selectElectoral13.value


//      chart2b.update({
//       chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false
//       },
//       title: {
//         text: 'Total Valid Votes Per Political Party Constituency(Parliament)',
//         style: {
//           fontSize: '17px',
//           fontWeight: 'bold'
//         }
//       },
      
//       plotOptions: {
//         pie: {
//           allowPointSelect: true,
//           cursor: 'pointer',
//           dataLabels: {                  
//             enabled: true,
//             color: '#000000',
//             connectorColor: '#000000',
//           }
//         }
//       },
//       series: [{
//         type: 'pie',
//         showInLegend: true,
//         name: 'Valid Votes',
//         data: data.tSumCAP
//       }]

//     });
//      // Hide the modal spinner once the chart is updated
    

//   })

//   $('#staticBackdrop').modal('hide');
//   // .catch(error => {
//   //   console.error('Error fetching data:', error);
//   //   // Optionally hide the spinner modal even if there's an error
//   //   $('#staticBackdrop').modal('hide');
//   // });
// }
      
// // Helper function to get the CSRF token from cookies
// function getCookie(name) {
//   let cookieValue = null;
//   if (document.cookie && document.cookie !== "") {
//     const cookies = document.cookie.split(";");
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim();
//       if (cookie.substring(0, name.length + 1) === name + "=") {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   return cookieValue;
// }


// function changeChart_YearElectoral4() {
//   const electoralSelector = document.querySelector("#electoralSelection4")
//   const yearSelector = document.querySelector("#yearSelection")
//   const regionSelector = document.querySelector("#regionSelection")
//   const censusSelector = document.querySelector("#censusSelection")

//   activeElectoral = electoralSelector.value || 'valid_votes'
//   //activeRegion = regionSelector.value 
//   activeYear = yearSelector.value || '2020'
//   activeCensus = censusSelector.value 

//   // List of valid regions
//   const validRegions = ["Ashanti", "Greater Accra", "Western", "Eastern", "Volta", "Northern", "Central", "Upper East", "Upper West", "Brong Ahafo", "Western North", "Oti", "Bono East", "Ahafo", "North East", "Savannah", "Bono"];

//   // Only assign activeRegion if it is a valid region
//   const selectedRegion = regionSelector.value;

//   if (validRegions.includes(selectedRegion)) {
//     activeRegion = selectedRegion;
//   } else {
//     // Fallback if no valid region is selected
//     activeRegion = 'Ashanti';  // Default to 'Ashanti' or any region of your choice
//   }

//   // if (!activeRegion) {
//   //   updateCharts7(activeElectoral, activeYear);
//   // }else {
//   //   updateCharts7(activeElectoral, activeYear, activeRegion);
//   // }
//   updateCharts11(activeElectoral, activeYear, activeRegion, activeCensus);
  

// }

// function changeChart_RegionalElectoral4() {
//   const electoralSelector = document.querySelector("#electoralSelection4")
//   const yearSelector = document.querySelector("#yearSelection")
//   const regionSelector = document.querySelector("#regionSelection")
//   //const censusSelector = document.querySelector("#censusSelection")

//   activeElectoral = electoralSelector.value || 'valid_votes'
//   //activeRegion = regionSelector.value || 'Ashanti'
//   activeYear = yearSelector.value || '2020'
//   //activeCensus = censusSelector.value 

//   // List of valid regions
//   const validRegions = ["Ashanti", "Greater Accra", "Western", "Eastern", "Volta", "Northern", "Central", "Upper East", "Upper West", "Brong Ahafo", "Western North", "Oti", "Bono East", "Ahafo", "North East", "Savannah", "Bono"];

//   // Only assign activeRegion if it is a valid region
//   const selectedRegion = regionSelector.value;

//   if (validRegions.includes(selectedRegion)) {
//     activeRegion = selectedRegion;
//   } else {
//     // Fallback if no valid region is selected
//     activeRegion = 'Ashanti';  // Default to 'Ashanti' or any region of your choice
//   }
  
//   // if (!activeRegion) {
//   //   updateCharts8(activeElectoral, activeYear);
//   // }else {
//   //   updateCharts8(activeElectoral, activeYear, activeRegion);
//   // }
//   updateCharts12(activeElectoral, activeYear, activeRegion);

// }





//////////////////////////////////////////


function region_changes() {
    changeChartRegion();
    changeChart_RegionalCensus();
    changeChart_RegionalElectoral1();
    changeChart_RegionalElectoral2();
    // changeChart_RegionalElectoral3();
    // changeChart_RegionalElectoral4();

}

let isYearSelected = false;
let isRegionSelected = false;
let selectedYear = null;  // Store the selected year

// Listen for changes in the year selection dropdown
document.getElementById('yearSelection').addEventListener('change', function() {
    isYearSelected = true;
    isRegionSelected = false; // Reset region selection if needed
    selectedYear = this.value;  // Store the selected year value

    // Call function to update charts based on year
    changeChartYear();
});

// Refetch button to fetch data again based on the selected year
document.getElementById('refetchButton').addEventListener('click', function() {
    if (isYearSelected && selectedYear) {
        // Call function to update charts based on the stored year
        changeChartYear();
    } else {
        alert("Please select a year first!");
    }
});

document.getElementById('regionSelection').addEventListener('change', function() {
    const selectedValue = this.value;

    if (selectedValue === "Ahafo" || selectedValue === "Ashanti" || selectedValue === "Brong Ahafo" || selectedValue === "Greater Accra" || selectedValue === "Volta" || selectedValue === "Savannah" || selectedValue === "North East" || selectedValue === "Bono" || selectedValue === "Bono East" || selectedValue === "Upper East" || selectedValue === "Upper West" || selectedValue === "Oti" || selectedValue === "Central" || selectedValue === "Eastern" || selectedValue === "Western" || selectedValue === "Western North" || selectedValue === "Northern") {

        isRegionSelected = true;
        isYearSelected = false; // Reset year selection if needed
        // Call function to update charts based on region
        changeChartRegion()
    }
});

////////////////////////////////////////////////////////
// NATIONAL FILTERING

document.getElementById('regionSelection').addEventListener('change', function() {
    const selectedValue = this.value;

    if (selectedValue === "National") {

        isYearSelected = true;
        isRegionSelected = false; // Reset region selection if needed
        // Call function to update charts based on year
        changeChartYear()
    }
});


// REGIONS FILTERING

document.getElementById('regionSelection').addEventListener('change', function() {
    const selectedValue = this.value;

    if (selectedValue === "Regions") {

        isYearSelected = true;
        isRegionSelected = false; // Reset region selection if needed
        // Call function to update charts based on year
        changeChartYearRegions()
    }
});



///////////////////////////////////////////////////////

document.getElementById('electoralSelection1').addEventListener('change', function() {
    if (isYearSelected) {
        changeChart_YearElectoral1();
    } else if (isRegionSelected) {
        changeChart_RegionalElectoral1();
    } else {
        changeChart_YearElectoral1();
    }
});

document.getElementById('electoralSelection2').addEventListener('change', function() {
    if (isYearSelected) {
        changeChart_YearElectoral2();
    } else if (isRegionSelected) {
        changeChart_RegionalElectoral2();
    } else {
        changeChart_YearElectoral2();
    }
});

document.getElementById('censusSelection').addEventListener('change', function() {
    if (isYearSelected) {
        changeChart_YearCensus();
    } else if (isRegionSelected) {
        changeChart_RegionalCensus();
    } else {
        changeChart_YearCensus();
    }
});

// document.getElementById('electoralSelection3').addEventListener('change', function() {
//     if (isYearSelected) {
//         changeChart_YearElectoral3();
//     } else if (isRegionSelected) {
//         changeChart_RegionalElectoral3();
//     } else {
//         changeChart_YearElectoral3();
//     }
// });

// document.getElementById('electoralSelection4').addEventListener('change', function() {
//     if (isYearSelected) {
//         changeChart_YearElectoral4();
//     } else if (isRegionSelected) {
//         changeChart_RegionalElectoral4();
//     } else {
//         changeChart_YearElectoral4();
//     }
// });




//////////////////////////////////////////////////////

var baseRadius = 1; // base radius size
var scaleFactor = 0.5; // scale factor for radius size

 // Function to update marker size based on zoom level
        function updateMarkerSize() {
          var zoomLevel = map.getZoom();
            var newRadius = baseRadius * Math.pow(2, (zoomLevel - 6) * scaleFactor); // Adjust the scaleFactor and baseZoomLevel as needed
            
            polling_stationData.eachLayer(function(layer) {
              if (layer instanceof L.CircleMarker) {
                layer.setRadius(newRadius);
              }
            });
          }

      // Bind the zoomend event to update marker size
        map.on('zoomend', updateMarkerSize);

      // Initial call to set the marker sizes
        map.on('load', updateMarkerSize);
    
    function updateLayerVisibility(region, year) {

        if (year === "2004" || year === "2008" || year === "2009") {
        var mapZoom = map.getZoom();
        // Check the zoom level and show/hide the ps_group layer
        if (mapZoom >= 6) {
            map.addLayer(polling_stationData);
            var myRadius = mapZoom*(3); //or whatever ratio you prefer
            var myWeight = mapZoom*(0.4); //or whatever ratio you prefer
            polling_stationData.setStyle({radius: myRadius, weight: myWeight});
            map.addLayer(overlayMaps['Presidential 230 constituencies']);
            regionsData.eachLayer(function(layer) {
                layer.setStyle({
                // Set your highlighting style here
                    fillOpacity: 0
                });
            })

            regions16Data.eachLayer(function(layer) {
                layer.setStyle({
                // Set your highlighting style here
                    fillOpacity: 0
                });
            })
        }
        else if (mapZoom >= 3) {
            map.addLayer(overlayMaps['Presidential 230 constituencies']);
        }
        else {
            map.removeLayer(polling_stationData);
        }
        map.removeLayer(polling_stationData);
        map.addLayer(regionsData);
        map.removeLayer(overlayMaps['Parliament 10 Regions']);
        map.removeLayer(overlayMaps['Presidential 10 Regions']);
        map.removeLayer(overlayMaps['Parliament 16 Regions']);
        map.removeLayer(overlayMaps['Presidential 16 Regions']);
        map.removeLayer(overlayMaps['Parliament 230 constituencies']);
        map.removeLayer(overlayMaps['Presidential 230 constituencies']);
        map.removeLayer(overlayMaps['Parliament 275 constituencies']);
        map.removeLayer(overlayMaps['Presidential 275 constituencies']);
        map.removeLayer(overlayMaps['Parliament 276 constituencies']);
        map.removeLayer(overlayMaps['Presidential 276 constituencies']);
        map.removeLayer(regions16Data);
    } else if (year === "2012" || year === "2016") {
        var mapZoom = map.getZoom();
        // Check the zoom level and show/hide the ps_group layer
        if (mapZoom >= 6) {
            map.addLayer(polling_stationData);
            var myRadius = mapZoom*(3); //or whatever ratio you prefer
            var myWeight = mapZoom*(0.4); //or whatever ratio you prefer
            polling_stationData.setStyle({radius: myRadius, weight: myWeight});
            map.addLayer(overlayMaps['Presidential 275 constituencies']);
            regionsData.eachLayer(function(layer) {
                layer.setStyle({
                // Set your highlighting style here
                    fillOpacity: 0
                });
            })

            regions16Data.eachLayer(function(layer) {
                layer.setStyle({
                // Set your highlighting style here
                    fillOpacity: 0
                });
            })
        }
        else if (mapZoom >= 3) {
            map.addLayer(overlayMaps['Presidential 275 constituencies']);
        }
        else {
            map.removeLayer(polling_stationData);
        }
        map.removeLayer(polling_stationData);
        map.addLayer(regionsData);
        map.removeLayer(overlayMaps['Parliament 10 Regions']);
        map.removeLayer(overlayMaps['Presidential 10 Regions']);
        map.removeLayer(overlayMaps['Parliament 16 Regions']);
        map.removeLayer(overlayMaps['Presidential 16 Regions']);
        map.removeLayer(overlayMaps['Parliament 230 constituencies']);
        map.removeLayer(overlayMaps['Presidential 230 constituencies']);
        map.removeLayer(overlayMaps['Parliament 275 constituencies']);
        map.removeLayer(overlayMaps['Presidential 275 constituencies']);
        map.removeLayer(overlayMaps['Parliament 276 constituencies']);
        map.removeLayer(overlayMaps['Presidential 276 constituencies']);
        map.removeLayer(regions16Data);
    } else if (year === "2020") {
        var mapZoom = map.getZoom();
        // Check the zoom level and show/hide the ps_group layer
        if (mapZoom >= 6) {
            map.addLayer(polling_stationData);
            map.addLayer(overlayMaps['Presidential 275 constituencies']);
            regionsData.eachLayer(function(layer) {
                layer.setStyle({
                // Set your highlighting style here
                    fillOpacity: 0
                });
            })

            regions16Data.eachLayer(function(layer) {
                layer.setStyle({
                // Set your highlighting style here
                    fillOpacity: 0
                });
            })
        }
        else if (mapZoom >= 3) {
            map.addLayer(overlayMaps['Presidential 275 constituencies']);
        }
        else {
            map.removeLayer(polling_stationData);
        }
        map.removeLayer(regionsData);
        map.removeLayer(overlayMaps['Parliament 10 Regions']);
        map.removeLayer(overlayMaps['Presidential 10 Regions']);
        map.removeLayer(overlayMaps['Parliament 16 Regions']);
        map.removeLayer(overlayMaps['Presidential 16 Regions']);
        map.removeLayer(overlayMaps['Parliament 230 constituencies']);
        map.removeLayer(overlayMaps['Presidential 230 constituencies']);
        map.removeLayer(overlayMaps['Parliament 275 constituencies']);
        map.removeLayer(overlayMaps['Presidential 275 constituencies']);
        map.removeLayer(overlayMaps['Parliament 276 constituencies']);
        map.removeLayer(overlayMaps['Presidential 276 constituencies']);
        map.addLayer(regions16Data);
        
    }else {
        var mapZoom = map.getZoom();
        // Check the zoom level and show/hide the ps_group layer
        if (mapZoom >= 6) {
            map.addLayer(polling_stationData);
            map.addLayer(overlayMaps['Presidential 276 constituencies']);
            regionsData.eachLayer(function(layer) {
                layer.setStyle({
                // Set your highlighting style here
                    fillOpacity: 0
                });
            })

            regions16Data.eachLayer(function(layer) {
                layer.setStyle({
                // Set your highlighting style here
                    fillOpacity: 0
                });
            })
        }
        else if (mapZoom >= 3) {
            map.addLayer(overlayMaps['Presidential 276 constituencies']);
        }
        else {
            map.removeLayer(polling_stationData);
        }
        map.removeLayer(regionsData);
        map.removeLayer(overlayMaps['Parliament 10 Regions']);
        map.removeLayer(overlayMaps['Presidential 10 Regions']);
        map.removeLayer(overlayMaps['Parliament 16 Regions']);
        map.removeLayer(overlayMaps['Presidential 16 Regions']);
        map.removeLayer(overlayMaps['Parliament 230 constituencies']);
        map.removeLayer(overlayMaps['Presidential 230 constituencies']);
        map.removeLayer(overlayMaps['Parliament 275 constituencies']);
        map.removeLayer(overlayMaps['Presidential 275 constituencies']);
        map.removeLayer(overlayMaps['Parliament 276 constituencies']);
        map.removeLayer(overlayMaps['Presidential 276 constituencies']);
        map.addLayer(regions16Data);
        
    }
    if (region === "Ahafo" || region === "Ashanti" || region === "Brong Ahafo" || region === "Greater Accra" || region === "Volta" || region === "Savannah" || region === "North East" || region === "Bono" || region === "Bono East" || region === "Upper East" || region === "Upper West" || region === "Oti" || region === "Central" || region === "Eastern" || region === "Western" || region === "Western North" || region === "Northern") {

        if (year === "2004" || year === "2008") {
                var mapZoom = map.getZoom();
                // Check the zoom level and show/hide the ps_group layer
                if (mapZoom >= 6) {
                    map.addLayer(polling_stationData);
                    var myRadius = mapZoom*(3); //or whatever ratio you prefer
                    var myWeight = mapZoom*(0.4); //or whatever ratio you prefer
                    polling_stationData.setStyle({radius: myRadius, weight: myWeight});
                    map.addLayer(overlayMaps['Presidential 230 constituencies']);
                    regionsData.eachLayer(function(layer) {
                        layer.setStyle({
                        // Set your highlighting style here
                            fillOpacity: 0
                        });
                    })

                    regions16Data.eachLayer(function(layer) {
                        layer.setStyle({
                        // Set your highlighting style here
                            fillOpacity: 0
                        });
                    })
                }
                else if (mapZoom >= 3) {
                    map.addLayer(overlayMaps['Presidential 230 constituencies']);
                }
                else {
                    map.removeLayer(polling_stationData);
                    map.removeLayer(overlayMaps['Presidential 230 constituencies']);
                }
                map.removeLayer(polling_stationData);
                map.addLayer(regionsData);
                map.removeLayer(overlayMaps['Parliament 10 Regions']);
                map.removeLayer(overlayMaps['Presidential 10 Regions']);
                map.removeLayer(overlayMaps['Parliament 16 Regions']);
                map.removeLayer(overlayMaps['Presidential 16 Regions']);
                map.removeLayer(overlayMaps['Parliament 230 constituencies']);
                map.removeLayer(overlayMaps['Presidential 230 constituencies']);
                map.removeLayer(overlayMaps['Parliament 275 constituencies']);
                map.removeLayer(overlayMaps['Presidential 275 constituencies']);
                map.removeLayer(overlayMaps['Parliament 276 constituencies']);
                map.removeLayer(overlayMaps['Presidential 276 constituencies']);
                map.removeLayer(regions16Data);
            } else if (year === "2012" || year === "2016") {
                var mapZoom = map.getZoom();
                // Check the zoom level and show/hide the ps_group layer
                if (mapZoom >= 6) {
                    map.addLayer(polling_stationData);
                    var myRadius = mapZoom*(3); //or whatever ratio you prefer
                    var myWeight = mapZoom*(0.4); //or whatever ratio you prefer
                    polling_stationData.setStyle({radius: myRadius, weight: myWeight});
                    map.addLayer(overlayMaps['Presidential 275 constituencies']);
                    regionsData.eachLayer(function(layer) {
                        layer.setStyle({
                        // Set your highlighting style here
                            fillOpacity: 0
                        });
                    })

                    regions16Data.eachLayer(function(layer) {
                        layer.setStyle({
                        // Set your highlighting style here
                            fillOpacity: 0
                        });
                    })
                }
                else if (mapZoom >= 3) {
                    map.addLayer(overlayMaps['Presidential 275 constituencies']);
                }
                else {
                    map.removeLayer(polling_stationData);
                    map.removeLayer(overlayMaps['Presidential 275 constituencies']);
                }
                map.removeLayer(polling_stationData);
                map.addLayer(regionsData);
                map.removeLayer(overlayMaps['Parliament 10 Regions']);
                map.removeLayer(overlayMaps['Presidential 10 Regions']);
                map.removeLayer(overlayMaps['Parliament 16 Regions']);
                map.removeLayer(overlayMaps['Presidential 16 Regions']);
                map.removeLayer(overlayMaps['Parliament 230 constituencies']);
                map.removeLayer(overlayMaps['Presidential 230 constituencies']);
                map.removeLayer(overlayMaps['Parliament 275 constituencies']);
                map.removeLayer(overlayMaps['Presidential 275 constituencies']);
                map.removeLayer(overlayMaps['Parliament 276 constituencies']);
                map.removeLayer(overlayMaps['Presidential 276 constituencies']);
                map.removeLayer(regions16Data);
            } else if (year === "2020") {
                var mapZoom = map.getZoom();
                // Check the zoom level and show/hide the ps_group layer
                if (mapZoom >= 6) {
                    map.addLayer(polling_stationData);
                    map.addLayer(overlayMaps['Presidential 275 constituencies']);
                    regionsData.eachLayer(function(layer) {
                        layer.setStyle({
                        // Set your highlighting style here
                            fillOpacity: 0
                        });
                    })

                    regions16Data.eachLayer(function(layer) {
                        layer.setStyle({
                        // Set your highlighting style here
                            fillOpacity: 0
                        });
                    })
                }
                else if (mapZoom >= 3) {
                    map.addLayer(overlayMaps['Presidential 275 constituencies']);
                }
                else {
                    map.removeLayer(polling_stationData);
                    map.removeLayer(overlayMaps['Presidential 275 constituencies']);
                }
                map.removeLayer(polling_stationData);
                map.removeLayer(regionsData);
                map.removeLayer(overlayMaps['Parliament 10 Regions']);
                map.removeLayer(overlayMaps['Presidential 10 Regions']);
                map.removeLayer(overlayMaps['Parliament 16 Regions']);
                map.removeLayer(overlayMaps['Presidential 16 Regions']);
                map.removeLayer(overlayMaps['Parliament 230 constituencies']);
                map.removeLayer(overlayMaps['Presidential 230 constituencies']);
                map.removeLayer(overlayMaps['Parliament 275 constituencies']);
                map.removeLayer(overlayMaps['Presidential 275 constituencies']);
                map.removeLayer(overlayMaps['Parliament 276 constituencies']);
                map.removeLayer(overlayMaps['Presidential 276 constituencies']);
                map.addLayer(regions16Data);
                
            }else {
                var mapZoom = map.getZoom();
                // Check the zoom level and show/hide the ps_group layer
                if (mapZoom >= 6) {
                    map.addLayer(polling_stationData);
                    map.addLayer(overlayMaps['Presidential 276 constituencies']);
                    regionsData.eachLayer(function(layer) {
                        layer.setStyle({
                        // Set your highlighting style here
                            fillOpacity: 0
                        });
                    })

                    regions16Data.eachLayer(function(layer) {
                        layer.setStyle({
                        // Set your highlighting style here
                            fillOpacity: 0
                        });
                    })
                }
                else if (mapZoom >= 3) {
                    map.addLayer(overlayMaps['Presidential 276 constituencies']);
                }
                else {
                    map.removeLayer(polling_stationData);
                    map.removeLayer(overlayMaps['Presidential 276 constituencies']);
                }
                map.removeLayer(polling_stationData);
                map.removeLayer(regionsData);
                map.removeLayer(overlayMaps['Parliament 10 Regions']);
                map.removeLayer(overlayMaps['Presidential 10 Regions']);
                map.removeLayer(overlayMaps['Parliament 16 Regions']);
                map.removeLayer(overlayMaps['Presidential 16 Regions']);
                map.removeLayer(overlayMaps['Parliament 230 constituencies']);
                map.removeLayer(overlayMaps['Presidential 230 constituencies']);
                map.removeLayer(overlayMaps['Parliament 275 constituencies']);
                map.removeLayer(overlayMaps['Presidential 275 constituencies']);
                map.removeLayer(overlayMaps['Parliament 276 constituencies']);
                map.removeLayer(overlayMaps['Presidential 276 constituencies']);
                map.addLayer(regions16Data);
                
            }
    }
}
    updateLayerVisibility();
    //map.on("zoomend", updateLayerVisibility());
       

    var initialView = map.getBounds();

    function resetMap(region, year) {
        if (year === "2004" || year === "2008" || year === "2009" || year === "2012" || year === "2016") {
            map.setView(initialView.getCenter(), 6);
            map.addLayer(polling_stationData);
            map.addLayer(regionsData);
            map.removeLayer(overlayMaps['Presidential 16 Regions']);
            map.removeLayer(overlayMaps['Presidential 10 Regions']);
            map.removeLayer(overlayMaps['Parliament 16 Regions']);
            map.removeLayer(overlayMaps['Parliament 10 Regions']);
            map.removeLayer(overlayMaps['Parliament 230 constituencies']);
            map.removeLayer(overlayMaps['Presidential 230 constituencies']);
            map.removeLayer(overlayMaps['Parliament 275 constituencies']);
            map.removeLayer(overlayMaps['Presidential 275 constituencies']);
            map.removeLayer(overlayMaps['Parliament 276 constituencies']);
            map.removeLayer(overlayMaps['Presidential 276 constituencies']);
            if (highlightLayerMap && map.hasLayer(highlightLayerMap)) {
                map.removeLayer(highlightLayerMap);
            }

            if (highlightLayerMap2 && map2.hasLayer(highlightLayerMap2)) {
                map2.removeLayer(highlightLayerMap2);
            }
            regionsData.eachLayer(function(layer) {
                layer.setStyle({
                // Set your highlighting style here
                    fillOpacity: 0
                });
            })

            regions16Data.eachLayer(function(layer) {
                layer.setStyle({
                // Set your highlighting style here
                    fillOpacity: 0
                });
            })
        } else {
            map.setView(initialView.getCenter(), 6);
            map.addLayer(polling_stationData);
            map.addLayer(regions16Data);
            map.removeLayer(overlayMaps['Presidential 16 Regions']);
            map.removeLayer(overlayMaps['Presidential 10 Regions']);
            map.removeLayer(overlayMaps['Parliament 16 Regions']);
            map.removeLayer(overlayMaps['Parliament 10 Regions']);
            map.removeLayer(overlayMaps['Parliament 230 constituencies']);
            map.removeLayer(overlayMaps['Presidential 230 constituencies']);
            map.removeLayer(overlayMaps['Parliament 275 constituencies']);
            map.removeLayer(overlayMaps['Presidential 275 constituencies']);
            map.removeLayer(overlayMaps['Parliament 276 constituencies']);
            map.removeLayer(overlayMaps['Presidential 276 constituencies']);
            if (highlightLayerMap && map.hasLayer(highlightLayerMap)) {
                map.removeLayer(highlightLayerMap);
            }

            if (highlightLayerMap2 && map2.hasLayer(highlightLayerMap2)) {
                map2.removeLayer(highlightLayerMap2);
            }

            regionsData.eachLayer(function(layer) {
                layer.setStyle({
                // Set your highlighting style here
                    fillOpacity: 0
                });
            })

            regions16Data.eachLayer(function(layer) {
                layer.setStyle({
                // Set your highlighting style here
                    fillOpacity: 0
                });
            })

        }

        if (region === "Ahafo" || region === "Ashanti" || region === "Brong Ahafo" || region === "Greater Accra" || region === "Volta" || region === "Savannah" || region === "North East" || region === "Bono" || region === "Bono East" || region === "Upper East" || region === "Upper West" || region === "Oti" || region === "Central" || region === "Eastern" || region === "Western" || region === "Western North" || region === "Northern") {

            map.setView(initialView.getCenter(), 6);
            map.addLayer(polling_stationData);
            map.removeLayer(overlayMaps['Presidential 16 Regions']);
            map.removeLayer(overlayMaps['Presidential 10 Regions']);
            map.removeLayer(overlayMaps['Parliament 16 Regions']);
            map.removeLayer(overlayMaps['Parliament 10 Regions']);
            map.removeLayer(overlayMaps['Parliament 230 constituencies']);
            map.removeLayer(overlayMaps['Presidential 230 constituencies']);
            map.removeLayer(overlayMaps['Parliament 275 constituencies']);
            map.removeLayer(overlayMaps['Presidential 275 constituencies']);
            map.removeLayer(overlayMaps['Parliament 276 constituencies']);
            map.removeLayer(overlayMaps['Presidential 276 constituencies']);
            if (highlightLayerMap && map.hasLayer(highlightLayerMap)) {
                map.removeLayer(highlightLayerMap);
            }

            if (highlightLayerMap2 && map2.hasLayer(highlightLayerMap2)) {
                map2.removeLayer(highlightLayerMap2);
            }

            regionsData.eachLayer(function(layer) {
                layer.setStyle({
                // Set your highlighting style here
                    fillOpacity: 0
                });
            })

            regions16Data.eachLayer(function(layer) {
                layer.setStyle({
                // Set your highlighting style here
                    fillOpacity: 0
                });
            })
    }
}
    

    function updateMap(region, year, highlight = true) {

    let activeRegion = ""

    if (year === "2004" || year === "2008" || year === "2009" || year === "2012" || year === "2016") {
        map.removeLayer(regions16Data);
        map.removeLayer(overlayMaps['Parliament 10 Regions']);
        map.removeLayer(overlayMaps['Parliament 16 Regions']);
        map.removeLayer(overlayMaps['Presidential 16 Regions']);
        map.removeLayer(overlayMaps['Parliament 230 constituencies']);
        map.removeLayer(overlayMaps['Presidential 230 constituencies']);
        map.removeLayer(overlayMaps['Parliament 275 constituencies']);
        map.removeLayer(overlayMaps['Presidential 275 constituencies']);
        map.removeLayer(overlayMaps['Parliament 276 constituencies']);
        map.removeLayer(overlayMaps['Presidential 276 constituencies']);
        map.addLayer(regionsData);
        map.addLayer(overlayMaps['Presidential 10 Regions']);
        map.removeLayer(polling_stationData);
        activeRegion = regionsData
    } else {
        map.removeLayer(regionsData);
        map.addLayer(regions16Data);
        map.addLayer(overlayMaps['Presidential 16 Regions']);
        map.removeLayer(overlayMaps['Presidential 10 Regions']);
        //map.addLayer(presidentialConst_16);
        map.removeLayer(polling_stationData);

        activeRegion = regions16Data
    };

    if (region === "Ahafo" || region === "Ashanti" || region === "Brong Ahafo" || region === "Greater Accra" || region === "Volta" || region === "Savannah" || region === "North East" || region === "Bono" || region === "Bono East" || region === "Upper East" || region === "Upper West" || region === "Oti" || region === "Central" || region === "Eastern" || region === "Western" || region === "Western North" || region === "Northern") {

        map.removeLayer(overlayMaps['Presidential 16 Regions']);
        map.removeLayer(overlayMaps['Presidential 10 Regions']);

    };

    // Conditionally call highlightRegion2 only if 'highlight' is true
    if (highlight) {
        highlightRegion(activeRegion, region);
    }

    return;
    }

    function highlightRegion(activeRegion, regionID) {
      if(!regionID) regionID = ""
      activeRegion.eachLayer(function(layer) {
        if (layer.feature.properties.region == regionID) {
          map.removeLayer(polling_stationData);
            layer.setStyle({
                fillColor: 'yellow', // Set your highlighting style here
                fillOpacity: 0.8
            });
        } 
        else {
            layer.setStyle({
                fillOpacity: 0
            });
        }
    });
}

// UPDATE VISIBILITY (2)

// Function to update marker size based on zoom level
    function updateMarkerSize2() {
      var zoomLevel = map2.getZoom();
        var newRadius = baseRadius * Math.pow(2, (zoomLevel - 6) * scaleFactor); // Adjust the scaleFactor and baseZoomLevel as needed
        
        flashPS_Data2.eachLayer(function(layer) {
          if (layer instanceof L.CircleMarker) {
            layer.setRadius(newRadius);
          }
        });
      }

  // Bind the zoomend event to update marker size
    map2.on('zoomend', updateMarkerSize2);

  // Initial call to set the marker sizes
    map2.on('load', updateMarkerSize2);

    function updateLayerVisibility2(region, year) {

        if (year === "2004" || year === "2008" || year === "2009" || year === "2012" || year === "2016") {
        map2.removeLayer(polling_stationData2);
        map2.addLayer(regions16Data2);
        map2.addLayer(overlayMaps2['Flash Incident Regions']);
        map2.removeLayer(overlayMaps2['Flash Incident 275 Constinuencies']);
        map2.removeLayer(overlayMaps2['Flash Incident 276 Constinuencies']);
        map2.removeLayer(overlayMaps2['Flash Incident Polling Stations']);
    } else {
        map2.removeLayer(polling_stationData2)
        map2.addLayer(overlayMaps2['Flash Incident Regions']);
        map2.removeLayer(overlayMaps2['Flash Incident 275 Constinuencies']);
        map2.removeLayer(overlayMaps2['Flash Incident 276 Constinuencies']);
        map2.removeLayer(overlayMaps2['Flash Incident Polling Stations']);
        map2.removeLayer(regions16Data2);
    }
    if (region === "Ahafo" || region === "Ashanti" || region === "Brong Ahafo" || region === "Greater Accra" || region === "Volta" || region === "Savannah" || region === "North East" || region === "Bono" || region === "Bono East" || region === "Upper East" || region === "Upper West" || region === "Oti" || region === "Central" || region === "Eastern" || region === "Western" || region === "Western North" || region === "Northern") {
        
        // map2.removeLayer(regionsData);
        // map2.removeLayer(overlayMaps2['Flash_Incident Regions']);
        // map2.addLayer(overlayMaps2['Flash_Incident Constinuencies']);
        // map2.removeLayer(overlayMaps2['Flash_Incident Polling Stations']);
        // map2.removeLayer(regions16Data);
        map2.removeLayer(overlayMaps2['Flash Incident Regions']);
        map2.removeLayer(overlayMaps2['Flash Incident 275 Constinuencies']);
        map2.removeLayer(overlayMaps2['Flash Incident 276 Constinuencies']);
        map2.removeLayer(overlayMaps2['Flash Incident Polling Stations']);
        map2.addLayer(regions16Data2);

    }
}
    updateLayerVisibility2();


// RESET 2

    var initialView2 = map2.getBounds();

    function resetMap2(region, year) {
        if (year === "2004" || year === "2008" || year === "2009" || year === "2012" || year === "2016") {
            map2.setView(initialView2.getCenter(), 6);
            map2.addLayer(polling_stationData2);
            map2.removeLayer(regions16Data2);
            map2.addLayer(overlayMaps2['Flash Incident Regions']);
            map2.removeLayer(overlayMaps2['Flash Incident 275 Constinuencies']);
            map2.removeLayer(overlayMaps2['Flash Incident 276 Constinuencies']);
            map2.removeLayer(overlayMaps2['Flash Incident Polling Stations']);
            if (highlightLayerMap && map.hasLayer(highlightLayerMap)) {
                map.removeLayer(highlightLayerMap);
            }

            if (highlightLayerMap2 && map2.hasLayer(highlightLayerMap2)) {
                map2.removeLayer(highlightLayerMap2);
            }
            regions16Data2.eachLayer(function(layer) {
                layer.setStyle({
                // Set your highlighting style here
                    fillOpacity: 0
                });
            })
        } else {
            map2.setView(initialView2.getCenter(), 6);
            map2.removeLayer(polling_stationData2);
            map2.removeLayer(regions16Data2);
            map2.addLayer(overlayMaps2['Flash Incident Regions']);
            map2.removeLayer(overlayMaps2['Flash Incident 275 Constinuencies']);
            map2.removeLayer(overlayMaps2['Flash Incident 276 Constinuencies']);
            map2.removeLayer(overlayMaps2['Flash Incident Polling Stations']);

            if (highlightLayerMap && map.hasLayer(highlightLayerMap)) {
                map.removeLayer(highlightLayerMap);
            }

            if (highlightLayerMap2 && map2.hasLayer(highlightLayerMap2)) {
                map2.removeLayer(highlightLayerMap2);
            }
            regions16Data2.eachLayer(function(layer) {
                layer.setStyle({
                // Set your highlighting style here
                    fillOpacity: 0
                });
            })

        }

        if (region === "Ahafo" || region === "Ashanti" || region === "Brong Ahafo" || region === "Greater Accra" || region === "Volta" || region === "Savannah" || region === "North East" || region === "Bono" || region === "Bono East" || region === "Upper East" || region === "Upper West" || region === "Oti" || region === "Central" || region === "Eastern" || region === "Western" || region === "Western North" || region === "Northern") {

            map2.setView(initialView2.getCenter(), 6);
            map2.removeLayer(polling_stationData2);
            map2.removeLayer(regions16Data2);
            map2.addLayer(overlayMaps2['Flash Incident Regions']);
            map2.removeLayer(overlayMaps2['Flash Incident 275 Constinuencies']);
            map2.removeLayer(overlayMaps2['Flash Incident 276 Constinuencies']);
            map2.removeLayer(overlayMaps2['Flash Incident Polling Stations']);
            if (highlightLayerMap && map.hasLayer(highlightLayerMap)) {
                map.removeLayer(highlightLayerMap);
            }

            if (highlightLayerMap2 && map2.hasLayer(highlightLayerMap2)) {
                map2.removeLayer(highlightLayerMap2);
            }

            regions16Data2.eachLayer(function(layer) {
                layer.setStyle({
                // Set your highlighting style here
                    fillOpacity: 0
                });
            })
    }
}

// UPDATE 2

    function updateMap2(region, year, highlight = true) {

    let activeRegion2 = ""

    if (year === "2004" || year === "2008" || year === "2009" || year === "2012" || year === "2016") {
        map2.addLayer(regions16Data2);
        map2.addLayer(overlayMaps2['Flash Incident Regions']);
        map2.removeLayer(overlayMaps2['Flash Incident 275 Constinuencies']);
        map2.removeLayer(overlayMaps2['Flash Incident 276 Constinuencies']);
        map2.removeLayer(overlayMaps2['Flash Incident Polling Stations']);
        activeRegion2 = regions16Data2
    } else {
        map2.addLayer(regions16Data2);
        map2.addLayer(overlayMaps2['Flash Incident Regions']);
        map2.removeLayer(overlayMaps2['Flash Incident 275 Constinuencies']);
        map2.removeLayer(overlayMaps2['Flash Incident 276 Constinuencies']);
        map2.removeLayer(overlayMaps2['Flash Incident Polling Stations']);
        activeRegion2 = regions16Data2
    }
    if (region === "Ahafo" || region === "Ashanti" || region === "Brong Ahafo" || region === "Greater Accra" || region === "Volta" || region === "Savannah" || region === "North East" || region === "Bono" || region === "Bono East" || region === "Upper East" || region === "Upper West" || region === "Oti" || region === "Central" || region === "Eastern" || region === "Western" || region === "Western North" || region === "Northern") {

        map2.removeLayer(overlayMaps2['Flash Incident Regions']);
        //map2.addLayer(regions16Data);
        //map2.addLayer(overlayMaps2['Flash_Incident Constinuencies']);
        

    }


    // Conditionally call highlightRegion2 only if 'highlight' is true
    if (highlight) {
        highlightRegion2(activeRegion2, region);
    }

    return;
    }

    function highlightRegion2(activeRegion2, regionID) {
      if(!regionID) regionID = ""
      activeRegion2.eachLayer(function(layer) {
        if (layer.feature.properties.region == regionID) {
          map2.removeLayer(polling_stationData2);
            layer.setStyle({
                fillColor: 'orange', // Set your highlighting style here
                fillOpacity: 0.8
            });
        } 
        else {
            layer.setStyle({
                fillOpacity: 0
            });
        }
    });
}



///// LAYER CLICK HIGHLIGHTING

//_________________________________


// Define a style for the highlight on click
// function highlightFeature(e) {
//     var layer = e.target;

//     // Reset the previously highlighted feature, if any
//     if (highlightedLayer) {
//         highlightedLayer.setStyle({
//             weight: 2,              // Restore original style (customize if needed)
//             color: 'blue',
//             dashArray: '3',
//             fillOpacity: 0.5
//         });
//     }

//     // Set the highlight style for the clicked feature (region)
//     layer.setStyle({
//         weight: 5,
//         color: '#666',
//         dashArray: '',
//         fillOpacity: 0.7
//     });

//     // Bring the selected feature (region) to front if it's a polygon
//     if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
//         layer.bringToFront();
//     }

//     // Store the highlighted layer for future resets
//     highlightedLayer = layer;
// }

// // Zoom to the feature (region) when it's clicked (optional)
// function zoomToFeature(e) {
//     map.fitBounds(e.target.getBounds());  // Zooms to the bounds of the clicked region
// }

// // Assuming you already have layers, you attach interaction handlers to your existing layers
// function onEachFeature(feature, layer) {
//     layer.on({
//         click: function(e) {
//             highlightFeature(e);  // Highlight on click
//             zoomToFeature(e);     // Optional: zoom to the feature (you can remove this if unnecessary)
//         }
//     });
// }

// // Track the currently highlighted region
// var highlightedLayer;

// // Assuming your layers are already defined (e.g., regionLayer)
// regionLayer.eachLayer(function (layer) {
//     onEachFeature(null, layer);  // Attach the interaction to each layer
// });

// // If you need to change to another layer, you can follow a similar process
// otherLayer.eachLayer(function (layer) {
//     onEachFeature(null, layer);
// });


///////////////// END OF LAYER CLICK HIGHLIGHTING //////////////////////
