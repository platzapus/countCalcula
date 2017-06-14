$(document).ready(function(){
  var entry = '0';
  var current = '0';
  var prev;
  var total ='0';
  var opCheck;
  var final;
  
  
  
  $('button').click(function(){
    prev = current;
    //console.log(total);
    current = $(this).attr('value');
    
    /*if(prev == '=' && (current == '/' || current == '+' || current == '-' || current == '*' )){
      $('#currentEntry').text('Invalid Operation');
      return;
    }*/
    if(!isNaN(current) && prev == '=' && current !== '10' && current !== '11'){
      entry = current;
      total = current;
      $('#currentEntry').text(entry);
      $('#totalEntry').text(total);
    }
    else if(!isNaN(current) && current !== '10'&& current !=='11' && (!isNaN(prev) || prev == '.')){
      
      if(entry.length == 1 && (entry ==='0') && entry.length==total.length){
        
       console.log('new');
        entry = $(this).attr('value');
        total = $(this).attr('value');
        $('#currentEntry').text(entry);
        $('#totalEntry').text(total);
        
      }
     else if(entry.length == 1 && prev ==='10' && entry ==='0'){
       console.log('new but old');
        entry = $(this).attr('value');
        total = total.concat(($(this).attr('value')));
        $('#currentEntry').text(entry);
        $('#totalEntry').text(total);
     }
     else{
       console.log('concat');
        entry = entry.concat($(this).attr('value'));
        $('#currentEntry').text(entry);
        total = total.concat($(this).attr('value'));
        $('#totalEntry').text(total);
       
      }
    }
    //CE
     else if(current === '10'){
    
       if(total.length === entry.length){
           entry = '0';
           $('#currentEntry').text(entry);
           total = '0';
           $('#totalEntry').text(total);
       }
       else if(prev == '='){
         entry = '0';
         total = '0';
         $('#currentEntry').text(entry);
         $('#totalEntry').text(total);
       }
       
       else{
         console.log('chop');
          total = total.substring(0,total.length-entry.length);
          $('#totalEntry').text(total);
          entry = '0';
          
          $('#currentEntry').text(entry);
          if(isNaN(total[total.length - 1])){
            opCheck = 1;
          }
       }
     }
    //AC
     else if(current === '11'){
       console.log('AC');
        entry = '0';
        $('#currentEntry').text(entry);
        total = '0';
        $('#totalEntry').text(total);
      }
    
    else if((prev == '/' || prev == '+' || prev == '-' || prev == '*' || opCheck == '1' || prev == '=') && current !== '='){
      if((current == '/' || current == '+' || current == '-' || current == '*') && prev !== '='){
        console.log('Invalid');
        $('#currentEntry').text('Invalid Operation');
        entry = '0';
        total = '0';
        opCheck = 0;
      }
      else{
        console.log('new section');
        entry = current;
        $('#currentEntry').text(entry);
        total = total.concat($(this).attr('value'));
        $('#totalEntry').text(total);
        opCheck = 0;
      }
    }
    else if(current =='.'){
      if(entry.indexOf('.') == -1){
        console.log('da period');
        entry = entry.concat($(this).attr('value'));
        $('#currentEntry').text(entry);
        total = total.concat($(this).attr('value'));
        $('#totalEntry').text(total);
      }
      else{
        console.log('Invalid Decimal Point');
        $('#currentEntry').text('Invalid Operation');
        entry = '0';
        total = '0';
      }
    }
    else if(current == '='){
     
      var ans = Math.round((eval(total) + 0.00001) * 1000) / 1000;
      console.log(ans);
      //console.log(eval(total));
      $('#currentEntry').html(Math.round((eval(total) + 0.00001) * 1000) / 1000);
      total = total.concat($(this).attr('value')).concat(eval(total));
      $('#totalEntry').html(total);
      total = ans.toString();
      console.log(total);
      
 
      current = '=';
      entry = 0;
      
      
      
    }
    else{
      
      console.log('wait what');
      entry = $(this).attr('value');
      total = total.concat($(this).attr('value'));
      $('#currentEntry').text(entry);
      $('#totalEntry').text(total);
      
    }
    
    
    //max digits = 29
  if(entry.length >=29){
    
    entry = 'Max Digits';
    total = 'Error';
    $('#currentEntry').text(entry);
    $('#totalEntry').text(total);
    entry = '0';
    total = '0';
  }
    
    
    })
  
  

  
  
  
  
  
  
  
  
  
});