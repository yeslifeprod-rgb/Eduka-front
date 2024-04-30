import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function HideNavbar({ children }:any) {
  const location = useLocation();
  const [ShowNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setShowNavbar(false);
    }else{
        setShowNavbar(true);
    }
  }, [location]);

  return <div> {ShowNavbar && children} </div>;
}
