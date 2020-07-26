//create a function that searches for the form/information to be provided
$(function() {
    $('#js-shopping-list-form').submit(function(event) {
   
        //the following code stops the entry from trying to go to a server but rather holds the information entered
        event.preventDefault(); 

        //create a variable to store the item entered in the form
        
           const addItem = $('#shopping-list-entry').val();     
        
        //add the incoming entry as an li to the ul in the HTML form
        $('.shopping-list').append(`<li><span class="shopping-item">${addItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);

        //code that strikes through the checked off items.
        $('.shopping-item-toggle').click(function(event) {
          $(this).closest("li").toggleClass('shopping-item__checked');
        });
  
      //code that deletes an entry
      $('.shopping-item-delete').click(function(event) {
        $(this).closest("li").remove();
      });
      });
})
