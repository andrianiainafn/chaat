import React from 'react'

type Props = {}

const Content = (props: Props) => {
  return (
    <div className='mx-7'>
        <div className=" flex flex-col space-y-4">
            <h1 className='text-white opacity-90 text-3xl'>Welcom to my Social Media App</h1>
            <h6 className='text-base opacity-75 text-white w-[90%]'>
                Lorem ipsum dolor, sit amet 
                accusamus quo iusto eveniet maiores! Reiciendis, laborum dignissimos? Aperiam laborum porro hic in obcaecati harum molestiae non animi.
            </h6>
            <button className=' border border-[#4480ce] hover:bg-[#4480ce] hover:text-white font-bold w-[35%] rounded-md text-[#4480ce] py-2'>
                <a href="/auth/signup">Get Started</a>
            </button>
        </div>
    </div>
  )
}

export default Content