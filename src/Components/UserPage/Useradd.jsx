import React, { useState } from 'react'
import './user.css'
function User() {
    return (
        <div>
            <div>
                <main class="col-md-9 offset-2 ml-sm-auto col-lg-10 px-md-4">
                    <br /><br /><br />
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Username</label>
                            <input type="text" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Ismi</label>
                            <input type="text" class="form-control" id="inputPassword4" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Familyasi</label>
                            <input type="text" class="form-control" id="inputAddress" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Email</label>
                            <input type="text" class="form-control" id="inputAddress2" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Phone number</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">image</label>
                            <input type="file" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Image 2</label>
                            <input type="file" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Phone 2</label>
                            <input type="file" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Telegram username</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Telegram group || channel</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">instagram username</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">instagram username 2</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">youtube channel</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Manzili</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Moshina nomeri</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Ota onasining ism familyasi</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Qayerda o'qishi</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">paspotr jshir</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">pasport seriya raqami</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">pasport rasm</label>
                            <input type="file" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Ish joyi</label>
                            <input type="file" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Qo'shimcha ma'lumot</label>
                            <input type="file" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">add user</button>
                        </div>
                    </form>
                    <br /><br /><br />
                </main>
            </div>
        </div >
    )
}

export default User
