import React from 'react'

type TextCardProps = {
    image: string;
    message: string;
    name: string;
    role: string
};

const TextCard = ({
    image,
    message,
    name,
    role
}: TextCardProps) => {
    return (
        <div className={` m-4 max-w-xl rounded-xl border bg-white p-4 shadow-sm transition-all border-black-500 ring-1 ring-black-500`}>
            <div className="mb-4 text-4xl text-gray-400">“</div>
            <div className="flex items-start gap-4">
                <img
                    src={image}
                    alt={name}
                    className="h-20 w-20 rounded-full object-cover "
                />
                <div>
                    <p className="text-black-800 leading-relaxed w-100">
                        {message}
                    </p>

                    {/* Name & Role */}
                
                </div>
                
            </div>
            <div className=" justify-end mt-6 text-right ">
                    <div className="mt-4 italic">
                        {name}
                    </div>
                    <div className="text-l font-bold">
                        {role}
                    </div>
            </div>
        </div>
    );
};

export default TextCard;
