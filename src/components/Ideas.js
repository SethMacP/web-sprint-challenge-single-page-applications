import React from 'react';
import myData from '../data'
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export default function Ideas () {
let pizzaIdeas = myData;
    return(<>
    <div>
        <h2>Why not try some of our <em>favorites?</em></h2>
    </div>
    <div className="idea_holder">
    {pizzaIdeas.map( pizza => 
        <div className="idea" id={pizza.id}>
            
            <Card>
                <CardBody>
                    <CardTitle tag="h5">{pizza.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Size : {pizza.size}</CardSubtitle>
                    <CardText>{(pizza.top_pep ? "Pepperoni" : "")}</CardText>
                    <CardText>{(pizza.top_ham ? "Ham" : "")}</CardText>
                    <CardText>{(pizza.top_sau ? "Sausage" : "")}</CardText>
                    <CardText>{(pizza.top_anc ? "Anchovies" : "")}</CardText>
                </CardBody>
            </Card>
            
        </div>
    )}
    </div>
    </>)
}

