import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );
    function flipQuestionType(): void {
        // Set visible to be the logical opposite of its previous value
        setQuestionType(
            questionType === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }
    return (
        <div>
            <Button onClick={flipQuestionType}>Change Question Type</Button>
            <div>
                <span>questionType</span>
            </div>
        </div>
    );
}
