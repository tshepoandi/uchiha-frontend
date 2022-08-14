import React, { useState } from "react";
import Signup from "./components/Signinout/Signup";
import { BrowserRouter, Link } from "react-router-dom";
import Login from "./components/Signinout/Login";
import Conversation from "./components/Conversation";
import Feed from "./components/Article/Feed";
import { coversations } from "./context/db";

import { useData } from "./context/data";

function App() {
  const [loginActive, setLoginActive] = useState(false);
  const [signupActive, setSignUpActive] = useState(false);
  const { currentTab, pressConvTab, pressHomeTab } = useData();
  const [conversationsTab, setConversationsTab] = useState(false);

  return (
    <>
      <BrowserRouter className="App">
        <div className="mx-auto px-4 sm:px-0 sm:w-[60vw] lg:w-[50vw]">
          <nav className="py-2 flex justify-between items-center">
            <div>Civic Edu</div>

            <div>
              <button
                className="px-2 py-1"
                onClick={() => setSignUpActive(true)}
              >
                Sign up
              </button>
              <button
                className="px-2 py-1"
                onClick={() => setLoginActive(true)}
              >
                Log in
              </button>
            </div>
          </nav>

          <section>
            <div className="grid grid-cols-2 items-center">
              <button
                onClick={pressHomeTab}
                className={`px-4 py-2 ${
                  currentTab ? "border-2 border-black" : "border"
                } `}
              >
                Home
              </button>
              <button
                onClick={pressConvTab}
                className={`px-4 py-2 ${
                  !currentTab ? "border-2 border-black" : "border"
                } `}
              >
                Conversations
              </button>
            </div>

            {/* Home Content */}
            {currentTab && <Feed />}
            {/* Conversations */}
            {!currentTab && (
              <div className="space-y-4 my-6">
                {coversations.map((con) => (
                  <Conversation key={con.id} {...con} />
                ))}
              </div>
            )}
          </section>
        </div>
      </BrowserRouter>

      {/* Signup */}
      <Signup
        open={signupActive}
        openLogin={() => setLoginActive(true)}
        onClose={() => setSignUpActive(false)}
      />
      {/* Login */}
      <Login
        open={loginActive}
        openSignup={() => setSignUpActive(true)}
        onClose={() => setLoginActive(false)}
      />
    </>
  );
}

export default App;
