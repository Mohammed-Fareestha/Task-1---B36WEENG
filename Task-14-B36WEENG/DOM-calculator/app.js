$(document).ready(function(){
    $('#1').click(function(){
      document.forms.result.value += 1;
    });
    $('#2').click(function(){
      document.forms.result.value += 2;
    });
    $('#3').click(function(){
      document.forms.result.value += 3;
    });
    $('#four').click(function(){
      document.forms.result.value += 4;
    });
    $('#five').click(function(){
      document.forms.result.value += 5;
    });
    $('#six').click(function(){
      document.forms.result.value += 6;
    });
    $('#seven').click(function(){
      document.forms.result.value += 7;
    });
    $('#eight').click(function(){
      document.forms.result.value += 8;
    });
    $('#nine').click(function(){
      document.forms.result.value += 9;
    });
    $('#zero').click(function(){
      document.forms.result.value += 0;
    });
    $('#add').click(function(){
      document.forms.result.value += '+';
    });
    $('#subtract').click(function(){
      document.forms.result.value += '-';
    });
    $('#multi').click(function(){
      document.forms.result.value += '*';
    });
    $('#divide').click(function(){
      document.forms.result.value += '/';
    });
    $('#dot').click(function(){
      document.forms.result.value += '.';
    });
    $('#equal').click(function(){
      if (result.value == "") {
        alert("Please enter any numbers to calculate!");
      }else{
        document.forms.result.value =
        eval(document.forms.result.value);
      }
    });
    $('#clear').click(function(){
      document.forms.result.value = "";
    });
  })