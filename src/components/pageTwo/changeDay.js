import React, {useRef} from 'react';

function ChooseDay(){

    const chooseDay = useRef();

    function showChooseDay(){
        console.log(chooseDay.current.className);
        chooseDay.current.className = 'showChooseDay';
        console.log(chooseDay.current.className);

    }

    return(
        <div>
            {/* These will use absoulte positioning, similar method as the sign in page */}
            <div ref={chooseDay} className="hiddenChooseDay">
                <button onClick={showChooseDay}>Choose Day</button>
                {/* here will have a back button that will again hide the choose day */}
            </div>
        </div>
        
    )
}

export default ChooseDay;