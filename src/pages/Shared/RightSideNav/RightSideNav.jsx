import { Link } from "react-router-dom";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";
import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div>
      <h2 className="text-xl font-bold  p-3">Login With</h2>
      <div className="flex flex-col items-center gap-3 p-3">
        <Link className="p-3 w-full justify-center border flex items-center gap-2 rounded-lg">
          <FaGoogle></FaGoogle>
          <p>Login With Google</p>
        </Link>
        <Link className="p-3 w-full border justify-center flex items-center gap-2 rounded-lg">
          <FaGithub></FaGithub>
          <p>Login With Github</p>
        </Link>
      </div>
      <div className="pl-3">
        <h2 className="text-xl font-bold my-6">Find Us On</h2>
        <div className="flex flex-col">
          <a
            href=""
            className="border flex items-center gap-2 rounded-t-md p-3"
          >
            <FaFacebookF></FaFacebookF>
            <p>Facebook</p>
          </a>
          <a href="" className="border flex items-center gap-2 border-y-0 p-3">
            <FaTwitter></FaTwitter>
            <p>Twitter</p>
          </a>
          <a
            href=""
            className="border flex items-center gap-2 rounded-b-md p-3"
          >
            <FaInstagram></FaInstagram>
            <p>Instagram</p>
          </a>
        </div>
      </div>
      {/* Q Zone */}
      <div>
        <h2 className="text-xl font-bold my-3  p-3">Q- Zone</h2>
        <img src={qzone1} alt="" />
        <img className="my-6" src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
