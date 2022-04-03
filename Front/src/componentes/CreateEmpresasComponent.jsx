import React, { Component } from 'react'
import EmpresasService from '../services/EmpresasService';

class CreateEmpresasComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id_empresa: this.props.match.params.id_empresa,
            nomeEmpresa: '',
            nomeRespo: '',
            telefone: '',
            email: '',
            comentarios: ''
        }
        this.changeNomeEmpresaHandler = this.changeNomeEmpresaHandler.bind(this);
        this.changeNomeRespoHandler = this.changeNomeRespoHandler.bind(this);
        this.changeTelefoneHandler = this.changeTelefoneHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeComentariosHandler = this.changeComentariosHandler.bind(this);
        this.saveOrUpdateEmpresas = this.saveOrUpdateEmpresas.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id_empresa === '_add') {
            return
        } else {
            EmpresasService.getEmpresasById(this.state.id_empresa).then((res) => {
                let empresas = res.data;
                this.setState({
                    nomeEmpresa: empresas.nomeEmpresa,
                    nomeRespo: empresas.nomeRespo,
                    telefone: empresas.telefone,
                    email: empresas.email,
                    comentarios: empresas.comentarios
                });
            });
        }
    }
    saveOrUpdateEmpresas = (e) => {
        e.preventDefault();
        let empresas = { nomeEmpresa: this.state.nomeEmpresa, nomeRespo: this.state.nomeRespo, telefone: this.state.telefone, email: this.state.email, comentarios: this.state.comentarios };
        console.log('empresas => ' + JSON.stringify(empresas));

        // step 5
        if (this.state.id_empresa === '_add') {
            EmpresasService.createEmpresas(empresas).then(res => {
                this.props.history.push('/empresas');
            });
        } else {
            EmpresasService.updateEmpresas(empresas, this.state.id_empresa).then(res => {
                this.props.history.push('/empresas');
            });
        }
    }

    changeNomeEmpresaHandler = (event) => {
        this.setState({ nomeEmpresa: event.target.value });
    }

    changeNomeRespoHandler = (event) => {
        this.setState({ nomeRespo: event.target.value });
    }

    changeTelefoneHandler = (event) => {
        this.setState({ telefone: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    changeComentariosHandler = (event) => {
        this.setState({ comentarios: event.target.value });
    }

    cancel() {
        this.props.history.push('/clientes');
    }

    getTitle() {
        if (this.state.id_empresa === '_add') {
            return <h3 className="text-center">Preencha as lacunas abaixo</h3>
        } else {
            return <h3 className="text-center">Alterar Dados</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Nome da Empresa: </label>
                                        <input placeholder="Nome da Empresa" name="nomeEmpresa" className="form-control"
                                            value={this.state.nomeEmpresa} onChange={this.changeNomeEmpresaHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Nome do Responsável: </label>
                                        <input placeholder="Nome do Responsável" name="nomeRespo" className="form-control"
                                            value={this.state.nomeRespo} onChange={this.changeNomeRespoHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Telefone: </label>
                                        <input placeholder="Telefone" name="telefone" className="form-control"
                                            value={this.state.telefone} onChange={this.changeTelefoneHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> E-mail: </label>
                                        <input placeholder="E-mail" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Motivo do Contato: </label>
                                        <input placeholder="País" name="comentarios" className="form-control"
                                            value={this.state.comentarios} onChange={this.changeComentariosHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmpresas}>Salvar</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancelar</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateEmpresasComponent
