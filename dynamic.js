// function loadJSON(file){
//   return new promise((resolve,reject)=>{
//     return fetch(file).then(response)=>{
//       if(response.ok){
//         resolve(responce.json());
//       }
//       else{
//         reject(new Error('error'));
//       }
//     })
//   })
// }
// var fetchData=loadJSON("dynamic.json")
// fetchedData.then(data=>{
// console.log(data);
// })
// var child2=document.querySelector("#child2");
// //career
// function careeer(car){
//   var h2=document.createElement("h1");
//   h2.textContent="career objective";
//   child2.appendChild(h2);
//
//   var heading=document.createElement("hr");
//     child2.appendChild(heading);
//
// var p=document.createElement("p");
// p.textContent=car.info;
//   child2.appendChild(p);
// }




function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadyStatechange=function(){
    if(xhr.readyState==4 && xhr.status=="200"){
      callback(xhr.responseText);
      }
  };
  xhr.send(null);
}

getfile("dynamic.json",function(text){
  Let data=Json.parse(text);
  console.log(data);

})

var child2=document.querySelector("#child2")
function carrier(c){
  var chead=document.createElement("h2");
  chead.textContent="CARRIER OBJECTIVE";
  child2.appendChild(chead);

  var chr=document.createElement("hr")
  child2.appendChild(chr);

  var cp=document.createElement("p")
  cp.textContent=c.info;
  child2.appendChild(cp);

}
function education(edu){
  var ehead=document.createElement("h2")
  ehead.textContent="EDUCATION DETAILS";
  child2.appendChild(ehead);

  var ehr=do
}
