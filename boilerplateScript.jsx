// Description

{
    function template() {
        var activeItem = app.project.activeItem;
        var selectedLayers = activeItem.selectedLayers;
        
        app.beginUndoGroup("template");

        // Loop through selected layers  
        for (i = 0; i < selectedLayers.length; ++i) {

            // Loop through properties on the selected layer
            for (var p = 1; p <= selectedLayers[i].property("ADBE Effect Parade").numProperties; p++){

                try {
                    // Details
                    if (){

                        break;
                    }
                } catch(error) {


                }
            }


        }
    
        app.endUndoGroup();
    }

    // Execute the script
    template();  
}  