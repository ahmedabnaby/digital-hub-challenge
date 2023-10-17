// Filename - Edit.js
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import tasks from "../tasks";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Edit = () => {
    // Here usestate has been used in order
    // to set and get values from the jsx
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [id, setid] = useState("");

    // Used for navigation with logic in javascript
    let history = useNavigate();

    // Getting an index of an entry with an id
    let index = tasks
        .map(function (e) {
            return e.id;
        })
        .indexOf(id);

    // Function for handling the edit and
    // pushing changes of editing/updating
    const handelSubmit = (e) => {
        // Preventing from reload
        e.preventDefault();

        // Getting an index of an tasks
        let a = tasks[index];

        // Putting the value from the input
        // textfield and replacing it from
        // existing for updation
        a.description = description;
        a.status = status;


        // Redirecting to main page
        history("/home");
    };

    // Useeffect take care that page will
    // be rendered only once
    useEffect(() => {
        setDescription(localStorage.getItem("description"));
        setStatus(localStorage.getItem("status"));
        setid(localStorage.getItem("id"));
    }, []);

    return (
        <div>
            <Form
                className="d-grid gap-2"
                style={{ margin: "5rem" }}
            >
                {/* setting a description from the 
					input textfiled */}
                <Form.Group
                    className="mb-3"
                    controlId="formBasicDesciption"
                >
                    <Form.Control
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                        type="text"
                        placeholder="Enter Description"
                    />
                </Form.Group>

                {/* setting a status from the select options tag */}
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

                {/* Hadinling an onclick event 
					running an edit logic */}
                <Button
                    onClick={(e) => handelSubmit(e)}
                    variant="primary"
                    type="submit"
                    size="lg"
                >
                    Update
                </Button>

                {/* Redirecting to main page after editing */}
                <Link className="d-grid gap-2" to="/home">
                    <Button variant="warning" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}
