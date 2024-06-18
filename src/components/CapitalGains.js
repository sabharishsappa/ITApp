import { useState, useEffect } from "react";

function CapitalGains(
    // props
    { capitalGains, setCapitalGains }
) {

    // Capital Gains Components
    const [STCG, setSTCG] = useState('');
    const [STCG15, setSTCG15] = useState('');
    const [LTCG10, setLTCG10] = useState('');
    const [LTCG20, setLTCG20] = useState('');

    // Function to update the capital gains total
    function updateCapitalGains() {
        const STCGNum = Number(STCG) || 0;
        const STCG15Num = Number(STCG15) || 0;
        const LTCG10Num = Number(LTCG10) || 0;
        const LTCG20Num = Number(LTCG20) || 0;

        setCapitalGains(STCGNum + STCG15Num + LTCG10Num + LTCG20Num);
    }

    // Use effect to update capital gains when any component changes
    useEffect(() => {
        updateCapitalGains();
    }, [STCG, STCG15, LTCG10, LTCG20]);

    function onSTCGChange(e) {
        setSTCG(e.target.value);
    }

    function onSTCG15Change(e) {
        setSTCG15(e.target.value);
    }

    function onLTCG10Change(e) {
        setLTCG10(e.target.value);
    }

    function onLTCG20Change(e) {
        setLTCG20(e.target.value);
    }

    return (
        <div>
            <h4>Capital Gains : {capitalGains}</h4>
            <div>
                <label>Short Term Capital Gain - Taxable at Normal Rates</label>
                <input 
                    type='number' 
                    value={STCG} 
                    id='STCG' 
                    name='STCG' 
                    onChange={onSTCGChange} 
                    placeholder="0" 
                />
            </div>
            <div>
                <label>Short Term Capital Gain - Taxable at 15%</label>
                <input 
                    type='number' 
                    value={STCG15} 
                    id='STCG15' 
                    name='STCG15' 
                    onChange={onSTCG15Change} 
                    placeholder="0" 
                />
            </div>
            <div>
                <label>Long Term Capital Gain - Taxable at 10%</label>
                <input 
                    type='number' 
                    value={LTCG10} 
                    id='LTCG10' 
                    name='LTCG10' 
                    onChange={onLTCG10Change} 
                    placeholder="0" 
                />
            </div>
            <div>
                <label>Long Term Capital Gain - Taxable at 20%</label>
                <input 
                    type='number' 
                    value={LTCG20} 
                    id='LTCG20' 
                    name='LTCG20' 
                    onChange={onLTCG20Change} 
                    placeholder="0" 
                />
            </div>
        </div>
    );
}

export default CapitalGains;
