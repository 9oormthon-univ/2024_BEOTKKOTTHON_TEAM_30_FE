import {createContext, useState} from 'react';

export const KeywordsContext = createContext({
  keywords: [],
  calledCnt: {},
  addKeyword: keyword => {},
  removeKeyword: id => {},
});

export function KeywordsContextProvider({children}) {
  const [keywords, setKeywords] = useState([]);
  const [calledCnt, setCalledCnt] = useState({'가족': 0, '직장': 0, '친구': 0, '연인': 0, '긴급': 0})

  function addKeyword(keyword) {
    
    setCalledCnt(prev => {
      const cnt = prev[keyword.type];
      return {...prev, [keyword.type]:cnt}
    })
    
    setKeywords(prev => [...prev, keyword]);
  }

  function removeKeyword(id) {
    const idx = keywords.findIndex(obg => obg.id === id);
    const updatedKeywords = [...keywords];
    updatedKeywords.splice(idx, 1);

    setKeywords(updatedKeywords);
  }

  const keywordsContext = {keywords: keywords, addKeyword, removeKeyword};

  return (
    <KeywordsContext.Provider value={keywordsContext}>
      {children}
    </KeywordsContext.Provider>
  );
}

