import Api from "./Api";

class ClaimsApi {
    getAllClaims() {
        return Api.get('/claims');
    }

    getAllById(id) {
        return Api.get('/claims/'+id);
    }

    getAllByStatus(status) {
        return Api.get('/claims?status='+  status);
    }

    getAllClaimsByUser(id) {
        return Api.get('/claims/user/'+id);
    }
    
    createClaims(claims) {
        return Api.post('/claims', claims);
    }

    updateClaims(claims) {
        return Api.put('/claims', claims);
    }

    changeStatus(company){
        return Api.put('/claims/change_status?company=' + company);
    }

    deleteClaims(id) {
        return Api.delete('/claims/'+id);
    } 
}

export default new ClaimsApi();



