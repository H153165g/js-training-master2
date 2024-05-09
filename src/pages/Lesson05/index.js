import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart05";
import instruction from "./instruction.md";

const convertData = (input) => {

  let array=input.sort((item1,item2)=>item1.y-item2.y)

  for(let i=0;i<array.length;i++){
    array[i].y=Math.round(array[i].y)
  }

  const a=array[array.length-1].y-array[0].y
  const answer=Array.from({length:a})
  
  console.log(array)

  let con=0

  for(let i=array[0].y;i<=array[array.length-1].y;i++){
    let man=0
    let woman=0

    
    while(i===array[con].y){

      
    console.log(con)


        if(array[con].gender==="男性"){
          man++
        } else {
          woman++
        }

      if(con!==array.length-1){
        con++
      } else {
        break;
      }
    }
    

    answer[i-array[0].y]={
      bin:String(i),
      男性:man,
      女性:woman
    }

    console.log(answer[i-array[0].y])
    
  }
  console.log(answer[1])
  return answer;
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer05"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 05"
      Chart={Chart}
    />
  );
};

export default Lesson;
