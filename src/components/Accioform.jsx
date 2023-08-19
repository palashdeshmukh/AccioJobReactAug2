import React from 'react'
import hi from '../assest/hicon.png'
function Accioform() {
  return (
    <div className='w-100 d-flex border justify-content-center'>
    <div className='w-50 d-flex flex-column align-items-center border p-5'>
    <form className='w-50  p-4 rounded-4  border'>
    <caption className="w-100 d-block">Welcome back!<img height="30px" src={hi}/></caption>
    <h3 className="fw-bold pt-0 pb-2">Sign in to your account</h3>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label ">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" class="btn btn-primary w-100">CONTINUE</button>
  <p className="text-primary w-100 text-center pt-4 pb-2">Forget your password?</p>

</form>

<p className="text-dark w-100 text-center pt-4 pb-2">Don't have and account?<a href="#" className="text-primary text-decoration-none"> Sign up</a></p>

    </div>
    </div>
  )
}


export default Accioform
