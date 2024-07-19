import FooterInput from "../components/FooterInput";
import Header from "../components/Header";
import Message from "../components/Message";

export default function Page() {
    return ( 
        <div className="flex flex-col min-h-screen">
            <Header title="スレッド一覧"/>
            <div className="mx-auto grow px-4">
                <Message/>
                <Message/>
                <Message/>
            </div>
            <FooterInput/>
        </div>
    );
  }