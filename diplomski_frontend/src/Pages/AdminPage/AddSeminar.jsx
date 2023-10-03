import { Container, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Stack, Button, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function AddSeminar() {
    const [input, setInput] = useState('')
    const [selectedDate, setDate] = useState(null);

    const handleInputChange = (e) => setInput(e.target.value)

    const handleDateChange = (date) => {
        console.log("DD");
        setDate(date); //kasni za jedan change
        const formattedDate = selectedDate
            ? dayjs(selectedDate).format('MM/DD/YYYY')
            : ''; // Format the selectedDate as MM/DD/YYYY
        console.log("Datum: ", formattedDate);
    }

    const isError = input === ''
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
            <Container align='left'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        value={selectedDate}
                        onChange={value => handleDateChange(value)} />
                </LocalizationProvider>
            </Container>

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
