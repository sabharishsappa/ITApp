import { useState, useEffect } from "react";

function BusinessAndProfession(
    // props
    { businessAndProfession, setBusinessAndProfession }
) {

    // Business and Profession Components
    const [business, setBusiness] = useState('');
    const [profession, setProfession] = useState('');

    // Function to update the business and profession total
    function updateBusinessAndProfession() {
        const businessNum = Number(business) || 0;
        const professionNum = Number(profession) || 0;

        setBusinessAndProfession(businessNum + professionNum);
    }

    // Use effect to update business and profession when any component changes
    useEffect(() => {
        updateBusinessAndProfession();
    }, [business, profession]);

    function onBusinessChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setBusiness(value);
        }
    }

    function onProfessionChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setProfession(value);
        }
    }

    return (
        <div>
            <h4>Business and Profession : {businessAndProfession}</h4>
            <div>
                <label>Business</label>
                <input 
                    type='text' 
                    value={business} 
                    id='business' 
                    name='business' 
                    onChange={onBusinessChange} 
                    placeholder="0" 
                />
            </div>
            <div>
                <label>Profession</label>
                <input 
                    type='text' 
                    value={profession} 
                    id='profession' 
                    name='profession' 
                    onChange={onProfessionChange} 
                    placeholder="0" 
                />
            </div>
        </div>
    )
}

export default BusinessAndProfession;
