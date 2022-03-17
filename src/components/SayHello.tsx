import React, { useState, useEffect } from "react";

const SayHello = ({ name }: { name: string }): JSX.Element => {
  const [yourName, setyourName] = useState("");
  useEffect(() => {
    setyourName(name);
  }, [name]);

  return <div>Hey {yourName}, say hello to TypeScript.</div>;
};

export default SayHello;
