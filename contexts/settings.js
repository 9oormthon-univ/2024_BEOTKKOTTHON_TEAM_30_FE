import {createContext, useState} from 'react';

export const SettingsContext = createContext({
  settings: {
    alertIsEnabled: '',
    hapticIsEnabled: '',
    emerSituationIsEnabled: '',
    emerKeywordIsEnabled: '',
    dogIsEnabled: '',
  },

  changeSetting: targetSetting => {},
});

export function SettingsContextProvider({children}) {
  const [settings, setSettings] = useState({
    alertIsEnabled: true,
    hapticIsEnabled: true,
    dogIsEnabled: true,
    carIsEnabled: true, 
    sirenIsEnabled: true, 
    josimIsEnabled: true, 
    dangerIsEnabled: true, 
    fleeIsEnabled: true, 
  });

  function changeSetting(targetSetting) {
    // console.log(targetSetting);
    setSettings(prev => {
      const updatedValue = !prev[targetSetting];

      const updatedSettings = {...prev, [targetSetting]: updatedValue};
      // console.log(updatedSettings);
      return updatedSettings;
    });
  }
  

  const settingsContext = {settings: settings, changeSetting};

  return (
    <SettingsContext.Provider value={settingsContext}>
      {children}
    </SettingsContext.Provider>
  );
}
