import {useContext, useState} from 'react';
import Header from '../components/defaults/Header';
import LoginMain from '../components/loginPage/LoginMain';
import ProgressButton from '../components/defaults/ProgressButton';
import {UserLocContext} from '../contexts/userloc';
import nameValidator from '../functions/nameValidator';

export default function LoginPage() {
  const [isNameOk, setIsNameOk] = useState(false);

  const {setUser} = useContext(UserLocContext);

  function userNameHandler(name) {
    const validationResult = nameValidator(name);
    setIsNameOk(validationResult);

    if (validationResult) {
      setUser(name);
    }
  }

  return (
    <>
      <Header />
      <LoginMain setName={userNameHandler} isNameOk={isNameOk} />
    </>
  );
}
