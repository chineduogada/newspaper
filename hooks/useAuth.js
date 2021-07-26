import { useRouter } from "next/router";
import { currentUser, logout } from "utils/http";
import { del, get, set } from "utils/localStorageAPI";
import useToast from "./useToast";

const useAuth = () => {
  const toast = useToast();
  const router = useRouter();

  let me = get("me");
  if (me) {
    const firstName = me.name.split(" ")[0];
    me.firstName = firstName;
  }

  const handleFetchCurrentUser = async () => {
    try {
      const data = await currentUser();

      set("me", data);
    } catch (error) {
      toast.display({ description: error.message });
    }
  };

  const handleLogout = async (reload = true) => {
    try {
      await logout();

      del("me");

      if (reload) router.reload();
    } catch (error) {
      toast.display({ description: error.message });
    }
  };

  return { handleFetchCurrentUser, handleLogout, me };
};

export default useAuth;
