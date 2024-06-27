import React,{useEffect, useState} from 'react';
import EightyC from './Exemptions/EightyC';
import EligibleHRAExemption from './Exemptions/EligibleHRAExemption';
import EightyGG from './Exemptions/EightyGG';

const ExemptionsAndDeductions = (
    {exemptionsAndDeductions, setExemptionsAndDeductions}
) => {

    


    const [eightyC, setEightyC] = useState(0);
    const [standardDeduction, setStandardDeduction] = useState('');
    const [eightyTTA, setEightyTTA] = useState('');
    const [eligibleHRAExemption, setEligibleHRAExemption] = useState(0);
    const [professionalTax, setProfessionalTax] = useState('');
    const [eightyD, setEightyD] = useState('');
    const [eightyDD, setEightyDD] = useState('');
    const [eightyDDB, setEightyDDB] = useState('');
    const [section24B, setSection24B] = useState('');
    const [eightyCCD1B, setEightyCCD1B] = useState('');
    const [eightyCCD2, setEightyCCD2] = useState('');
    const [eightyEEA, setEightyEEA] = useState('');
    const [foodCoupons, setFoodCoupons] = useState('');
    const [eightyU, setEightyU] = useState('');
    const [eightyEEB, setEightyEEB] = useState('');
    const [eightyE,setEightyE] = useState('');
    const [eightyGEligibleDeduction50Percent, setEightyGEligibleDeduction50Percent] = useState('');
    const [eightyGEligibleDeduction100Percent, setEightyGEligibleDeduction100Percent] = useState('');
    const [eightyGGA, setEightyGGA] = useState('');
    const [eightyGGC, setEightyGGC] = useState('');
    const [otherExemptions, setOtherExemptions] = useState('');
    const [eightyGG, setEightyGG] = useState(0);
    const [eightyTTB, setEightyTTB] = useState('');


    function onStandardDeductionChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setStandardDeduction(value);
        }
    }

    function onEightyTTAChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setEightyTTA(value);
        }
    }

    function onProfessionalTaxChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setProfessionalTax(value);
        }
    }

    function onEightyDChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setEightyD(value);
        }
    }

    function onEightyDDChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setEightyDD(value);
        }
    }

    function onEightyDDBChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setEightyDDB(value);
        }
    }

    function onSection24BChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setSection24B(value);
        }
    }

    function onEightyCCD1BChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setEightyCCD1B(value);
        }
    }

    function onEightyCCD2Change(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setEightyCCD2(value);
        }
    }

    function onEightyEEAChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setEightyEEA(value);
        }
    }

    function onFoodCouponsChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setFoodCoupons(value);
        }
    }

    function onEightyUChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setEightyU(value);
        }
    }

    function onEightyEEBChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setEightyEEB(value);
        }
    }

    function onEightyEChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setEightyE(value);
        }
    }

    function onEightyGEligibleDeduction50PercentChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setEightyGEligibleDeduction50Percent(value);
        }
    }

    function onEightyGEligibleDeduction100PercentChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setEightyGEligibleDeduction100Percent(value);
        }
    }

    function onEightyGGAChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setEightyGGA(value);
        }
    }

    function onEightyGGCChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setEightyGGC(value);
        }
    }

    function onOtherExemptionsChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setOtherExemptions(value);
        }
    }

    function onEightyTTBChange(e) {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setEightyTTB(value);
        }
    }

    useEffect(() => {
        const newExemptionsAndDeduction = eightyC + Number(standardDeduction) + Number(eightyTTA) + eligibleHRAExemption + Number(professionalTax) + Number(eightyD) + Number(eightyDD) + Number(eightyDDB) + Number(section24B) + Number(eightyCCD1B) + Number(eightyCCD2) + Number(eightyEEA) + Number(foodCoupons) + Number(eightyU) + Number(eightyEEB) + Number(eightyE) + Number(eightyGEligibleDeduction50Percent) + Number(eightyGEligibleDeduction100Percent) + Number(eightyGGA) + 
        Number(eightyGGC) + Number(otherExemptions) + eightyGG + Number(eightyTTB);
        setExemptionsAndDeductions(newExemptionsAndDeduction);
    },[eightyC,standardDeduction,eightyTTA,eligibleHRAExemption,professionalTax,eightyD,eightyDD,eightyDDB,section24B,eightyCCD1B,eightyCCD2,eightyEEA,foodCoupons,eightyU,eightyEEB,eightyE,eightyGEligibleDeduction50Percent,eightyGEligibleDeduction100Percent,eightyGGA,eightyGGC,otherExemptions,eightyGG,eightyTTB]);


    return (

       


        <div>
            <EightyC eightyC={eightyC} setEightyC={setEightyC}/>
            <br></br>
            <div>
                <label> Standard Deduction</label>
                <input type='text' value={standardDeduction} id='standardDeduction' name='standardDeduction' onChange={onStandardDeductionChange}
                 placeholder="0"></input>
            </div>
            <br></br>
            <div>
                <label> 80TTA</label>
                <input type='text' value={eightyTTA} id='eightyTTA' name='eightyTTA' onChange={onEightyTTAChange}
                 placeholder="0"></input>
            </div>
            <EligibleHRAExemption eligibleHRAExemption={eligibleHRAExemption} setEligibleHRAExemption={setEligibleHRAExemption}/>
            <br></br>

            <div>
                <label> Professional Tax</label>
                <input type='text' value={professionalTax} id='professionalTax' name='professionalTax' onChange={onProfessionalTaxChange}
                 placeholder="0"></input>
            </div>

            <div>
                <label> 80D</label>
                <input type='text' value={eightyD} id='eightyD' name='eightyD' onChange={onEightyDChange}
                 placeholder="0"></input>
            </div>

            <div>
                <label> 80DD</label>
                <input type='text' value={eightyDD} id='eightyDD' name='eightyDD' onChange={onEightyDDChange}
                 placeholder="0"></input>   
            </div>

            <div>
                <label> 80DDB</label>
                <input type='text' value={eightyDDB} id='eightyDDB' name='eightyDDB' onChange={onEightyDDBChange}
                 placeholder="0"></input>
            </div>

            <div>
                <label> Section 24(B)</label>
                <input type='text' value={section24B} id='section24B' name='section24B' onChange={onSection24BChange}
                 placeholder="0"></input>
            </div>

            <div>
                <label> 80CCD(1B)</label>
                <input type='text' value={eightyCCD1B} id='eightyCCD1B' name='eightyCCD1B' onChange={onEightyCCD1BChange}
                 placeholder="0"></input>
            </div>

            <div>
                <label> 80CCD(2)</label>
                <input type='text' value={eightyCCD2} id='eightyCCD2' name='eightyCCD2' onChange={onEightyCCD2Change}
                 placeholder="0"></input>
            </div>

            <div>
                <label> 80EEA</label>
                <input type='text' value={eightyEEA} id='eightyEEA' name='eightyEEA' onChange={onEightyEEAChange}
                    placeholder="0"></input>
            </div>

            <div>
                <label> Food Coupons</label>
                <input type='text' value={foodCoupons} id='foodCoupons' name='foodCoupons' onChange={onFoodCouponsChange}
                    placeholder="0"></input>
            </div>

            <div>
                <label> 80U</label>
                <input type='text' value={eightyU} id='eightyU' name='eightyU' onChange={onEightyUChange}
                    placeholder="0"></input>
            </div>

            <div>
                <label> 80EEB</label>
                <input type='text' value={eightyEEB} id='eightyEEB' name='eightyEEB' onChange={onEightyEEBChange}
                    placeholder="0"></input>
            </div>

            <div>
                <label> 80E</label>
                <input type='text' value={eightyE} id='eightyE' name='eightyE' onChange={onEightyEChange}
                    placeholder="0"></input>
            </div>

            <div>
                <label> 80G - Eligible Deduction 50%</label>
                <input type='text' value={eightyGEligibleDeduction50Percent} id='eightyGEligibleDeduction50Percent' name='eightyGEligibleDeduction50Percent' onChange={onEightyGEligibleDeduction50PercentChange}
                    placeholder="0"></input>
            </div>

            <div>
                <label> 80G -  Eligible Deduction 100%</label>
                <input type='text' value={eightyGEligibleDeduction100Percent} id='eightyGEligibleDeduction100Percent' name='eightyGEligibleDeduction100Percent' onChange={onEightyGEligibleDeduction100PercentChange}
                    placeholder="0"></input>
            </div>

            <div>
                <label> 80GGA</label>
                <input type='text' value={eightyGGA} id='eightyGGA' name='eightyGGA' onChange={onEightyGGAChange}
                    placeholder="0"></input>
            </div>

            <div>
                <label> 80GGC</label>
                <input type='text' value={eightyGGC} id='eightyGGC' name='eightyGGC' onChange={onEightyGGCChange}
                    placeholder="0"></input>
            </div>

            <div>
                <label> Other Exemptions</label>
                <input type='text' value={otherExemptions} id='otherExemptions' name='otherExemptions' onChange={onOtherExemptionsChange}
                    placeholder="0"></input>
            </div>


            <br></br>

            <EightyGG eightyGG={eightyGG} setEightyGG={setEightyGG}/>
            <br></br>

            <div>
                <label> 80TTB</label>
                <input type='text' value={eightyTTB} id='eightyTTB' name='eightyTTB' onChange={onEightyTTBChange}
                    placeholder="0"></input>
            </div>


        </div>
    );
};

export default ExemptionsAndDeductions;