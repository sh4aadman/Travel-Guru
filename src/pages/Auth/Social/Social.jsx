import { FaFacebook, FaGoogle } from "react-icons/fa6";

function Social() {
  return (
    <section className="flex flex-col justify-between items-center gap-2">
      <button className="p-2 w-100 border border-accent-content rounded-full flex items-center justify-between font-secondary font-medium text-accent">
        <FaFacebook className="text-blue-600 text-3xl" />{" "}
        <span className="grow text-center">Continue with Facebook</span>
      </button>
      <button className="p-2 w-100 border border-accent-content rounded-full flex items-center justify-between font-secondary font-medium text-accent">
        <FaGoogle className="text-red-600 text-3xl" />{" "}
        <span className="grow text-center">Continue with Google</span>
      </button>
    </section>
  );
}

export default Social;
