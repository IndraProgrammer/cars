canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var car1_width=150;
var car1_height=75;
var car1_x_position=35;
var car1_y_position=20;
var car2_width=150;
var car2_height=75;
var car2_x_position=35;
var car2_y_position=40;
background_img="racing.jpg";
car1_img="car1.png";
car2_img="car1.png";
function add(){
     background_imgTag=new Image();
     background_imgTag.onload=uploadBackground;
     background_imgTag.src=background_img;
    car1_imgTag=new Image();
     car1_imgTag.onload=uploadrover;
     car1_imgTag.src=car1_img;
     car2_imgTag=new Image();
     car2_imgTag.onload=uploadrover;
     car2_imgTag.src=car1_img;
    }
    function uploadBackground(){
        ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
    }
    function uploadrover() {
    ctx.drawImage(car2_imgTag, car2_x_position, car2_y_position, car2_width, car2_height);

    window.addEventListener("keydown", my_keydown);
    function my_keydown(e) {
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if (keyPressed == "38") {
            up();
            console.log("up");
        }
        if (keyPressed == "40") {
            down();
            console.log("down");
        }
        if (keyPressed == "37") {
            left();
            console.log("left");
        }
        if (keyPressed == "39") {
            right();
            console.log("right");
        }
    }
}
function up(){
if (car1_y_position>0){
    car1y_position=car1_y_position-10;
    console.log("up x" +car1_x_position+"y  "+car1_y_position );
    uploadBackground();
    uploadrover();
}
}
function down(){
    if (car1_y_position<=500){
        car1y_position=car1_y_position+10;
        console.log("down x" +car1_x_position+"y  "+car1_y_position );
        uploadBackground();
        uploadrover();
    }
    }
    function right(){
        if (car1_x_position<=700){
            car1x_position=car1_x_position+10;
            console.log("right x" +car1_x_position+"y  "+car1_y_position );
            uploadBackground();
            uploadrover();
        }
        }
        function left(){
            if (car1_x_position>0){
                car1x_position=car1_x_position-10;
                console.log("left x" +car1_x_position+"y  "+car1_y_position );
                uploadBackground();
                uploadrover();
            }
            }