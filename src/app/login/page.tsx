import Image from 'next/image';
import loginImage from '/public/login-image.png';

export default function Login() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 relative">
        <Image 
          src={loginImage} 
          alt="Login Image" 
          layout="fill" 
          //objectFit="cover" 
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md px-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-black">FitZone</h1>

          <form>
            <div className="mb-6">
              <label htmlFor="registerID" className="block text-sm font-medium text-gray-700">
                Número da Matrícula
              </label>
              <input
                type="text"
                id="registerID"
                name="registerID"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Insira sua matrícula"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Insira sua senha"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-black bg-[#D1F561] hover:bg-[#a7c44d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D1F561]"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

