import React, { useState } from 'react';
import { Box} from '@chakra-ui/react';
import Seminars from '../SeminarsPage/Seminars';
import '../SeminarsPage/Seminar.scss';
export default function AllSeminars() {
    //Ucitavanje iz baze
    //handleDeleteButt
    //handleUpdateButt
    const containersData = [
        {
            title: 'Title for card 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            date: '2023-12-01',
            time: '12:15'
        },
        {
            title: 'Title for card 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            date: '2023-12-01',
            time: '12:15'
        },
        {
            title: 'Title for card 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            date: '2023-12-01',
            time: '12:15'
        },
    ];

    return (
        <Box p={4}>
            <div className="seminar-container__left_admin">
                {containersData.map((seminar) => (
                    <div className="seminar-content">
                        <Seminars key={seminar.id}
                            title={seminar.title}
                            description={seminar.description}
                            date={seminar.eventDate}
                            time={seminar.eventTime}
                            active={true}
                        />
                    </div>
                ))}

            </div>
        </Box>
    );
}
