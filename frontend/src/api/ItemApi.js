import Api from "./Api";
class ItemApi {
    getAllItem() {
        return Api.get('/items');
    }

    getAllItemByUser(id) {
        return Api.get('/items/user/'+id);
    }

    getItemById(id) {
        return Api.get('/items/'+id);
    }

    createItem(item) {
        return Api.post('/items', item);
    }

    changeStatus(id, date){
        return Api.put(`/items/change_status/${id}?date=${date}`);
    }

    updateItem(item) {
        return Api.put('/items', item);
    }
    
    deleteItem(id) {
        return Api.delete('/items/'+id);
    }
}
export default new ItemApi();