import React ,{useState,useEffect}from 'react';

const EightyGG = ({eightyGG,setEightyGG}) => {

    const [applicableIncome, setApplicableIncome] = useState('');
    const [rentPaid, setRentPaid] = useState('');


    function updateEightyGG() {
        const applicableIncomeNum = Number(applicableIncome) || 0;
        const rentPaidNum = Number(rentPaid) || 0;
        setEightyGG(Math.min(applicableIncomeNum, rentPaidNum));
    }

    useEffect(() => {
        updateEightyGG();
    }, [applicableIncome, rentPaid]);

    function onApplicableIncomeChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setApplicableIncome(value);
        }
    }

    function onRentPaidChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setRentPaid(value);
        }
    }

    return (
        <div>
            <div>
                <h4>Eligible 80GG Deduction : {eightyGG}</h4>
                
                <div>
                    <label>Applicable Income</label>
                    <input 
                        type='text' 
                        value={applicableIncome} 
                        id='applicableIncome' 
                        name='applicableIncome' 
                        onChange={onApplicableIncomeChange} 
                        placeholder="0" 
                    />
                </div>
                <div>
                    <label>Rent Paid</label>
                    <input 
                        type='text' 
                        value={rentPaid} 
                        id='rentPaid' 
                        name='rentPaid' 
                        onChange={onRentPaidChange} 
                        placeholder="0" 
                    />
                </div>
            </div>
        </div>
    );
};

export default EightyGG;