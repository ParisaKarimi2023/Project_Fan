let onBtn = document.getElementById('on'),
        offBtn = document.getElementById('off'),
        myCircle = document.getElementById('circle'),
        speedBtn1 = document.getElementById('speed1'),
        speedBtn2 = document.getElementById('speed2'),
        speedBtn3 = document.getElementById('speed3'),
        speedBtn4 = document.getElementById('speed4'),
        speedBtn5 = document.getElementById('speed5');
//=============================================
    onBtn.onclick = function () {
        
        myCircle.classList.add('onEvent');
        myCircle.classList.remove('offEvent');
        myCircle.classList.remove('speed1-event');
        myCircle.classList.remove('speed2-event');
        myCircle.classList.remove('speed3-event');
        myCircle.classList.remove('speed4-event');
        myCircle.classList.remove('speed5-event');
        speedBtn1.classList.remove('btn-clicked');
        speedBtn2.classList.remove('btn-clicked');
        speedBtn3.classList.remove('btn-clicked');
        speedBtn4.classList.remove('btn-clicked');
        speedBtn5.classList.remove('btn-clicked');
        offBtn.classList.remove('btn-clicked');
        this.classList.add('btn-clicked');

    };
    offBtn.onclick = function () {
        
        myCircle.classList.add('offEvent');
        myCircle.classList.remove('speed1-event');
        myCircle.classList.remove('speed2-event');
        myCircle.classList.remove('speed3-event');
        myCircle.classList.remove('speed4-event');
        myCircle.classList.remove('speed5-event');
        speedBtn1.classList.remove('btn-clicked');
        speedBtn2.classList.remove('btn-clicked');
        speedBtn3.classList.remove('btn-clicked');
        speedBtn4.classList.remove('btn-clicked');
        speedBtn5.classList.remove('btn-clicked');
        onBtn.classList.remove('btn-clicked');
        this.classList.add('btn-clicked');

    };
    speedBtn1.onclick = function () {
        
        myCircle.classList.add('speed1-event');
        myCircle.classList.remove('speed2-event');
        myCircle.classList.remove('speed3-event');
        myCircle.classList.remove('speed4-event');
        myCircle.classList.remove('speed5-event');
        this.classList.add('btn-clicked');
        speedBtn2.classList.remove('btn-clicked');
        speedBtn3.classList.remove('btn-clicked');
        speedBtn4.classList.remove('btn-clicked');
        speedBtn5.classList.remove('btn-clicked');
        offBtn.classList.remove('btn-clicked');
        onBtn.classList.remove('btn-clicked');

    };
    speedBtn2.onclick = function () {
        
        myCircle.classList.add('speed2-event');
        myCircle.classList.remove('speed1-event');
        myCircle.classList.remove('speed3-event');
        myCircle.classList.remove('speed4-event');
        myCircle.classList.remove('speed5-event');
        this.classList.add('btn-clicked');
        speedBtn1.classList.remove('btn-clicked');
        speedBtn3.classList.remove('btn-clicked');
        speedBtn4.classList.remove('btn-clicked');
        speedBtn5.classList.remove('btn-clicked');
        offBtn.classList.remove('btn-clicked');
        onBtn.classList.remove('btn-clicked');
    };
    speedBtn3.onclick = function () {
        
        myCircle.classList.add('speed3-event');
        myCircle.classList.remove('speed1-event');
        myCircle.classList.remove('speed2-event');
        myCircle.classList.remove('speed4-event');
        myCircle.classList.remove('speed5-event');
        this.classList.add('btn-clicked');
        speedBtn2.classList.remove('btn-clicked');
        speedBtn1.classList.remove('btn-clicked');
        speedBtn4.classList.remove('btn-clicked');
        speedBtn5.classList.remove('btn-clicked');
        offBtn.classList.remove('btn-clicked');
        onBtn.classList.remove('btn-clicked');
    };
    speedBtn4.onclick = function () {
        
        myCircle.classList.add('speed4-event');
        myCircle.classList.remove('speed1-event');
        myCircle.classList.remove('speed2-event');
        myCircle.classList.remove('speed3-event');
        myCircle.classList.remove('speed5-event');
        this.classList.add('btn-clicked');
        speedBtn2.classList.remove('btn-clicked');
        speedBtn3.classList.remove('btn-clicked');
        speedBtn1.classList.remove('btn-clicked');
        speedBtn5.classList.remove('btn-clicked');
        offBtn.classList.remove('btn-clicked');
        onBtn.classList.remove('btn-clicked');
    };
    speedBtn5.onclick = function () {
       
        myCircle.classList.add('speed5-event');
        myCircle.classList.remove('speed1-event');
        myCircle.classList.remove('speed2-event');
        myCircle.classList.remove('speed3-event');
        myCircle.classList.remove('speed4-event');
        this.classList.add('btn-clicked');
        speedBtn2.classList.remove('btn-clicked');
        speedBtn3.classList.remove('btn-clicked');
        speedBtn4.classList.remove('btn-clicked');
        speedBtn1.classList.remove('btn-clicked');
        offBtn.classList.remove('btn-clicked');
        onBtn.classList.remove('btn-clicked');
    };