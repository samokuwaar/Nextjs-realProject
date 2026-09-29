
"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import List from "./_components/List";
import Link from "next/link";

const Posts = () => {
  const [post, setPost] = useState<any[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(
        "http://localhost:3000/api/post"
      );

      console.log(data);
      setPost(data);
      console.log(post);
    };

    getPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

        {/* ================= PAGE HEADER ================= */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          {/* Left */}
          <div>

            <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
              <span>Dashboard</span>
              <span>/</span>
              <span className="text-gray-700">Posts</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Posts
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Manage, edit and organize all your posts.
            </p>

          </div>


          {/* Right */}
          <Link href="/Posts/New"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-gray-900
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition-all
              duration-200
              hover:bg-gray-800
              hover:shadow-md
              active:scale-95
            "
          >

            {/* Plus Icon */}
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

            Add Post

          </Link>

        </div>


        {/* ================= STATS ================= */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* Total Posts */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Posts
                </p>

                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  {post.length}
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100">

                <svg
                  className="h-5 w-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2ZM7 8h10M7 12h7M7 16h5"
                  />
                </svg>

              </div>

            </div>

          </div>


          {/* Active */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Active Posts
                </p>

                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  {post.length}
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">

                <span className="h-3 w-3 rounded-full bg-emerald-500" />

              </div>

            </div>

          </div>


          {/* Status */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Server Status
                </p>

                <div className="mt-2 flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-emerald-500" />

                  <span className="text-sm font-semibold text-emerald-600">
                    Connected
                  </span>

                </div>

              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">

                <svg
                  className="h-5 w-5 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12.55a11 11 0 0 1 14.08 0M8.5 16a6 6 0 0 1 7 0M12 19h.01"
                  />
                </svg>

              </div>

            </div>

          </div>

        </div>


        {/* ================= TABLE ================= */}
        <List post={post} />

      </div>

    </div>
  );
};

export default Posts;
