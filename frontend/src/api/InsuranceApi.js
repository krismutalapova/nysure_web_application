import Api from "./Api";

class InsuranceApi {
    getAllInsurances() {
        return Api.get('/insurances');
    }

    getAllByStatus(status) {
        return Api.get('/insurances?status='+  status);
    }

    getAllByUser(id, status) {
        return Api.get(`/insurances/user/${id}?status=${status}`);
    }

    getSumByUser(id) {
        return Api.get(`/insurances/user/sum/${id}`);
    }

    createInsurance(insurance) {
        return Api.post('/insurances', insurance);
    }

    updateInsurance(insurance) {
        return Api.put('/insurances', insurance);
    }

    changeStatus(id, company){
        return Api.put(`/insurances/change_status/${id}?company=${company}`);
    }

    deleteInsurance(id) {
        return Api.delete('/insurances/'+id);
    } 
}

export default new InsuranceApi();