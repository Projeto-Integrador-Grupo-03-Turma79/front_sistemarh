const people = [
    {
      nome: 'Paula Tejano',
      cargo: 'Chefe Administrativa',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      salario: 'R$12.000',
      nascimento: '17/08/1987',
    },
    {
      nome: 'Simas Turbo',
      cargo: 'Mecânico',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      salario: 'R$3.500',
      nascimento: '12/12/1992',
    },
    {
      nome: 'Quico Tesourado',
      cargo: 'Tesoureiro',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      salario: 'R$6.000',
      nascimento: '04/06/2000',
    },
    {
      nome: 'Amanda Nunes',
      cargo: 'Desenhista',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      salario: 'R$7.500',
      nascimento: '03/11/1999',
    },
    {
        nome: 'Ana Konda',
        cargo: 'Herdeira',
        imageUrl:
          'https://media.istockphoto.com/id/1389348844/pt/foto/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?b=1&s=612x612&w=0&k=20&c=eEcTO_KNgG9kUhtkiU-RaDJveugHsH_fV1-gArq3AE0=',
        salario: 'R$4.000',
        nascimento: '17/02/1990',
      },
      {
        nome: 'Oscar Alho',
        cargo: 'Desenhista',
        imageUrl:
          'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
        salario: 'R$7.500',
        nascimento: '03/09/2001',
      },
      {
        nome: 'Dayde Costa',
        cargo: 'Dona',
        imageUrl:
          'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=600',
        salario: 'R$24.000',
        nascimento: '01/07/1964',
      },

      {
        nome: 'Cuca Beludo',
        cargo: 'Matador de Javali',
        imageUrl:
          'https://images.pexels.com/photos/395085/pexels-photo-395085.jpeg?auto=compress&cs=tinysrgb&w=600',
        salario: 'R$4.500',
        nascimento: '05/10/1997',
      },
  ]
  
function ListaFuncionarios() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Funcionários</h2>

                <div className="mt-6 grid grid-cols-1 items-center gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {people.map((person) => (
                    <div className="flex justify-center grid grid-cols-1 bg-gray-200 rounded-xl p-1">
                        <div className="mt-2 grid grid-cols-2 items-center">
                            <img alt="" src={person.imageUrl} 
                                className="ml-6 size-20 object-cover rounded-full bg-gray-50" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm/6 font-semibold text-gray-900 text-start">{person.nome}</p>
                                <p className="mt-1 truncate text-xs/5 text-gray-500 text-start">{person.cargo}</p>
                            </div>
                        </div>
                        <div className="items-center">
                            <div className="mt-2 flex justify-center ">
                                <div className="flex w-51">
                                    <p className="flex-1 text-xs/6 text-gray-500">
                                        {person.nascimento}
                                    </p>
                                    <p className="text-sm/6 text-[#24ac20] font-bold">{person.salario}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
  }

export default ListaFuncionarios