import React, {useState} from "react"
import {connect} from "react-redux"
import {addSmurf} from "../actions/actions"

const Form = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        //setNewSmurf({...newSmurf, name: e.name, age: e.age...})
        console.log(newSmurf)
        props.addSmurf(newSmurf)
    }

    const handleChanges = (e) => {
        // e.preventDefault()
        // setNewSmurf({ name : e.target.value})
        let name = e.target.name;
        setNewSmurf({ ...newSmurf, [name] : e.target.value})
    }

    return (
        <div>
            <form>
                <input name="name" type="text" placeholder="name" onChange={handleChanges}></input>
                <input name="age" type="text" placeholder="age" onChange={handleChanges}></input>
                <input name="height" type="text" placeholder="height" onChange={handleChanges}></input>
                <button type="submit" onClick={handleSubmit}>Add a new Smurf</button>
            </form>
        </div>
    )
}

export default connect(null, {addSmurf})(Form)