const Creator = ({ name, email }) => {
  return (
    <div className="creator bg-white dark:text-slate-300 dark:bg-slate-800 p-3 rounded-md w-full">
      <p className="flex gap-2">
        <span className="text-blue-600">Name: </span>
        {name}
      </p>
      <p className="flex gap-2">
        <span className="text-blue-600">Email: </span>
        <a
          className="hover:text-red-400 transition-all duration-300"
          href={"mailto:" + email}
        >
          {email}
        </a>
      </p>
    </div>
  );
};

export default Creator;
