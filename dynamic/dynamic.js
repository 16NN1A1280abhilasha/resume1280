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
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
      }
  };
  xhr.send(null);
}

getfile("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data. skills);

})

var rightchild=document.querySelector(".rightchild")
function career(c){
  var chead=document.createElement("h2");
  chead.textContent="CARRIER OBJECTIVE";
  rightchild.appendChild(chead);

  var chr=document.createElement("hr")
  rightchild.appendChild(chr);

  var cp=document.createElement("p")
  cp.textContent=c.info;
  rightchild.appendChild(cp);

}
function education(edu){
  var ehead=document.createElement("h2")
  ehead.textContent="EDUCATION DETAILS";
  rightchild.appendChild(ehead);

  var ehr=document.createElement("hr")
  rightchild.appendChild(ehr);

  let etable=document.createElement("table");
  etable.border="1";

  var tr1="<tr><td>sno</td><td>institutename</td><td>percentage/GPA</td><td>yearofpassing</td></tr>";
  var tr2="";
  for(i=0;i<edu.length;i++){
    tr2=tr2+"<tr><td>"+edu[i].sno+"</td><td>"+edu[i].institutename+"</td><td>"+edu[i].percentage+"</td><td>"+edu[i].yearofpassing+"</td></tr>";

  }
  etable.innerHTML=tr1+tr2;
  rightchild.appendChild(etable);

}
function  skills(skills){
  var shead=document.createElement("h2")
  shead.textContent="Technical skills";
  rightchild.appendChild(shead);

  var shr=document.createElement("hr");
  rightchild.appendChild(shr);

  var ul=document.createElement("ul");
  rightchild.appendChild(ul);
  for(i=0;i<skills.length;i++){
    var li=document.createElement("li");
    li.textContent=skills[i].title+":"+skills[i].content;
    ul.appendChild(li);
  }
}
