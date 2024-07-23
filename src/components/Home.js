import Input from "./input";
import Button from "./Button";
import styles from './home.module.css';
import Header from "./header";
import LinkArea from "./linkArea";
import { useState } from "react";

const Home = () => {
    const [longUrl, setLongUrl] = useState();
    const [shortLink, setShortLink] = useState({});

    const handleChange = (e)=>{
        setLongUrl(e.target.value);
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(longUrl);

        await fetch("https://api-ssl.bitly.com/v4/shorten", {
            method: "POST",
            mode: 'cors',
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_BITLY_ACCESS_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                group_guid: `${process.env.REACT_APP_BITLY_GROUP_ID}`,
                domain: "bit.ly",
                long_url: longUrl,
            }),
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setShortLink(data.link)
        })
        .catch((error)=>{
            console.error("Error", error)
        })
    }

    return (
        <div className={styles.big_container}>
            <div className={styles.homeContainer}>
                <Header />
                <Input onChange={handleChange}/>
                <Button onClick={handleSubmit} />
                <LinkArea value={shortLink}/>
            </div>
        </div>
    )
}

export default Home