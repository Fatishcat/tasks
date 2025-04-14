import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Easter"
    | "Halloween"
    | "Thanksgiving"
    | "New Year";

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("Christmas");

    const advanceByAlphabet = () => {
        const holidays: Holiday[] = [
            "Christmas",
            "Easter",
            "Halloween",
            "New Year",
            "Thanksgiving",
        ];
        const currentIndex = holidays.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidays.length;
        setCurrentHoliday(holidays[nextIndex]);
    };

    const advanceByYear = () => {
        const holidaysInOrder: Holiday[] = [
            "New Year",
            "Easter",
            "Halloween",
            "Thanksgiving",
            "Christmas",
        ];
        const currentIndex = holidaysInOrder.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysInOrder.length;
        setCurrentHoliday(holidaysInOrder[nextIndex]);
    };

    return (
        <div>
            <p>Holiday: {currentHoliday}</p>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}

export default CycleHoliday;
