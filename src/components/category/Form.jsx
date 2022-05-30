import { useState } from 'react'
import axios from 'axios'

const Form = ({ storeCategory , getCategoriesData}) => {
    const [form, setForm] = useState({})

    var txt_name = ""
    var txt_description = ""
    
    return (
        <div>
            <div className="form-group">
                <label htmlFor="">Nama</label>
                <input id='txt_name' type="text" className="form-control" onChange={(e) => setForm({
                    ...form,
                    name: e.target.value
                })}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Description</label>
                <input id='txt_description' type="text" className="form-control" onChange={(e) => setForm({
                    ...form,
                    description: e.target.value
                })}/>
            </div>
            <br />
            <div className='d-flex'>
            <button type="submit" className="btn btn-primary" onClick={() => storeCategory(form)}>Submit</button>
            <button type="button" className="btn btn-primary ms-3" onClick={() => getCategoriesData()}>Load</button>  
            </div>
        </div>
    )
}

export default Form