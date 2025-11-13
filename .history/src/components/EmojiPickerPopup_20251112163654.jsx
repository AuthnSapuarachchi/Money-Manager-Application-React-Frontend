const EmojiPickerPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col md;flex-row items-start gap-5 mb-6">
            <div
                onClick={() => setIsOpen(!isOpen)} 
                className="flex items-center gap-4 cursor-pointer">
                div.w-12.h-12.flex.items-center.justify-center.tet-2xl
            </div>
        </div>
    )
}

export default EmojiPickerPopup