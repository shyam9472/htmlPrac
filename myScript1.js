
function naam(){
        var y = document.getElementsByTagName("p");
        document.getElementById("YahaKarenge").innerHTML = y[0].innerHTML  ;
        document.getElementsByTagName("p")[0].innerHTML = "Chaliye Ab dekhte hai."  ;
        console.log("Dekhe ye chala kya ....");
};

function buttonPress(){
        // console.log(getElementsByTagName(h3)[0]);
        // window.alert("Hi and welcome.");
        // console.log(prompt("Hi ye bhi chal gaya na????"));
};

function photoPress(){
        // document.getElementsByTagName("div").style.color = "#000000";
        // document.write(5+2+2);
        document.getElementsByClassName("iskoDekh")[0].style.color = "#008000";
        document.getElementsByClassName("iskoDekh")[0].innerHTML = "Ye change hua kya ?";
        document.getElementsByClassName("iskoDekh")[1].style.color = 	"#000000";
        document.getElementsByClassName("iskoDekh")[1].innerHTML = "Ye bhi change hua kya ?";
        console.log("Yaha pe bhi dekh chala ya nahi");

};

function submitIt(){
        var b = "";
        var y = document.getElementById("iskoUtha").value;
        if( y != ""){
                for(var i = 0 ; i < y.length ; i++ ){
                b = b + y[y.length-1-i];
                }
                document.getElementById("bhaiKaNaam").innerHTML = "ye sidha naam : " + y + " Ye ulta naam : " + b;
                document.getElementById("bhaiKaNaam").style.color = "#008000";
        } else {
                alert("Please enter some value first");
        }
}


var count = 1;
var iDiv ;      
function addIt(){
iDiv = document.createElement('div');
iDiv.id = 'block_'+(count);
iDiv.innerHTML = "<style> div{border : 2px solid red;}</style><h1> Block number : </h1> <input style='border-radius:5px;width:250px;' type = 'text'> <button onclick = 'removeIt()'>Remove this field</button> ";
// document.getElementsByTagName("h1").innerHTML = iDiv.id;
document.getElementById("parentContainer").appendChild(iDiv);
count++;
}



function removeIt(){
        id = "block_"+(count-1);
        // console.log(id);
        var rem = document.getElementById(id);
        // console.log(id);
        parentNode = document.getElementById("parentContainer");
        // console.log(id);
        rem.parentNode.removeChild(rem);
        count--;
}