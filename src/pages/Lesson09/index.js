import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart09";
import instruction from "./instruction.md";

const convertData = (input) => {
  const name = Array.from(new Set(input.map((item) => item.ministry))).map((ministry) => {
    const A = input.filter((item) => {
      return item.ministry === ministry
    })
    const name2 = Array.from(new Set(A.map((item) => item.bureau)))
    for (let i = 0; i < name2.length; i++) {
      const B = A.filter((item) => {
        return item.bureau === name2[i]
      })
      if (B.length / input.length < 0.01) {
        for(let j=0;j<A.length;j++){
          if(A[j].bureau===name2[i]){
            A[j].bureau="その他"
          }
        }
        name2[i] = "その他"
      } 
    }
    const ns2 = [...new Set(name2)]
    return {
      name: ministry,
      children: ns2.map((bureau) => {
        const B = A.filter((item) => {
          return item.bureau === bureau
        })
        const name3 = Array.from(new Set(B.map((item) => item.department)))
        for (let i = 0; i < name3.length; i++) {
          const C = B.filter((item) => {
            return item.department === name3[i]
          })
          if (C.length / input.length < 0.01) {
            for(let j=0;j<B.length;j++){
              if(B[j].department===name3[i]){
                B[j].department="その他"
              }
            }
            name3[i] = "その他"
          }
        }
        const ns3 = [...new Set(name3)]
        ns3.sort((item1, item2) => item2- item1)
        if(bureau==="その他"){
          return {
            name:bureau,
            count:B.length
          }
        }
        return {
          name: bureau,
          children: ns3.map((department) => {
            const C = B.filter((item) => {
              return item.department === department
            })
            return {
              name: department,
              count: C.length
            }
          })
        }
      }),
      
    }
  })

  console.log(name)
  return { children: name }; // ここを作りましょう！
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer09"
      convertData={convertData}
      dataUrl="data/judgit-departments.json"
      instruction={instruction}
      title="Lesson 09"
      Chart={Chart}
    />
  );
};


export default Lesson;
