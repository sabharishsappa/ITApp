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
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setInterestFromSB(value);
        }
    }

    function onInterestFromFDChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setInterestFromFD(value);
        }
    }

    function onOtherSourceIncomeChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setOtherSourceIncome(value);
        }
    }

    return (
        <div>
            <h4>Other Sources : {otherSources}</h4>
            <div>
                <label>Interest from Savings Bank Accounts</label>
                <input 
                    type='text' 
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
                    type='text' 
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
                    type='text' 
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
