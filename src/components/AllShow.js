import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

import { getPosts } from "../states/DataSlice"



function AllShow() {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.Post.list)

    useEffect(() => {
        dispatch(getPosts())

    }, [])
    console.log(selector);


    // if (loading) return <p>Loading...</p>
    return (
        <>
            {selector.slice(0, 10).map((item, index) => {
                const { id, title } = item;

                return (
                    <div key={index} style={{
                        padding: "10px",
                        margin: "10px",
                        backgroundColor: "grey",
                        textAlign : "center"
                    }}>
                        <p>id : {id}</p>
                        <p> title : {title} </p>
                    </div>
                )
            })}
        </>
    )
}

export default AllShow;

