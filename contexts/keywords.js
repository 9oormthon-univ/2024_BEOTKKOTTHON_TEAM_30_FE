import {createContext, useState} from 'react';

export const KeywordsContext = createContext({
  keywords: [],
  calledCnt: {},
  addKeyword: calledKeyword => {},
  removeKeyword: id => {},

  nowCalled: '',
  // calledList: [],
  call: keyword => {},
});

export function KeywordsContextProvider({children}) {
  const [keywords, setKeywords] = useState([]);
  const [nowCalled, setNowCalled] = useState('');
  const [calledCnt, setCalledCnt] = useState({
    가족: 0,
    직장: 0,
    친구: 0,
    연인: 0,
    긴급: 0,
  });

  function addKeyword(keyword) {
    // console.log(keywords)
    setKeywords(prev => [...prev, keyword]);
  }

  function call(calledKeyword) {
    // setCalledCnt(prev => {
    //   const cnt = prev[calledKeyword.type];
    //   return {...prev, [calledKeyword.type]: cnt};
    // });

    setNowCalled(calledKeyword);
  }

  function removeKeyword(id) {
    const idx = keywords.findIndex(obg => obg.id === id);
    const updatedKeywords = [...keywords];
    updatedKeywords.splice(idx, 1);

    setKeywords(updatedKeywords);
  }

  const keywordsContext = {
    keywords: keywords,
    nowCalled: nowCalled,
    addKeyword,
    removeKeyword,
    call,
  };

  return (
    <KeywordsContext.Provider value={keywordsContext}>
      {children}
    </KeywordsContext.Provider>
  );
}
