import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const useAuthValue = () => {
    return useContext(AuthContext)
};

export default useAuthValue;