{
    function toggleColour() {
        var activeItem = app.project.activeItem;
        var selectedLayers = activeItem.selectedLayers;
        var hasFill = false;
        
        app.beginUndoGroup("insertExpressions");
          
        for (i = 0; i < selectedLayers.length; ++i) {
            for (var p = 1; i <= selectedLayers[i].property("Effects").numProperties; p++){
                try {
                    if (selectedLayers[i].property("Effects").property(p).matchName == "ADBE Fill"){
                        $.writeln("Fill exists");
                        selectedLayers[i].property("ADBE Effect Parade").property("ADBE Fill").remove()
                        break;
                    }
                } catch(error) {
                    selectedLayers[i].property("Effects").addProperty("ADBE Fill");
                    return
                }
            }


        }
    
        app.endUndoGroup();
    }

    toggleColour();  
}  