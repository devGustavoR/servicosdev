import Image from 'next/image'

export default function Login() {
  return (
    <>
      <section className="flex items-center justify-center p-1">
        <Image
          src='/logoLight.png'
          width={136}
          height={136}
          alt="Logo devGustavoR"
        />
      </section>
      
      <section className="flex items-center flex-col  p-1">
        <input
          type="text"
          className="w-80 block bg-white-300 placeholder:text-slate-400 
          border border-slate-300 rounded-md py-2 pl-9 pr-3 text-gray-900 shadow-sm "
          placeholder="Email ou usuário"
        />
        <input
          type="password"
          className="w-80 block bg-white-300 placeholder:text-slate-400 
          border border-slate-300 rounded-md py-2 pl-9 pr-3 text-gray-900 shadow-sm mt-4"
          placeholder="Senha"
        />
        <button className="rounded-full bg-orange-300 hover:bg-orange-500 text-gray-900 py-2 pl-4 pr-4 mt-5 w-60">
          Login
        </button>
      </section>

      <section className="flex items-center p-1 justify-center mt-2">
        <div className='w-24 h-0.5 bg-gray-700'></div>
        <p className='pl-1 pr-1 text-gray-300'>Conectar com </p>
        <div className='w-24 h-0.5 bg-gray-700'></div>
      </section>

      <section className="flex items-center p-1 justify-center mt-2">
        <button className='w-14 h-14 border-2 border-gray-600 rounded-full ml-2 mr-2 flex items-center justify-center'>
        <Image
          src='/google.svg'
          width={28}
          height={28}
          alt="Logo devGustavoR"
        />
        </button>
        <button className='w-14 h-14 border-2 border-gray-600 rounded-full ml-2 mr-2 flex items-center justify-center'>
        <Image
          src='/facebook.svg'
          width={22}
          height={36}
          alt="Logo devGustavoR"
        />
        </button>
        <button className='w-14 h-14 border-2 border-gray-600 rounded-full ml-2 mr-2 flex items-center justify-center'>
        <Image
          src='/apple.svg'
          width={30}
          height={40}
          alt="Logo devGustavoR"
        />
        </button>
      </section>
    </>
  )
}
