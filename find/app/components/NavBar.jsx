import Button from "./Button";

export default function NavBar() {
  return (
    <nav className="px-7 py-3 flex items-center justify-between ">
      <div>
        <h1 className="capitalize font-bold text-2xl dark:text-white">
          myRome
        </h1>
      </div>
      <div className="flex items-center justify-between w-62 ">
        <Button type="sign in" />
        <Button type="register" />
      </div>
    </nav>
  );
}
