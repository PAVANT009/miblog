import DialogDemo from '@/app/components/DialogDemo'
import NavigationMenuDemo from '../components/MainNavBar';
import NotesPreview from '../components/NotesPreview';
import Workings from './Workings';
import PlusLine from '../ui/svg/PlusLine';
import GetStartedBtn from '../ui/GetStartedBtn';
import HoverInfoBox from '../ui/HoverInfoBox';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import ShieldSecureIcon from '../ui/svg/shieldIcon';
import CustomIcon from '../ui/svg/language';
import DirectionalArrowsIcon from '../ui/svg/embeded';
import AddCategoriesIcon from '../ui/svg/customize';

export default function Home() {
  return (
    <>
      <div className="border-x-2 mx-32 border-gray-200 min-h-screen relative">
        <div className='py-4'></div>
        <div className='w-[90%] flex flex-row px-3 py-3  justify-between mx-auto items-center border-[1px] border-gray-400 rounded-3xl bg-white'>
          <span className='text-2xl font-bold font-calsans'>
            mI.BloG
          </span>
          <NavigationMenuDemo />
          <div className="flex flex-row gap-2 w-[50vh] justify-center items-center">
            <h1 className="font-sans text-md font-medium text-black">
              sign in
            </h1>
            <GetStartedBtn/>
            

          </div>
        </div>
      
        <div 
          className="w-[1140px] flex flex-row mt-16 border-[1px] bg-white border-gray-300 py-28 px-16 mx-auto rounded-2xl"
          style={{ boxShadow: '8px 0 8px -4px rgba(0, 0, 0, 0.1), -8px 0 8px -4px rgba(0, 0, 0, 0.1)' }}
        >
          <div className='w-[50%]'>
            <h1 className='text-6xl font-semibold font-sans'>
              The better way to save your notes
            </h1> 
            <h1 className='text-md font-light my-10 text-gray-600'>
              A fully customizable scheduling software for individuals, businesses taking calls and developers building scheduling platforms where users meet users.
            </h1>
            <button className=' flex flex-row bg-black rounded-lg gap-1 items-center justify-center text-white w-[450px] p-1.5'>
             <svg width="24px" height="24px" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></g></svg>
              <span>Sign up with Google</span>
            </button>
            <button className="w-[450px] p-1.5 mt-2 text-black bg-gray-100 border border-gray-400 shadow-[inset_-1px_-1px_0_#000, inset_1px_1px_0_#fff]  rounded-lg">
              Sign up with email
            </button>
            <h1 className='text-sm text-gray-600'>
              *no credit card information required
            </h1>
          </div>
          <div className=" w-[50%] flex items-center justify-center pointer-events-none select-none">
            <NotesPreview />  
          </div>
        </div>
      </div>
      
      <PlusLine />
      
      <div className="border-x-2 mx-32 border-gray-200">
        <Workings/>
      </div>

      <PlusLine />

      <h2 className='font-bold text-5xl w-full font-calsans mb-2 text-center'>…and so much more!</h2>

    <div className="border-x-2 mx-32 border-gray-200  relative flex items-center justify-center">
      <div className="grid grid-cols-2 gap-6">
        <HoverInfoBox
          shortHeader="Privacy first"
          descriptionText="We don`t store user data. Everything stays on-device."
          Svg={<ShieldSecureIcon className="w-5 h-5 m-[14px] text-gray-600" />}
        />
        <HoverInfoBox
          shortHeader="65+ languages"
          descriptionText="Your content, instantly translated into 65+ languages, globally accessible."
          Svg={<CustomIcon className="w-5 h-5 m-[14px] text-gray-600" />}
        />
        <HoverInfoBox
          shortHeader="Easy embeds"
          descriptionText="Drop in widgets anywhere. No code stress, no drama."
          Svg={<DirectionalArrowsIcon className="w-5 h-5 m-[14px] text-gray-600" />}
        />
        <HoverInfoBox
          shortHeader="Simple customizations"
          descriptionText="Tweak layout, fonts, colors—your style, your rules."
          Svg={<AddCategoriesIcon className="w-5 h-5 m-[14px] text-gray-600" />}
        />
      </div>
    </div>
        <DialogDemo/>
    </>
  );
}