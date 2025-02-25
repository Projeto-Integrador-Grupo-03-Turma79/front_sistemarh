import { Link } from "react-router-dom";
import logoRH from "../../assets/logorh03.svg"

export default function Navbar()  {

    function saida(){
        alert('Obrigado por usar o nosso sistema!');
    }

    return (
        <>
        <nav className='w-full bg-black text-white flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
                <Link to='/home' > <img src={logoRH} alt="Logo de RH" className="w-12" /> </Link>

                <div className='flex gap-4 font-bold items-center justify-center'>
                    <Link to='/sobre' className='hover:underline'>Sobre nós</Link>
                    <Link to='/listafuncionarios' className='hover:underline'>Nossos funcionários</Link>
                    <a onClick={saida} href="https:/google.com" className='hover:underline'> Sair </a>
                </div>
            </div>
        </nav>
    </>
    )
}