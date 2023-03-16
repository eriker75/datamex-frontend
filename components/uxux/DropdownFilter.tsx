import { wbtypes } from '@/contants/wbtypes'
import React from 'react'

const DropdownFilter = () => {
  return (
    <div className="btn-group dropdown"> 
        <div className="btn btn-outline-secondary dropdown-toggle bg-white" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <input type="text" placeholder='giros de negocio' className='rounded' style={{"outline":"none", "border": "none"}}/>
        </div>
        <div className="dropdown-menu my-1 cursor"> 
        { Object.entries(wbtypes).map( ([key,value]) => { 
            return (
            <div className="dropdown-item" key={key}>
                <div className="form-check">
                    <input className="form-check-input cursor" type="checkbox" id="ex-check-1"/>
                    <label className="form-check-label cursor" htmlFor="ex-check-1">{value}</label>
                </div>
            </div>
            )
        })}
        </div>
    </div>
  )
}

export { DropdownFilter }