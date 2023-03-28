import React from 'react'
import { useState } from 'react'
import { Link, useParams, useLocation, useLoaderData, useSearchParams } from "react-router-dom"
import { ReactComponent as HomeIcon } from '../assets/icons/house.svg'
// import complaints from '../assets/complaints'
// import feelings from '../assets/feelings'
import EmpathyForm from './empathyForm/EmpathyForm'

// UPDATE IMPORT STATEMENTS!
// USE THE STATE OBJECT FROM APP.JSX INSTEAD. 
// SHOULD BE PULLING FROM LOCAL STORAGE OR INITIALIZED OBJ, NOT A DIRECT IMPORT


export default function EmpathyPage(props) {

  const feelingsData = JSON.parse(localStorage.getItem("feelingsData"))
  const complaintsData = JSON.parse(localStorage.getItem("complaintsData"))

  const params = useParams()
  const location = useLocation()
  const sectionState = location.state

  const content =
      params.section == "feelings" ? feelingsData[params.word] :  complaintsData[params.word]

  let frontEndEmpathyData =
   params.section == "complaints" ? {
      complaint: content.complaint,
      initialFeelings: content.initialFeelings.map(each => {
        return {word: each, selected: false}
      }),
      underlyingFeelings: content.underlyingFeelings.map(each => {
        return {word: each, selected: false}
      }),
      needs: content.needs.map(each => {
        return {word: each, selected: false}
      }),
      empathyResponse: ""
    }
      : 
   {
      feeling: content.initialFeeling,
      underlyingFeelings: content.underlyingFeelings.map(each => {
        return {word: each, selected: false}
      }),
      needs: content.needs.map(each => {
        return {word: each, selected: false}
      }),
      empathyResponse: ""
    }
  
  
    return (
    <div>
      <div className='header'>
        <Link to={`..${sectionState}`} className='m-auto cursor-pointer'><HomeIcon /></Link>
      </div>
        <EmpathyForm content={frontEndEmpathyData} params={params} />     
    </div>
  )
}
