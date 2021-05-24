import {CardGroup, Card, CardImgProps, Badge, Button, Col, Row, Container,} from "react-bootstrap";
import {BsHeart, BsStopwatch, BsExclamationCircle} from 'react-icons/bs'
import ConfirmOrder from "../Modals/ConfirmOrder";
function FoodCard() {

    return (
        <Container>
            <CardGroup>
                <Card className="mt-2 mx-3">
                    <Card.Img variant="top" alt="pelmeni"
                              src="https://tishka.org/master%20class/dumplings%20with%20mushrooms/pelmeni-s-gribami.jpg"/>
                    <Card.Header>
                        <Row className="justify-content-between">
                            <Col xs={6}>
                                Пельмени
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
                                <Card.Title>I-Блюдо <BsExclamationCircle></BsExclamationCircle>
                                </Card.Title>
                            </Col>
                            <Col className="row">
                                <div className="custom-control custom-switch">
                                    <label className="custom-control-label " htmlFor="customSwitchesChecked">
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
                                <span>2$</span>
                            </Col>
                            <Col>
                                <Button onClick={ConfirmOrder} className="align-content-end">Хочу</Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>


                <Card className="mt-2 mx-3">
                    <Card.Img variant="top" alt="pelmeni"
                              src="https://tishka.org/master%20class/dumplings%20with%20mushrooms/pelmeni-s-gribami.jpg"/>
                    <Card.Header>
                        <Row className="justify-content-between">
                            <Col xs={6}>
                                Пельмени
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
                                <Card.Title>I-Блюдо <BsExclamationCircle></BsExclamationCircle>
                                </Card.Title>
                            </Col>
                            <Col>
                                <div className="custom-control custom-switch">
                                    <label className="custom-control-label " htmlFor="customSwitchesChecked">
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
                                <span>2$</span>
                            </Col>
                            <Col>
                                <Button onClick={ConfirmOrder} className="align-content-end">Хочу</Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Container>
    );

}

export default FoodCard;