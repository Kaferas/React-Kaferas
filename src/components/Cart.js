import React from 'react'
import styled from 'styled-components';

function Cart() {
      const indimu=400;
      const celeli=300;
      const tomate=1200
    return(
        <div className='blue'> 
            <h3>Panier</h3>
        <Punch>
            <ul>
                <li>Indimu {indimu} FBU</li>
                <li>Celeli {celeli} FBU</li>
                <li>Tomate {tomate} FBU</li>
            </ul>
            <h3>Le total du Marche Vaut: {indimu + celeli + tomate} FBU</h3>
        </Punch>
        </div>
        )
  
}
export default Cart

const Punch=styled.div`
    padding:30px;    
    width:auto;
    height:auto;
    list-style:none;
    background-color:green;
`