import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import tasks from "../tasks"
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

export const Create = () => {
    // Making usestate for setting and
    // fetching a value in jsx
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");

    // Using useNavigation for redirecting to pages
    let history = useNavigate();

    // Function for creating a post/entry
    const handelSubmit = (e) => {
        e.preventDefault(); // Prevent reload

        const ids = uuid(); // Creating unique id
        let uni = ids.slice(0, 8); // Slicing unique id

        // Fetching a value from usestate and
        // pushing to javascript object
        var a = description,
            b = status;
        tasks.push({ id: uni, description: a, status: b });

        // Redirecting to home page after creation done
        history("/home");
    };

    return (
        <div>
            <Form
                className="d-grid gap-2"
                style={{ margin: "5rem" }}
            >
                {/* Fetching a value from input textfield 
                    in a setDescription using usestate*/}
                <Form.Group
                    className="mb-3"
                    controlId="formBasicDescription"
                >
                    <Form.Control
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                        type="text"
                        placeholder="Enter description"
                        required
                    />
                </Form.Group>

                {/* Fetching a value from input select field in
                    a setStatus using usestate*/}
                <Form.Group
                    className="mb-3"
                    controlId="formBasicStatus"
                >
                    <Form.Select aria-label="Default select example"
                        required
                        onChange={(e) =>
                            setStatus(e.target.value)
                        }>
                        <option value="Not Started">Please Select The Status</option>
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Finished">Finished</option>
                    </Form.Select>
                </Form.Group>

                {/* handing a onclick event in button for
                    firing a function */}
                <Button
                    onClick={(e) => handelSubmit(e)}
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>

                {/* Redirecting back to home page */}
                <Link className="d-grid gap-2" to="/home">
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}
