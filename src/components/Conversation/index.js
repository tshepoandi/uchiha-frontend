import React from "react";

import Article, { MiniArticle } from "../Article";
import { articles } from "../../context/db";

import default_user from "../../media/default-user.png";

function Conversation({ id, article_id, comments }) {
  const article = articles.filter((a) => a.id == article_id);

  console.log(article);

  return (
    <article className="space-y-4 rounded-2xl border-b-1 border-t-1 sm:border">
      {/* <div className="p-4 shadow flex items-center justify-between bo border-gray-500">
        <h2 className="text-xl font-medium">Elections have consequences</h2>
        <button>View</button>
      </div> */}

      <div className="">
        <MiniArticle {...article[0]} />
      </div>

      {comments.map(({ id, username, user_avatar, text }) => (
        <div key={id}>
          <div className="flex items-center sm:px-6 gap-2">
            <img
              className="w-10 h-10 rounded-full border block object-cover object-top"
              src={user_avatar}
              alt=""
            />
            <h4 className="text-sm font-medium">{username}</h4>
          </div>

          <div className="py-4 sm:px-6">
            <p>{text}</p>
          </div>
        </div>
      ))}

      <section className=" sm:px-6">
        <header className="space-y-2">
          <div>
            <textarea
              name="converstion_comment"
              className="text-base py-2 px-4 bg-gray-100 rounded-lg w-full"
              type="text"
              rows={3}
              placeholder="Start typing..."
              required
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Post Comment
          </button>
        </header>

        <div className="py-6">
          <p>Comments will appear here...</p>
        </div>
      </section>
    </article>
  );
}

export default Conversation;
