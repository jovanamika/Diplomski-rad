import {
    Container,
    HStack,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Textarea,
    VStack,
    Tag,
    TagLabel,
    TagCloseButton,
    Select
} from '@chakra-ui/react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import React from 'react';
import dayjs from 'dayjs';

export default function AddSeminar() {
    const [date, setDate] = React.useState(null);
    const [time, setTime] = React.useState(null);
    const [tags, setTags] = React.useState([]);
    const [title, setTitle] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    const [selectedName, setSelectedName] = React.useState('');
    const nameOptions = ["John Doe", "Jane Smith", "Bob Johnson"]; // Add your list of names

    const handleAddTag = () => {
        if (selectedName) {
            const [firstName, lastName] = selectedName.split(' ');
            const newTag = { firstName, lastName };
            setTags([...tags, newTag]);
            setSelectedName('');
        }
    };

    const handleRemoveTag = (index) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleSubmit = () => {
        console.log("SUBMIT");
        const formattedDate = date
            ? dayjs(date).format('MM/DD/YYYY')
            : ''; // Format the selectedDate as MM/DD/YYYY
        console.log("Datum: ", formattedDate);
        console.log(title, description, date, time, tags);
    }

    const handleDelete = () => {
        setTitle('');
        setDescription('');
        setDate(null);
        setTime(null);
        setTags([]);
        setSelectedName('');
    }


    return (
        <Container justifyContent={'center'} align='center' width={'100%'} pt={'3vh'}>
            <FormControl id="title" isRequired mb={'2vh'}>
                <FormLabel>Naslov</FormLabel>
                <Input
                    placeholder="Naslov"
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </FormControl>
            <FormControl id="description" isRequired mb={'2vh'}>
                <FormLabel></FormLabel>
                <Textarea
                    value={description}
                    placeholder="Sadržaj"
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                    //border="1px solid black"
                    height={"150px"}
                    style={{ verticalAlign: 'top' }}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </FormControl>
            <VStack spacing={2} align="start" mb="4">
                {tags.map((tag, index) => (
                    <Tag key={index} size="lg" variant="solid" colorScheme="teal">
                        <TagLabel>{`${tag.firstName} ${tag.lastName}`}</TagLabel>
                        <TagCloseButton onClick={() => handleRemoveTag(index)} />
                    </Tag>
                ))}
            </VStack>

            <HStack>
                <Select
                    placeholder="Izaberite predavača"
                    value={selectedName}
                    onChange={(e) => setSelectedName(e.target.value)}
                    width={'80%'}
                >
                    {nameOptions.map((name, index) => (
                        <option key={index} value={name}>
                            {name}
                        </option>
                    ))}
                </Select>
                <Button onClick={handleAddTag} colorScheme="teal" pl={'2vh'} pr={'2vh'} width='20%'>
                    Dodaj
                </Button>
            </HStack>
            <HStack mt='5'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Datum"
                        value={date}
                        onChange={(newValue) => setDate(newValue)}
                    >

                    </DatePicker>
                </LocalizationProvider>


                <Input
                    placeholder="hh:mm:ss"
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                    height={"56px"}
                    width={'50%'}
                    marginLeft={'2vh'}
                    value={time || ''}
                    onChange={handleTimeChange}
                />


            </HStack>
            <Stack spacing={10} direction={['column', 'row']} mt={'5vh'} mb={'2vh'} align={'center'} justify={'center'}>
                <Button
                    className='cancel-btn'
                    w="30%"
                    style={{
                        background: 'white',
                        border: '1px solid var(--color-blue)',
                        color: 'var(--color-blue)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--color-dark-blue)';
                        e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.color = 'var(--color-blue)';
                    }}
                    onClick={handleDelete}
                >
                    Izbriši
                </Button>
                <Button
                    className='confirm-btn'
                    w="30%"
                    style={{
                        background: 'var(--color-blue)',
                        color: 'white'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--color-dark-blue)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--color-blue)';
                        e.currentTarget.style.color = 'white';
                    }}
                    onClick={handleSubmit}
                >
                    Sačuvaj
                </Button>
            </Stack>
        </Container>
    );
}
