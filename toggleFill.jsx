// A handy little script for quickly adding a Fill effect to the selected layers. 
// It is handy for positioning items over other layers that have the same colour. 

{
    function toggleFill() {
        var activeItem = app.project.activeItem;
        var selectedLayers = activeItem.selectedLayers;
        
        app.beginUndoGroup("toggleFill");

        // Loop through selected layers  
        for (i = 0; i < selectedLayers.length; ++i) {

            // Loop through all properties on the selected layer
            for (var p = 1; p <= selectedLayers[i].property("ADBE Effect Parade").numProperties; p++){

                try {
                    // Check if the layer already has a Fill effect
                    if (selectedLayers[i].property("ADBE Effect Parade").property(p).matchName == "ADBE Fill"){

                        // $.writeln("Fill exists");

                        // If it has a Fill, then remove it
                        selectedLayers[i].property("ADBE Effect Parade").property("ADBE Fill").remove()
                        break;
                    }
                } catch(error) {

                    // Otherwise add a Fill effect to the layer
                    selectedLayers[i].property("ADBE Effect Parade").addProperty("ADBE Fill");
                    return
                }
            }


        }
    
        app.endUndoGroup();
    }

    // Execute the script
    toggleFill();  
}  