import {createContext, useState} from 'react';

export const KeywordsContext = createContext({
  keywords: [],
  addKeyword: keyword => {},
  removeKeyword: id => {},
});

export function KeywordsContextProvider({children}) {
  const [keywords, setKeywords] = useState([]);

  function addKeyword(keyword) {
    console.log(keyword);
    console.log('hi')
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

