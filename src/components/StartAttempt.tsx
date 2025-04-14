import React, { useState } from "react";
import { Button } from "react-bootstrap";

/*You will need two pieces of state: the number of attempts and whether the quiz is in progress.
The initial number of attempts is 4
The quiz is initially NOT in progress
There is a button labelled Start Quiz that puts the Quiz in progress and decreases the number of attempts by one.
There is a button labelled Stop Quiz that stops the Quiz from being in progress.
There is a button labelled Mulligan that increase the attempts by one.
When the quiz is in progress, the Start Quiz and Mulligan buttons are disabled.
When the quiz is not in progress, the Stop Quiz button is disabled.
When the attempts are zero, the Start Quiz button is disabled.
The number of attempts should be visible in the interface.
*/

export function StartAttempt(): React.JSX.Element {
    const [inProgress, setInProgress] = useState(false);
    const [attempts, setAttempts] = useState(4);

    const startQuiz = () => {
        if (attempts > 0 && !inProgress) {
            setInProgress(true);
            setAttempts(attempts - 1);
        }
    };

    const stopQuiz = () => {
        if (inProgress) {
            setInProgress(false);
        }
    };

    const mulligan = () => {
        setAttempts(attempts + 1);
    };

    return (
        <div className="flex flex-col items-center gap-4 p-4 border rounded-2xl shadow-md max-w-sm mx-auto">
            <h2 className="text-xl font-semibold">Quiz Attempts: {attempts}</h2>
            <div className="flex gap-2">
                <Button
                    onClick={startQuiz}
                    disabled={inProgress || attempts === 0}
                >
                    Start Quiz
                </Button>
                <Button
                    onClick={stopQuiz}
                    disabled={!inProgress}
                    variant="secondary"
                >
                    Stop Quiz
                </Button>
                <Button
                    onClick={mulligan}
                    disabled={inProgress}
                    variant="outline"
                >
                    Mulligan
                </Button>
            </div>
            {inProgress && (
                <p className="text-green-600 font-medium">
                    Quiz is in progress!
                </p>
            )}
        </div>
    );
}
