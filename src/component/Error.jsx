import React, { useEffect } from 'react'

const Error = ({ caughtError }) => {
  useEffect(() => {
    console.log(caughtError)
  }, [caughtError]);
  return (<div className=" text-center ">Something Went wrong</div>);
};

export default Error