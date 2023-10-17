import React from "react";
import tasks from "../tasks";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
import { SiInstagram, SiBehance } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";


export const Home = () => {
    let history = useNavigate();

    // You may skip this part if you're
    // using react-context api or redux
    function setID(id, description, status) {
        localStorage.setItem("id", id);
        localStorage.setItem("description", description);
        localStorage.setItem("status", status);
    }

    // Deleted function - functionality
    // for deleting the entry
    function deleted(id) {
        let index = tasks
            .map(function (e) {
                return e.id;
            })
            .indexOf(id);

        // deleting the entry with index
        tasks.splice(index, 1);

        // We need to re-render the page for getting
        // the results so redirect to same page.
        history("/home");
    }
    return (
        <div>
            <section className="one">
                <nav>
                    <ul className="d-flex navbar-link">
                        <li>Get Started</li>
                        <li className="logo">
                            <span className="circle-border">N</span>{" "}
                            <span>Ahmed Abdunaby</span>
                        </li>
                        <li>About</li>
                    </ul>
                </nav>
                <video className="video-bg" autoPlay muted>
          <source type="video/mp4" src={"https://res.cloudinary.com/nischal1/video/upload/v1688173328/NeonBg_ccmqik.mp4"} />
                </video>

                <div className="linear-background"></div>
                <div className="XL-text">AHMED ABDULNABY</div>
                <div className="L-text">AHMED ABDULNABY</div>

                <div className="container-center">
                    <div className="M-text">Frontend Developer</div>

                    <div className="social-icons">
                        <span>
                            <SiInstagram className="fab" />
                        </span>
                        <span>
                            <FaLinkedinIn className="fab" />
                        </span>
                        <span>
                            <SiBehance className="fab" />
                        </span>
                    </div>
                </div>

                <div className="text-M">
                    <span></span>= World
                </div>
                <span className="GetStarted">
                    <a href="#tasks">Get Started</a>
                </span>

                <div className="featured">FEATURED</div>
            </section>

            <section>
                <div style={{ margin: "5rem" }} id="tasks">
                    {/* Button for redirecting to create page for
            insertion of values */}
                    <Link to="/create">
                        <Button className="mb-4" variant="success" size="md" id="bgPurple">
                            Start a new task
                        </Button>   
                    </Link>
                    <Table striped bordered hover size="md">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Status</th>
                                <th></th>
                                <th></th>
                                <th>Description</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* Mapping though every element 
                    in the array and showing the 
                    data in the form of table */}
                            {tasks.map((task) => {
                                return (
                                    <tr>
                                        <td rowSpan={2}>{task.description}</td>
                                        {task.status === "In Progress" ?
                                            <td rowSpan={2} style={{ backgroundColor: '#74e9ed' }}>{task.status}</td>
                                            : task.status === "Finished" ?
                                                <td rowSpan={2} style={{ backgroundColor: '#52d12c' }}>{task.status}</td>
                                                : task.status === "Not Started" ?
                                                    <td rowSpan={2} style={{ backgroundColor: '#d6d60b' }}>{task.status}</td>
                                                    :
                                                    ""
                                        }
                                        {/* getting theid,name, and 
                                age for storing these
                                value in the jsx with 
                                onclick event */}

                                        <td rowSpan={2}>
                                            <Link to={`/edit`}>
                                                <Button
                                                    onClick={(e) =>
                                                        setID(
                                                            task.id,
                                                            task.description,
                                                            task.status
                                                        )
                                                    }
                                                    variant="info"
                                                >
                                                    Update
                                                </Button>
                                            </Link>
                                        </td>

                                        {/* Using the deleted function passing
                                the id of an entry */}
                                        <td rowSpan={2}>
                                            <Button
                                                onClick={(e) =>
                                                    deleted(task.id)
                                                }
                                                variant="danger"
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>

                </div>
            </section>

            <section className="footer">
                <div className="footer-content">
                    <ul className="d-flex navbar-link">
                        <li className="logo">
                            <span className="circle-border">N</span> <span>Ahmed Abdunaby</span>
                        </li>
                        <li>Services</li>
                        <li>Get started</li>
                    </ul>
                    <div className="footer-icon">
                        <span></span>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <span></span>
                    </div>
                    <ul className="footer-link">
                        <li className="footer-title">located</li>
                        <li className="footer-text">New Cairo, EG</li>
                        <li className="footer-title">Phone no:</li>
                        <li className="footer-text"><a href="tel:+20 1147428374">+20 1147428374</a></li>
                        <li className="footer-title">Mail:</li>
                        <li className="footer-text"><a href="mailto:ahmedabnaby.97@gmail.com">ahmedabnaby.97@gmail.com</a></li>
                    </ul>
                </div>

                <div className="line-right"></div>

                <div className="copyright">
                    Copyrights © 2023 Ahmed Abdunaby. All rights reserved.
                </div>
            </section>
        </div>
    );
};
