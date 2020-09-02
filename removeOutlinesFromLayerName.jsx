// When after effects converts Illustrator layers to shape layers it adds the suffix "Outlines" to the layer name. 
// This script is a quick way to remove "Outlines" from the layer name to improve readability.

{
    function removeOutlinesFromLayerName() {
        var activeItem = app.project.activeItem;
        var selectedLayers = activeItem.selectedLayers;
        
        app.beginUndoGroup("removeOutlinesFromLayerName");

        // Loop through selected layers  
        for (i = 0; i < selectedLayers.length; ++i) {

            var oldName = selectedLayers[i].name;
            selectedLayers[i].name = oldName.replace(/\sOutlines$/, ""); // Finds text matching "Outlines" and removes it

            //$.writeln(selectedLayers[i].name);

        }
    
        app.endUndoGroup();
    }

    // Execute the script
    removeOutlinesFromLayerName();  
}  