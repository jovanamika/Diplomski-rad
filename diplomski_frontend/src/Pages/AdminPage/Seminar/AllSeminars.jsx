import React from 'react';
import {Box } from "@chakra-ui/react";
import Seminars from '../../SeminarsPage/Seminars';
import '../../SeminarsPage/Seminar.scss';

export default function AllSeminars() {
    const [seminars, setSeminars] = React.useState([]);
    const [modal, setModal] = React.useState(true);

    React.useEffect(() => {
        fetch("http://localhost:8080/seminars")
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setSeminars(data);
            });
    }, []);

    return (
        <Box p={4}>
            <div className="seminar-container__left_admin">
                {seminars.map((seminar, index) => (
                    <div className="seminar-content">
                        <Seminars key={index}
                            title={seminar.title}
                            description={seminar.description}
                            teachers={seminar.teachers}
                            users={seminar.users}
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
