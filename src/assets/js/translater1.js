$(document).ready(function () {
   
    $('#trans_data').css({opacity: '0'});
    $('.chart-row').css({opacity:'0'});

    document.getElementById("trans_data").style.transition = "all 1s";
    $('input[name="notary"]').click(function(){
        
        $('#trans_data').css({opacity: '1'});
        $('.chart-row').css({opacity:'1'});

        var checked = $('input[name="notary"]:checked').val();
        customCheck = document.getElementsByName("notary")[checked];
        const data   = JSON.parse(customCheck.parentElement.dataset.value);
     
        document.getElementById('receive_date').innerHTML = data[0];
        document.getElementById('recepion_date').innerHTML = data[1];
        document.getElementById('subject').innerHTML = data[2];
        document.getElementById('language').innerHTML = data[3];
        document.getElementById('requesting').innerHTML = data[4];
        document.getElementById('pages').innerHTML = data[5];
        document.getElementById('code').innerHTML = data[6];
        document.getElementById('type').innerHTML = data[7];
        document.getElementById('country').innerHTML = data[8];

    });
});