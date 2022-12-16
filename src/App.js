import React, {useState, useEffect} from "react";

import Form from "./Components/Form";

import {Route, Switch, Link} from "react-router-dom";

import axios from 'axios';
import schema from "./Components/Schema";
import * as yup from "yup";


const initialFormValues = {

  name: '',
  size: '',
  toppings: '',
  special: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  toppings: '',
  special: '',
}

const initialOrders = []
const initialDisabled = true


const App = () => {
 
  const[orders, setOrders] = useState(initialOrders)
  const[formValues, setFormValues] = useState(initialFormValues)
  const[formErrors, setFormErrors] = useState(initialFormErrors)
  const[disabled, setDisabled] = useState(initialDisabled)
  
  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      setOrders([res.data, ...orders])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      console.log(err)
      debugger
    })

  }
  
  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }
  
  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  
  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: formValues.toppings.trim(),
      special: formValues.special.trim()
    }
    postNewOrder(newOrder)
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
  
  
  
  
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
          <Link id="order-pizza" to="/pizza">Order Pizza</Link>
          </li>
        </ul>
      </nav>
      
    <Switch>
    <Route path="/pizza">
    <Form values={formValues}
    change={inputChange}
    submit={formSubmit}
    disabled={disabled}
    errors={formErrors} />
    </Route>
    </Switch>
    </div>
  );
}
export default App;
