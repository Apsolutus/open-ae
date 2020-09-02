// Toggle the position property into separate x and y [and Z] properties. 

{
    function separateDimensions() {

        var activeItem = app.project.activeItem;
        var selectedLayers = activeItem.selectedLayers;
        
        app.beginUndoGroup("separateDimensions");

        // Loop through selected layers  
        for (i = 0; i < selectedLayers.length; ++i) {  

            //$.writeln(selectedLayers[i].property("Position").dimensionsSeparated);
            
            // Check if position dimensions are separated
            if (selectedLayers[i].property("Position").dimensionsSeparated){

                // If they are, join them
                selectedLayers[i].property("Position").dimensionsSeparated = false;

            } else {

                // Otherwise separate the dimensions
                selectedLayers[i].property("Position").dimensionsSeparated = true;  

                // Deselect the properties so that they can be keyframed individually without manually deselecting them 
                selectedLayers[i].property("ADBE Transform Group").property("ADBE Position_0").selected = false;
                selectedLayers[i].property("ADBE Transform Group").property("ADBE Position_1").selected = false;

            }

        }
        

        app.endUndoGroup();

    }

    // Execute the script
    separateDimensions();  

}  