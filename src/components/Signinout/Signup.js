import React from "react";
import ReactDom from "react-dom";
import Overlay from "./Overlay";

function Signup({ open, onClose, openLogin }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <Overlay />

      <div className="fixed inset-0 sm:bottom-[unset] py-8 bg-white sm:left-1/2 sm:top-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 mx-auto p-4 sm:px-0 md:w-[50vw] z-50">
        <div className="absolute right-6 top-6">
          <button onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form className="mt-6 flex flex-col gap-2  sm:px-6" method="POST">
          <h1 className="text-2xl mb-6">Create your account</h1>

          <div className="space-y-1 flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              className="px-2 py-2 border"
              id="name"
              type="text"
              name="form_name"
              maxLength={30}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="px-2 py-2 border"
              id="email"
              type="email"
              name="form_email"
              maxLength={40}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              className="px-2 py-2 border"
              id="password"
              type="password"
              name="form_password"
              maxLength={40}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="cpassword">Password</label>
            <input
              className="px-2 py-2 border"
              id="cpassword"
              type="password"
              name="form_cpassword"
              maxLength={40}
              placeholder="Confirm your password"
              required
            />
          </div>

          <input
            className="mt-2 py-2 text-white bg-blue-600"
            type="submit"
            value="Create Account"
          />
        </form>

        <p className="px-6 pt-6 text-center">
          You already have an account?
          <button
            onClick={() => {
              onClose();
              openLogin();
            }}
          >
            Log in
          </button>
        </p>
      </div>
    </>,

    document.getElementById("modal")
  );
}

export default Signup;
