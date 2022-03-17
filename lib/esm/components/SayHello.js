import React, { useState, useEffect } from "react";
var SayHello = function (_a) {
    var name = _a.name;
    var _b = useState(""), yourName = _b[0], setyourName = _b[1];
    useEffect(function () {
        setyourName(name);
    }, [name]);
    return React.createElement("div", null,
        "Hey ",
        yourName,
        ", say hello to TypeScript.");
};
export default SayHello;
