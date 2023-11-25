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
    const [input, setInput] = React.useState('')
    const [value, setValue] = React.useState(null);
    const [time, setTime] = React.useState(null);
    const [tags, setTags] = React.useState([]);
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



    const handleInputChange = (e) => setInput(e.target.value)

    const handleDateChange = () => {
        const formattedDate = value
            ? dayjs(value).format('MM/DD/YYYY')
            : ''; // Format the selectedDate as MM/DD/YYYY
        console.log("Datum: ", formattedDate);
    }

    return (
        <Container justifyContent={'center'} align='center' width={'100%'} pt={'5vh'}>
            <FormControl id="title" isRequired mb={'2vh'}>
                <FormLabel>Naslov</FormLabel>
                <Input
                    placeholder="Title"
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                    border="1px solid black"
                />
            </FormControl>
            <FormControl id="description" isRequired mb={'2vh'}>
                <FormLabel></FormLabel>
                <Textarea
                    placeholder="Content"
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                    border="1px solid black"
                    height={"150px"}
                    style={{ verticalAlign: 'top' }}
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

            {/* Input for adding new tags */}
            <HStack>
                <Select
                    placeholder="Izaberite predavača"
                    value={selectedName}
                    onChange={(e) => setSelectedName(e.target.value)}
                >
                    {nameOptions.map((name, index) => (
                        <option key={index} value={name}>
                            {name}
                        </option>
                    ))}
                </Select>
                <Button onClick={handleAddTag} colorScheme="teal" pl={'2vh'} pr={'2vh'} with='100%'>
                    Dodaj predavača
                </Button>
            </HStack>
            <HStack mt='5'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Datum"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}>

                    </DatePicker>
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                        label="Vrijeme"
                        value={time}
                        onChange={(newValue) => setTime(newValue)}
                    />
                </LocalizationProvider>

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
                >
                    Sačuvaj
                </Button>
            </Stack>
        </Container>
    );
}
