import React from 'react'
import { Box } from '@chakra-ui/react'
import '../../SeminarsPage/Seminar.scss';
import Post from './Post';

export default function Pages() {

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

    return (
        <Box>
            <div className="seminar-container__left_admin">
                {posts.map((post, index) => (
                <div className="seminar-content" key={index}>
                        <Post key={index}
                            id={post.id}
                            title={post.title}
                            description={post.description}
                            active={true}
                            image={post.imageUrl}
                        />
                    </div>
                ))}

            </div>
        </Box>
    )
}
