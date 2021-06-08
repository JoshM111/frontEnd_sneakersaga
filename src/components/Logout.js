import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const Logout = (props) =>{
    // const onSubmitHandler = (e) => {
    //     e.preventDefault()
    
    //     useEffect(() => {
    //         axios
    //             .post('http://18.117.145.31/user/logout/')
    //             .then((res) => {
    //             console.log(res.data);
    //             })
    //             .catch((err) => {
    //             console.log(err);
    //             });
    //         }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://18.117.145.31/user/logout/")
            .then((res) => {
            console.log(res.data);
            })
            .catch((err) => {
            console.log(err);
            });
    };
    return(
        <div class="container">
            <form onSubmit={submitHandler}>
                <button onClick={() => navigate("/")} className="homeBtn">Logout</button>
            </form>
        </div>

    )




}
export default Logout;