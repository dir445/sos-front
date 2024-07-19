export default function Header(props:{title:string}) {
    return (
        <div className="w-full p-3 bg-pigment_green h-14 flex justify-between items-center text-white">
            <div className="w-8 h-8 bg-gray-500">b</div>
            <p className="text-lg font-semibold leading-6">{props.title}</p>
            <div className="w-8 h-8  bg-gray-500">m</div>
        </div>
    );
}