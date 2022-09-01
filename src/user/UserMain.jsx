import React from "react";
import UserAside from "./components/Aside";
import UserHeader from "./components/UserHeader";
// import UserRightSide from "./components/UserRightSideAd";

function UserMain() {
  return (
    <>
      <UserHeader/>
      <UserAside/>
      {/* <UserRightSide/> */}
    </>
  );
}

export default UserMain;
