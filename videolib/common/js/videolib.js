// Onload
$(function() {
    // Get JSON object for videos collection
    $.getJSON("./common/json/videos.json", function(json) {

        // Convert object 'json' to arrays of arrKeys and arrEntries for parsing used in the Merthod JQ
        var arrKeys = Object.keys(json);
        var arrEntries = Object.entries(json);
        var jsonDate = json.DATE.date;
        //console.log(json); // {VIDEOS: {…},DATE: {…}}

        $("#updatedversion").text(jsonDate);

        //+ Method JQ each() approach looping thru 'arrEntries'
        $.each(Object.entries(arrEntries[0][1]), function(x, element) {
            //console.log(element); // VIDEOS

            topnav = 
                "<li class='videolist' data='" + Object.entries(arrEntries[0][1])[x][1][0].DATA + "'>" + Object.keys(arrEntries[0][1])[x] + "<br><img src='"+ Object.entries(arrEntries[0][1])[x][1][0].IMGSRC +"'></img></li>"
            //    
            $('#topnav').append(topnav); // MUST use append() method for this.

            collection = 
                "<div class='videos off' id='" + Object.keys(arrEntries[0][1])[x] + "'><div class='name'>" + Object.keys(arrEntries[0][1])[x] + "</div>" +
                "<div class='desc'>" + Object.entries(arrEntries[0][1])[x][1][0].DESC + "</div>" +
                "<a href='" + Object.entries(arrEntries[0][1])[x][1][0].VPLAYER + "' target='_blank'><img id='vscreen' src=" + Object.entries(arrEntries[0][1])[x][1][0].IMGSRC + " /></a>"
            //    
            $('#collection').append(collection); // MUST use append() method for this.

            // For nav#topnav .videolist
            var fnVideos = function(DataId){
                $(".videos").removeClass("on").addClass('off');
                $(DataId).removeClass("off").addClass("on");
            };
            
            //+ EDITABLE SECTION FOR COMPONENT LIST ADDITION
            $(".videolist").on("click mouseover mouseenter tap", function(){
                var D = $(this).attr("data");
                fnVideos(D);
            });
            //- EDITABLE SECTION FOR COMPONENT LIST ADDITIONS
        });
        //- Method JQ each() approach looping thru 'arrEntries'

        // Hash in URL
        if (location.hash != ""){
            fnVideos(location.hash);
        }
    });
});