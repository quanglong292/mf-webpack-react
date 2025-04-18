import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) mount(ref.current);
  }, [ref.current]);

  return <div ref={ref} />;
};
