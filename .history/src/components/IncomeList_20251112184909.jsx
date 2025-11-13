import { Mail } from "lucide-react"

const IncomeList = ({transactions}) => {
    return (
        <div className="card p-4">
            <div className="flex items-center justify-between mb-4">                
                <h5 className="text-lg font-semibold">Income Sources</h5>
                <div className="flex-items-center justify-end gap-2">
                    <button className="btn btn-primary">
                        <Mail size={16} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default IncomeList