export function checkCalled(result, list) {
  const word = result.split(' ');
//   console.log(word);

  for (const recognizedWord of word) {
    for (const keywordObj of list) {
      if (
        keywordObj.hasOwnProperty('keywordText') &&
        recognizedWord === keywordObj.keywordText
      ) {
        console.log(recognizej.keywordText);
        return keywordObj;
      }
    }
  }
  return [false, word];
}
