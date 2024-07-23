import { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import styles from './input.module.css';

const LinkArea = (props) => {
    const [textToCopy, setTextToCopy] = useState('');
    const [copyStatus, setCopyStatus] = useState(false);

    useEffect(() => {
        setTextToCopy(props.value);
    }, [props.value]);

    const onCopyText = () => {
        setCopyStatus(true);
        setTimeout(() => {
            setCopyStatus(false);
        }, 2000);
    };

    return (
        <div className={`${styles.displayBox} ${styles.col_3}`}>
            <p>Here is the shortened url:</p>
            <textarea 
                value={textToCopy}
                placeholder="shortened link"
                readOnly
            />
            <CopyToClipboard text={textToCopy} onCopy={onCopyText}>
                <button className={styles.button_2}>Copy</button>
            </CopyToClipboard>
            {copyStatus && <p>Text copied to clipboard!</p>}
        </div>
    );
}

export default LinkArea;
