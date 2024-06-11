// image_window = window.open("", "image_window", "width=200, height=100");

var previ = 0;
var current_category = '';

function gallery_loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      xmlDoc = this.responseXML;
      make_gallery();
      // gallery_refresh(0);
    }
  };
  xmlhttp.open("GET", "xml/gallery.xml", true);
  xmlhttp.send();
}

function make_gallery() {

    var txt = "";
    x = xmlDoc.getElementsByTagName("filename");

    for (i = 0; i< x.length; i++) {
        console.log(x);
        img = x[i].childNodes[0].nodeValue;
        txt += '<img id = "'+i+'" class="thumb" src="images/gallery/thumb/'+img+'" onclick="refresh_image('+ i + ');">';
        
    }
    console.log(txt);
    document.getElementById("gallery").innerHTML += txt;

  }



function refresh_image(i) {

    console.log(i);

    // Get filename
    filename = xmlDoc.getElementsByTagName('filename')[i].childNodes[0].nodeValue

    // Set main image
    $('#image_image').attr('src', 'images/gallery/main/'+filename);

    // Set title
    title = xmlDoc.getElementsByTagName('title')[i].childNodes[0].nodeValue;
    $('#image_title').text(title);

    // Set title
    object = xmlDoc.getElementsByTagName('object')[i].childNodes[0].nodeValue;
    $('#image_object').text('>'+object);

    // Set credit
    credit = xmlDoc.getElementsByTagName('credit')[i].childNodes[0].nodeValue;
    $('#image_credit').html('<b>Credit:</b>'+credit);

    // Get description and format
    description = xmlDoc.getElementsByTagName('description')[i].childNodes[0].nodeValue;
    description = description.replace(/(?:\r\n|\r|\n)/g, '<br>');

    // Set description
    $('#image_description').html(description);

    // Show image + description
    $("#overlay").show();
    $("#image_container").show();

}

function hide_image() {
    $("#overlay").hide();
    $("#image_container").hide();
}

