import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const auth = getAuth();
  const [user, setUser] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <div className="profile">
      <header className="profileHeader">
        <p />
        <pageHeader>My Profile</pageHeader>
        <button type="button" className="logOut" onClick={onLogout}>
          Logout
        </button>
      </header>
    </div>
  );
}

export default Profile;
