import React, {useState} from "react"
import axios from 'axios'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import * as Yup from 'yup'


export default function Order_Form () {
    const [ orders, setOrders ] = useState([]);
    const [ formState, setFormState ] = useState({
        name: "" ,
        size: "" ,
        top_pep: false, 
        top_ham: false, 
        top_sau: false, 
        top_anc: false,
        instructions: "" ,
    })
    const [ errorState , setErrorState ] = useState({
        name: "" ,
        size: "" ,
        toppings: "" ,
        instructions: "" ,
    })
    const handleChanges = (e) => {
        e.persist()
        validate(e)
        console.log("changes to: " , e)
        setFormState( { ...formState , [e.target.name] : e.target.value } )
    }
    const handleChanges2 = (e) => {
        validate(e)
        if (e.target.checked){
            e.target.removeAttribute('checked');
        }
        else{
            e.target.setAttribute('checked', true);
        }
        setFormState({...formState, [e.target.name]: e.target.checked})
    }
    const formSubmit = e => {
        e.preventDefault();
       console.log("Form was submitted: " , formState); 
       //Post will go here
        axios
            .post("https://reqres.in/api/users", formState)
            .then(res => {
                console.log("Successful Submit: ", res.data )
                setOrders([res.data,...orders])
            })
            .catch(err=>{
                console.log("err: ",err)
            })
       //
       setFormState({
        name: "" ,
        size: "" ,
        toppings: "" ,
        instructions: "",
       })
    }

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .required()
        .min(2, "You must enter atleast 2 characters for your name"),
    size: Yup
        .string(),
    top_pep: Yup
        .boolean(),
    top_ham: Yup
        .boolean(),
    top_sau: Yup
        .boolean(),
    top_anc: Yup
        .boolean(),
    instructions: Yup
        .string()

})
const validate = (e) => {
    Yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid =>{
            console.log('valid', valid)
            setErrorState({...errorState, [e.target.name]: ""
        })
        .catch(error=>{
            console.log('error', error)
            setErrorState({
                ...errorState,[e.target.name]:errorState.errors[0]
            })
        })
        })
}



return(
<div className="pizza_form_holder">
    <Form 
        className="pizza_form"
        onSubmit={formSubmit}>
        <Row>
            <Col md={6}>
                <FormGroup>
                    {/* Set to require 2 characters */}
                    <Label className="Label" htmlFor="Name">Name</Label>
                        <Input 
                            type="text"
                            name="name"
                            id="name"
                            data-cy="name"
                            value={formState.name}
                            onChange={handleChanges}
                            placeholder="What is your name?"
                            />
                            {/* Placeholder for errors */}
                    
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Label htmlFor="size" className="Label" >Select Size</Label>
                        <Input 
                        type="select" 
                        name="size" 
                        id="size"
                        data-cy="size"
                        value={formState.size}
                        onChange={handleChanges}>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </Input>
                    
                </FormGroup>
            </Col>   
        </Row>
        
        <Row md={12}>
            <Col md={6}>
                <FormGroup check>
                    <Label check>
                        <Input 
                        type="checkbox" 
                        name="top_pep"
                        id="top_pep"
                        data-cy="top_pep"
                        value={formState.top_pep}
                        onClick={handleChanges2}
                        />{' '}
                        Pepperoni
                    </Label>
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup check>
                    <Label check>
                        <Input 
                        type="checkbox" 
                        name="top_ham"
                        id="top_ham"
                        data-cy="top_ham"
                        value={formState.top_ham}
                        onClick={handleChanges2}
                        />{' '}
                        Ham
                    </Label>
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <FormGroup check>
                    <Label check>
                        <Input 
                        type="checkbox" 
                        name="top_sau"
                        id="top_sau"
                        data-cy="top_sau"
                        value={formState.top_sau}
                        onClick={handleChanges2}
                        />{' '}
                        Sausage
                    </Label>
                </FormGroup>
            </Col>
                <Col md={6}>    
                <FormGroup check>
                    <Label check>
                        <Input 
                        type="checkbox" 
                        name="top_anc"
                        id="top_anc"
                        data-cy="top_anc"
                        value={formState.top_anc}
                        onClick={handleChanges2}
                        />{' '}
                        Anchovies
                    </Label>
                </FormGroup>
            </Col>
        </Row>

        <FormGroup>
            <Label htmlFor="instructions">Instructions
                <Input 
                    type="textarea"
                    name="instructions"
                    id="instructions"
                    data-cy="instructions"
                    value={formState.instructions}
                    onChange={handleChanges}
                    placeholder="Anything specific we should know?"
                />
            </Label>
        </FormGroup>

        <Button
        id="submitBtn"
        data-cy="submitBtn"
        >ORDER NOW!</Button>


    </Form>
</div>
)
}