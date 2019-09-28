import React from "react";
import {Container, Button} from "shards-react";
import '../assets/receita.css'
let QRCode = require('qrcode.react');

const Errors = () => (
  <Container fluid className="main-content-container px-4 pb-4 Receita">
    <h5 className={'Title'}>Guilherme Larissa</h5>
    <p>Receita</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, ex at ultricies elementum, tortor sapien aliquet arcu, in lobortis felis augue volutpat nunc. Nullam quis augue laoreet, fermentum urna a, pulvinar est. Sed sit amet ante gravida, pulvinar ante porttitor, rutrum nisl. Duis consectetur faucibus lectus, nec ullamcorper eros malesuada in. Praesent et arcu neque. Nam sit amet augue arcu. Duis efficitur eros dignissim, pharetra tortor commodo, tristique tellus.</p>
    <ul>
      <l1 className="List">Paracetamol 200g - 4 vezes ao dia</l1>
      <l1 className="List">Ibuprofeno  300g -  Quando sentir dor</l1>
    </ul>
    <QRCode renderAs={'svg'} value="192.168.1.222:3000/user-profile-lite"/>
    <Button className={'Button'} href={'/'}>Voltar para listagem</Button>
  </Container>
);

export default Errors;
