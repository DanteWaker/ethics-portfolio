import { iListContent } from '@/data/content'
import Image from 'next/image'

export function ContentBlock({ title1, text1, title2, text2, image, position }: iListContent) {
  return (
    <>
      <section className={`w-full  text-primary-purple p-32 flex justify-between ${position % 2 === 0 ? "bg-primary-purple flex-row-reverse" : 'bg-white'}`}>
        <div className="w-[50%] flex justify-center flex-col items-center">
          <div className={`w-auto h-[18rem] flex justify-center items-center mb-12 border-8 border-solid ${position % 2 === 0 ? "border-primary-green" : 'border-primary-purple'}`}>
            <Image src={image} alt={title1} className='w-full h-full' />
          </div>
        </div>
        <div className="w-[50%] mr-16">
          <h1 className={`font-extrabold text-6xl mb-12 ${position % 2 === 0 ? "text-primary-green" : 'text-primary-purple'}`} > {title1}</h1>
          <p className={` mb-6 ${position % 2 === 0 ? "text-white" : 'text-primary-purple'}`} > {text1}</p>
          {title2 && <h1 className={`font-extrabold text-2xl mb-2 text-start w-[75%] ${position % 2 === 0 ? "text-primary-green" : 'text-primary-purple'}`}>{title2}</h1>}
          {text2 && <p className={`w-[75%] ${position % 2 === 0 ? "text-white" : 'text-primary-purple'}`}>{text2}</p>}
        </div>
      </section >
    </>
  )
}
