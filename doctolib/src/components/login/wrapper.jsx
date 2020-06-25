import React, { useState } from "react";
import CreateAccount from "./Create_account";
import MyInformation from "./MyInformation";
import Axios from "axios";

function MainPage() {
  const [userData, setUserData] = useState({});
  const [pageNb, setPageNb] = useState(1);

  const changePage = (page) => {
    setPageNb(page);
    console.log(userData);
  };

  const handleSubmit = () => {
    console.log(userData)
    Axios.post(
      "http://localhost:8000/patients",
       userData ,
      { header: { "Content-Type": "application.json" } }
    ).catch((err) => console.log(err.message));
  };

  if (pageNb === 1) {
    return (
      <CreateAccount
        setUserData={setUserData}
        userData={userData}
        changePage={changePage}
      />
    );
  } else if (pageNb === 2) {
    return (
      <MyInformation
        setUserData={setUserData}
        userData={userData}
        changePage={changePage}
        handleSubmit={handleSubmit}
      />
    );
  }
}

export default MainPage;
