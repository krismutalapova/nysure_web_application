import Api from "./Api";

class InsuranceApi {
    getAllInsurances() {
        return Api.get('/insurances');
    }

    getAllByStatus(status) {
        return Api.get('/insurances?status='+  status);
    }

    createInsurance(insurance) {
        return Api.post('/insurances', insurance);
    }

    updateInsurance(insurance) {
        return Api.put('/insurances', insurance);
    }

    changeStatus(company){
        return Api.put('/insurances/change_status?company=' + company);
    }

    deleteInsurance(id) {
        return Api.delete('/insurances/'+id);
    } 
}

export default new InsuranceApi();