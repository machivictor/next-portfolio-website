import { Link, useNavigation } from "@remix-run/react";

const Footer = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state == "submitting";

  if (isLoading) return null;

  return (
    <footer className="mt-20 flex justify-center">
      <p className=" text-white md:text-sm">
        Designed and built by{" "}
        <Link
          to="#"
          className="font-bold text-amber hover:underline hover:decoration-amber"
        >
          {"  "}Machi Victor
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
