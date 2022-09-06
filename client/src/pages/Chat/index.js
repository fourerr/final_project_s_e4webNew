import io from "socket.io-client";
import React from "react";

function Chat(){

    const [message,setMessage] = React.useState(""); 

    const [chat,setChat] = React.useState([]); 


    const socket = React.useMemo(() => { 
        console.log(123456789);  
        let s = io.connect("http://localhost:8080", {
            query: { token: localStorage.getItem('token') || "" }
        });
        s.on("r_message", (data) => {
            setChat((old) => [...old, data]);
        });
        return s;
    }, [])

    return(
        <div>
            <pre>{JSON.stringify(chat)}</pre>
            <input value={message} onChange={(e)=>setMessage(e.target.value)}/>
            <button onClick={async ()=>{
                if(message=="") return;
                await socket.emit("s_message",{message});
                setMessage("");
            }}>Click</button>
        </div>
    )

}
export default Chat;