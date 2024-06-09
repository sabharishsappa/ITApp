import {useState} from "react"

function ValueComponent() {

    const [newRegimeValue, setNewRegimeValue] = useState(0);
    const [oldRegimeValue, setOldRegimeValue] = useState(0);
  
  

    return (
        <div className='value-components'>
            <h1>Tax Values :</h1>
            <div>
                <label>Old Regime Value : </label>
                <h>{oldRegimeValue}</h>
            </div>

            <div>
                <label>New Regime Value : </label>
                <h>{newRegimeValue}</h>
            </div>
        </div>
    )

}


export default ValueComponent;