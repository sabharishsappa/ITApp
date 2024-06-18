
import React, { useState, useEffect } from "react";
import Salary from "./Salary";
import BusinessAndProfession from "./BusinessAndProfessions";
import CapitalGains from "./CapitalGains";
import OtherSources from "./OtherSources";



function SalaryAndIncome({salaryAndIncome, setSalaryAndIncome}) {

    const [salary, setSalary] = useState(0);
    const [businessAndProfession, setBusinessAndProfession] = useState(0);
    const [capitalGains, setCapitalGains] = useState(0);
    const [otherSources, setOtherSources] = useState(0);

    useEffect(() => {
        const newSalaryAndIncome = salary + businessAndProfession + capitalGains + otherSources;
        setSalaryAndIncome(newSalaryAndIncome);
    }, [salary, businessAndProfession, capitalGains, otherSources]);

  return (
    <div >
    {/* <ValueComponent /> */}
    <Salary salary={salary} setSalary={setSalary} />
    <BusinessAndProfession
        businessAndProfession={businessAndProfession}
        setBusinessAndProfession={setBusinessAndProfession}
    />
    <CapitalGains capitalGains={capitalGains} setCapitalGains={setCapitalGains} />
    <OtherSources otherSources={otherSources} setOtherSources={setOtherSources} />
</div>
  );
}

export default SalaryAndIncome;