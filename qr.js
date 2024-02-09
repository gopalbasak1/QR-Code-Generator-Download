const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change', (e) => {
    size = e.target.value;
    isEmptyInput();
});

function isEmptyInput(){
    if(qrText.value.length > 0){
        generateQRCode();
    }
    else{
        alert('Enter the text or URL to generate your QR code')
    }
}

downloadBtn.addEventListener('click', () => {
    const qrImg = document.querySelector('.qr-body img');
    if (qrImg !== null) {
        downloadBtn.setAttribute('href', qrImg.src);
    }
});

function generateQRCode() {
    const qrSize = sizes.value;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrText.value)}`;
    qrContainer.innerHTML = `<img src="${qrUrl}" alt="QR Code">`;
}
