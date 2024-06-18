import React,{useState} from 'react';
import EightyC from './EightyC';

const ExemptionsAndDeductions = (
    {exemptionsAndDeductions, setExemptionsAndDeductions}
) => {


    const [eightyC, setEightyC] = useState(0);
    const [standardDeduction, setStandardDeduction] = useState(0);
    const [eightyTTA, setEightyTTA] = useState(0);
    const [eligibleHRAExemption, setEligibleHRAExemption] = useState(0);
    const [professionalTax, setProfessionalTax] = useState(0);
    const [eightyD, setEightyD] = useState(0);
    const [eightyDD, setEightyDD] = useState(0);
    const [eightyDDB, setEightyDDB] = useState(0);
    const [section24B, setSection24B] = useState(0);
    const [eightyCCD1B, setEightyCCD1B] = useState(0);
    const [eightyCCD2, setEightyCCD2] = useState(0);
    const [eightyEEA, setEightyEEA] = useState(0);
    const [foodCoupons, setFoodCoupons] = useState(0);
    const [eightyU, setEightyU] = useState(0);
    const [eightyEEB, setEightyEEB] = useState(0);
    const [eightyGEligibleDeduction50Percent, setEightyGEligibleDeduction50Percent] = useState(0);
    const [eightyGEligibleDeduction100Percent, setEightyGEligibleDeduction100Percent] = useState(0);
    const [eightyGGA, setEightyGGA] = useState(0);
    const [eightyGGC, setEightyGGC] = useState(0);
    const [otherExpenses, setOtherExpenses] = useState(0);
    const [eightyGG, setEightyGG] = useState(0);
    const [eightyTTB, setEightyTTB] = useState(0);

    return (
        <div>
            <EightyC eightyC={eightyC} setEightyC={setEightyC}/>
        </div>
    );
};

export default ExemptionsAndDeductions;