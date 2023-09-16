import { useState } from 'react';

interface IButtonShowcaseProps {
    Button: any;
    children: React.ReactNode;
}

const ButtonShowcase = ({Button, children}: IButtonShowcaseProps) => {
    const [counter, setCounter] = useState(0);
    
    return (
        <div style={{display: "flex", justifyContent: "space-around", width: "40%", margin: "0 auto"}}>
        <Button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>{children}</Button>
        <h4>{counter}</h4>
        </div>
    );
    }
    export default ButtonShowcase;