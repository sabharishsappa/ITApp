import React,{useState,useEffect} from 'react';

const EightyC = ({ eightyC, setEightyC }) => {

    const [equityLinkedSavingsScheme, setEquityLinkedSavingsScheme] = useState('');
    const [employeeProvidentFund, setEmployeeProvidentFund] = useState('');
    const [lifeInsurance, setLifeInsurance] = useState('');
    const [publicProvidentFund, setPublicProvidentFund] = useState('');
    const [housingLoanPrinicpal, setHousingLoanPrinicpal] = useState('');
    const [nationalPensionScheme, setNationalPensionScheme] = useState('');
    const [tutionFees, setTutionFees] = useState('');
    const [others, setOthers] = useState('');


    // Function to update the salary
    function updateEightyC() {

        const equityLinkedSavingsSchemeNum = Number(equityLinkedSavingsScheme) || 0;
        const employeeProvidentFundNum = Number(employeeProvidentFund) || 0;
        const lifeInsuranceNum = Number(lifeInsurance) || 0;
        const publicProvidentFundNum = Number(publicProvidentFund) || 0;
        const housingLoanPrinicpalNum = Number(housingLoanPrinicpal) || 0;
        const nationalPensionSchemeNum = Number(nationalPensionScheme) || 0;
        const tutionFeesNum = Number(tutionFees) || 0;
        const othersNum = Number(others) || 0;

        setEightyC(equityLinkedSavingsSchemeNum + employeeProvidentFundNum + lifeInsuranceNum + publicProvidentFundNum + housingLoanPrinicpalNum + nationalPensionSchemeNum + tutionFeesNum + othersNum);

    }


    // Use effect to update salary when any component changes
    useEffect(() => {
        updateEightyC();
    }, [equityLinkedSavingsScheme, employeeProvidentFund, lifeInsurance, publicProvidentFund, housingLoanPrinicpal, nationalPensionScheme, tutionFees, others]);



    const onEquityLinkedSavingsSchemeChange = (e) => {
        setEquityLinkedSavingsScheme(e.target.value);
    }

    const onEmployeeProvidentFundChange = (e) => {
        setEmployeeProvidentFund(e.target.value);
    }

    const onLifeInsuranceChange = (e) => {
        setLifeInsurance(e.target.value);
    }

    const onPublicProvidentFundChange = (e) => {
        setPublicProvidentFund(e.target.value);
    }

    const onHousingLoanPrinicpalChange = (e) => {
        setHousingLoanPrinicpal(e.target.value);
    }

    const onNationalPensionSchemeChange = (e) => {
        setNationalPensionScheme(e.target.value);
    }

    const onTutionFeesChange = (e) => {
        setTutionFees(e.target.value);
    }

    const onOthersChange = (e) => {
        setOthers(e.target.value);
    }
    return (
        <>
            <div>
                <h4>80C : {eightyC}</h4>
                <div>
                    <label>Equity Linked Savings Scheme</label>
                    <input
                        type='number'
                        value={equityLinkedSavingsScheme}
                        id='equityLinkedSavingsScheme'
                        name='equityLinkedSavingsScheme'
                        onChange={onEquityLinkedSavingsSchemeChange}
                        placeholder="0"
                    />
                </div>
                <div>
                    <label>Employee Provident Fund</label>
                    <input
                        type='number'
                        value={employeeProvidentFund}
                        id='employeeProvidentFund'
                        name='employeeProvidentFund'
                        onChange={onEmployeeProvidentFundChange}
                        placeholder="0"
                    />
                    </div>
                    <div>
                    <label>Life Insurance</label>
                    <input
                        type='number'
                        value={lifeInsurance}
                        id='lifeInsurance'
                        name='lifeInsurance'
                        onChange={onLifeInsuranceChange}
                        placeholder="0"
                    />
                    </div>
                    <div>
                    <label>Public Provident Fund</label>
                    <input
                        type='number'
                        value={publicProvidentFund}
                        id='publicProvidentFund'
                        name='publicProvidentFund'
                        onChange={onPublicProvidentFundChange}
                        placeholder="0"
                    />
                    </div>
                    <div>
                    <label>Housing Loan Prinicpal</label>
                    <input
                        type='number'
                        value={housingLoanPrinicpal}
                        id='housingLoanPrinicpal'
                        name='housingLoanPrinicpal'
                        onChange={onHousingLoanPrinicpalChange}
                        placeholder="0"
                    />
                    </div>
                    <div>
                    <label>National Pension Scheme</label>
                    <input
                        type='number'
                        value={nationalPensionScheme}
                        id='nationalPensionScheme'
                        name='nationalPensionScheme'
                        onChange={onNationalPensionSchemeChange}
                        placeholder="0"
                    />
                    </div>
                    <div>
                    <label>Tution Fees</label>
                    <input
                        type='number'
                        value={tutionFees}
                        id='tutionFees'
                        name='tutionFees'
                        onChange={onTutionFeesChange}
                        placeholder="0"
                    />
                    </div>
                    <div>
                    <label>Others</label>
                    <input
                        type='number'
                        value={others}
                        id='others'
                        name='others'
                        onChange={onOthersChange}
                        placeholder="0"
                    />
                    </div>

            </div>
        </>
    );
};

export default EightyC;