$(function(){
    $('#start').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
		var avatar_url = $('#avatar_url').val();
        if (link==null || link=="",content==null || content=="")
        {
            alert("Please fill out all the fields");
            return false;
        }
        $.post(link, {"content": content, "username": username, "avatar_url": avatar_url});

    });
});
