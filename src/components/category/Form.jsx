import { useState } from 'react'
import axios from 'axios'

const Form = ({ storeCategory }) => {
    const [form, setForm] = useState({})
    
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
            <button type="submit" className="btn btn-primary" onClick={() => storeCategory(form)}>Submit</button>
        </div>
    )
}

export default Form