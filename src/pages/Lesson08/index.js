import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart08";
import instruction from "./instruction.md";

const convertData = (input) => {

  const tags=[]
  input.map((_,i)=>{
    for(let j=0;j<input[i].tags.length;j++){
      tags.push(input[i].tags[j])
    }
  })
  const tag=Array.from(new Set(tags))

  const count=Array.from({length: tag.length})
  count.map((_,i)=>{
    count[i]=Array.from({length:tag.length})
  })
  for(let i=0;i<input.length;i++){
    for(let m=0;m<input[i].tags.length-1;m++){
      const a=tag.indexOf(input[i].tags[m])
      for(let n=m+1;n<input[i].tags.length;n++){
        const b=tag.indexOf(input[i].tags[n])
        if(count[a][b]==="t" || count[b][a]==="t" || count[a][b]==="h" || count[b][a]==="h"){
          count[a][b]="h"
          count[b][a]="h"
        } else {
          count[a][b]="t"
          count[b][a]="t"
        }
      }
    }
  }
  
  
  const node=tag.map((t) => ({id: t}))
  node.sort()

  
  const link=[]
  const n = [];
  for(let i=0;i<tag.length;i++){
    for(let j=i+1;j<tag.length;j++){
      if(count[i][j]==="h"){
        const item={source:tag[i],target:tag[j]}
        n.push(tag[i])
        n.push(tag[j])
        link.push(item)
      }
    }
  }
  const ns = [...new Set(n)]
  const nodes = ns.map((t) => ({id: t}))
    return { nodes: nodes, links: link }; // ここを作りましょう！
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer08"
      convertData={convertData}
      dataUrl="data/qiita-articles.json"
      instruction={instruction}
      title="Lesson 08"
      Chart={Chart}
    />
  );
};

export default Lesson;
