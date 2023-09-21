import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Card, Button, ButtonGroup, Row, Col, Modal } from "react-bootstrap"
import { Link } from "react-router-dom"

const Cart = () => {
    const [cartData, setCartData] = useState([]); // Initialize as an empty array
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        const storedCartData = localStorage.getItem("cartData");
        if (storedCartData) {

            setCartData(JSON.parse(storedCartData));
        }
    }, []);


    useEffect(() => {
        let total = 0
        cartData.map(elem => {
            total = total + (Math.ceil(elem.price) * elem.quantity * 70)
        })
        setAmount(total)
    }, [cartData])

    const increaseProduct = (product) => {
        const updatedCart = cartData.map((elem) => {
            if (elem.id === product.id) {
                return { ...elem, quantity: elem.quantity + 1 };
            }
            return elem;
        });

        setCartData(updatedCart);
        localStorage.setItem("cartData", JSON.stringify(updatedCart));
    };


    const decreaseProduct = (product) => {
        const updatedCart = cartData.map((elem) => {
            if (elem.id === product.id && elem.quantity > 1) {
                return { ...elem, quantity: elem.quantity - 1 };
            }
            return elem;
        });

        setCartData(updatedCart);
        localStorage.setItem("cartData", JSON.stringify(updatedCart));
    };

    const removeProduct = (product) => {
        const updatedCart = cartData.filter(elem => elem.id !== product.id)
        setCartData(updatedCart);
        localStorage.setItem("cartData", JSON.stringify(updatedCart));
    }

    const handleCheckout=()=>{
        var options={
            key:"rzp_test_yPO1JYK4yYvX2o",
            key_secret:"CnZZvC6OTPoUhlpSJi3GjnCY",
            amount:amount*100,
            currency:"INR",
            name:"E-commerce",
            description:"Test mode",
            handler:function(response){
                alert(response.razorpay_payment_id)
            },
            prefill:{
                name:'Ankit',
                email:'ankit@gmail.com',
                contact:"7788990088"
            },
            notes:{
                address:"Office"
            },
            theme:{
                color:"#3399cc"
            }
        }
        var pay=window.Razorpay(options)
        pay.open()
    }


    return (
        <div className="container" style={{ display: 'inline' }}>
            <ButtonGroup>
                <i class="fas fa-shopping-cart"></i>
                <Link to='/'> <img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="" height={40} style={{ marginTop: '15px', marginLeft: '30px' }}></img></Link><h2 style={{ marginTop: '10px', marginLeft: '30px' }}>Continue Shopping</h2>
            </ButtonGroup> <hr></hr>
            <Card style={{ padding: '10px' }}>
                {cartData.length > 0 ? ( // Check if cartData is not empty
                    <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                        {cartData.map(elem => {
                            return (
                                <Card style={{ width: '100%', backgroundColor: 'beige', margin: '0%' }} key={elem.id}>
                                    <Card.Body>
                                        <Row>
                                            <Col sm='4'>
                                                <img src={elem.image} style={{ width: '65px' }} alt=""></img>
                                                <h3>{elem.title}</h3>
                                            </Col>
                                            <Col sm='4'>
                                                <ButtonGroup>
                                                    <Button variant="danger" onClick={() => decreaseProduct(elem)}>-</Button>
                                                    <Button>{elem.quantity}</Button>
                                                    <Button variant="success" onClick={() => increaseProduct(elem)}>+</Button>
                                                </ButtonGroup>
                                            </Col>
                                            <Col sm='4'>
                                                <h3>₹={Math.ceil(elem.price) * 70 * elem.quantity}/-</h3>
                                                <Button onClick={() => removeProduct(elem)}>Remove</Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            );
                        })}
                        <div style={{ margin: '2%', display: 'flex', justifyContent: 'space-between' }}>
                            <Typography>Total amount : {amount} /-</Typography>
                            <Button variant="warning" onClick={handleCheckout}>Checkout</Button>
                        </div>
                    </Card.Body>
                ) : (
                    <div style={{ textAlign: 'center' }}>
                        <Typography variant="h6">Your cart is empty.</Typography>
                    </div>
                )}
             
            </Card>
        </div>
    );
}

export default Cart;
