

$(document).ready(function(){
    
    //Individual searches
    
     $("#search").on('click', function(){
        var query = $("#query").val();
        var link = "https://info2180-lab6-nickcaine.c9users.io/request.php?q="+query;
        
        $.ajax(link, {
            method: 'GET',
        }).done(function(res){
             $("#result").html(res);
        }).fail(function(err){
            $("#result").html(err);
        });
     });
     
     
         //search all button
     $("#searchall").on('click', function(){
         var link = "https://info2180-lab6-nickcaine.c9users.io/request.php?q=&all=true";
         
         $.ajax(link, {
            method: 'GET',
            dataType: "xml",
        }).done(function(res){
            var defs = $(res).find('definition');
            
            $("#result").html(""); //clear if previous result given
            $("#result").append('<ol></ol>');
            
            $(defs).each(function(){
                var ret = '<h3>'+$(this).attr('name')+'</h3>';
                ret += '<p>'+$(this).text()+'</p>';
                ret += '<p> -'+$(this).attr('author')+'</p>';
                $("#result ol").append('<li>'+ret+'</li>');
            });
        }).fail(function(err){
            $("#result").html(err);
        });
     });
 }); 