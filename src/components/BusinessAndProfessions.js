import { useState, useEffect } from "react";

function BusinessAndProfession() {

    // Business and Profession Components
    const [business, setBusiness] = useState('');
    const [profession, setProfession] = useState('');
    const [businessAndProfession, setBusinessAndProfession] = useState(0);

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
        setBusiness(e.target.value);
    }

    function onProfessionChange(e) {
        setProfession(e.target.value);
    }

    return (
        <div>
            <h4>Business and Profession : {businessAndProfession}</h4>
            <div>
                <label>Business</label>
                <input 
                    type='number' 
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
                    type='number' 
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
