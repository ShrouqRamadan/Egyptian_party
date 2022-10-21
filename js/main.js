
$('.btn-danger').click(function(){



    if ($('#inputName').val()==""){
        $('#nameVal').removeClass('d-none')

    }


   else if(validation()==true){
        $('#emailVal').removeClass('d-none')
    }
    else{
        $('.alert-success').removeClass('d-none')
        clear()
    }

})


function clear(){
    $('#inputName').value= "";
    $('#inputName').value= "";
}



function typing(){
    let enterMessage = document.getElementById('enterMessage').value.length;
    if( enterMessage >=100){
        $('.char').text('your available character finished ');
    }
    else{
        let count = 100 - enterMessage ;
        $('.char').text(count);
    }
}

function validation(){
    let regex=/@gmail\.com$/
    let inputEmail = $('#inputEmail').val();
    if(regex.test(inputEmail)!= true){
      return true;
    }

}



// events
let input= document.getElementById("inputDate");
let test =[]
if(JSON.parse(localStorage.getItem('date'))!= null){
    let value = JSON.parse(localStorage.getItem('date'));
   let localValue= document.getElementById('inputDate').value=value;
timerDate(value)
}


$('.go').click(function(){
    timerDate(input.value)
})

function timerDate(time){
    let countDown =new Date(`${time}`).getTime();

    let timer=setInterval(function () {

        let dateNow =new Date().getTime();
       let dateDiff=countDown-dateNow;


       let days =Math.floor(dateDiff / (1000 * 60 * 60 * 24));
       let hours =Math.floor((dateDiff % (1000*60*60*24)) / (1000*60*60));
       let minutes =Math.floor((dateDiff %(1000*60*60)) /(1000*60));
       let seconds =Math.floor((dateDiff %(1000*60)) /1000);

    document.getElementById('days').innerHTML=days +' D'
    document.getElementById('hours').innerHTML=hours +' H'
    document.getElementById('minutes').innerHTML=minutes +' M'
    document.getElementById('seconds').innerHTML=seconds + ' S'

   test = localStorage.setItem('date', JSON.stringify(input.value));


    }, 1000);


}



$("#headerOne").click(function(){
    $("#parg1").slideToggle(1000);
    $("#parg2").slideUp(1000);
    $("#parg3").slideUp(1000);
    $("#parg4").slideUp(1000);

})


$("#headerTwo").click(function(){
    $("#parg2").slideToggle(1000);
    $("#parg1").slideUp(1000);
    $("#parg3").slideUp(1000);
    $("#parg4").slideUp(1000);

})
$("#headerThree").click(function(){
    $("#parg3").slideToggle(1000);
    $("#parg1").slideUp(1000);
    $("#parg2").slideUp(1000);
    $("#parg4").slideUp(1000);

})
$("#headerFour").click(function(){
    $("#parg4").slideToggle(1000);
    $("#parg1").slideUp(1000);
    $("#parg2").slideUp(1000);
    $("#parg3").slideUp(1000);

})




$('#open').click(function(){
    $('.aside-bar').animate({left :  '0'})
})



$('#close').click(function(){
    $('.aside-bar').addClass('d-none')
})
