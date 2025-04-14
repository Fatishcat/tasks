import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );
    const name: string =
        questionType === "short_answer_question" ? "Short Answer" : (
            "Multiple Choice"
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
            <Button onClick={flipQuestionType}>Change Type</Button>
            <div>{name}</div>
        </div>
    );
}
