import React from "react";



const Form = (props) => {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
        } = props
console.log("test", errors)
            
    const onSubmit = event => {
        event.preventDefault()
        submit()
    }
     
    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }
        

        return (
            <form id="pizza-form" onSubmit={onSubmit}>
            <div className="form-order submit">
            <h2>Add a Order</h2> 
            <button disabled={disabled}>submit</button>
            
            
            <div className="errors">
            <div>{errors.name}</div>
            <div>{errors.size}</div>
            <div>{errors.toppings}</div>
            <div>{errors.special}</div>
            
            </div>
            </div>
            
            
                <input 
                    type = "text"
                    placeholder = "First and Last Name"
                    onChange={onChange}
                    name="name"
                    value={values.flName}
                    id="name-input"
                   
                />
                
                <label>Size
                <select value={values.size} name="size" onChange={onChange} id="size-dropdown">
                    <option value="">---Select Pizza Size---</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                </label>
                
                <fieldset>
                <legend>Choose your toppings!</legend>
                <input 
                    type ="checkbox"
                    id ="topping1"
                    name ="toppings"
                    value="Sausage"
                />
                <label htmlFor="topping1">Sausage</label>
                <br />
                
                <input 
                    type ="checkbox"
                    id ="topping2"
                    name ="toppings"
                    value="Cheese"
                />
                <label htmlFor="topping2">Cheese</label>
                <br />

                <input
                    type ="checkbox"
                    id ="topping3"
                    name ="toppings"
                    value="Mushrooms"
                />
                <label htmlFor="topping3">Mushrooms</label>
                <br />

                <input
                    type ="checkbox"
                    id ="topping4"
                    name ="toppings"
                    value="Pepperoni"
                />
                <label htmlFor="topping4">Pepperoni</label>
                <br />
                </fieldset>

                <input
                    type="text"
                    name="special"
                    placeholder="Special requests here"
                    value={values.special}
                    onChange={onChange}
                    id="special-text"
                />
                <button id="order-button">Add Order</button>
            </form>
        )
}

export default Form;