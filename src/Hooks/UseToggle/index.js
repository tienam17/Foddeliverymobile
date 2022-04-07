import {useState} from 'react';

const useToggle = (initState) => {
  const [isShow, setIsShow] = useState(initState || false);
  const toggleShow = () => {
    setIsShow(!isShow);
  };
  return [isShow, toggleShow];
};

export default useToggle;
