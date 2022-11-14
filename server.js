var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

//Http Handlers
var onDefault=function(req, res){
    res.send("<h1>Service Contoso</h1>"+
             "<h1>Service Company</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Head Quarter - London</li>"+
                    " <li>Company has 9000 employees all over world</li>"+
                    " <li>7 offshare development centers</li>"+
                    
             "</ol>");
};

var onAboutUs=function(req, res){
    res.send("<h1>Chief Mentor :Ravi Tambade</h1>");
};

app.get("/",onDefault); 
app.get("/aboutus",onAboutUs);
var server=app.listen(9000);
console.log("Server is running on port 9000");
