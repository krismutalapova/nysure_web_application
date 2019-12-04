import Api from "./Api";
class FileApi {
    uploadFile(file) {
        return Api.post('/upload', file);
    }
    getAllFiles() {
        return Api.get('/upload');
    }
    deleteFile(id) {
        return Api.delete('/upload/'+id);
    }
}
export default new FileApi();
