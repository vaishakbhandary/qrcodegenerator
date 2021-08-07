const canvas = document.getElementById("canvas");
const message = document.getElementById("message");
const getBtn = document.getElementById("generate-button");
const printBtn = document.getElementById("print-button");

printBtn.addEventListener("click",()=>{
  download();
});

getBtn.addEventListener('click',()=>{
  if(message.value!==""){
    QRCode.toCanvas(canvas,message.value,{width:1000},(err)=>{
      console.log(err);
    });
    
 

  }
 
});
function download(){
  const link = document.createElement("a");
  link.download = "qrcode_" +Date.now();
  link.href = canvas.toDataURL("image/jpeg");
  link.click();
  link.remove();
}