const Card = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
      <a className="group block" href="#">
        <div className="overflow-hidden">
        <img
          className="h-[350px] sm:h-[450px] w-full object-cover transition duration-500 group-hover:scale-105"
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
          alt="Shoes"
        />
        </div>
        <div className="relative pt-3 pb-1.5 flex flex-col gap-3">
          <h3 className="text-sm text-gray-700 group-hover:underline">
            Limited Edition Sports Trainer
          </h3>
          <div className="mt-1.5 flex justify-between items-center text-gray-900">
            <p className="tracking-wide">$ 189.99</p>
            <p className="text-xs tracking-wide">6 COLORS</p>
          </div>
        </div>
      </a>

      <a className="group block" href="#">
        <div className="overflow-hidden">
        <img
          className="h-[350px] sm:h-[450px] w-full object-cover transition duration-500 group-hover:scale-105"
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
          alt="Shoes"
        />
        </div>
        <div className="relative pt-3 pb-1.5 gap-x-4 gap-y-6">
          <h3 className="text-sm text-gray-700 group-hover:underline">
            Limited Edition Sports Trainer
          </h3>
          <div className="mt-1.5 flex justify-between items-center text-gray-900">
            <p className="tracking-wide">$ 189.99</p>
            <p className="text-xs tracking-wide">6 COLORS</p>
          </div>
        </div>
      </a>

      <a className="group block" href="#">
        <div className="overflow-hidden">
        <img
          className="h-[350px] sm:h-[450px] w-full object-cover transition duration-500 group-hover:scale-105"
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
          alt="Shoes"
        />
        </div>
        <div className="relative pt-3 pb-1.5 gap-x-4 gap-y-6">
          <h3 className="text-sm text-gray-700 group-hover:underline">
            Limited Edition Sports Trainer
          </h3>
          <div className="mt-1.5 flex justify-between items-center text-gray-900">
            <p className="tracking-wide">$ 189.99</p>
            <p className="text-xs tracking-wide">6 COLORS</p>
          </div>
        </div>
      </a>

      <a className="group block" href="#">
        <div className="overflow-hidden">
        <img
          className="h-[350px] sm:h-[450px] w-full object-cover transition duration-500 group-hover:scale-105"
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
          alt="Shoes"
        />
        </div>
        <div className="relative pt-3 pb-1.5 gap-x-4 gap-y-6">
          <h3 className="text-sm text-gray-700 group-hover:underline">
            Limited Edition Sports Trainer
          </h3>
          <div className="mt-1.5 flex justify-between items-center text-gray-900">
            <p className="tracking-wide">$ 189.99</p>
            <p className="text-xs tracking-wide">6 COLORS</p>
          </div>
        </div>
      </a>
    </div>
    </div>
  );
};
export default Card;
