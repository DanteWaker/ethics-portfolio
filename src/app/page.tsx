'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import Zoro from '../../public/img/zoro-image.png'
import { ContentBlock } from '@/components/ContentBlock'
import { listContent } from '@/data/content'

export default function Home() {
  const [typewriter, setTypewriter] = useState('')
  const text = 'Navegamos pelo semestre com a ética como nossa estrela guia.'
  const typingSpeed = 50

  useEffect(() => {
    let currentIndex = 0

    const addNextCharacter = () => {
      if (currentIndex < text.length) {
        setTypewriter(text.substring(0, currentIndex + 1))
        currentIndex++
        setTimeout(addNextCharacter, typingSpeed)
      }
    }

    addNextCharacter()
  }, [])

  return (
    <>
      <section className="bg-cover bg-center h-screen w-full max-h-[50rem] pt-20">
        <div className="flex content-around items-end h-[100%]">
          <section className="flex flex-col px-32 py-16 h-full justify-center items-start w-[50%]">
            <h1 className="text-7xl  font-bold  text-primary-green mb-12">
              Navegando com <span>ética</span> no mar do conhecimento.
            </h1>
            <span className="w-full text-xl font-thin leading-7 tracking-wider">
              {typewriter}
              <span className="ml-2 text-primary-green">|</span>
            </span>
          </section>
          <section className="flex flex-col p-16 h-full justify-center items-center w-[50%]">
            <div className="w-[25rem] h-[26rem] flex justify-center items-center ">
              <div className="w-full h-full relative bg-gray-300"></div>
              <Image src={Zoro} alt="zoro" className="absolute" />
            </div>
          </section>
        </div>
      </section>

      {listContent.map((item, e) => (
        <ContentBlock key={e} position={item.position} title1={item.title1} text1={item.text1} title2={item.title2} text2={item.text2} image={item.image} />
      ))}
    </>
  )
}
