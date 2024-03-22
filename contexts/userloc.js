import {createContext, useState} from 'react';

export const UserLocContext = createContext({
  userLoc: '',
  userName: '',
  moveLoc: target => {},
  setUser: name => {},
});

export function UserLocContextProvider({children}) {
  const [userLoc, setUserLoc] = useState('splash');
  const [userName, setUserName] = useState('');

  function moveLoc(target) {
    setUserLoc(target);
  }

  function setUser(name) {
    setUserName(name);
  }

  const userLocContext = {
    userLoc: userLoc,
    userName: userName,
    moveLoc,
    setUser,
  };

  return (
    <UserLocContext.Provider value={userLocContext}>
      {children}
    </UserLocContext.Provider>
  );
}
