import './App.css';
import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import PictureBox from "./PictureBox";
import {useQuery} from 'react-query'

const darkTheme = createTheme({ palette: { mode: 'dark' } });

function App() {
    const { data, isLoading, isError } = useQuery("picturedata", () =>
        fetch('https://api.nasa.gov/planetary/apod?api_key=IesiwQRYuSJxjToXZz2SesULB5PbGwc5n3Kt90L1&count=6')
            .then((res) => res.json())
    );
    useEffect(() => {
        console.log(data)
    },[data] );
    if (isLoading){
        return <p>loading</p>
    }
    else {
        console.log(data)
        return (
            <Box
            sx={{
                display: "flex",
                justifyContent: "center",
            }}>
            <ThemeProvider theme={darkTheme}>
                <Box
                    sx={{
                        bgcolor: 'background.default',
                        gap: 35,
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: 'space-evenly'
                    }}
                >
                    {data.map((item, index) => {
                        return (<PictureBox
                            image={item.url}
                            description={item.explanation}
                            date ={item.date}
                            title={item.title}
                            id={index}
                        />)
                    })}
                </Box>
            </ThemeProvider>
            </Box>
        );
    }
}
export default App;
