import {createContext, useState} from 'react';

export const KeywordsContext = createContext({
  keywords: [],
  calledCnt: {},
  addKeyword: calledKeyword => {},
  removeKeyword: id => {},

  nowCalled: '',
  call: keyword => {},
});

export function KeywordsContextProvider({children}) {
  const [keywords, setKeywords] = useState([
    {
      id: 0,
      keywordText: '민지야',
      type: '친구',
    },
  ]);
  const [nowCalled, setNowCalled] = useState('');
  const [calledCnt, setCalledCnt] = useState({
    가족: 0,
    직장: 0,
    친구: 0,
    연인: 0,
    긴급: 0,
  });

  function addKeyword(keyword) {
    const updatedKeywords = [...keywords, keyword];
    setKeywords(updatedKeywords);
  }

  function call(calledKeyword) {
    if (calledKeyword) {
      setCalledCnt(prev => {
        const cnt = prev[calledKeyword.type] + 1;
        const updated = {...prev, [calledKeyword.type]: cnt};
        return updated;
      });
    }
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
    calledCnt: calledCnt,
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
