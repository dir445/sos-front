import FooterInput from "../components/FooterInput";
import Header from "../components/Header";
import Message from "../components/Message";

export default function Page() {
    return ( 
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="mx-4 grow">
                <Message/>
                <Message/>
                <Message/>
            </div>
            <FooterInput/>
        </div>
    );
  }