
import axios from "axios";

const PostInfoPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const { data } = await axios.get(
    `http://localhost:3000/api/post/${id}`
  );

  console.log(data);

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
            Post #{id}
          </span>

        </div>


        {/* ================= HEADER ================= */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <div className="mb-3 flex items-center gap-3">

              {/* Post ID */}
              <span className="rounded-lg bg-gray-900 px-3 py-1.5 font-mono text-xs font-semibold text-white">
                #{String(id).padStart(3, "0")}
              </span>

              {/* Status */}
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                Active

              </span>

            </div>


            <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {data.name}
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              View detailed information about this post.
            </p>

          </div>


          {/* Actions */}
          <div className="flex items-center gap-2">

            <button
              className="
                rounded-lg
                border
                border-gray-200
                bg-white
                px-4
                py-2.5
                text-sm
                font-semibold
                text-gray-700
                shadow-sm
                transition
                hover:bg-gray-50
              "
            >
              Edit
            </button>

            <button
              className="
                rounded-lg
                bg-gray-900
                px-4
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition
                hover:bg-red-600
              "
            >
              Delete
            </button>

          </div>

        </div>


        {/* ================= MAIN CONTENT ================= */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* Post Content */}
          <div className="lg:col-span-2">

            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">

              {/* Card Header */}
              <div className="border-b border-gray-100 px-6 py-5">

                <h2 className="text-sm font-semibold text-gray-900">
                  Post Content
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                  Full description of this post
                </p>

              </div>


              {/* Content */}
              <div className="px-6 py-7">

                <p className="text-base leading-8 text-gray-600">
                  {data.body}
                </p>

              </div>

            </div>

          </div>


          {/* ================= SIDEBAR ================= */}
          <div className="space-y-6">

            {/* Post Information */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">

              <div className="border-b border-gray-100 px-5 py-4">

                <h2 className="text-sm font-semibold text-gray-900">
                  Post Information
                </h2>

              </div>


              <div className="divide-y divide-gray-100">

                {/* ID */}
                <div className="flex items-center justify-between px-5 py-4">

                  <span className="text-sm text-gray-500">
                    Post ID
                  </span>

                  <span className="font-mono text-sm font-semibold text-gray-900">
                    #{id}
                  </span>

                </div>


                {/* Status */}
                <div className="flex items-center justify-between px-5 py-4">

                  <span className="text-sm text-gray-500">
                    Status
                  </span>

                  <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600">

                    <span className="h-2 w-2 rounded-full bg-emerald-500" />

                    Active

                  </span>

                </div>


                {/* Type */}
                <div className="flex items-center justify-between px-5 py-4">

                  <span className="text-sm text-gray-500">
                    Type
                  </span>

                  <span className="text-sm font-medium text-gray-900">
                    Post
                  </span>

                </div>

              </div>

            </div>


            {/* Quick Actions */}
            <div className="rounded-2xl border border-gray-200 bg-gray-900 p-5 text-white shadow-sm">

              <h3 className="text-sm font-semibold">
                Quick Actions
              </h3>

              <p className="mt-1 text-xs leading-5 text-gray-400">
                Manage this post from the available actions.
              </p>


              <div className="mt-5 space-y-2">

                <button className="w-full rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100">
                  Edit Post
                </button>

                <button className="w-full rounded-lg border border-gray-700 px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-gray-800">
                  Duplicate
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default PostInfoPage;
