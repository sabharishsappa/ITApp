import React, { useEffect,useState } from 'react';

const EligibleHRAExemption = ({eligibleHRAExemption,setEligibleHRAExemption}) => {

    const [hraReceived, setHraReceived] = useState('');
    const [houseRentPaid, setHouseRentPaid] = useState('');

    function updateEligibleHRAExemption() {
            
            const hraReceivedNum = Number(hraReceived) || 0;
            const houseRentPaidNum = Number(houseRentPaid) || 0;
    
            setEligibleHRAExemption(Math.min(hraReceivedNum, houseRentPaidNum));
        
    }

    function onHraReceivedChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setHraReceived(value);
        }
    }

    function onHouseRentPaidChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setHouseRentPaid(value);
        }
    }

    useEffect(() => {
        updateEligibleHRAExemption();
    }, [hraReceived, houseRentPaid]);
    // Your code here

    return (
        <div>
            <h4>Eligible HRA Exemption : {eligibleHRAExemption}</h4>
            <div>
                <label>HRA Received</label>
                <input 
                    type='text' 
                    value={hraReceived} 
                    id='hraReceived' 
                    name='hraReceived' 
                    onChange={onHraReceivedChange} 
                    placeholder="0" 
                />
            </div>
            <div>
                <label>House Rent Paid</label>
                <input 
                    type='text' 
                    value={houseRentPaid} 
                    id='houseRentPaid' 
                    name='houseRentPaid' 
                    onChange={onHouseRentPaidChange} 
                    placeholder="0" 
                />
            </div>
        </div>
    );
};

export default EligibleHRAExemption;