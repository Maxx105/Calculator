import React, {useState, useEffect} from "react";
import "./style.css";


function Calculator() {
    const [numOne, setNumOne] = useState('');
    const [numTwo, setNumTwo] = useState('');
    const [op, setOp] = useState('');

    let displayVal = '';

    useEffect(() => {
        doOperation();
        setOp('');
    }, [numTwo]);

    function NumOnClick(e) {
        e.preventDefault();
        displayVal = displayVal + e.target.value;
        document.getElementById('display').value = displayVal;
    }

    function clear(e) {
        e.preventDefault();
        displayVal = '';
        setOp('');
        setNumOne('');
        setNumTwo('');
        document.getElementById('display').value = '';
    }

    function operationOnClick(e) {
        e.preventDefault();
        displayVal = '';
        setOp(e.target.value);
        setNumOne(parseFloat(document.getElementById('display').value));
    }

    function equal(e) {
        e.preventDefault();
        setNumTwo(parseFloat(document.getElementById('display').value));
        doOperation();
    }

    function doOperation() {
        if (op === "+") {
            document.getElementById('display').value = numOne + numTwo;
        } else if (op === "-") {
            document.getElementById('display').value = numOne - numTwo;
        } else if (op === "x") {
            document.getElementById('display').value = numOne * numTwo;
        } else if (op === "/") {
            document.getElementById('display').value = numOne / numTwo;
        }
    }

    function makePosOrNeg(e) {
        e.preventDefault();
        let negDisplayNum = parseFloat(document.getElementById('display').value) * -1;
        displayVal = negDisplayNum;
        document.getElementById('display').value = negDisplayNum;
    }

    function divByHundred(e) {
        e.preventDefault();
        let displayNumDivByHundred = parseFloat(document.getElementById('display').value) / 100;
        displayVal = displayNumDivByHundred;
        document.getElementById('display').value = displayNumDivByHundred;
    }

    return (
        <div>
            <div className ="btn-group-vertical" role="group" aria-label="Vertical button group">
                <div><input size = "40" type="text" name="display" id="display" disabled/></div>
                <div className="btn-group btn-group-lg" role="group" aria-label="First Row">
                    <input type="button" className="btn btn-light btn-outline-dark" onClick = {clear} value="C" id="C"></input>
                    <input type="button" className="btn btn-light btn-outline-dark" onClick = {makePosOrNeg} value="+/-" id="plusminus"></input>
                    <input type="button" className="btn btn-light btn-outline-dark" onClick = {divByHundred} value="%" id="percent"></input>
                    <input type="button" className="btn btn-warning btn-outline-dark operation" onClick = {operationOnClick} value="/" id="divide"></input>
                </div>
                <div className="btn-group btn-group-lg" role="group" aria-label="Second Row">
                    <input type="button" className="btn btn-secondary btn-outline-dark" onClick = {NumOnClick} value="7" id="seven"></input>
                    <input type="button" className="btn btn-secondary btn-outline-dark" onClick = {NumOnClick} value="8" id="eight"></input>
                    <input type="button" className="btn btn-secondary btn-outline-dark" onClick = {NumOnClick} value="9" id="nine"></input>
                    <input type="button" className="btn btn-warning btn-outline-dark operation" onClick = {operationOnClick} value="x" id="multiply"></input>
                </div>
                <div className="btn-group btn-group-lg" role="group" aria-label="Third Row">
                    <input type="button" className="btn btn-secondary btn-outline-dark" onClick = {NumOnClick} value="4" id="four"></input>
                    <input type="button" className="btn btn-secondary btn-outline-dark" onClick = {NumOnClick} value="5" id="five"></input>
                    <input type="button" className="btn btn-secondary btn-outline-dark" onClick = {NumOnClick} value="6" id="six"></input>
                    <input type="button" className="btn btn-warning btn-outline-dark operation" onClick = {operationOnClick} value="-" id="minus"></input>
                </div>
                <div className="btn-group btn-group-lg" role="group" aria-label="Fourth Row">
                    <input type="button" className="btn btn-secondary btn-outline-dark" onClick = {NumOnClick} value="1" id="one"></input>
                    <input type="button" className="btn btn-secondary btn-outline-dark" onClick = {NumOnClick} value="2" id="rwo"></input>
                    <input type="button" className="btn btn-secondary btn-outline-dark" onClick = {NumOnClick} value="3" id="three"></input>
                    <input type="button" className="btn btn-warning btn-outline-dark operation" onClick = {operationOnClick} value="+" id="plus"></input>
                </div>
                <div className="btn-group btn-group-lg" role="group" aria-label="Fourth Row">
                    <input type="button" className="btn btn-secondary btn-outline-dark" onClick = {NumOnClick} value="0" id="zero"></input>
                    <input type="button" className="btn btn-secondary btn-outline-dark" onClick = {NumOnClick} value="." id="decimal"></input>
                    <input type="button" className="btn btn-warning btn-outline-dark operation" onClick = {equal} value="=" id="equal"></input>
                </div>

            </div>








            {/* <form name="calculator">
            <table>
                <tr><input size = "38" type="text" name="display" id="display" disabled/></tr>
                <tr>
                    <tr>
                        <td><button type="button" className="btn btn-primary btn-lg btn-block waves-effect" onClick = {NumOnClick} value="1" id="1">1</button></td>
                        <td><button type="button" className="btn btn-primary btn-lg btn-block" onClick = {NumOnClick} value="2" id="2">2</button ></td>
                        <td><button type="button" className="btn btn-primary btn-lg btn-block" onClick = {NumOnClick} value="3" id="3">3</button></td>
                        <td><button type="button" className="btn btn-danger btn-lg btn-block" onClick = {operationOnClick} value="+" id="+">+</button></td>
                    </tr>
                    <tr>
                        <td><button type="button" className="btn btn-primary btn-lg btn-block" onClick = {NumOnClick} value="4" id="4">4</button></td>
                        <td><button type="button" className="btn btn-primary btn-lg btn-block" onClick = {NumOnClick} value="5" id="5">5</button></td>
                        <td><button type="button" className="btn btn-primary btn-lg btn-block" onClick = {NumOnClick} value="6" id="6">6</button></td>
                        <td><button type="button" className="btn btn-danger btn-lg btn-block" onClick = {operationOnClick} value="-" id="-">-</button></td>
                    </tr>
                    <tr>
                        <td><button type="button" className="btn btn-primary btn-lg btn-block" onClick = {NumOnClick} value="7" id="7">7</button></td>
                        <td><button type="button" className="btn btn-primary btn-lg btn-block" onClick = {NumOnClick} value="8" id="8">8</button></td>
                        <td><button type="button" className="btn btn-primary btn-lg btn-block" onClick = {NumOnClick} value="9" id="9">9</button></td>
                        <td><button type="button" className="btn btn-danger btn-lg btn-block" onClick = {operationOnClick} value="x" id="x">x</button></td>
                    </tr>
                    <tr>
                        <td><button type="button" className="btn btn-primary btn-lg btn-block" onClick = {clear} value="C" id="C">C</button></td>
                        <td><button type="button" className="btn btn-primary btn-lg btn-block" onClick = {NumOnClick} value="0" id="0">0</button></td>
                        <td><button type="button" className="btn btn-primary btn-lg btn-block" onClick = {equal} value="=" id="=">=</button></td>
                        <td><button type="button" className="btn btn-danger btn-lg btn-block" onClick = {operationOnClick} value="/" id="/">/</button></td>
                    </tr>
                </tr>
            </table>
        </form> */}
        </div>
    );
}

export default Calculator;