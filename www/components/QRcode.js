$(document).on("click","#codigo",function(){
  cordova.plugins.barcodeScanner.scan(
      function (result) {
        window.location = result.text;
          // alert("We got a barcode\n" +
          //       "Resultado: " + result.text + "\n" +
          //       "Formato: " + result.format + "\n" +
          //       "Cancelado: " + result.cancelled);
      },
      function (error) {
          alert('Está com problemas digite o link abaixo do qr code:<br> <input type="text">' + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Coloque um código de barras dentro da área de digitalização", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );

});