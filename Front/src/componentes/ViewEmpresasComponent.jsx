import React, { Component } from 'react'
import EmpresasService from '../services/EmpresasService'

class ViewEmpresasComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_empresa: this.props.match.params.id_empresa,
            empresas: {}
        }
    }

    componentDidMount() {
        EmpresasService.getEmpresasById(this.state.id_empresa).then(res => {
            this.setState({ empresas: res.data });
        })
    }

    voltar() {
        this.props.history.push('/empresas');
    }



    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> Detalhes da Empresa</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Nome da Empresa :  </label>
                            <div> {this.state.clientes.nomeEmpresa}</div>
                        </div>
                        <div className="row">
                            <label> Nome do Responsável :  </label>
                            <div> {this.state.empresas.nomeRespo}</div>
                        </div>
                        <div className="row">
                            <label> Telefone :  </label>
                            <div> {this.state.empresas.telefone}</div>
                        </div>
                        <div className="row">
                            <label> E-mail :  </label>
                            <div> {this.state.clientes.email}</div>
                        </div>
                        <div className="row">
                            <label> Motivo do Contato :  </label>
                            <div> {this.state.empresas.comentarios}</div>
                        </div>
                    </div>
                    <button className="btn btn-info" onClick={this.voltar.bind(this)} style={{ margin: "30px" }}>Voltar</button>

                </div>
            </div>
        )
    }
}

export default ViewEmpresasComponent
