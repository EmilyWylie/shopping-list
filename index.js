//create a function that searches for the form/information to be provided
$(function() {
  $('#js-shopping-list-form').on("submit", function() {
 
      //the following code stops the entry from trying to go to a server but rather holds the information entered
      event.preventDefault(); 

      //create a variable to store the item entered in the form
      
         const addItem = $('#shopping-list-entry').val();  
         
         //clears the entry box after the item has been submitted
            $('#shopping-list-entry').val(' ');
      
      //add the incoming entry as an li to the ul in the HTML form
      $('.shopping-list').append(`<li><span class="shopping-item">${addItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
    
      

    });

      // click handler for 'check'
      $( ".shopping-list" ).on( "click", ".shopping-item-toggle", function() {
        $(this).closest("li").children('.shopping-item').toggleClass('shopping-item__checked');
      });

      // click handler for delete
      $( ".shopping-list" ).on( "click", ".shopping-item-delete", function() {
        $(this).closest("li").remove();
      });
  });
      
