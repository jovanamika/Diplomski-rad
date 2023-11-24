import React from 'react'
import { Box } from '@chakra-ui/react'
import '../../SeminarsPage/Seminar.scss';
import Post from '../Posts/Post';

export default function Notification() {
    const [posts, setPosts] = React.useState([]);
    const [modal, setModal] = React.useState(true);
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [selectedImage, setSelectedImage] = React.useState(null);


    React.useEffect(() => {
        fetch("http://localhost:8080/posts")
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setPosts(data);
            });
    }, []);

    const containersData = [
        {
            title: 'Title for card 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            title: 'Title for card 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
        {
            title: 'Title for card 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        },
    ];

    return (
        <Box p={4}>
            <div className="seminar-container__left_admin">
                {posts.map((post, index) => (
                    <div className="seminar-content" key={index}>
                        {!post.active ? (
                            <Post
                                id={post.id}
                                title={post.title}
                                description={post.description}
                                active={post.active}
                            />
                        ) : (
                           <></>
                            
                        )}
                    </div>
                ))}

            </div>
        </Box>
    )
}
