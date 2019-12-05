import Api from "./Api";

function uploadFile(id, file) {
    return Api.post(`/upload/${id}`, file);
}

function getAllFiles(id) {
    return Api.get(`/upload/${id}`);
}

function deleteFile(id) {
    return Api.delete(`/upload/${id}`);
}

export { uploadFile, getAllFiles, deleteFile };
