import { useState, useEffect } from "react";

function Salary(
    // props
    { salary, setSalary }
) {

    // Salary Components
    const [basicAndDA, setBasicAndDA] = useState('');
    const [HRA, setHRA] = useState('');
    const [bonusAndCommission, setBonusAndCommission] = useState('');
    const [otherAllowance, setOtherAllowance] = useState('');


    // Function to update the salary
    function updateSalary(){
        const basicAndDANum = Number(basicAndDA) || 0;
        const HRANum = Number(HRA) || 0;
        const bonusAndCommissionNum = Number(bonusAndCommission) || 0;
        const otherAllowanceNum = Number(otherAllowance) || 0;
        
        setSalary(basicAndDANum + HRANum + bonusAndCommissionNum + otherAllowanceNum);
    }

    // Use effect to update salary when any component changes
    useEffect(() => {
        updateSalary();
    }, [basicAndDA, HRA, bonusAndCommission, otherAllowance]);

    function onBasicAndDAChange(e){
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setBasicAndDA(value);
        }
    }

    function onHRAChange(e){
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setHRA(value);
        }
    }

    function onBonusAndCommissionChange(e){
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setBonusAndCommission(value);
        }
    }

    function onOtherAllowanceChange(e){
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setOtherAllowance(value);
        }
    }

    return (
        <div>
            <h4>Salary : {salary}</h4>
            <div>
                <label> Basic + DA (Dearness Allowance)</label>
                <input type='text' value={basicAndDA} id='basicAndDA' name='basicAndDA' onChange={onBasicAndDAChange} placeholder="0"></input>
            </div>
            <div>
                <label> HRA (House Rent Allowance)</label>
                <input type='text' value={HRA} id='HRA' name='HRA' onChange={onHRAChange} placeholder="0"></input>
            </div>

            <div>
                <label> Bonus and Commission</label>
                <input type='text' value={bonusAndCommission} id='bonusAndCommission' name='bonusAndCommission' onChange={onBonusAndCommissionChange} placeholder="0"></input>
            </div>

            <div>
                <label> Other Allowance</label>
                <input type='text' value={otherAllowance} id='otherAllowance' name='otherAllowance' onChange={onOtherAllowanceChange} placeholder="0"></input>
            </div>
        </div>
    )
}

export default Salary;
