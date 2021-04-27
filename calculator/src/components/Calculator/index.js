import React, {useState, useEffect} from "react";
import "./style.css";


function Calculator() {
    const [numOne, setNumOne] = useState('');
    const [numTwo, setNumTwo] = useState('');
    const [op, setOp] = useState('');

    let valOne = '';

    useEffect(() => {
        doOperation();
        setOp('');
    }, [numTwo]);

    function NumOnClick(e) {
        e.preventDefault();
        valOne = valOne + e.target.value;
        document.getElementById('display').value = valOne;
    }

    function clear(e) {
        e.preventDefault();
        setOp('');
        setNumOne('');
        setNumTwo('');
        document.getElementById('display').value = '';
    }

    function operationOnClick(e) {
        e.preventDefault();
        valOne = '';
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

    return (
        <div>
            <form name="calculator">
            <table>
                <tr><input size = "38" type="text" name="display" id="display" disabled/></tr>
                <tr>
                    <tr>
                        <td><button type="button" className="btn btn-primary btn-lg btn-block" onClick = {NumOnClick} value="1" id="1">1</button></td>
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
        </form>
        </div>
    );
}

export default Calculator;