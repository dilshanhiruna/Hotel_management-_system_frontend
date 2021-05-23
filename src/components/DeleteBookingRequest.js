  
import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Delet() {
    var { id } = useParams();
    useEffect(() => {

        function delet(id) {

            const result = window.confirm("Do you really want to Decline?");
            if (result == true) {

                axios.delete(`https://hotel-sobana.herokuapp.com/booking/delete/${id}`).then((res) => {
                    window.location = "/front-office-manager/request";
                    alert("Decline Requset Success");
                }).catch((err) => {
                    alert(err);
                })
            } else {
                window.location = "/front-office-manager/accept/" + id;
            }
        }
        delet(id);
    })



    return (
        <div>
        </div>
    )
}

export default Delet;
