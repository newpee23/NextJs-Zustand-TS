"use client"

import { useTodoList } from '@/store/slices/todoListSice';
import { Button, Input, Space } from 'antd'
import React, { useState } from 'react'

function SearchInput() {
  const [inputText, setInputText] = useState("");
  const { addTodo } = useTodoList();

  const handleSearch = () => {
    if (inputText) addTodo(inputText); // เพิ่มตัวอักษรที่ป้อนในช่องค้นหาเข้าไปในรายการ
    setInputText(""); // ล้างค่า inputText หลังจากทำการเพิ่มรายการ
  }
  return (
    <div>
      <Space direction="horizontal">
        <Input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="เพิ่มข้อมูล"
        />
        <Button onClick={handleSearch}>
          บันทึกข้อมูล
        </Button>
      </Space>
    </div>
  )
}

export default SearchInput
