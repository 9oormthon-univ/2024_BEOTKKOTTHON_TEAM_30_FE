import { useContext } from "react";
import { KeywordsContext } from "../contexts/keywords";

export function checkCalled(keywords, result) {
  
  let called = null; 
  const word = result[0].split(' ');
  // console.log(word);
  // console.log(keywords);
  
  for (const recognizedWord of word) {
    for (const keywordObj of keywords) {
      // console.log(recognizedWord)
      // console.log(keywordObj)
      if (
        keywordObj.hasOwnProperty('keywordText') &&
        recognizedWord === keywordObj.keywordText
      ) {
        called =  keywordObj;
      }
    }
  }
  
  
  return called; 
}
