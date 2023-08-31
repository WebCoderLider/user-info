import React, { useState } from 'react'
import './user.css'
import Useradd from './Useradd'
function User() {
  const [user, setuser] = useState(true)
  const usersbtn = () => {
    setuser(true)
  }
  const useraddbtn = () => {
    setuser(false)
  }
  return (
    <div>
      <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse"
          data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>

      <div class="container-fluid">
        <div class="row">
          <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a onClick={usersbtn} class={`nav-link ${user ? 'active' : null}`} aria-current="page" href="#">
                    <span data-feather="home"></span>
                    users
                  </a>
                </li>
                <li class="nav-item">
                  <a onClick={useraddbtn} class={`nav-link ${user ? null : 'active'}`} href="#">
                    <span data-feather="file"></span>
                    useradd
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {
            user ? (
              <main class="col-md-9 offset-2 ml-sm-auto col-lg-10 px-md-4">
                <div
                  class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <div class="btn-toolbar mb-2 mb-md-0">
                    <input type="text" placeholder='search user' className='form-control' />
                  </div>
                </div>

                <h2>users</h2>
                <div class="table-responsive">
                  <table class="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th>username</th>
                        <th>name</th>
                        <th>firstname</th>
                        <th>more</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1,001</td>
                        <td>Lorem</td>
                        <td>ipsum</td>
                        <td>dolor</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </main>
            ) : (
              <Useradd />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default User
