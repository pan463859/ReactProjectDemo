import React, { useState } from 'react';
import { Input, Button } from 'antd'
import './styles.less'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from './dragtype'
export default function dragItem(props) {
    const { selections } = props
    const changeSelctions = (selections) => {
    }
    const hoverItem = (dragid, targetid) => {
        props.swiftItem(dragid,targetid)
    }
    const { data,  } = props
    const [{ isDragging }, drag] = useDrag(() => {
        return ({
            type: ItemTypes.QUESTIONITEM + data.id,
            item: {
                id: data.id,
            },
            collect: (monitor, props) => {
                return ({
                    isDragging: !!monitor.isDragging(),
                })
            },
        })
    })
    const [{ isOver }, drop] = useDrop(
        () => {
            return ({
                accept: selections.map((item) => (ItemTypes.QUESTIONITEM + item.id)),
                drop: (item, monitor) => {
                    return changeSelctions(selections)
                },
                hover: (item, monitor) => {
                    if(item.id!=data.id){
                        hoverItem(item.id,data.id)
                    }
                },
                collect: (monitor, props) => {
                    return ({
                        isOver: !!monitor.isOver()
                    })
                }
            })
        },
    )
    return (
        <div style={{ backgroundColor: isOver ? 'yellow' : 'white' }} key={data.id} ref={drop}>
            <div className="questionmodal_content_singlerow" key={data.id} style={{ opacity: isDragging ? 0 : 1 }} ref={drag}>
                <span>{data.name}:</span>
                <Input value={data.content}></Input>
            </div>
        </div>

    )
}
