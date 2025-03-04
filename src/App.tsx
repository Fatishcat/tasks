import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>Header</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Xander dufour, Hello World! I need to test
                more changes
            </p>
            <div>
                <img src={"./Assets/Guy in jail.jpg"} alt="A picture" />
            </div>
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World!
                </Button>
            </div>
            <div>
                <ul>
                    <li>bungus</li>
                    <li>bungus</li>
                    <li>bungus</li>
                </ul>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "10000px",
                                    height: "10px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "10000px",
                                    height: "10px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
