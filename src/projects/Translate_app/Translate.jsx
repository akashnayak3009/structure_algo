import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Translate.css";

const Translate = () => {
    const [option, setOption] = useState([]);
    const [to, setTo] = useState("en");
    const [from, setFrom] = useState("en");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const params = new URLSearchParams();
    params.append("q", input);
    params.append("source", from);
    params.append("target", to);
    params.append("api_key", 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

    const translation = async () => {
        try {
            const response = await axios.post(
                "https://libretranslate.de/translate",
                 params ,
                {
                    headers: {
                        accept: "application/json",
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );
            const data=  response.data;
            console.log(data);
            setOutput(data.translatedText);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchApi = async () => {
        try {
            const response = await axios.get("https://libretranslate.de/languages", {
                headers: {
                    accept: "application/json",
                },
            });
            const data = response.data;
            setOption(data);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <div className="translate-container">
            <div className="select-container">
                <div className="select-group">
                    <label htmlFor="from">From: {from}</label>
                    <select id="from" onChange={(e) => setFrom(e.target.value)}>
                        {option ? (
                            option.map((opt) => (
                                <option key={opt.code} value={opt.code}>
                                    {opt.name}
                                </option>
                            ))
                        ) : (
                            <option value="NotFound">Not Found</option>
                        )}
                    </select>
                </div>
                <div className="select-group">
                    <label htmlFor="to">To: {to}</label>
                    <select id="to" onChange={(e) => setTo(e.target.value)}>
                        {option ? (
                            option.map((opt) => (
                                <option key={opt.code} value={opt.code}>
                                    {opt.name}
                                </option>
                            ))
                        ) : (
                            <option value="NotFound">Not Found</option>
                        )}
                    </select>
                </div>
            </div>
            <div className="textarea-container">
                <textarea
                    id="input-text"
                    cols="50"
                    rows="8"
                    placeholder="Enter text to translate"
                    onInput={(e) => setInput(e.target.value)}
                ></textarea>
                <textarea
                    id="output-text"
                    cols="50"
                    rows="8"
                   readOnly
                    value={output}
                >
                </textarea>
            </div>
            <div className="button-container">
                <button className="translate-button" onClick={e=>translation()}>
                    Translate
                </button>
            </div>
        </div>
    );
};

export default Translate;
