
import Link from "next/link";

const page = () => {
  return (
    <div className=" bg-gray-50">

      <nav className="border-b border-gray-200 bg-white">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* ================= LOGO ================= */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-sm font-bold text-white shadow-sm">
              S
            </div>

            <div className="hidden sm:block">
              <h1 className="text-lg font-bold tracking-tight text-gray-900">
                SAKINOTE
              </h1>

              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-gray-400">
                Dashboard
              </p>
            </div>
          </Link>


          {/* ================= NAVIGATION ================= */}
          <div className="flex items-center gap-1 rounded-xl border border-gray-200 bg-gray-50 p-1">

            {/* Home */}
            <Link
              href="/Home"
              className="
                rounded-lg
                bg-white
                px-5
                py-2.5
                text-sm
                font-semibold
                text-gray-900
                shadow-sm
                transition-all
                duration-200
                hover:bg-gray-100
              "
            >
              Home
            </Link>


            {/* About */}
            <Link
              href="/About"
              className="
                rounded-lg
                px-5
                py-2.5
                text-sm
                font-medium
                text-gray-500
                transition-all
                duration-200
                hover:bg-white
                hover:text-gray-900
                hover:shadow-sm
              "
            >
              About
            </Link>
                        {/* About */}
            <Link
              href="/Posts"
              className="
                rounded-lg
                px-5
                py-2.5
                text-sm
                font-medium
                text-gray-500
                transition-all
                duration-200
                hover:bg-white
                hover:text-gray-900
                hover:shadow-sm
              "
            >
              Posts
            </Link>
                        {/* About */}
            <Link
              href="/Posts/New"
              className="
                rounded-lg
                px-5
                py-2.5
                text-sm
                font-medium
                text-gray-500
                transition-all
                duration-200
                hover:bg-white
                hover:text-gray-900
                hover:shadow-sm
              "
            >
              New Post
            </Link>

          </div>


          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center gap-3">

            {/* Notification */}
            <button
              className="
                hidden
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-gray-200
                bg-white
                text-gray-500
                transition-all
                hover:bg-gray-50
                hover:text-gray-900
                sm:flex
              "
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9"
                />
              </svg>
            </button>


            {/* Profile */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gray-700 to-gray-950 text-sm font-bold text-white shadow-sm">
              U
            </div>

          </div>

        </div>

      </nav>

    </div>
  );
};

export default page;