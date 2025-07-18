import React, { useEffect, useState } from "react";
import axios from "axios";
const DataFetching = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title && !body) return;
        const _userId = Math.round(Math.random() * 1000);
        try {
            // fetch("https://jsonplaceholder.typicode.com/posts", {
            //     method: "POST",
            //     body: JSON.stringify({
            //         title: title,
            //         body: body,
            //         userId: _userId,
            //     }),
            //     headers: {
            //         "Content-type": "application/json; charset=UTF-8",
            //     },
            // })
            //     .then((response) => response.json())
            //     .then((json) => console.log(json));
            const bodyData = {
                title: title,
                body: body,
                userId: _userId,
            };
            const resp = await axios.post(
                "https://jsonplaceholder.typicode.com/posts",
                bodyData
            );
            console.log("response is ", resp);
            setIsSuccessful(true);
        } catch (error) {
            console.log(error);
            setIsSuccessful(false);
        } finally {
            setTitle("");
            setBody("");
        }
    };

    useEffect(() => {
        const fetchAllUsers = async () => {
            setLoading(true);
            try {
                // const response = await fetch(
                //     "https://jsonplaceholder.typicode.com/users"
                // );
                // const _data = await response.json();
                // console.log("data is ------", data);
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );
                console.log("response is ====>>> ", response);
                const _data = await response.data;
                console.log("data is ------", data);
                if (_data) {
                    setData(_data);
                }
                setLoading(false);
            } catch (err) {
                console.log("Error is ---", err);
                setLoading(false);
            }
        };
        fetchAllUsers();
    }, []);
    return (
        <div>
            <h1>DATA FETCHING EXAMPLE</h1>
            <p>All users are :</p>
            {!loading && (
                <ol>
                    {data?.map((item) => (
                        <li key={item.id}>
                            {item.name} has a username of {item.username}
                        </li>
                    ))}
                </ol>
            )}
            {loading && <p> Loading ..... </p>}
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="">Title</label>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div>
                    <label htmlFor="">Body</label>
                    <input
                        type="text"
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    />
                </div>
                <input type="submit" />
                <p>{isSuccessful ? "Successful" : ""}</p>
            </form>
        </div>
    );
};

export default DataFetching;
