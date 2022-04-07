import {useState} from 'react';

const useShow = (initState) => {
  const [isShow, setIsShow] = useState(initState || false);
  const show = () => {
    setIsShow(true);
  };

  const hide = () => {
    setIsShow(false);
  };
  return [isShow, show, hide];
};

export default useShow;
