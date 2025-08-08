import React from 'react'

const ProductDescription = () => {
    return (
        <div className='flex max-sm:flex-col gap-[110px] max-sm:gap-5'>
            <p className='w-[550px] max-sm:w-full text-xl'>Архитектурный светильник декоративного назначения Clivo для контурной подсветки проемов окон, витражей, входных групп зданий. Формирует четкий узкий луч в виде рамки без паразитной засветки.</p>
            <p className='w-[640px] max-sm:w-full text-[#9F9F9F]'>Производитель оставляет за собой право вносить изменения, не ухудшающие качество изделия, в конструкцию отдельных деталей, узлов и параметров светильника без предварительного уведомления.</p>
        </div>
    )
}

export default React.memo(ProductDescription)