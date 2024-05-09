import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart06";
import instruction from "./instruction.md";

const convertData = (input) => {
  const array=Array.from({length:input.length}).map((_,i)=>{
    const obj={}
    if(input[i].gender==="男性"){
      obj["color"]="blue"
    } else {
      obj["color"]="red"
    }
    obj["gender"]=input[i].gender
    obj["bmi"]=input[i].x/input[i].y/input[i].y*10000
    obj["weight"]=input[i].x
    obj["height"]=input[i].y

    console.log(obj)

    return obj;
    
  })
  return array; 
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer06"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 06"
      Chart={Chart}
    />
  );
};

export default Lesson;
