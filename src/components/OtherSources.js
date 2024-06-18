import { useState, useEffect } from "react";

function OtherSources(
    // props
    { otherSources, setOtherSources }
) {

    // Other Sources
    const [interestFromSB, setInterestFromSB] = useState('');
    const [interestFromFD, setInterestFromFD] = useState('');
    const [otherSourceIncome, setOtherSourceIncome] = useState('');

    // Function to update the other sources total
    function updateOtherSources() {
        const interestFromSBNum = Number(interestFromSB) || 0;
        const interestFromFDNum = Number(interestFromFD) || 0;
        const otherSourceIncomeNum = Number(otherSourceIncome) || 0;

        setOtherSources(interestFromSBNum + interestFromFDNum + otherSourceIncomeNum);
    }

    // Use effect to update other sources when any component changes
    useEffect(() => {
        updateOtherSources();
    }, [interestFromSB, interestFromFD, otherSourceIncome]);

    function onInterestFromSBChange(e) {
        setInterestFromSB(e.target.value);
    }

    function onInterestFromFDChange(e) {
        setInterestFromFD(e.target.value);
    }

    function onOtherSourceIncomeChange(e) {
        setOtherSourceIncome(e.target.value);
    }

    return (
        <div>
            <h4>Other Sources : {otherSources}</h4>
            <div>
                <label>Interest from Savings Bank Accounts</label>
                <input 
                    type='number' 
                    value={interestFromSB} 
                    id='interestFromSB' 
                    name='interestFromSB' 
                    onChange={onInterestFromSBChange} 
                    placeholder="0" 
                />
            </div>
            <div>
                <label>Interest from Fixed Deposits</label>
                <input 
                    type='number' 
                    value={interestFromFD} 
                    id='interestFromFD' 
                    name='interestFromFD' 
                    onChange={onInterestFromFDChange} 
                    placeholder="0" 
                />
            </div>
            <div>
                <label>Other Sources</label>
                <input 
                    type='number' 
                    value={otherSourceIncome} 
                    id='otherSourceIncome' 
                    name='otherSourceIncome' 
                    onChange={onOtherSourceIncomeChange} 
                    placeholder="0" 
                />
            </div>
        </div>
    )
}

export default OtherSources;
