import { httpService } from "./http.service";

async function loadItems() {

    return await httpService.get('test');
}

async function saveItem() {

}


export const itemsService = {
    loadItems,
    saveItem
}