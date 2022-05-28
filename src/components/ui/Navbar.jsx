import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
        <span className="navbar-brand">
            Pedro
        </span>
        <button className='btn btn-outline-danger'>
            <span> <i className="fas fa-sign-out"></i> Salir</span>
        </button>

    </div>
  )
}
