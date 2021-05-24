import {Modal, Button, Row, Col, Badge, Toast, Dropdown, Container, Collapse} from 'react-bootstrap';
import {BsChevronUp, BsChevronDown} from 'react-icons/bs'
import {useState} from "react";

function ConfirmOrder() {
    const [open, setOpen] = useState(false);

    const handleShow = () => setOpen(false);
    const handleClose = () => setOpen(true);
    return (
        <>
            {/*with confirmation*/}
            <Modal show={open}>

                <Modal.Dialog>
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
                                    onClick={() => setOpen(!open)}
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
                </Modal.Dialog>
            </Modal>


            {/*with Payment*/}
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title className="ml-auto">Оплата заказа</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        <Col xs={12}>
                            <img width="100%" height="100%"
                                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/768px-QR_code_for_mobile_English_Wikipedia.svg.png"
                                 alt="qr-code"/>
                        </Col>
                        <Col xs={{offset: 5}}>
                            или
                        </Col>
                    </Row>
                    <Row className="justify-content">
                        <Col className="ml-auto">
                            <Button variant="primary">Через Kaspi</Button>
                        </Col>
                    </Row>

                </Modal.Body>

                <Modal.Footer>

                    <Row className="justify-content-center">
                        <Col>
                            <Button variant="secondary" className="text-nowrap">Не хочу есть</Button>
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal.Dialog>

            {/*toaster of notification*/}
            <Container>
                <Toast>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt=""/>
                        <strong className="mr-auto">CAFE.KZ</strong>
                        <small>1 min ago</small>
                    </Toast.Header>
                    <Toast.Body>Ваши заказы готовятся</Toast.Body>
                </Toast>
            </Container>

        </>

    );
}

export default ConfirmOrder;