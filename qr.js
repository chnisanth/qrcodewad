// script.js

function generateQRCode() {
    const text = document.getElementById('text').value;
    if (text) {
      // Clear previous QR code if any
      document.getElementById('qrcode').innerHTML = "";
      // Generate new QR code
      new QRCode(document.getElementById("qrcode"), text);
    } else {
      alert("Please enter some text.");
    }
  }
  
  function changeBackground() {
    const selectedBackground = document.getElementById('bgSelect').value;
    document.body.className = selectedBackground;
  }
  