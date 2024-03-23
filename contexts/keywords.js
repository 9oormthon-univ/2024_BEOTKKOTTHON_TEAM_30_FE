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
    {
      id: 1,
      keywordText: '조심',
      type: '긴급',
      danger: '조심'
    },
    {
      id: 2,
      keywordText: '조심하세요',
      type: '긴급',
      danger: '조심'
    },
    {
      id: 3,
      keywordText: '대피',
      type: '긴급',
      danger: '대피'
    },
    {
      id: 4,
      keywordText: '대피하세요',
      type: '긴급',
      danger: '대피'
    },
    {
      id: 5,
      keywordText: '위험',
      type: '긴급',
      danger: '위험'
    },
    {
      id: 6,
      keywordText: '위험해요',
      type: '긴급',
      danger: '위험'
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
    console.log(keyword)
    const updatedKeywords = [keyword, ...keywords ];
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
