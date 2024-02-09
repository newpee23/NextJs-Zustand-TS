"use client"
import { useTodoList } from '@/store/slices/todoListSice'
import { Button } from 'antd'
import React from 'react'

type Props = {
    item: string
}

const ItemsLiast = ({ item }: Props) => {
    
    const {deleteItem} = useTodoList();
    return (
        <div className='flex justify-between items-center w-full'>
            <p>{item}</p>
            <div>
                <Button onClick={() => deleteItem(item)}>ลบข้อมูล</Button>
            </div>
        </div>
    )
}

export default ItemsLiast