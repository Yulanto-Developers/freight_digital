import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import { usePathname } from 'next/navigation'

export const metadata: Metadata = {
  title:
    "Sign In - Freight Digital ",
};

const SigninPage = () => {

  return (
    <>
      {/* <Breadcrumb pageName="Sign In Page" /> */}
         
      {/* <div className="pt-20"></div> */}

      <Signin />
       {/* <p>current url {path}</p> */}
    </>
  );
};

export default SigninPage;
