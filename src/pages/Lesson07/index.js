import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart07";
import instruction from "./instruction.md";

const convertData = (input) => {

  

  const data = Array.from({ length: input.length }).map((_, i) => {


    const date1 = input[i].createdAt.split(" ")

    const obj = {}
    const date2 = date1[1].split(":")
    const date3 = date1[0].split("-")
    if (date2[0] >= 15) {
      
      if (date3[2] === "31") {
        date3[1] = "02"
        date3[2] = "01"
      }
      date3[2] = parseInt(date3[2])+1 

    }

    obj["date"] = date3.join("-")
    obj["isRetweet"] = input[i]["isRetweet"]

    return obj
  })


  const array = Array.from({ length: 2 }).map((_, i) => {
    const obj = {}
    let data2 = {}


    if (i === 0) {
      obj["id"] = "tweet"
      data2 = data.filter((item) => item.isRetweet === true)
    } else {
      obj["id"] = "Retweet"
      data2 = data.filter((item) => item.isRetweet === false)
    }



    const A = Array.from(new Set(data.map(({ date }) => date)))


    for (let j = 0; j < A.length; j++) {
      for (let i = 0; i < A.length - 1; i++) {
        const A1 = A[i].split("-")
        const A2 = A[i + 1].split("-")
        const A3 = A[i + 1]
        if (A1[0] > A2[0]) {
          A[i + 1] = A[i]
          A[i] = A3
        } else if (A1[1] > A2[1]) {
          A[i + 1] = A[i]
          A[i] = A3
        } else if (A1[2] > A2[2]) {
          A[i + 1] = A[i]
          A[i] = A3
        }
      }

    }
    A.shift()
    A.pop()
    




    const B = Array.from({ length: A.length }).map((_, m) => {
      let count = 0
      for (let n = 0; n < data2.length; n++) {
        

        if (data2[n].date === A[m]) {
          count++
        }
      }



      return {
        x: A[m],
        y: count
      }

    })

    obj["data"] = B



    return obj
  })



  return array
}


const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer07"
      convertData={convertData}
      dataUrl="data/covid19-tweets.json"
      instruction={instruction}
      title="Lesson 07"
      Chart={Chart}
    />
  );
};

export default Lesson;
