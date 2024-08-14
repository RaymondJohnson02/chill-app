import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/elements/Button.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center min-h-screen items-center bg-[url('assets/masuk.jpeg')] bg-center bg-cover bg-no-repeat">
      <div class="w-4/5 bg-[#181A1C] p-5 rounded-md md:w-1/3">
          <div className='flex justify-center my-3'><img src="src\assets\Logo.png" alt="Chill Logo" /></div>
          <div className="flex justify-center text-3xl text-white">Masuk</div>
          <div className="flex justify-center text-white mb-6">Selamat Datang Kembali!</div>
          <form action="">
            <div className="my-3 flex flex-col">
              <label htmlFor="username" className="text-white">Username</label>
              <input type="text" id="username" className='border border-gray-200 p-2 rounded-full bg-transparent text-sm text-white' placeholder='Masukkan Username'/>
            </div>
            <div className="my-3 flex flex-col">
              <label htmlFor="password" className="text-white">Kata Sandi</label>
              <input type="password" id="password" className='border border-gray-200 p-2 rounded-full bg-transparent text-sm text-white' placeholder='Masukkan kata sandi'/>
            </div>
          </form>
          <div className="flex justify-between mb-6">
            <div className='text-gray-300 text-sm'>Belum punya akun?<a className='text-white' href="">Daftar</a></div>
            <a className='text-white text-sm' href="">Lupa kata sandi?</a>
          </div>
          <Button color="gray-500">Masuk</Button>
          <div className="flex justify-center text-sm text-gray-300 my-2">Atau</div>
          <Button color="transparent" imageUrl="src\assets\google.png">Masuk dengan Google</Button>
      </div>
    </div>
  )
}

export default App
