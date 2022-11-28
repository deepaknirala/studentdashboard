import React from 'react';
import styled from 'styled-components'

function footer(props) {
    return (
        <StyledFooter>
            <p>Connect with facilitators <a href="https://wa.me/message/EEDZIUOQEPDNI1">Deepak Kumar Nirala</a> and <a href="https://wa.me/message/G65XVCKXNZHVN1">Shubham Kumar</a>. 
            </p>
        </StyledFooter>
        
    );
}

export default footer;

let StyledFooter = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 40px auto;
    padding: 10px; 
    box-sizing: border-box;
    p{
        text-align: center;
        font-size: 11px;
    }
`