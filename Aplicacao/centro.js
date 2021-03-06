function selectCentro(nomeCentro){
    localStorage.setItem('centro', nomeCentro);
    


    if(nomeCentro == "Hemominas"){
        objDados = {
            
            usuarioCentroDeColeta: [
                {
                    email: "hemominas@gmail.com", senha: "1234",
                    cnpj: "99.999.999/0001-99", foto: "",
                    nome: "Hemominas", telefone: "+55 (31) 99192-3475",
                    cep: "30130110", cidade: "Belo Horizonte",
                    endereco: { bairro: "Santa Efigênia", rua: "Alameda Ezequiel Dias", numero: "321" },
                    demanda_sangue: ["O+", "O-"],
                    disponibilidade: [
                        {
                            dia: "11/12/2021", horarios: [ "07h00", "07h30","08h00", "08h30", "09h00", "09h30" ]
                        },

                        {
                            dia: "13/12/2021", horarios: ["08h00", "08h30", "09h00", "09h30", "10h00", "10h30",
                                                          "11h00", "11h30", "12h00", "12h30", "14h00", "14h30", 
                                                          "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
                                                          "18h00", "18h30" ]
                        },

                        {
                            dia: "14/12/2021", horarios: ["08h00", "08h30", "09h00", "09h30", "10h00", "10h30",
                                                          "11h00", "11h30", "12h00", "12h30", "14h00", "14h30", 
                                                          "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
                                                          "18h00", "18h30" ]
                        },

                        {
                            dia: "15/12/2021", horarios: ["08h00", "08h30", "09h00", "09h30", "10h00", "10h30",
                                                          "11h00", "11h30", "12h00", "12h30", "14h00", "14h30", 
                                                          "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
                                                          "18h00", "18h30" ]
                        },

                        {
                            dia: "16/12/2021", horarios: ["08h00", "08h30", "09h00", "09h30", "10h00", "10h30",
                                                          "11h00", "11h30", "12h00", "12h30", "14h00", "14h30", 
                                                          "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
                                                          "18h00", "18h30" ]
                        },

                        {
                            dia: "17/12/2021", horarios: ["08h00", "08h30", "09h00", "09h30", "10h00", "10h30",
                                                          "11h00", "11h30", "12h00", "12h30", "14h00", "14h30", 
                                                          "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
                                                          "18h00", "18h30" ]
                        },

                        {
                            dia: "18/12/2021", horarios: [ "07h00", "07h30","08h00", "08h30", "09h00", "09h30" ]
                        }
                    ]
                }
            ]
        }
    }

    else if(nomeCentro == "Hemonucleo Taubate"){
        objDados = {
            
            usuarioCentroDeColeta: [
                {
                    email: "hemotaubate@gmail.com", senha: "1234",
                    cnpj: "99.999.999/0001-99", foto: "",
                    nome: "Hemonúcleo Taubaté", telefone: "+55 (12) 3624-1273",
                    cep: "12030-450", cidade: "Taubaté",
                    endereco: { bairro: "Jardim das Nações", rua: "Avenida Inglaterra", numero: "190" },
                    demanda_sangue: ["A+", "AB-", "O-"],
                    disponibilidade: [
                        {
                            dia: "11/12/2021", horarios: [ "07h00", "07h30","08h00", "08h30", "09h00", "09h30" ]
                        },

                        {
                            dia: "13/12/2021", horarios: ["08h00", "08h30", "09h00", "09h30", "10h00", "10h30",
                                                          "11h00", "11h30", "12h00", "12h30", "14h00", "14h30", 
                                                          "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
                                                          "18h00", "18h30" ]
                        },

                        {
                            dia: "14/12/2021", horarios: ["08h00", "08h30", "09h00", "09h30", "10h00", "10h30",
                                                          "11h00", "11h30", "12h00", "12h30", "14h00", "14h30", 
                                                          "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
                                                          "18h00", "18h30" ]
                        },

                        {
                            dia: "15/12/2021", horarios: ["08h00", "08h30", "09h00", "09h30", "10h00", "10h30",
                                                          "11h00", "11h30", "12h00", "12h30", "14h00", "14h30", 
                                                          "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
                                                          "18h00", "18h30" ]
                        },

                        {
                            dia: "16/12/2021", horarios: ["08h00", "08h30", "09h00", "09h30", "10h00", "10h30",
                                                          "11h00", "11h30", "12h00", "12h30", "14h00", "14h30", 
                                                          "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
                                                          "18h00", "18h30" ]
                        },

                        {
                            dia: "17/12/2021", horarios: ["08h00", "08h30", "09h00", "09h30", "10h00", "10h30",
                                                          "11h00", "11h30", "12h00", "12h30", "14h00", "14h30", 
                                                          "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
                                                          "18h00", "18h30" ]
                        },

                        {
                            dia: "18/12/2021", horarios: [ "07h00", "07h30","08h00", "08h30", "09h00", "09h30" ]
                        }
                    ]
                }
            ]
        }
        
    }
}

//     }
//     else if(nomeCentro == "Hemonucleo Taubate")
//         console.log("teste 2")
//     }
//     }
// }





