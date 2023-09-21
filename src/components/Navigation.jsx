import { Avatar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link,useNavigate } from 'react-router-dom';

const Navigation=({setSearch})=>{
  const navigate=useNavigate()
  const [searchProduct,setSearchProduct]=useState('')
  const [avatar,setAvatar]=useState('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJ8AnwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EADQQAAICAAQDBgQFBAMAAAAAAAABAgMEBRExIUFhEhMiMlFxQoGhwRQzYpGxI1Jy0TSCkv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7iAAAAfAAeZzhCPanJRXq2V+NzSFLcKtJy2b5IqLrrL5dq2bk+uyAt8Rm9MOFUXY/XZEG3NMTPytQX6V/shPiANssRfPzXTfzNTbfUADKbWz0fQ2QxOIh5brF/wBjUAJ9Wa4mHCfZsXXgTqM1os0U9a3+rb9yiAHWRlGUU4tNPZoycxh8Tbh5a1TaXo9i5wWY14jSEtIWck9n7ATgEAAAAAGG9AEmkm29EtyjzDMZXN10tqtfEviGaY13TdNb/pJ8f1MrwCAAAAAAAAAAAAABtsABa5dmTTVWJlqtlN/cuDki2ynHPVYe5/4Sb+gFuAgAK3N8X3NfdQfimuLXJFhZNQhKUtktWcxfbK+6Vkt5P9kBr0AAAAAAAAA1R7VVr2rn/wCQPAPUoTj5oSXujyAAAAAABttw4gAdBluL/E0eJ/1I8H16k05rA4h4bExnr4Xwl7HSJ67AV2dXdjDxqT42Pj7IpCbm9nbxritoRSIQAAAAAAJOFwc8R4m+zWvi9fY8YSn8Rco/CuMvYu0lFJRWiWwGuqiqn8uKT/u5m0wABGvwNVq1iuxL1XP5EkAUNtU6ZuFi0a+p4LvF0LEVNfEvK+pSaNNp8uQAAAAAAOhyq7vcJHV+KHhf2OeLPI7NLbK38S1XyAg4qXbxNsvWbNQb1YAAAAGABa5XWo0OfOT36Ewj5f8A8Ov2+5IAAAAAABUZlBQxTa2kky3KzNvza/8AH7gQQAAAAAk5dPu8XB+/8EYzCTjNMA1pJrmjBtxcexi7Y/rZqAAAAHsABaZXYpUOHOL+jJpR4W7uLlL4XwkuhdxkpRUotOL2a5gZAAAAACnzGfeYl6bRWhZYvELD1t7zeyKTXVtgAAAAAAzVHt2KK5mCVllfeY2C5JN/QDbnNfYxanynHX5kAvc4p7zC9tLjXx+XMogAAAAB8ABIwuKnh3ovFDnH09jGHwtt+jitI/3PYn1ZfTDz62PrsBtpxNN3kktfR7m4xGEIcIxSXokZANpLVtJL1Il+PqrWlelj+n7ks1WYamzz1xfVcGBS2WStsc5vVs8lhdlunGmXyl/sgzhOuTjOLi16geQAAAAAtMir1nZa1suyirbOjy2l0YSEZLxPxP5gSZxUouMlqmtGjmcVQ8PfKt7Ly+x05BzTCfiKu1H8yHFdV6AUAHQACwwWB1SsuXB8Ywf3MZdhu3/WsXhT8K9epZAOn0AAAAAAAANd9EL4OM17P0NgApMTh54aajLins/U0l9bXG2twmtUyluqlTa65br6oDWAZjFzkoxWrb0SAk5bh/xGJWq8EeMjoyNgMKsLQo7yfGT6kkAAAKfNcC03fSuD4ziv5K6it3XQrXPd9DqSF+BhVdO6paOS8voAjFRiox2XBGQAAAAAAAAAAAAEPMqe8p7yK8UP4Jg07XBrXXhoBz3PgXeV4HukrrV42vCnyGAy2NMu8t0lLXwrkiyAAAAAAAAA1zrjLlxNMoSiyUHxAhgkuuL5fsa3S+T19wNQPbrkt0edAMAylqelXN8kB4BtVL5s2RrjHZAaY1yl0RuhBR9z2AAAAAAD/9k=')
  const [show,setShow]=useState(true)
  const [name,setName]=useState('')
  useEffect(()=>{
   if(JSON.parse(localStorage.getItem('profile'))){
    setAvatar(JSON.parse(localStorage.getItem('profile')).image)
    setName(JSON.parse(localStorage.getItem('profile')).name)
    setShow(false)
   }
  },[])

  const handleSearch=()=>{
    setSearch(searchProduct)
  }
  
  const showCartData=()=>{
    if(JSON.parse(localStorage.getItem('profile'))){
      navigate('/showCart')
    }
    else{
      alert('You must be login')
    }
  }


    return <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand><Avatar alt="Remy Sharp" src={avatar}/><Typography>{name}</Typography></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link onClick={showCartData}>Cart</Nav.Link>
         {show && <Nav.Link href='/login'>log In</Nav.Link>}
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={e=>setSearchProduct(e.target.value)}
          />
          <Button variant="outline-success" onClick={handleSearch}>Search</Button>
        </Form>
      </Navbar.Collapse>
          
    </Container>
  </Navbar>
}

export default Navigation