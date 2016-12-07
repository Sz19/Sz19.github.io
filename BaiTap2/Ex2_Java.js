function Request(id_click){
    div_click = document.getElementById(id_click);
    var other1;
    var other2;
    var img_other1;
    var img_other2;
    switch(div_click.id){
        case 'houseBunny':
            div_click = document.getElementById('houseBunny');
            other1 = document.getElementById('eagleEye');
            other2 = document.getElementById('journey');
            break;
        case 'eagleEye':
            div_click = document.getElementById('eagleEye');
            other1 = document.getElementById('houseBunny');
            other2 = document.getElementById('journey');
            break;
        case 'journey':
            div_click = document.getElementById('journey');
            other1 = document.getElementById('houseBunny');
            other2 = document.getElementById('eagleEye');
            break;
    }

    img_click = "img_" + div_click.id;
    img_other1 = "img_" + other1.id;
    img_other2 = "img_" + other2.id;

    if (div_click.className == 'film_info_hidden'){ 
 
        div_click.className = 'film_info_show';
        document.getElementById(img_click).src = 'Image/ToBottom.png';
        other1.className = 'film_info_hidden';
        document.getElementById(img_other1).src = 'Image/ToRight.png';
        other2.className = 'film_info_hidden';
        document.getElementById(img_other2).src = 'Image/ToRight.png';
    }
}



var img_id;

function get_img_id(value){
    img_id = document.getElementById(value).id;
}

function Vote1(score){
    document.getElementById("vote_eagle_eyes").src = "Image/" + score + ".png"; 
}
function Vote2(score){
    document.getElementById("vote_house").src = "Image/" + score + ".png"; 
}