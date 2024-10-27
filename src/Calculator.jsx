import { useState } from 'react';
import './Calculator.css';

export default function Calculator() {
    let displayButtons = [7,8,9,'/',6,5,4,'*',3,2,1,'-',0,'.','+'];
    let [number, setNumber] = useState([]);

    function numberClicked(numberButton) {
        setNumber(() => {
            return [...number, numberButton]
        });
    }

    function trackChanges(event) {
        setNumber(() => {
            return [...number, event.target.value];
        });
    }

    let clear = () => {
        setNumber("");
    }

    function calculateResult (text){
        let result = eval(text);
        setNumber(() => {
            return [result];
        });
    }

    function deleteOne(){
        let newArr = number.splice(0, number.length-1);
        setNumber(newArr);
    }
    return (
        <div className='calculator'>
            <h2>Calculator</h2>
            <h3 className='result-h3' type='number' onChange={trackChanges}>{number}</h3>
            <div className="keypad">
                {displayButtons.map((numberButton, idx) => 
                    <button 
                        key={idx} 
                        className="buttons" 
                        onClick={() => 
                            numberClicked(numberButton)
                        }
                        >{numberButton}
                    </button>)
                }
                <button 
                    className="buttons" 
                    onClick={() => 
                        calculateResult(document.querySelector('h3').innerHTML
                    )}
                    >=
                </button>
                <button onClick={deleteOne}><i className="fa-solid fa-delete-left"></i></button>
                <button onClick={clear} className='clear-button'>Clear</button>
            </div>
        </div>
    )
}