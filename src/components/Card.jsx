const Card = ({ isDarkMode, name, email, photo }) => {
  return (
    <div
      className={`p-6 max-w-sm mx-auto my-4 rounded-xl shadow-lg transition-all duration-300 ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div className="flex items-center mb-4">
        <div>
          <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-red-500' : 'text-red-700'}`}>{name}</h2>
          <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
