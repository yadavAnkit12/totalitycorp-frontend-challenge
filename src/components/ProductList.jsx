import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ProductList = ({data}) => {
  const [cartData, setCartData] = useState([]);
  console.log(data)

  useEffect(() => {
    // Load cartData from localStorage
    const savedCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    setCartData(savedCartData);
  }, []);

  const addToCart = (product) => {
    if(JSON.parse(localStorage.getItem('profile'))){
      const updatedCart = [...cartData];
      const existingProductIndex = updatedCart.findIndex(
        (item) => item.id === product.id
      );
  
      if (existingProductIndex !== -1) {
        // If the product is already in the cart, remove it
        updatedCart.splice(existingProductIndex, 1);
      } else {
        // Otherwise, add it to the cart
        const newProduct = { ...product, quantity: 1 };
        updatedCart.push(newProduct);
      }
  
      // Update cartData state and store it in localStorage
      setCartData(updatedCart);
      localStorage.setItem("cartData", JSON.stringify(updatedCart));
    }
    else{
      alert('Please log in')
    }
 
  };

  const isProductInCart = (product) => {
    return cartData.some((item) => item.id === product.id);
  };

  if(data.length===0){
    return <div className="container" style={{textAlign:'center',paddingTop:'20%',paddingBottom:'20%'}}>
      <h3>No such items...</h3>
    </div>
  }
else{
  return (
    <Container>
      <Row>
        {data.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100" style={{boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ height: "50%", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ₹{Math.ceil(product.price)*70}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant={isProductInCart(product) ? "danger" : "primary"}
                  onClick={() => addToCart(product)}
                >
                  {isProductInCart(product) ? "Remove from Cart" : "Add to Cart"}
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
        }
};

export default ProductList;
