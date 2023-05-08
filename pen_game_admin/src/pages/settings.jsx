import React, { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import "../style.scss"
import { useNavigate } from "react-router-dom";
import io from 'socket.io-client';

const socket = io.connect("https://evening-ridge-47791.herokuapp.com");

export default function Settings(props) {
    let [enableGive, setGive] = useState(false);
    let [enableTake, setTake] = useState(false);
    let [enableRequest, setRequest] = useState(false);
    let [enableTimer, setTimer] = useState("");
    let navigate = useNavigate();

    const handleChange = (event) => {
            socket.emit("enable_give", enableGive);
            socket.emit("enable_take", enableTake);
            socket.emit("enable_request", enableRequest);

      };
    // const routeChange = () => {
       
    // }
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">Settings</span>
                <form className="toggle-switch">
                    <div>
                        <input type="checkbox" class="toggle-switch-checkbox" name="toggleSwitch" id="toggle-switch" />
                        <label htmlFor="give">Give</label>
                        <ToggleSwitch
                            id="give"
                            checked={enableGive}
                            onChange={setGive}
                        />
                    </div>
                    <div>
                        <label htmlFor="take">Take</label>
                        <ToggleSwitch
                            id="take"
                            checked={enableTake}
                            onChange={setTake}
                        />
                    </div>
                    <div>
                        <label htmlFor="request">Request</label>
                        <ToggleSwitch
                            id="request"
                            checked={enableRequest}
                            onChange={setRequest}
                        />
                    </div>
                    <div>
                        <label htmlFor="timer">Timer</label>
                        <input 
                          type = "text" 
                          id ="timer" 
                          name = "timer"
                          onChange={handleChange}
                          value = {enableTimer}
                          />
                    </div>
                    <button onClick = {handleChange}>Apply</button>
                    
                </form>
            </div>
        </div>
    );
};