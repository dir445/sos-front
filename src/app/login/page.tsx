import { InputHTMLAttributes } from 'react';
import Input from '../components/Input';

export default function Page() {
    return ( 
        <div className='px-4 text-center'>
            <div className='my-6'>
                <div className='w-[100px] h-[100px] bg-yellow-300 mx-auto mb-2'></div>
                <p className='font-bold text-base leading-5'>災害SOS</p>
            </div>
            <form className='w-full text-center flex flex-col gap-4'> 
                <h2 className='font-bold text-base leading-5'>ログイン</h2>
                <Input type="text" name="id" placeholder="ユーザーID" />
                <Input type="password" name="password" />
                <div className='py-0.5 flex mx-auto'>
                    <input type="checkbox" name="remember" id="remember" className='mx-1'/>
                    <label htmlFor="remember" className='text-sm leading-4 block'>ログイン状態を保持</label>
                </div>
                <button type="submit" className='bg-pigment_green text-white h-14 text-lg font-semibold leading-5 rounded-lg'>ログイン</button>
            </form>
        </div>
    );
  }