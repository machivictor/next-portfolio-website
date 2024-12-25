import { Link, useNavigation } from "@remix-run/react";
import profile from "profile";
import { Button } from "./ui/button";

const Footer = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state == "submitting";

  if (isLoading) return null;

  return (
    <footer className="mt-20 flex justify-center items-center">
      <p className="md:text-sm">Designed and built by</p>
      <Button asChild variant={"link"} className="px-[5px] font-bold">
        <Link to={profile.xUrl} target={"_blank"}>
          Machi Victor
        </Link>
      </Button>
    </footer>
  );
};

export default Footer;
