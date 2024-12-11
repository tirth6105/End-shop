import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    let data = useSelector((store)=>store.User)
    console.log(data);
  return <div>{data.isLogin ? children : <Navigate to={"/Login"} />}</div>;
}

export default PrivateRoutes