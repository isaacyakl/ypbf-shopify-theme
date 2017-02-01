function tagExists(theProduct, theTag)/*check if a product has a tag*/
      {
        /*console.log("Searching for "+theTag+"...");*/
        for(i = 0 ; i < theProduct.tags.length ; i++)
        {
          if(theTag == theProduct.tags[i])
          {
            /*console.log("Found.");*/
            return true;
          }
        }
        /*console.log("Not Found.");*/
        return false;
      }
      
      function updateInv(product)/*inventory display updater*/
      {
          console.log('updating stock...');
          			
          var varID = $.urlParam('variant');/*grab variant value from url*//*console.log('Var ID: ' +varID);*/
          var varNum = 0;/*variable for location of selected variant in array*/
        
          if(tagExists(product, "Archive"))/*if archived*/
          {
              /*no need to display stock*/
              /*console.log('Archived. Stock not being displayed.');*/
	          $('.prodship').remove();/*remove inventory info*/
              return;
          }
        
          if(varID !== null)/*if variant is chosen*/
		  {
              /*console.log('Variant Chosen');*/
              for(i = 0 ; i < product.variants.length ; i++)/*search for variant in variant array*/
              {
              		if(product.variants[i].id == varID)/*if variant is found*/
                    {
                      	varNum = i;/*record variant location in variant array*/
                      	/*console.log("Variant Number: "+varNum);*/
                      	break;/*exit loop*/
                    }
              }
          }
          else/*no variant is chosen*/
          {
              /*console.log('Variant NOT Chosen');*/
          }
        
          if(product.available)/*if the product is available for purchase*/
          {
              /*console.log(product.variants[varNum]);
              console.log('Inv Quan: '+product.variants[varNum].inventory_quantity);*/

              /*inventory*/
              if(product.variants[varNum].inventory_quantity < 11 && product.variants[varNum].inventory_quantity > 1)/*if the inventory is between 1 and 11*/
              {
                /*console.log('Stock: 1 < x < 11');*/
                $('.prodinv').removeClass("red").addClass("green");
                $('.prodinv').html(product.variants[varNum].inventory_quantity + ' in stock.');/*display inventory*/
              }
              else if(product.variants[varNum].inventory_quantity == 1)/*if there is one left*/
              {
                /*console.log('Stock: 1');*/
                $('.prodinv').removeClass("red").addClass("green");
                $('.prodinv').html('Only 1 in stock.');/*display inventory*/
              }
              else if(product.variants[varNum].inventory_quantity <= 0 && (tagExists(product, "Pre-Order") || tagExists(product, "Back Order") || tagExists(product, "Custom Order")))/*if there is no stock and it is special order*/
              {
                /*console.log('Stock: <= 0 & Special Order');*/
                $('.prodinv').removeClass("red").addClass("green");
                $('.prodinv').html('Available to order.');/*display inventory*/
              }
              else/*10 or more are available or overselling is allowed*/
              {
                /*console.log('Stock: 10+ or Overselling');*/
                $('.prodinv').removeClass("red").addClass("green");
                $('.prodinv').html('In stock.');/*display that it is in stock*/
              }
            
              /*lets update that variant sku*/
              $('#variant-sku').html(product.variants[varNum].sku);
            
              var dateInfo = false;/*track whether there is date info or not*/
              
              /*time to update that handling time*/
              if(tagExists(product, "Pre-Order") && product.variants[varNum].inventory_policy == "continue")/*check if the product is pre-order and is allowed to oversell*/
              {/*if it is it must be in pre-order mode*/
                for(i = 0 ; i < product.tags.length ; i++)/*search the tags*/
                {
                  if(product.tags[i].indexOf("Releases ") != -1)/*if we have found the release info*/
                  {
                    var tagtemp = product.tags[i];
                    tagtemp=tagtemp.replace("Releases ","")/*remove the "Release" keyword from the tag*/
                    $('.prodhand').html('Releases: ' + tagtemp);/*update the release info on the page*/
                    dateInfo = true;/*release info was found*/
                    break;
                  }
                }
                if(dateInfo == false)/*if no release date was found*/
                {
                  $('.prodhand').html('Releases: Call For More Info');/*let the customer know they should call for more info about release times*/
                }
              }
              else if(tagExists(product, "Back Order") && product.variants[varNum].inventory_policy == "continue")/*check if the product is a back order item and it is allowed to oversell*/
              {
                for(i = 0 ; i < product.tags.length ; i++)/*search the tags*/
                {
                  if(product.tags[i].indexOf("Back In Stock ") != -1)/*if we have found the back order info*/
                  {
                    var tagtemp = product.tags[i];
                    tagtemp=tagtemp.replace("Back In Stock ","")/* remove "Back In Stock" keyword from the tag*/
                    $('.prodhand').html('Back In Stock: ' + tagtemp);/*update the back in stock info on the page*/
                    dateInfo = true;/*back in stock info was found*/
                    break;
                  }
                }
                if(dateInfo == false)/*if back in stocck info was not found*/
                {
                  $('.prodhand').html('Back In Stock: Call For More Info');/*let the customer know they should call for more info about back in stock date*/
                }
              }
              else if(tagExists(product, "Used Guns") && product.variants[varNum].inventory_quantity >= 1 || product.variants[varNum].inventory_quantity >= 1)/*if the product is in stock and is a used gun or it is just in stock*/
              {
                $('.prodhand').html('Estimated handling time: 1-2 business days.');/*show 1-2 day handling*/
              }
              else if(tagExists(product, "Call For"))/*if the item is tagged "Call For"*/
              {
                $('.prodhand').html('Call for shipping & handling time.');/*let customer know they need to call for shipping & handling time*/
              }
              else if(product.variants[varNum].inventory_quantity <= 0 && product.variants[varNum].inventory_policy == "continue")/*if a product is out of stock and overselling is allowed*/
              {
                var found = false;/*variable for  keeping track of whether or not a handling time was found*/
                for(i = 0 ; i < product.tags.length ; i++)/*search tags*/
                {
                  if(product.tags[i].indexOf("Hours ") != -1 || product.tags[i].indexOf("Days ") != -1 || product.tags[i].indexOf("Weeks ") != -1 || product.tags[i].indexOf("Months ") != -1 || product.tags[i].indexOf("Years ") != -1)/*if handling time info is found*/
                  {
                    $('.prodhand').html('Estimated handling time: ' + product.tags[i]);/*let customer know handling times*/
                    found = true;/*take note that a handling time was fonud*/
                    break;
                  }
                }
                if(found == false)/*if a handling time was not found*/
                {
                  $('.prodhand').html('Estimated handling time: 3-4 business days.');/*display default handling time*/
                }
              }
              else/*somehow we got here and no handling info applied*/
              {
                $('.prodship').remove();/*remove inventory info*/
              }
          }
          else/*product not available*/
          {
            $('.prodship').remove();/*remove inventory info*/
          }
          /*console.log('===========================================================================');*/
      }
	  jQuery.getJSON('/products/'+prodHand+'.js', function(product){updateInv(product)});/*update inventory*/