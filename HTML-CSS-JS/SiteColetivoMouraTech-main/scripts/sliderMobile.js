const belo_jardim = window.document.getElementById('belojardim');
const sanharo = window.document.getElementById('sanharo');
const tacaimbo = window.document.getElementById('tacaimbo');

function carrosel_mobile(){
    function belo(){
        belo_jardim.style.marginLeft = '0';
        console.log('belo')
    }
    function sanha(){
        belo_jardim.style.marginLeft = '-80vw';
        console.log('sanha')
    }
    function taca(){
        belo_jardim.style.marginLeft = '-160vw';
        console.log('taca')
    }
    
    const sleep = time => new Promise(resolve => {
        setTimeout(resolve, time);
    })
    const anima = async() => {
        while(true){
            belo();
            await sleep(700);
            sanha();
            await sleep(700);
            taca();
            await sleep(700);
            sleep = 0  
        }
    }
    anima()
}

function infinity(){
    setInterval(carrosel_mobile, 2200);
}



