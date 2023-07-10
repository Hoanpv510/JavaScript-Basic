"use strict";
/*
let loadDoc =()=> {
    let http = new XMLHttpRequest();
    http.onload = ()=> {
        document.querySelector("#demo").innerHTML = this.responseText;
    }
    http.open("GET", "ajax_info.txt");
    http.send();
    
}
*/
// onload 
/*
let loadDoc = () => {
    let http = new XMLHttpRequest();
    http.onload = () => {
        document.querySelector("#demo").innerHTML = this.respoonseText;
    }
    http.open("GET","text.txt");
    http.send();
}
*/

//callback 
/*
loadDoc("url-1",fn_1);
loadDoc("url-2",fn_2);
let loadDoc = (url,fn_add)=>  {
const http = new XMLHttpRequest();
http.onload =()=> {
    fn_add(this);
}
http.open("GET",url);
http.send();
}
let fn_1 = (https)=> {

}
let fn_2 = (https)=> {

}
*/
let loadDoc= () => {
    const http= new XMLHttpRequest();
    http.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector("#demo").innerHTML = this.responseText;
        }
    }
    http.open("GET","text.txt");
    http.send();
}
