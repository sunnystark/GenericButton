import React from "react";
import Button from "../Button";
import styled from "styled-components";
import '../../index.css'

const SampleForm = () => {
    const handleSubmit = (e) => {
        alert("Form has been submitted!")
    }
    const handleReset = (e) => {
        alert("Form has been reset!")
    }

    

    return (
        <FormWrap>
            <form 
            onSubmit={(e) => handleSubmit(e)} 
            onReset={(e) => handleReset(e)}>
                <h2>Form Section </h2>
                <div>
                    <input 
                    type="text" 
                    placeholder="Enter your first name"/>
                </div>
                <div>
                    <input  
                    type="text" 
                    placeholder="Enter your last name"/>
                </div>
                <div className="form-footer">
                    <Button
                        type={"Submit"}
                        text={"Submit"}
                    />
                    <Button
                        style={{backgroundColor: "lightgray", marginLeft: "5px"}}
                        type={"reset"}
                        text={"Reset"}
                    />
                </div>
            </form>
        </FormWrap>
    )
}
const FormWrap = styled.div`
justify-content: center;        
display: flex;
        form {
            align-items: center;
            justify-content: center;
            display: flex;
            flex-direction: column;
            .form-footer {
                justify-content: center;
                padding-top: 10px;
                display: flex;
                align-items: center;
            }
        }
    `;

export default SampleForm;