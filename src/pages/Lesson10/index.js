import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart10";
import instruction from "./instruction.md";

const convertData = (input) => {
  const A=Array.from({length:input["nodes"].length})
  const link = []
  for(let i=0;i<input["links"].length;i++){
    for(let j=0;j<A.length;j++){
      if(input["links"][i]["source"]===input["nodes"][j]["id"]||input["links"][i]["target"]===input["nodes"][j]["id"]){
        if(A[j]==="t"){
          if(input["links"][i]["source"]==="福島"||input["links"][i]["target"]==="福島"){
            A[j]="b"
          } else {
            A[j]="r"
          }
          link.push({source:input["links"][i]["source"],target:input["links"][i]["target"]})
         
          } else {
            A[j]="t"
          }
        }
        
      }
    }
    const links=Array.from(new Set(link))
    
    
  
  const node=[]
  const fre=[]
  for(let i=0;i<A.length;i++){
    if(A[i]==="b"){
      
      node.push({color:"blue",id:input["nodes"][i]["id"],radius:input["nodes"][i]["frequency"],frequency:input["nodes"][i]["frequency"]})
      fre.push(input["nodes"][i]["frequency"])
    } else if(A[i]==="r"){
      
    
      node.push({color:"red",id:input["nodes"][i]["id"],radius:input["nodes"][i]["frequency"],frequency:input["nodes"][i]["frequency"]})
      fre.push(input["nodes"][i]["frequency"])
      
    }
  }
  console.log(fre)
  const keisan=Math.max(...fre)
  
  

  for(let i=0;i<node.length;i++){
  
    node[i]["radius"]=20*node[i]["radius"]/keisan
    
  }
  console.log(links)


  return { nodes: node, links: []}; // ここを作りましょう！
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer10"
      convertData={convertData}
      dataUrl="data/topic-graph.json"
      instruction={instruction}
      title="Lesson 10"
      Chart={Chart}
    />
  );
};

export default Lesson;
