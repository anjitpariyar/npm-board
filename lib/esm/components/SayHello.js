import React, { useState, useEffect } from "react";
const SayHello = ({ name }) => {
    const [yourName, setyourName] = useState("");
    useEffect(() => {
        setyourName(name);
    }, [name]);
    return React.createElement("div", null,
        "Hey ",
        yourName,
        ", say hello to TypeScript.");
};
export default SayHello;
