import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { useCardContext } from '../../../Contex/CardContex';
import img1 from '../../../Assets/Img/image-1.jpg'
import img2 from '../../../Assets/Img/image-2.jpg'
import img3 from '../../../Assets/Img/image-3.jpg'
import img4 from '../../../Assets/Img/image-4.jpg'
import img5 from '../../../Assets/Img/image-5.jpg'
import img6 from '../../../Assets/Img/image-6.jpg'
import img7 from '../../../Assets/Img/image-7.jpg'
import img8 from '../../../Assets/Img/image-8.jpg'

export default function SliderCards({ image, title, description, isFirstCard }) {
  const { setCardData } = useCardContext();
  const navigate = useNavigate();
  let imageUrl = img1;

  console.log(image);


  switch (image) {
    case 'image-1.jpg':
      imageUrl = img1;
      break;
    case 'image-2.jpg':
      imageUrl = img2;
      break;
    case 'image-3.jpg':
      imageUrl = img3;
      break;
    case 'image-4.jpg':
      imageUrl = img4;
      break;
    case 'image-5.jpg':
      imageUrl = img5;
      break;
    case 'image-6.jpg':
      imageUrl = img6;
      break;
    case 'image-7.jpg':
      imageUrl = img7;
      break;
    case 'image-8.jpg':
      imageUrl = img8;
      break;
    default:
      imageUrl = img8;
  }

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
          src={imageUrl}
          alt='News picture'
          borderRadius='lg'
          height={'10px'}
          style={{overflow:'hidden'}}
        />
        <Stack mt='7' spacing='2' height={'50px'}>
          <Heading size='md' marginTop={'1vh'}>{title}</Heading>
        </Stack>
      </CardBody>

      <CardFooter justify='center'>
        <ButtonGroup spacing='2' justify='center' align='center'>
          <Button variant='solid' bg='var(--footer-bg-color)' color='white' width={'150%'} onClick={handleButtonClick}>
            Vidi više
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
