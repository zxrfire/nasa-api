import React, {useEffect, useState} from 'react';
import style from './PictureBox.css'
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from 'react-bootstrap/Button';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '1400px',
    width: '600px',
    lineHeight: '60px',
    display: 'flex',
    flexDirection: 'column',
    margin: '5px',
}));


export default function PictureBox(props){
    const [image, setImage] = useState(props.image)
    const [desc, setDesc] = useState(props.description)
    const [title, setTitle] = useState(props.title)
    const [date, setDate] = useState(props.date)
    const [likes, setLikes] = useState(0)

    function updatelikes(){
        if (likes === 0){
            setLikes(1)
        }
        else{
            setLikes(0)
        }
    }

    return(
        <Item elevation={4}>
            <h2>{title}</h2>
            <img src={image} className={style.picture} alt={'nasa space'}/>
            <p>{desc}</p>
            <p>{likes}</p>
            <Button variant="info" className={style.button} onClick={updatelikes}> Like</Button>
            <p>{date}</p>
        </Item>
    )

}
