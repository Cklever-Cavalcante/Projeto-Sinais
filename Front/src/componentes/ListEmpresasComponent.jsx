import React, { Component } from 'react'
import EmpresasService from '../services/EmpresasService'

class ListEmpresasComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            empresas: []
        }
        this.addEmpresas = this.addEmpresas.bind(this);
        this.editEmpresas = this.editEmpresas.bind(this);
        this.deleteEmpresas = this.deleteEmpresas.bind(this);
    }

    deleteEmpresas(id_empresa) {
        EmpresasService.deleteEmpresas(id_empresa).then(res => {
            this.setState({ empresas: this.state.empresas.filter(empresas => empresas.id_empresa !== id_empresa) });
        });
    }
    viewEmpresas(id_empresa) {
        this.props.history.push(`/view-empresas/${id_empresa}`);
    }
    editEmpresas(id_empresa) {
        this.props.history.push(`/add-empresas/${id_empresa}`);
    }

    componentDidMount() {
        EmpresasService.getEmpresas().then((res) => {
            this.setState({ empresas: res.data });
        });
    }

    addEmpresas() {
        this.props.history.push('/add-empresas/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Empresas que entraram em contato</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmpresas}> Adicionar Empresa</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Empresa</th>
                                <th>Responsável</th>
                                <th>Telefone</th>
                                <th>E-mail</th>
                                <th>Motivo do Contato</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.empresas.map(
                                    empresas =>
                                        <tr key={empresas.id_empresa}>
                                            <td> {empresas.nomeEmpresa} </td>
                                            <td> {empresas.nomeRespo} </td>
                                            <td> {empresas.telefone}</td>
                                            <td> {empresas.email}</td>
                                            <td> {empresas.comentarios}</td>
                                            <td>
                                                <button onClick={() => this.editEmpresas(empresas.id_empresa)} className="btn btn-info">Alterar </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmpresas(empresas.id_empresa)} className="btn btn-danger">Excluir </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmpresas(empresas.id_empresa)} className="btn btn-info">Detalhes </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListEmpresasComponent
