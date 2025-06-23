import React from 'react'

export default function Page() {
  return (
<div className="bg-white flex flex-row w-[90%] h-[80vh] mx-auto border border-gray-400">
        <div className='w-[30%] bg-gray-400 border-r-[1px] border-black'>
          {/** personal section */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quibusdam facilis, molestias quos, ut voluptate ipsam eius aliquid incidunt repudiandae dolores accusamus exercitationem cumque illum amet quam ex libero quo expedita, reprehenderit perferendis! Consectetur numquam accusamus doloribus possimus assumenda dolore eos repellat velit laudantium, repudiandae, ipsum pariatur. Perspiciatis numquam saepe in animi, nostrum quo officia, dolorum voluptas impedit id, nulla possimus. Amet architecto ducimus nemo magnam hic.
        </div>
        <div className='flex flex-col gap-6 mx-3 my-7'>
          <input type="text" placeholder='Header' className='border-b-[1px] text-6xl border-orange-200 focus:border-b-2 focus:border-b-orange-500 focus:outline-none '  />
          <input type="text" name="subject" placeholder='Subject' className='border-b-[1px] border-orange-300'/>
        </div>
    </div>
  )
}
