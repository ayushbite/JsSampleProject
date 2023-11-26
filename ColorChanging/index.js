// Get all elements with class 'square'
const squareboxes = document.querySelectorAll(".square");

// Get the parent div
const parentdiv = document.querySelector(".parent");



// Define the list of colors
let colorlist = ["orange","white","green"];

// Loop through each box in the NodeList
squareboxes.forEach(function (box,i){
   
    console.log(box);

    // Set the id of the current box to the corresponding color in the color list
    box.setAttribute("id",colorlist[i]);

    // initially all box color will be will the the color list
    box.style.backgroundColor = colorlist[i];

  
    box.addEventListener("click",function (event){
       
        switch (event.target.id) {
            case "orange":
                parentdiv.style.backgroundColor = event.target.id
            
               // making the current box visiblity hiddent
               box.style.visibility = "hidden";

               //making other box visibilty visible
               squareboxes.forEach(function (boxobj){
                    if(boxobj != box){
                        boxobj.style.visibility = "visible";
                        console.log(boxobj.id);
                    }
               })
                 break;
                 case "white":
                    parentdiv.style.backgroundColor = event.target.id
                  ;
                   // making the current box visiblity hiddent
                   box.style.visibility = "hidden";
    
                   //making other box visibilty visible
                   squareboxes.forEach(function (boxobj){
                        if(boxobj != box){
                            boxobj.style.visibility = "visible";
                        }
                   })
                     break;
                     case "green":
                        parentdiv.style.backgroundColor = event.target.id
                      
                       // making the current box visiblity hiddent
                       box.style.visibility = "hidden";
        
                       //making other box visibilty visible
                       squareboxes.forEach(function (boxobj){
                            if(boxobj != box){
                                boxobj.style.visibility = "visible";
                            }
                       })
                         break;
        
            default:
                parentdiv.style.backgroundColor = "white";
                break;
        }
    });
});
