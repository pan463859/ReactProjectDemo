import React, { useState,useEffect  } from 'react';
import { Input, Button } from 'antd'
import './styles.less'
import DragItem from './dragItem.js'
export default function Home() {
    const [selections, setSelections] = useState([
        {
            "id": '0',
            "name": "我是列表项1",
            "content": "我是答案1",
            "createBy": null,
            "createTime": null
        },
        {
            "id": '1',
            "name": "我是列表项2",
            "content": "我是答案2",
            "createBy": null,
            "createTime": null
        },
        {
            "id": 2,
            "name": "我是列表项3",
            "content": "我是答案3",
            "createBy": null,
            "createTime": null
        },
        {
            "id": 6,
            "name": "我是列表项4",
            "content": "我是答案4",
            "createBy": null,
            "createTime": null
        },
        {
            "id": 5,
            "name": "我是列表项5",
            "content": "我是答案5",
            "createBy": null,
            "createTime": null
        },
        {
            "id": 4,
            "name": "我是列表项6",
            "content": "我是答案6",
            "createBy": null,
            "createTime": null
        },
        {
            "id": 7,
            "name": "我是列表项7",
            "content": "我是答案7",
            "createBy": null,
            "createTime": null
        },
        {
            "id": 8,
            "name": "我是列表项8",
            "content": "我是答案8",
            "createBy": null,
            "createTime": null
        }
    ])
    const toggleTodo = (id) => {

    }
    const removeTodo = (id) => {

    }
    useEffect(() => {
        console.log('selections',selections)
    }, [selections])
    const swiftItem = (dragid, targetid) => {
        let temp = null
        let dragindex=selections.findIndex(item=>item.id==dragid)
        let targetindex=selections.findIndex(item=>item.id==targetid)
        temp = selections[dragindex]
        selections[dragindex] = selections[targetindex]
        selections[targetindex] = temp
        setSelections([...selections])
    }
    return (
        <div className="questionmodal_content" >
            {
                selections.length > 0 && selections.map((_item, _index) => {
                    return <DragItem itemindex={_index} data={_item} key={_item.id} selections={selections}
                        toggleTodo={() => toggleTodo(_item.id)}
                        removeTodo={() => removeTodo(_item.id)}
                        swiftItem={(dragid, targetid) => swiftItem(dragid, targetid)}
                    ></DragItem>
                })
            }
        </div>
    )
}
