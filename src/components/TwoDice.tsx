import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    const rollLeftDie = () => {
        setLeftDie(d6());
    };
    const rollRightDie = () => {
        setRightDie(d6());
    };

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <Button onClick={rollLeftDie}>Roll Left</Button>
            <Button onClick={rollRightDie}>Roll Right</Button>
            {leftDie === 1 && rightDie === 1 ?
                <div>Lose</div>
            : leftDie === rightDie ?
                <div>Win</div>
            :   null}
        </div>
    );
}
