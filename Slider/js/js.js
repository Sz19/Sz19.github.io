var text_div_index = "";
$(function() {
	$("img#image_to_show").attr("src", "images/1.jpg");
	CreateButton();
	$("#img" + current_img).addClass("this_pic");
	$("#next").click(function()
	{
		if (current_img < 25)
			current_img ++;
		GoToIndexImg(current_img);
	});
	$("#previous").click(function()
	{
		if (current_img > 1)
			current_img --;
		GoToIndexImg(current_img);
	});

});
function CreateButton()
{
	for(i = 1; i <= 25; i++)
	{
		text_div_index += "<img id = 'img" + i + "' src = 'images/" + i + ".jpg' class = 'button_in_div_index' onClick = 'GoToIndexImg("+ i +")'/>";
	}
    $("div#div_index").html(text_div_index);
}
var current_img = 1;
function GoToIndexImg(i)
{	
	current_img = i;
	$("img#image_to_show").attr("src", "images/"+ i + ".jpg");
	for(j = 1; j <= 25; j++)
	{
		if (j == i)
			$("#img" + j).addClass("this_pic");
		else
			$("#img" + j).removeClass("this_pic");
	}
} 