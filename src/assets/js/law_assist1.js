$(document).ready(function () {
    
    $('#trans_data').css({opacity: '0'});
    document.getElementById("trans_data").style.transition = "all 1s";
    $('input[name="notary"]').click(function(){
        $('#trans_data').css({opacity: '1'});
        var checked = $('input[name="notary"]:checked').val();
        customCheck = document.getElementsByName("notary")[checked];
        const data   = JSON.parse(customCheck.parentElement.dataset.value);
     
        document.getElementById('tele_number').innerHTML = data[0];
        document.getElementById('is_citizen').innerHTML = data[1];
        document.getElementById('gender').innerHTML = data[2];
        document.getElementById('age').innerHTML = data[3];
        document.getElementById('stages').innerHTML = data[4];
        document.getElementById('orientation_type').innerHTML = data[5];
        document.getElementById('orientation').innerHTML = data[6];


    });
});