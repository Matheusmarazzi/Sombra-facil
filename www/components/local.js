// This is a JavaScript file
  function mostramapa(lat,long){
    L.mapquest.key = 'M6YEjAkLxl4ShevHouHFp02pyEOSHm6A';

      var map = L.mapquest.map('map', {
        center: [lat, long],
        layers: L.mapquest.tileLayer('map'),
        zoom:16
        
      });
      L.marker([lat, long],{
          icon: L.mapquest.icons.marker(),
          draggable: false
        }).bindPopup('Voce esta aqui!').addTo(map);
     $.ajax({
       url:'https://maestoques.profrodolfo.com.br/sombra-facil/listarlocal.php',
       type:'get',
       data: null,
       success:function(data){
         var pos = JSON.parse(data);
         var x = pos.length;
         for(var i = 0; i<x;i++){ 
       L.marker([pos[i].latitude, pos[i].longitude],{
          icon: L.mapquest.icons.marker(),
          draggable: false
        }).bindPopup(pos[i].nome_posto+ '<br>'+pos[i].tipo_produto+ ' disponivel:'+pos[i].quantidade).addTo(map);
        }
       }
     });
        //________________________________________rotas_____________________________________________________________________________________
        $(document).on('click', '#rota',function(){
        var directions = L.mapquest.directions();
          directions.route({
            start: [lat,long],
            end: [-24.183347, -46.782124]
          });
      
      var dir = MQ.routing.directions();

      dir.route({
        locations:[
          'itanhaem, SP',
          'santos,SP'
        ]


      });
      CustomRouteLayer = MQ.Routing.RouteLayer.extend({
        creteStartMarker: (location) =>{
          var custon_icon;
          var marker;

          custon_icon = L.icon({
            icon_Url: 'https://assets.mapquestapi.com/icon/v2/marker@2x.png',
            iconSize:[20,29],
            iconAnchor:[10,29],
            popupAnchor:[0,-29]
          });
          Marker = L.Marker(location.latLng,{icon: custom_icon}.addTo(map));
          return marker;
        },
          creteEndMarker: (location) =>{
          var custon_icon;
          var marker;

          custon_icon = L.icon({
            icon_Url: 'https://assets.mapquestapi.com/icon/v2/marker@2x.png',
            iconSize:[20,29],
            iconAnchor:[10,29],
            popupAnchor:[0,-29]
          });
          Marker = L.Marker(location.latLng,{icon: custom_icon}.addTo(map));
          return marker;
        }

      });
      map.addLayer(new CustomRouteLayer({
        directions: dir,
        fitBounds: true
      }));
        });
      //________________________________________rotas-final______________________________________________________________________
  }

function cordenatas(){



    var onSuccess = function(position) {
        mostramapa(position.coords.latitude,position.coords.longitude)

    };
 

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' + 
              'message: ' + error.message + '\n');
              document.getElementById('ero').innerHTML = 'ERRO!! REINICIE O APP';
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };
    cordenatas();
   
