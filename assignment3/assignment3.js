var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var request=JSON.parse(request.response);
    for(var i=0;i<XPathResult.length;i++){
        console.log("name: " +result[i].name+"Region:"+result[i].region+"Subregion "+result[i].subregion + "population:"+result[i].population);
    }
}