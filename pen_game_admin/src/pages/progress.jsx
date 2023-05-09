import React, { useEffect, useState } from "react";
import "../style.scss"
import { useNavigate } from "react-router-dom";
import io from 'socket.io-client';
const socket = io.connect("https://evening-ridge-47791.herokuapp.com");

export default function Progress() {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        // Listen for the "start game" event from the server
        socket.on("get_room", (roomId) => {
            // Initialize the time left for the new room to be 60 seconds
            const room = {
                roomId: roomId,
                
            };
        });
    });

    return (
        <div>
            <h1>Progress</h1>
            <h1>Time Left: {timeLeft}</h1>
        </div>
    );
}
