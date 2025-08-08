import React from 'react'

const ProductCharacteristics = () => {
    return (
        <div className='flex max-sm:justify-between gap-25'>
            <div className='flex flex-col gap-15 text-[#9F9F9F]'>
                <p>Вариант установки</p>
                <p>Напряжение питания</p>
                <p>Масса, кг</p>
                <p>Степень защиты</p>
                <p>Габариты, мм</p>
            </div>
            <div className='flex flex-col gap-15  max-sm:text-right'>
                <p>Накладной</p>
                <p>230В AC (50 Гц)</p>
                <p>0,38 кг</p>
                <p>Накладной</p>
                <p>105×81×57,3</p>
            </div>
        </div>
    )
}

export default React.memo(ProductCharacteristics)