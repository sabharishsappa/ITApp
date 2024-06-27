import { useState, useEffect } from "react";
import SalaryAndIncome from "./components/SalaryAndIncome";
import ExemptionsAndDeductions from "./components/ExemptionsAndDeductions";

function App() {


    const [salaryAndIncome, setSalaryAndIncome] = useState(0);
    const [exemptionsAndDeductions,setExemptionsAndDeductions]  =useState(0);

    // Update salaryAndIncome whenever any of the variables change


    return (
        <>
            <h1>Income Tax Calculator</h1>
            <h2>Salary and Income  : {salaryAndIncome}</h2>
            <SalaryAndIncome salaryAndIncome={salaryAndIncome} setSalaryAndIncome={setSalaryAndIncome} />
            <h2>Exemptions and Deductions : {exemptionsAndDeductions}</h2>
            <ExemptionsAndDeductions exemptionsAndDeductions={exemptionsAndDeductions} setExemptionsAndDeductions={setExemptionsAndDeductions}/>
        </>

    );
}

export default App;;
