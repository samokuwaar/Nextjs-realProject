
"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const CreatePost = () => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  let router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
   const formData = new FormData(e.target);

   const data = {
     name: formData.get("name"),
     body: formData.get("body"),
   };
   console.log(data);

   let response = await fetch("http://localhost:3000/api/post", {
     method: "POST",
     body: JSON.stringify(data),
   });
  

   if (response.ok) {
     console.log("Post created successfully");
     router.push("/Posts");
     router.refresh();
   } else {
     console.log("Failed to create post");
   }

   }

  

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8">

        {/* ================= BREADCRUMB ================= */}
        <div className="mb-8 flex items-center gap-2 text-sm">
          <span className="text-gray-400">
            Posts
          </span>

          <span className="text-gray-300">
            /
          </span>

          <span className="font-medium text-gray-700">
            Create Post
          </span>
        </div>


        {/* ================= PAGE HEADER ================= */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Create Post
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Create a new post and publish it to your collection.
          </p>
        </div>


        {/* ================= FORM CARD ================= */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* ================= FORM ================= */}
          <div className="lg:col-span-2">

            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

              {/* Card Header */}
              <div className="border-b border-gray-100 px-6 py-5">
                <h2 className="text-sm font-semibold text-gray-900">
                  Post Information
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                  Enter the information for your new post.
                </p>
              </div>


              {/* Form */}
              <form className="space-y-6 p-6" onSubmit={handleSubmit}>

                {/* ================= NAME ================= */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Post Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter post name..."
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      px-4
                      py-3
                      text-sm
                      text-gray-900
                      outline-none
                      transition-all
                      duration-200
                      placeholder:text-gray-400
                      focus:border-gray-400
                      focus:bg-white
                      focus:ring-4
                      focus:ring-gray-100
                    "
                  />

                  <p className="mt-2 text-xs text-gray-400">
                    Choose a clear and descriptive title.
                  </p>
                </div>


                {/* ================= BODY ================= */}
                <div>
                  <div className="mb-2 flex items-center justify-between">

                    <label
                      htmlFor="body"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Post Content
                    </label>

                    <span className="text-xs text-gray-400">
                      {body.length} characters
                    </span>

                  </div>

                  <textarea
                    id="body"
                    rows={10}
                    value={body}
                    name="body"
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Write your post content here..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      px-4
                      py-3
                      text-sm
                      leading-7
                      text-gray-900
                      outline-none
                      transition-all
                      duration-200
                      placeholder:text-gray-400
                      focus:border-gray-400
                      focus:bg-white
                      focus:ring-4
                      focus:ring-gray-100
                    "
                  />

                  <p className="mt-2 text-xs text-gray-400">
                    Write the main content of your post.
                  </p>
                </div>


                {/* ================= ACTIONS ================= */}
                <div className="flex items-center justify-end gap-3 border-t border-gray-100 pt-6">

                  <button
                    type="button"
                    className="
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      px-5
                      py-2.5
                      text-sm
                      font-semibold
                      text-gray-600
                      shadow-sm
                      transition-all
                      hover:bg-gray-50
                      hover:text-gray-900
                    "
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-gray-900
                      px-5
                      py-2.5
                      text-sm
                      font-semibold
                      text-white
                      shadow-sm
                      transition-all
                      hover:bg-gray-800
                      hover:shadow-md
                      active:scale-95
                    "
                  >

                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v14M5 12h14"
                      />
                    </svg>

                    Create Post

                  </button>

                </div>

              </form>

            </div>

          </div>


          {/* ================= PREVIEW ================= */}
          <div>

            <div className="sticky top-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

              {/* Preview Header */}
              <div className="border-b border-gray-100 px-5 py-4">

                <div className="flex items-center justify-between">

                  <div>
                    <h2 className="text-sm font-semibold text-gray-900">
                      Live Preview
                    </h2>

                    <p className="mt-1 text-xs text-gray-400">
                      Preview your post
                    </p>
                  </div>

                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    Preview
                  </span>

                </div>

              </div>


              {/* Preview Content */}
              <div className="p-5">

                {/* Preview Avatar */}
                <div className="mb-5 flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-sm font-bold uppercase text-white">
                    {name?.charAt(0) || "P"}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {name || "Post Name"}
                    </p>

                    <p className="text-xs text-gray-400">
                      Just now
                    </p>
                  </div>

                </div>


                {/* Preview Body */}
                <div>

                  <h3 className="text-lg font-bold leading-7 text-gray-900">
                    {name || "Your post title will appear here"}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {body ||
                      "Your post content will appear here as you type. This gives you a quick preview of how your post will look."}
                  </p>

                </div>


                {/* Preview Status */}
                <div className="mt-6 border-t border-gray-100 pt-4">

                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                    Ready to publish

                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CreatePost;
