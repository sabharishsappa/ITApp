import { useState, useEffect } from "react";

function Salary() {

    // Salary Components
    const [basicAndDA, setBasicAndDA] = useState('');
    const [HRA, setHRA] = useState('');
    const [bonusAndCommission, setBonusAndCommission] = useState('');
    const [otherAllowance, setOtherAllowance] = useState('');

    const [salary, setSalary] = useState(0);

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
        setBasicAndDA(e.target.value);
    }

    function onHRAChange(e){
        setHRA(e.target.value);
    }

    function onBonusAndCommissionChange(e){
        setBonusAndCommission(e.target.value);
    }

    function onOtherAllowanceChange(e){
        setOtherAllowance(e.target.value);
    }

    return (
        <div>
            <h4>Salary : {salary}</h4>
            <div>
                <label> Basic + DA (Dearness Allowance)</label>
                <input type='number' value={basicAndDA} id='basicAndDA' name='basicAndDA' onChange={onBasicAndDAChange} placeholder="0"></input>
            </div>
            <div>
                <label> HRA (House Rent Allowance)</label>
                <input type='number' value={HRA} id='HRA' name='HRA' onChange={onHRAChange} placeholder="0"></input>
            </div>

            <div>
                <label> Bonus and Commission</label>
                <input type='number' value={bonusAndCommission} id='bonusAndCommission' name='bonusAndCommission' onChange={onBonusAndCommissionChange} placeholder="0"></input>
            </div>

            <div>
                <label> Other Allowance</label>
                <input type='number' value={otherAllowance} id='otherAllowance' name='otherAllowance' onChange={onOtherAllowanceChange} placeholder="0"></input>
            </div>
        </div>
    )
}

export default Salary;
