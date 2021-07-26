import { useToast as useToastUI } from "@chakra-ui/toast";

const useToast = () => {
  const toast = useToastUI();

  const displayToast = ({
    description,
    status = "error",
    position = "top",
    duration = 2000,
  }) => {
    toast.closeAll();

    toast({
      duration,
      description,
      status,
      position,
    });
  };

  return { display: displayToast };
};

export default useToast;
