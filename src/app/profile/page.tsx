import Header from "../components/Header";

export default function Page() {
    var data = {
        id:'username',
        name:'山田太郎',
        location:'早稲田センター'
    };
    return ( 
        <div className="flex flex-col min-h-screen">
            <Header title="プロフィール"/>
            <div className="px-4 mx-auto w-[375px]">
                <div className="mx-auto my-[30px] h-16 w-16 bg-blue-800"></div>
                <div className="mb-[22px] grid grid-cols-[80px_1fr] gap-x-4 grid-rows-[54px_54px_54px] gap-y-[10px] items-center">
                    <p >ユーザーID</p>
                    <p>@{data.id}</p>
                    <p>氏名</p>
                    <p>{data.name}</p>
                    <p>所属</p>
                    <p>{data.location}</p>
                </div>
                <button className="w-full bg-[#FF8A00] text-white h-14 text-lg font-semibold leading-5 rounded-lg">プロフィールを編集する</button>
            </div>
        </div>
    );
  }