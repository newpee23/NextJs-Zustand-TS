"use client"
import { useTodoList } from '@/store/slices/todoListSice'
import { Button, Divider, List } from 'antd'
import React from 'react'
import SearchInput from './SearchInput'
import ItemsLiast from './ItemsLiast'

type Props = {}

const ListToDo = (props: Props) => {
    const { clearList, todos } = useTodoList();

    return (
        <section>
            <SearchInput />
            <Divider orientation="left">TodoList Zustand</Divider>
            <div className='mb-3'>
                <Button onClick={clearList}>
                    ล้างข้อมูล
                </Button>
            </div>
            <List
                size="large"
                header={<div>ข้อมูล</div>}
                bordered
                dataSource={todos}
                renderItem={(item) => <List.Item><ItemsLiast item={item}/></List.Item>}
            />
        </section>
    )
}

export default ListToDo