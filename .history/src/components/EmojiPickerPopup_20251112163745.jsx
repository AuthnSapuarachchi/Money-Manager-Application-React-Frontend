const EmojiPickerPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col md;flex-row items-start gap-5 mb-6">
            <div
                onClick={() => setIsOpen(!isOpen)} 
                className="flex items-center gap-4 cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center tet-2xl bg-blue-50 text-blue-500 rounded-lg">
                    {icon ? ()}
                </div>
            </div>
        </div>
    )
}

export default EmojiPickerPopup