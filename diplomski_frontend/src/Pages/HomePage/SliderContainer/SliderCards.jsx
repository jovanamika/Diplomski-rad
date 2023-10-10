import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { useCardContext } from '../../../Contex/CardContex';

export default function SliderCards({ image, title, description, isFirstCard}) {
  const { setCardData } = useCardContext();
  const navigate = useNavigate();

  const handleButtonClick = () => {
      // Set the card data in the context
      setCardData({ image, title, description });

      navigate('/card');
      // You can use react-router's Link or programmatically navigate as shown in previous answers
  };
  return (
    <Card maxW='sm' background={'#e7e9fo'}>
    <CardBody>
      <Image
        src={image}
        alt='News picture'
        borderRadius='lg'
      />
      <Stack mt='7' spacing='2' height={'50px'}>
        <Heading size='md' marginTop={'3vh'}>{title}</Heading>
      </Stack>
    </CardBody>
  
    <CardFooter justify='center'>
      <ButtonGroup  spacing='2' justify='center' align='center'>
        <Button variant='solid' bg='var(--footer-bg-color)'color='white' width={'150%'} onClick={handleButtonClick}>
          Vidi više
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}
