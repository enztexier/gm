import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Checkbox from './Checkbox';

const Multiplication = () => {

    //const tableIndicative = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const table = {
        1: {
            digit: 1,
            booleanState: false
        },
        2: {
            digit: 2,
            booleanState: false
        },
        3: {
            digit: 3,
            booleanState: false
        },
        4: {
            digit: 4,
            booleanState: false
        },
        5: {
            digit: 5,
            booleanState: false
        },
        6: {
            digit: 6,
            booleanState: false
        },
        7: {
            digit: 7,
            booleanState: false
        },
        8: {
            digit: 8,
            booleanState: false
        },
        9: {
            digit: 9,
            booleanState: false
        },
        10: {
            digit: 10,
            booleanState: false
        }
    }


    const [tableState, setTableState] = useState(table)
    const [selectTable, setSelectTable] = useState([])
    const [machineArray, setMachineArray] = useState([])
    const [time, setTime] = useState(1000)



    const liste = Object.keys(tableState)
        .map(val =>
            <Checkbox
                label={" Table de " + tableState[val].digit}
                value={tableState[val].booleanState}
                onChange={() => Tb(val)}
                key={val}
            />
        )

    const Tb = (val) => {

        const cur = { ...tableState }
        cur[val].booleanState = !cur[val].booleanState;
        setTableState(cur)

        if (tableState[val].booleanState === true) {
            setSelectTable(cur => [...cur, val])
        }
        else {
            const index = selectTable.indexOf(val)
            console.log(index)
            if (index > -1) {
                selectTable.splice(index, 1)
            }
        }

    }

    let randomNumber = (max) => {
        return Math.floor(Math.random() * max)
    }


    const randomMachine = () => {

        //let randomNbr = randomNumber(11);
        let tt = [];

        for (const element of selectTable) {

            for (let i = 1; i < 11; i++) {
                let result = element * i
                tt.push([element, i, result])
            }

        }

        const shuffledArray = tt.sort((a, b) => 0.5 - Math.random())

        console.log(shuffledArray)


        //let b = selectTable.map(x)
        //console.log(b)
    }


    let x = (num) => {
        //console.log(num);
        //console.log(selectTable);
    
        //return cc;
        //console.log(bb)
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Multiplication</h1>

            {liste}

            <input type="range" min="100" max="5000" value={time} onChange={(e) => setTime(e.target.value)}></input>
            <h1>{time}</h1>
            {selectTable.map(val => <p key={val}>{val}</p>)}

            <button onClick={randomMachine}>GO</button>



        </div>
    );
};

export default Multiplication;

/****
 * 


    const Tb = (val) => {

        let random = randomNumber(11);
        console.log(val);
        if (random === 0) {
            console.log("000");
            random = randomNumber(11);
        }
        else {
            let result = random * val;
            let display = <p>{val} * {random} =  </p>;
            setResult(result);
            setTableHistory(display);
        }

    }





            {tableIndicative.map(val => <Checkbox
                key={val}
                label={val}
                value={checked}
                onChange={() => Tb(val)}
            />
            )}



                        <br></br>
            {tableHistory}{result}








 * 
 * 
 * 
 */