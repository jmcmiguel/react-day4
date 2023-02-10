import React, { Component } from 'react';
import Card from '../Components/Card';
import { Container } from '@mui/system';

class Contact extends Component {
  state = {
    cards: [
      { title: 'Location', subtitle: 'This is the location', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero consectetur sint animi sed itaque.' },
      { title: 'Contact Number', subtitle: 'This is the contact number', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero consectetur sint animi sed itaque.' },
      { title: 'Email', subtitle: 'this is the email', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero consectetur sint animi sed itaque.' },
    ],
  };

  render() {
    return (
      <div>
        <Container maxWidth="sm" style={{ marginTop: 50 }}>
          {this.state.cards.map((card, index) => {
            return (
              <Card
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
              />
            );
          })}
        </Container>
      </div>
    );
  }
}

export default Contact;
