import axios from 'axios';

const EMPRESAS_API_BASE_URL = "http://localhost:8080/api/v1/empresas";

class EmpresasService {

    getEmpresas() {
        return axios.get(EMPRESAS_API_BASE_URL);
    }

    createEmpresas(empresas) {
        return axios.post(EMPRESAS_API_BASE_URL, empresas);
    }

    getEmpresasById(empresasId_empresa) {
        return axios.get(EMPRESAS_API_BASE_URL + '/' + empresasId_empresa);
    }

    updateEmpresas(empresas, empresasId_empresa) {
        return axios.put(EMPRESAS_API_BASE_URL + '/' + empresasId_empresa, empresas);
    }

    deleteEmpresas(empresasId_empresa) {
        return axios.delete(EMPRESAS_API_BASE_URL + '/' + empresasId_empresa);
    }
}

export default new EmpresasService()