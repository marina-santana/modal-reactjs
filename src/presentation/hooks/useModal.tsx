import { useState } from "react";

const useModal = () => {
  let [isShowing, setIsShowing] = useState<Array<any>>([]);

  const handleModal = (action:string, alias: string) => {      
    if (action === 'close') {
        const newIsShowing =  isShowing.filter(
            modal => modal.alias !== alias
        );
        
        setIsShowing(newIsShowing);
    } else {
        setIsShowing([...isShowing, { action: 'open', alias }]);
    }
  };

  return {handleModal, isShowing };
};

export default useModal;