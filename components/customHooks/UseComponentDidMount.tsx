import React, { useRef, useEffect } from "react";

const UseComponentDidMount = () => {
  const ref = useRef<any>();
  useEffect(() => {
    ref.current = true;
  }, []);
  return ref.current;
};

export default UseComponentDidMount;
