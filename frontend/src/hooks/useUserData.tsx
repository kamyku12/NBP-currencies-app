import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";

const useUserData = () => useContext(UserContext)

export default useUserData