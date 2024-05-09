import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart02";
import instruction from "./instruction.md";

const convertData = (input) => {
  for(let i=0;i<input.length;i++){
    for(let j=i;input[j]!==input[-1];j++){
      if(input[i].count<input[j].count){
        let subdata=input[i]
        input[i]=input[j]
        input[j]=subdata
      }
    }

  }
  return input.slice(0,21)
};

const Lesson = () => {
  return (
    <LessonPage
      dataUrl="data/qiita-tags.json"
      answerUrl="/answer02"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 02"
      Chart={Chart}
    />
  );
};

export default Lesson;
