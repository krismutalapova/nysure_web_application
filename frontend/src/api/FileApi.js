import Api from "./Api";

function uploadFile(id, file) {
    return Api.post(`/upload/${id}`, file);
}

function uploadInsuranceFile(id, file) {
    return Api.post(`/upload/file_insurance/${id}`, file);
}

function getAllFiles(id) {
    return Api.get(`/upload/${id}`);
}

function getAllInsuranceFiles(id){
    return Api.get(`/upload/file_insurance/${id}`);
}

function deleteFile(id) {
    return Api.delete(`/upload/${id}`);
}

function deleteAllByItem(id) {
    return Api.delete(`/upload/item/${id}`);
}

export { uploadFile, uploadInsuranceFile, getAllFiles, getAllInsuranceFiles, deleteFile, deleteAllByItem };
