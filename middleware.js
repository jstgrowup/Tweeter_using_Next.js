import React from "react";
import { useSelector } from "react-redux";
import { NextResponse } from "next/server";
function Middleware(req, res, next) {
  // const { data } = useSelector((store) => store.user);
  // console.log('data:', data)

  //   if (!data.username) {
  //     return NextResponse.redirect("http://localhost:3000/Signup");
  //   }

//   console.log(req.nextUrl.pathname);
}

export default Middleware;
