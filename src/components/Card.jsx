const Card = ({ name, email, photo }) => {
    return (
        <div
            className="p-6 max-w-sm mx-auto my-4 rounded-xl shadow-lg transition-all duration-300"
            style={{
                backgroundColor: "#44318D",
                color: "#E98074",
            }}
        >
            <div className="flex items-center mb-4">
                <div>
                    <h2 className="text-2xl font-semibold" style={{ color: "#D83F87" }}>
                        {name}
                    </h2>
                    <p className="text-sm" style={{ color: "#A4B3B6" }}>
                        {email}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
