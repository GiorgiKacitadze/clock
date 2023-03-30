setInterval(setClock, 1000)

let hourarrow = document.querySelector('[data-hour-arrow]')
let minutearrow = document.querySelector('[data-minute-arrow]')
let secondarrow = document.querySelector('[data-second-arrow]')


function setClock(){

// მივიღოთ დრო
    const cdate = new Date();
    const sratio = cdate.getSeconds() /60;
    const mratio = (sratio + cdate.getMinutes()) / 60;
    const hratio = (mratio + cdate.getHours()) / 12;

    
// გამოვიძახოთ ბრუნვის ფუნქცია
    rotation(secondarrow, sratio)
    rotation(minutearrow, mratio)
    rotation(hourarrow, hratio)
}



// ბრუნვა
function rotation(element, brunva) {
    element.style.setProperty('transform', 'rotate(' + (brunva * 360) + 'deg)');
    
  }



