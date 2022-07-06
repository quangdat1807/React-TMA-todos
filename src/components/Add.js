import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
    useParams
} from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/Login.css"

function Add() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        var config = {
            method: "post",
            url: "http://localhost:8080/add",
            data: data
        };
        axios(config)
            .then(function (response) {
                console.log(response);
                
                window.location.assign('http://localhost:3000/Admin');
                if (response.data == "Thành Công") {
                    
                }


            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(data)
    }
    return (
        <div className="container" id="container">
            <div className="form-container sign-in-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Thêm sản phẩm</h1>

                    <label htmlFor="ten"></label>
                    <input type="text" name="ten" className="form-control" placeholder="Nhập tên"{...register("ten", { required: true, maxLength: 20 })} />
                    <h style={{ color: 'red', fontWeight: '500', lineHeight: '10px', fontSize: '12px' }}>{errors.ten && "Tên không để trống và quá 20 kí tự!"}</h>

                    <label htmlFor="gia"></label>
                    <input type="number" className="form-control" placeholder="Nhập giá" {...register("gia", { required: true, maxLength: 20 })} />
                    <h style={{ color: 'red', fontWeight: '500', lineHeight: '10px', fontSize: '12px' }}>{errors.gia && "Giá không hợp lệ!"}</h>

                    <label htmlFor="anh"></label>
                    <input type="text" className="form-control" placeholder="Link ảnh" id="Role" {...register("anh")} />
                    <h style={{ color: 'red', fontWeight: '500', lineHeight: '10px', fontSize: '12px' }}>{errors.anh && "Không hợp lệ!"}</h>

                    <label htmlFor="idloai"></label>
                    <select {...register("idloai")}>
                        <option >iPhone</option>
                        <option >SamSung</option>
                        <option >Realme</option>
                        <option >OPPO</option>
                    </select>


                    <label htmlFor="mota"></label>
                    <input type="text" className="form-control" placeholder="Mô tả" id="Role" {...register("mota")} />

                    <button type="submit">Thêm</button>
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <Link to="/phonepage/1">
                            <button className="ghost" id="signUp">Sign Up</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add;