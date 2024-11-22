import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const Nav = () => (
  <div className="mx-12 px-4 py-2 my-4 flex justify-between rounded-full dark:bg-zinc-800 bg-zinc-100">
    <h1 className="text-lg font-semibold">
      <Link to="/" className="[&.active]:font-bold [&.active]:text-avocado-500">
        Avocado
      </Link>
    </h1>
    <div className="flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
    </div>
    <div className="flex gap-2">
      <button
        type="button"
        className="bg-avocado-500 text-white px-3 cursor-pointer py-1 rounded-full"
      >
        Login
      </button>
    </div>
  </div>
);

export const Route = createRootRoute({
  component: () => (
    <>
      <Nav />
      <div className="mx-12">
        <Outlet />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
      <TanStackRouterDevtools />
    </>
  ),
});
