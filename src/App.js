import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navq from "./comp/navbar/Nav";
import ConfirmOrder from "./comp/Modals/ConfirmOrder";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/icons/*.svg'
import FoodCard from "./comp/FoodCard/FoodCard";
import axios from "./axios";
import {Modal, Button, Row, Col, Badge, Toast, Dropdown, Container, Collapse, Card, CardGroup} from 'react-bootstrap';
import {BsChevronUp, BsChevronDown, BsHeart, BsStopwatch, BsExclamationCircle} from 'react-icons/bs'
import {Component, useEffect, useState} from "react";
import requests from "./requests";
import Admin from "./comp/AdminSide/Admin";
import EditFoodType from "./comp/AdminSide/FoodType/EditFoodType";
import Login from "./comp/AdminSide/Login";
import FoodType from "./comp/AdminSide/FoodType/FoodType";
import Food from "./comp/AdminSide/Food/Food";
import Ingredients from "./comp/AdminSide/Ingredients/Ingredients";
import EditFood from "./comp/AdminSide/Food/EditFood";
import EditIngredients from "./comp/AdminSide/Ingredients/EditIngredients";

// import 'bootstrap/dist/js/bootstrap'

function App() {
    const [open1, setOpen1] = useState(false);
    const [isUpdatePage, updatePage] = useState(false);
    const [foods, setFoods] = useState([]);
    const handleShow1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const handleUpdate = () => updatePage(!isUpdatePage);
    let bearer = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZWthQGdtYWlsLmNvbSIsImV4cCI6MTYyMTU4NDM5NywiaWF0IjoxNjIxNTY5OTk3fQ.GrZzVs4Mip4ulUpWTsP_KcLSPsd6oDGAVqe12KsInloe3WAXurA9dVTAkdGvWNsn0MIhkegZgJS7aHHCSC3loQ";

    const [foodInfo, setFoodInfo] = useState({});

    useEffect(() => {
        async function fetchdata() {
            const req = await axios.get(requests.getfoods, {
                headers:
                    {
                        'Authorization': bearer
                    }
            });
            console.log("fetchdata()");
            console.log(req);
            setFoods(req.data);
            console.log("fetchdata()");
        }

        fetchdata();
    }, [isUpdatePage,]);


    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/kitchen">
                        <Admin/>
                    </Route>
                    <Route path={`/editft/:itemId`}>
                        <EditFoodType/>
                    </Route>
                    <Route path={`/editf/:itemId`}>
                        <EditFood/>
                    </Route>
                    <Route path={`/editi/:itemId`}>
                        <EditIngredients/>
                    </Route>
                    <Route path="/foodtype">
                        <FoodType/>
                    </Route>
                    <Route path="/food">
                        <Food/>
                    </Route>
                    <Route path="/ingredients">
                        <Ingredients/>
                    </Route>

                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/">
                        <Modal show={open1} onHide={handleClose1}>
                            <Modal.Header closeButton>
                                <Modal.Title className="ml-auto">Оформление заказа</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col xs={8}>
                                        <p>Пельмени ~(10 min)</p>
                                    </Col>
                                    <Col>
                                        <Badge variant="primary">780 тг</Badge>
                                        <BsChevronDown
                                            onClick={() => setOpen1(!open1)}
                                            aria-controls="example-collapse-text"
                                            aria-expanded="true"></BsChevronDown>
                                        <Collapse
                                            // in={open}
                                        >
                                            <div id="example-collapse-text">
                                                <Button variant="danger" className="btn-sm" size={3}>Отменить</Button>
                                            </div>
                                        </Collapse>
                                    </Col>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer>
                                <Row className="justify-content-center">
                                    <Col>
                                        <Button variant="secondary" className="text-nowrap">Не хочу есть</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="primary">Оплатить</Button>
                                    </Col>
                                </Row>
                            </Modal.Footer>
                        </Modal>
                        <Navq></Navq>
                        {/**/}
                        <br/><br/><br/>
                        {/**/}
                        <Container>
                            {/*<Button onClick={handleUpdate}>get</Button>*/}
                            <CardGroup>
                                {foods.map((food) => (
                                    <Col md={6} lg={4}>
                                        <Card className="mt-2 mx-3">
                                            <Card.Img variant="top" alt={food.name}
                                                      src={food.photo}/>
                                            <Card.Header>
                                                <Row className="justify-content-between">
                                                    <Col xs={6}>
                                                        {food.name}
                                                    </Col>
                                                    <Col><span>
                                <BsHeart fontSize={25}></BsHeart>
                                <BsStopwatch fontSize={25}></BsStopwatch>
                                10 min</span>
                                                    </Col>
                                                </Row>
                                            </Card.Header>
                                            <Card.Body>
                                                <Row>
                                                    <Col>
                                                        <Card.Title>{food.name}
                                                            <BsExclamationCircle></BsExclamationCircle>
                                                        </Card.Title>
                                                    </Col>
                                                    <Col className="row">
                                                        <div className="custom-control custom-switch">
                                                            <label className="custom-control-label "
                                                                   htmlFor="customSwitchesChecked">
                                                                Полная Порция
                                                            </label>
                                                            <input type="checbox"
                                                                   className="custom-control-input"
                                                                   id="customSwitchesChecked"
                                                                   defaultChecked
                                                            />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Badge variant="secondary">Русская кухня</Badge>
                                                        <Badge variant="secondary" className="ml-1">Супы</Badge>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Row className="">
                                                    <Col xs={4}>
                                                        <span>{food.price} тг</span>
                                                    </Col>
                                                    <Col>
                                                        <Button onClick={handleShow1}
                                                                className="align-content-end">Хочу</Button>
                                                    </Col>
                                                </Row>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                ))}
                            </CardGroup>
                        </Container>
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
