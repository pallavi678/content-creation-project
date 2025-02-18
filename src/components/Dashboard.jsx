import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { RxHamburgerMenu } from "react-icons/rx";
import ListGroup from "react-bootstrap/ListGroup";
import { Routes, Route, Link } from "react-router-dom";
import Article from "./ContentTypes/articles/Article";
import Categorization from "./Categorization/Categorization";
import Approval from "./ApprovalWorkFlow/Approval";
import Tutorial from "./ContentTypes/tutorials/Tutorial";
import Videos from "./ContentTypes/videos/Videos";
import Webinars from "./ContentTypes/webinars/Webinars";
import Contenteditor from "./ContentEditor/Contenteditor";
import Scheduling from "./Scheduling/Scheduling";

function Dashboard() {
    const [subList, showSubList] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);

    const handleToggleSubList = () => {
        showSubList((prev) => !prev);
    };

    const handleToggleSidebar = () => {
        setShowSidebar((prev) => !prev);
    };

    return (
        <section>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <RxHamburgerMenu onClick={handleToggleSidebar} />
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <div style={{ display: "flex", height: "100vh" }}>
                {/* Sidebar */}
                {showSidebar && (
                    <div style={{ width: "20%", minWidth: "150px", background: "#f8f9fa", padding: "10px" }}>
                        <ListGroup>
                            <ListGroup.Item action onClick={handleToggleSubList}>Content Types</ListGroup.Item>
                            {subList && (
                                <ListGroup style={{ marginLeft: "15px" }}>
                                    <ListGroup.Item>
                                        <Link to="/article">Articles</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="/videos">Videos</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="/tutorial">Tutorials</Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="/webinar">Webinars</Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            )}
                            <ListGroup.Item>
                                <Link to="/contentEditor">Content Editor</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/categorization">Categorization & Tagging</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/scheduling">Scheduling</Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/approval">Approval Work Flow</Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                )}

                {/* Main Content */}
                <div style={{ width: "80%", padding: "20px", overflowX: "auto" }}>
                    <Routes>
                        <Route path='/approval' element={<Approval />} />
                        <Route path='/categorization' element={<Categorization />} />
                        <Route path='/contentEditor' element={<Contenteditor />} />
                        <Route path='/scheduling' element={<Scheduling />} />
                        <Route path='/article' element={<Article />} />
                        <Route path='/tutorial' element={<Tutorial />} />
                        <Route path='/videos' element={<Videos />} />
                        <Route path='/webinar' element={<Webinars />} />
                    </Routes>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;