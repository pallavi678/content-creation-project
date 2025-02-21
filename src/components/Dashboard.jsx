import React, { useState } from "react";
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
import { BiSolidBookContent, BiSolidVideos, BiSolidCategoryAlt } from "react-icons/bi";
import { MdArticle } from "react-icons/md";
import { FaChalkboardTeacher, FaLaptopCode, FaChevronDown } from "react-icons/fa";
import { SiCkeditor4 } from "react-icons/si";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FcApproval } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";

function Dashboard() {
    const [subList, showSubList] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    const handleToggleSubList = () => {
        showSubList((prev) => !prev);
    };

    const handleToggleSidebar = () => {
        setShowSidebar((prev) => !prev);
    };

    return (
        <section>
            <Navbar className="navbar">
                <div>
                    <Navbar.Brand href="#home">
                        <RxHamburgerMenu onClick={handleToggleSidebar} className="container-fluid" />
                    </Navbar.Brand>
                </div>
            </Navbar>

            <div className="second-div">
                <div
                    style={{
                        width: "25%",
                        minWidth: "200px",
                        background: "#f1f1f1",
                        position: "absolute",
                        left: showSidebar ? "0" : "-25%",
                        top: "0",
                        height: "100vh",
                        transition: "left 0.4s ease-in-out",
                        boxShadow: showSidebar ? "2px 0px 10px rgba(0, 0, 0, 0.2)" : "none",
                        padding: "10px",
                        marginTop: '0px',
                        paddingTop: '20px'
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "flex-end", paddingBottom: "10px" }}>
                        <RxCross2 onClick={handleToggleSidebar} style={{ cursor: "pointer", fontSize: "20px" }} />
                    </div>

                    <ListGroup>
                        <ListGroup.Item className="list-group-item" onClick={handleToggleSubList} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span><BiSolidBookContent /> Content Types</span>
                            <FaChevronDown style={{ transform: subList ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }} />
                        </ListGroup.Item>
                        {subList && (
                            <ListGroup className="second-list-group">
                                <ListGroup.Item>
                                    <Link className="link-wrapper" to="/article"><MdArticle /> Articles</Link>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Link className="link-wrapper" to="/videos"><BiSolidVideos /> Videos</Link>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Link className="link-wrapper" to="/tutorial"><FaChalkboardTeacher /> Tutorials</Link>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Link className="link-wrapper" to="/webinar"><FaLaptopCode /> Webinars</Link>
                                </ListGroup.Item>
                            </ListGroup>
                        )}
                        <ListGroup.Item className="list-group-item">
                            <Link className="link-wrapper" to="/contentEditor"><SiCkeditor4 /> Content Editor</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item">
                            <Link className="link-wrapper" to="/categorization"><BiSolidCategoryAlt /> Categorization & Tagging</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item">
                            <Link className="link-wrapper" to="/scheduling"><RiCalendarScheduleFill /> Scheduling</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item">
                            <Link className="link-wrapper" to="/approval"><FcApproval /> Approval Work Flow</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div style={{ width: "100%", padding: "20px", overflowX: "auto", marginLeft: showSidebar ? "250px" : "0", transition: "margin-left 0.4s ease-in-out" }}>
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
