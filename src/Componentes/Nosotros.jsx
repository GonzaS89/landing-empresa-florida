import React from 'react'

export const Nosotros = () => {
  return (
    <div className='pt-8 bg-[#F4F6FF]'>
        <div className='max-w-7xl my-o mx-auto flex flex-col lg:flex-row gap-8'>
            <div className='flex flex-col lg:justify-center gap-8 basis-1/2'>
                <h1 className='text-4xl lg:text-5xl text-left uppercase'>Quienes somos</h1>
                <p className='text-lg lg:text-2xl leading-relaxed pr-16'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius impedit, iure mollitia nemo similique amet incidunt unde laborum aspernatur dignissimos eveniet alias distinctio ex consectetur quia praesentium facilis ad accusantium!</p>
            </div>
            <span className='flex nosotros-img basis-1/2'></span>
        </div>
    </div>
  )
}
