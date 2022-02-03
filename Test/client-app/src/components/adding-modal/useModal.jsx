import { useState } from 'react';
import $ from 'jquery';

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
        console.log("is toggling")
    }

    return {
        isShowing,
        toggle,
    }
    
    
};

export default useModal;