export default function Message() {
    var data = {
        name:"山田太郎",
        location:"早稲田センター",
        body:"ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。",
        date:new Date(2024,5,4,5,0),
    };


    return (
        <div className="py-2 flex gap-2">
            <div className="w-8 h-8 bg-gray-600"></div>
            <div className="flex flex-col gap-2 bg-red-500">
                <div className="text-[15px] leading-5">
                    <div className="flex gap-2">
                        <p className="font-semibold">{data.name}</p>
                        <p>in {data.location}</p>
                    </div>
                    <p className="text-[#828282]">{data.date.toLocaleDateString("ja-JP",{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})}</p>
                </div>
                <p className="text-base leadin-[22px]">{data.body}</p>
                <div className=" flex gap-1">
                    <div className="h-[18px] w-[18px] bg-green-400"></div>
                    <p className="text-[15px] leading-5">３件の返信</p>
                </div>
            </div>
        </div>
    );
}