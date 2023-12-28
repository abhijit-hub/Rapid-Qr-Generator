//  import qr from "qr-image";
//  import fs from "fs";
// function createImg(){
//     var inputVal = document.getElementById("myInput").value;
//       var qr_svg = qr.image(inputVal+"");
//       qr_svg.pipe(fs.createWriteStream('qr-img.png'));
//     if (inputVal.trim() === "") {
//         // Display a message
//         alert("Insert text first");
        
//     }
    
//     document.getElementById("qr-img").src="qr-img.png";


//     document.getElementById("qr-img").style.display="block";
// }

function createImg() {
    var inputVal = document.getElementById("myInput").value;
    var qrContainer = document.getElementById("qr-img");
    qrContainer.innerHTML = "";

    // Clear previous QR code

    if (inputVal.trim() === "") {
        // Display a message
        alert("Insert text first");
    } else {
        // Generate QR code using qrcode library
        var qr = new QRCode(qrContainer, {
            text: inputVal,
            width: 290,
            height: 290,
        });
    }

}