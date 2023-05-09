import React, { useEffect, useState } from "react";
import "../style.scss"
import { useNavigate } from "react-router-dom";
import io from 'socket.io-client';
const socket = io.connect("https://evening-ridge-47791.herokuapp.com");
const rooms = [];

export default function Progress() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        // Listen for the "start game" event from the server
        socket.on("get_room", (roomId,timer) => {
            // Initialize the time left for the new room to be 60 seconds
            const room = {
                roomId: roomId,
                timeLeft: timer,
            };
            setRooms([...rooms, room]);
        });
    });


    return (
        <div>
            <h1>Progress</h1>
            {rooms.map((room) => (
                <div key={room.roomId}>
                    <h2>Room ID: {room.roomId}</h2>
                    <h2>Time Left: {room.timeLeft}</h2>
                </div>
            ))}
        </div>
    );
}
