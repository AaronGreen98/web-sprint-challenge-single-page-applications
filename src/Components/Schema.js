import * as yup from "yup";

const Schema = yup.object().shape({
name: yup
.string()
.required("Username is required!")
.min(2, "name must be at least 2 characters"),
size: yup
.boolean()
.oneOf([true], "Must choose a size of pizza"),
toppings: yup
.boolean(),
special: yup
.string()
.min(8, "special requests requires at least 8 characters")
})

export default Schema;
