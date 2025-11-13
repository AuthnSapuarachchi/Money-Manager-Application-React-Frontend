import { Image, X } from "lucide-react";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";

const EmojiPickerPopup = ({icon, onSelect}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleEmojiClick = (emojiData) => {
        onSelect(emojiData.emoji);
        setIsOpen(false);
    };

    return (
        <div className="flex flex-col md:flex-row items-start gap-5 mb-6">
            <div className="relative">
                <div
                    onClick={() => setIsOpen(!isOpen)} 
                    className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <div className="w-12 h-12 flex items-center justify-center text-2xl bg-blue-50 text-blue-500 rounded-lg">
                        {icon ? (
                            <span className="text-3xl">{icon}</span>
                        ) : (
                            <Image size={24} />
                        )}
                    </div>
                    <p className="text-sm text-gray-700 font-medium">
                        {icon ? "Change icon" : "Pick Icon"}
                    </p>
                </div>

                {isOpen && (
                    <div className="absolute top-full left-0 mt-2 z-50">
                        <div className="relative">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute -top-2 -right-2 bg-white border border-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-gray-100 z-10"
                                aria-label="Close emoji picker"
                            >
                                <X size={16} />
                            </button>
                            <EmojiPicker onEmojiClick={handleEmojiClick} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default EmojiPickerPopup