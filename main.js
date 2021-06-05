console.log("Hello");

var textInput = doc.querySelector("#textInput");
var catList = doc.querySelector("#categoriesList");
var categories =[];

textInput.addEventListener('keyup', function(event){
    if(event.keycode==188){
       if (this.value.length<2){
            console.log("Category is required");
             this.value="";
}
       else{
            var categoy=this.value.substring(0, this.value.length-1};
            console.log(category);
            categories.push(category);
            this.value="";
            reload categories();}}})

function reloadCategories(){
   catlist.file ="";
   for (var i=0; i<categories.length; i++){
       catlist.file += `<li>{categories[i]}</li>`;
}
}