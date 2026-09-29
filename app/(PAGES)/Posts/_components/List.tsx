
import React from "react";

const List = ({ post }) => {
  return (
    <div className="w-full">

      {/* Main Card */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col gap-4 border-b border-gray-100 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Title */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-sm font-bold text-white">
                P
              </div>

              <div>
                <h2 className="text-lg font-semibold tracking-tight text-gray-900">
                  Posts
                </h2>

                <p className="text-sm text-gray-500">
                  Manage and organize your posts
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Search */}
            <div className="relative hidden sm:block">
              <svg
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search posts..."
                className="h-10 w-52 rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-4 text-sm outline-none transition focus:border-gray-400 focus:bg-white"
              />
            </div>

            {/* Count */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
              <span className="text-sm font-semibold text-gray-900">
                {post.length}
              </span>

              <span className="ml-1 text-sm text-gray-500">
                posts
              </span>
            </div>

          </div>
        </div>


        {/* ================= TABLE ================= */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[850px] text-left">

            {/* Table Head */}
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/70">

                <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                  ID
                </th>

                <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                  Post
                </th>

                <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                  Description
                </th>

                <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                  Status
                </th>

                <th className="px-6 py-4 text-right text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                  Actions
                </th>

              </tr>
            </thead>


            {/* Table Body */}
            <tbody className="divide-y divide-gray-100">

              {post.map((dat) => (

                <tr
                  key={dat.id}
                  className="group transition-all duration-200 hover:bg-gray-50/80"
                >

                  {/* ================= ID ================= */}
                  <td className="px-6 py-5">

                    <span className="font-mono text-xs font-medium text-gray-400">
                      #{String(dat.id).padStart(3, "0")}
                    </span>

                  </td>


                  {/* ================= POST ================= */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      {/* Avatar */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gray-800 to-gray-950 text-sm font-bold uppercase text-white shadow-sm">
                        {dat.name?.charAt(0)}
                      </div>

                      <div className="min-w-0">

                        <p className="truncate text-sm font-semibold text-gray-900">
                          {dat.name}
                        </p>

                        <p className="mt-0.5 text-xs text-gray-400">
                          Post #{dat.id}
                        </p>

                      </div>

                    </div>

                  </td>


                  {/* ================= BODY ================= */}
                  <td className="max-w-md px-6 py-5">

                    <p className="line-clamp-2 text-sm leading-6 text-gray-500">
                      {dat.body}
                    </p>

                  </td>


                  {/* ================= STATUS ================= */}
                  <td className="px-6 py-5">

                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">

                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                      Active

                    </span>

                  </td>


                  {/* ================= ACTIONS ================= */}
                  <td className="px-6 py-5">

                    <div className="flex items-center justify-end gap-2">

                      {/* Edit */}
                      <button
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-lg
                          border
                          border-gray-200
                          bg-white
                          px-3.5
                          py-2
                          text-xs
                          font-semibold
                          text-gray-700
                          shadow-sm
                          transition-all
                          duration-200
                          hover:border-gray-300
                          hover:bg-gray-50
                          hover:text-gray-900
                          active:scale-95
                        "
                      >

                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m16.862 4.487 1.687-1.688a2.121 2.121 0 1 1 3 3l-9.193 9.193-4.5 1.5 1.5-4.5 7.506-7.505Z"
                          />
                        </svg>

                        Edit

                      </button>


                      {/* Delete */}
                      <button
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-lg
                          bg-gray-900
                          px-3.5
                          py-2
                          text-xs
                          font-semibold
                          text-white
                          shadow-sm
                          transition-all
                          duration-200
                          hover:bg-red-600
                          active:scale-95
                        "
                      >

                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 7h12m-9 0v10m6-10v10M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-7 0h10l-1 13H8L7 7Z"
                          />
                        </svg>

                        Delete

                      </button>


                      {/* More */}
                      <button
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-transparent
                          text-gray-400
                          transition-all
                          hover:border-gray-200
                          hover:bg-white
                          hover:text-gray-700
                        "
                      >

                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                        </svg>

                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>


        {/* ================= FOOTER ================= */}
        <div className="flex flex-col gap-3 border-t border-gray-100 bg-gray-50/50 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-700">
              {post.length}
            </span>{" "}
            results
          </p>


          <div className="flex items-center gap-1">

            <button
              className="
                rounded-lg
                border
                border-gray-200
                bg-white
                px-3
                py-1.5
                text-xs
                font-medium
                text-gray-400
              "
            >
              Previous
            </button>

            <button
              className="
                rounded-lg
                bg-gray-900
                px-3
                py-1.5
                text-xs
                font-semibold
                text-white
              "
            >
              1
            </button>

            <button
              className="
                rounded-lg
                border
                border-gray-200
                bg-white
                px-3
                py-1.5
                text-xs
                font-medium
                text-gray-600
                hover:bg-gray-50
              "
            >
              2
            </button>

            <button
              className="
                rounded-lg
                border
                border-gray-200
                bg-white
                px-3
                py-1.5
                text-xs
                font-medium
                text-gray-600
                hover:bg-gray-50
              "
            >
              Next
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default List;
