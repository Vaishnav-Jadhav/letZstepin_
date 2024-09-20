import { useState } from "react";


export function RowA(props)
{  
   

    return (
        <div className="bg-white w-100">
            <div className="m-2">
                    <h2 className="text-center p-2 text-info">{props.data.title}</h2>
            </div>
            <div className="d-flex justify-content-around p-3 w-100 m-auto">
                <div className="rounded p-2 ">
                    <img src={props.data.img} className="w-50 cover-full rounded-4 shadow"/>
                </div>
                <div>
                    <p className="text-justify fs-5">{props.data.discription}</p>
                </div>
            </div>
        </div>
    )
}