import React, { useContext } from 'react'
import {data,data1} from './UseContext'

export default function Chile3() {
  const myname=  useContext( data)
  const gender =  useContext( data1)

  return (
    <div>
 <h1> hi my name is {myname} and my gender is {gender}</h1>
    </div>
  )
}
