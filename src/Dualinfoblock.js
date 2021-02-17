import React from 'react'
import Heading from './Heading'
import "./Infoblock.css"
import firebase from "firebase/app";
import "firebase/database";
 
export default function Dualinfoblock({heading, source,movieName,info}) {

    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container" >
                <Heading title={heading}/>
                <div className="row">
 
                    <div className="col-auto">
                    <div className="card mybg">
                        <img className="card-img-top" src={source}/>
                        <div className="card-body">
                            <h5 className="card-title text-white">{movieName}</h5>
                            <p className="card-text text-white">{info}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}