'use client'
import React , {useRef} from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const Page = () => {
    const container = useRef<HTMLDivElement>(null);
    const startCall = () => {
        if(!container.current) return;
        try {
            const appID = Number(process.env.NEXT_PUBLIC_ZEGO_APP_ID) ;
            const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET ;

            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID,
                serverSecret!,
                "test-room",
                Date.now().toString(),
                "Test User"
            )
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: container.current,
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
                showPreJoinView: false, //Directly enter the room without showing the pre-join view
            })
        } catch (error) {
            console.error("Error starting call:", error);
        }
    }
  return (
    <div ref={container} className='w-full h-screen bg-black flex items-center justify-center'>
        <button onClick={startCall} className='px-4 py-2 bg-blue-500 text-white rounded'>
            Click
        </button>
    </div>
  )
}

export default Page