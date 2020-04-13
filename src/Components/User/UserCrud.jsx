import React, { Component } from 'react'
import Main from '../Templates/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Registrar, Listar, Alterar e Excluir'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}