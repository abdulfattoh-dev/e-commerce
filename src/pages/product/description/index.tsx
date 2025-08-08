import React from 'react'

const ProductDescription = () => {
    return (
        <div className='flex justify-between'>
            <p className='w-[550px] text-xl'>Архитектурный светильник декоративного назначения Clivo для контурной подсветки проемов окон, витражей, входных групп зданий. Формирует четкий узкий луч в виде рамки без паразитной засветки.</p>
            <p className='w-[640px] text-[#9F9F9F]'>Производитель оставляет за собой право вносить изменения, не ухудшающие качество изделия, в конструкцию отдельных деталей, узлов и параметров светильника без предварительного уведомления.</p>
        </div>
    )
}

export default React.memo(ProductDescription)