import React from "react";
import '@passageidentity/passage-elements/passage-auth'

export default function TakeAttendance() {
    
  return (
    <div className="flex flex-col justify-center h-3/5 items-center">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-sm font-bold mb-6 text-center">capture</h2>
        <div className="p-5 flex justify-center">
        <passage-auth app-id={'Kd90OF1ymxF5UCx6bBT9yoDe'}></passage-auth>
            {/* <button className='bg-green-600 py-2 px-4 text-white rounded hover:bg-green-800 '>Use fingerprint</button> */}
        </div>
      </div>
    </div>
  );
}
