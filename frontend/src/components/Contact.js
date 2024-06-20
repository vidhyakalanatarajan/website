import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';

function Contact() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/contacts')
            .then(response => setContacts(response.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <Container>
                <Content>
                <Title>CONTACT DETAILS</Title>
                <div>
                    {contacts.map(contact => (
                        <React.Fragment key={contact.id}>
                            <h5>{contact.company}</h5>
                            <h5>{contact.name}</h5>
                            <h5>{contact.street}</h5>
                            <h5>{contact.addres}</h5>
                            <h5>{contact.state}</h5>
                        </React.Fragment>
                    ))}
                </div>
                </Content>
                <RightSection>
        <img src="https://www.shutterstock.com/image-vector/contact-us-flat-concept-vector-260nw-1358263394.jpg" alt="Infographic" />
      </RightSection>
                </Container>
        </>
    );
}

export default Contact;

const Title = styled.h1`
  color: #6b21a8;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: #f3e6f3;
`;

const Content = styled.div`
  max-width: 50%;
`;
const RightSection = styled.div`
  img {
    width: 300px;
    height: auto;
    transition: transform 0.5s ease-in-out;
  }

  img:hover {
    transform: scale(1.2);
  }
`;


